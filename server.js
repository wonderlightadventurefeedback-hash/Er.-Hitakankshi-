const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.pdf': 'application/pdf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

function resolveFile(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch (e) {
    decoded = pathname;
  }

  // Remove query or hash already handled by url.parse
  let cleanPath = decoded;

  // Candidates to test
  const candidates = [];

  // 1. Direct path from ROOT_DIR
  candidates.push(path.join(ROOT_DIR, cleanPath));

  // If path ends with /, check index.html
  if (cleanPath.endsWith('/')) {
    candidates.push(path.join(ROOT_DIR, cleanPath, 'index.html'));
  } else {
    // If no extension, test as directory + index.html and .html
    if (!path.extname(cleanPath)) {
      candidates.push(path.join(ROOT_DIR, cleanPath, 'index.html'));
      candidates.push(path.join(ROOT_DIR, cleanPath + '.html'));
    }
  }

  // 2. Also check in hitakanshi-main subfolder if not found in root
  if (!cleanPath.startsWith('/hitakanshi-main')) {
    candidates.push(path.join(ROOT_DIR, 'hitakanshi-main', cleanPath));
    if (cleanPath.endsWith('/')) {
      candidates.push(path.join(ROOT_DIR, 'hitakanshi-main', cleanPath, 'index.html'));
    } else if (!path.extname(cleanPath)) {
      candidates.push(path.join(ROOT_DIR, 'hitakanshi-main', cleanPath, 'index.html'));
      candidates.push(path.join(ROOT_DIR, 'hitakanshi-main', cleanPath + '.html'));
    }
  }

  for (const c of candidates) {
    if (fs.existsSync(c)) {
      const stat = fs.statSync(c);
      if (stat.isFile()) return c;
      if (stat.isDirectory()) {
        const idx = path.join(c, 'index.html');
        if (fs.existsSync(idx) && fs.statSync(idx).isFile()) return idx;
      }
    }
  }

  return null;
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url);
  let pathname = parsed.pathname || '/';

  // API Routes for Admin Real-time Persistence
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  if (pathname === '/api/save-site-data' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        if (parsed && (parsed.general || parsed.doors || parsed.sections || parsed.story || parsed.friends)) {
          const siteDataPath = path.join(ROOT_DIR, 'site-data.js');
          if (fs.existsSync(siteDataPath)) {
            let content = fs.readFileSync(siteDataPath, 'utf-8');
            const startMarker = '/* SITE_DATA_START */';
            const endMarker = '/* SITE_DATA_END */';
            const startIdx = content.indexOf(startMarker);
            const endIdx = content.indexOf(endMarker, startIdx);

            if (startIdx !== -1 && endIdx !== -1) {
              const newDecl = `${startMarker}\n  const DEFAULT_SITE_DATA = ${JSON.stringify(parsed, null, 2)};\n  ${endMarker}`;
              content = content.substring(0, startIdx) + newDecl + content.substring(endIdx + endMarker.length);
              fs.writeFileSync(siteDataPath, content, 'utf-8');

              // Also sync to hitakanshi-main/site-data.js if present
              const subSiteDataPath = path.join(ROOT_DIR, 'hitakanshi-main', 'site-data.js');
              if (fs.existsSync(subSiteDataPath)) {
                fs.writeFileSync(subSiteDataPath, content, 'utf-8');
              }

              console.log(`[Server] Site data saved and persisted to disk successfully at ${new Date().toISOString()}`);
              res.writeHead(200, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              });
              res.end(JSON.stringify({ success: true, message: 'Saved to disk', timestamp: Date.now() }));
              return;
            } else {
              // Fallback
              const legacyMarker = 'const DEFAULT_SITE_DATA =';
              const lStart = content.indexOf(legacyMarker);
              const getIdx = content.indexOf('// Expose API on window', lStart);
              const semiIdx = content.lastIndexOf(';', getIdx);
              if (lStart !== -1 && semiIdx !== -1) {
                const newDecl = `const DEFAULT_SITE_DATA = ${JSON.stringify(parsed, null, 2)};`;
                content = content.substring(0, lStart) + newDecl + content.substring(semiIdx + 1);
                fs.writeFileSync(siteDataPath, content, 'utf-8');
                res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
                res.end(JSON.stringify({ success: true, message: 'Saved to disk' }));
                return;
              }
            }
          }
        }
      } catch (err) {
        console.error('[Server] Error saving site data:', err);
      }
      res.writeHead(400, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify({ success: false, error: 'Failed to save site data' }));
    });
    return;
  }

  if (pathname === '/api/get-site-data' && req.method === 'GET') {
    try {
      const siteDataPath = path.join(ROOT_DIR, 'site-data.js');
      const content = fs.readFileSync(siteDataPath, 'utf-8');
      const startMarker = '/* SITE_DATA_START */';
      const endMarker = '/* SITE_DATA_END */';
      const sIdx = content.indexOf(startMarker);
      const eIdx = content.indexOf(endMarker, sIdx);
      if (sIdx !== -1 && eIdx !== -1) {
        const sub = content.substring(sIdx + startMarker.length, eIdx).trim();
        const decl = 'const DEFAULT_SITE_DATA =';
        const dIdx = sub.indexOf(decl);
        let jsonStr = sub.substring(dIdx + decl.length).trim();
        if (jsonStr.endsWith(';')) jsonStr = jsonStr.slice(0, -1).trim();
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(jsonStr);
        return;
      }
      // Fallback
      const startIdx = content.indexOf('const DEFAULT_SITE_DATA =');
      const getIdx = content.indexOf('// Expose API on window', startIdx);
      const semiIdx = content.lastIndexOf(';', getIdx);
      if (startIdx !== -1 && semiIdx !== -1) {
        const jsonStr = content.substring(startIdx + 'const DEFAULT_SITE_DATA ='.length, semiIdx).trim();
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(jsonStr);
        return;
      }
    } catch (e) {
      console.error(e);
    }
  }

  // Special routes
  if (pathname === '/admin' || pathname === '/admin/') {
    pathname = '/admin/index.html';
  }

  const filePath = resolveFile(pathname);

  if (!filePath) {
    res.writeHead(404, {
      'Content-Type': 'text/html; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(`<!DOCTYPE html><html><head><title>404 Not Found</title></head><body style="font-family:sans-serif;background:#1A1818;color:#eee;padding:40px;text-align:center;"><h1>404 Not Found</h1><p>Requested: <code>${pathname}</code></p><p><a href="/" style="color:#d97736;">Back to Home</a></p></body></html>`);
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  const stat = fs.statSync(filePath);
  res.writeHead(200, {
    'Content-Type': contentType,
    'Content-Length': stat.size,
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache'
  });

  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`🚀 Portfolio Local Server is LIVE!`);
  console.log(`> Local:    http://localhost:${PORT}/`);
  console.log(`> Admin:    http://localhost:${PORT}/admin/`);
  console.log(`> Network:  http://127.0.0.1:${PORT}/`);
  console.log(`======================================================\n`);
});
