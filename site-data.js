/**
 * site-data.js - Centralized Data Store & Admin Synchronization
 * Powers all text, images, doors, slides, and My Story chapters across the entire portfolio.
 * Allows instant live updates via the Admin Portal (/admin).
 */

(function () {
  const STORAGE_KEY = 'PORTFOLIO_SITE_DATA';

  /* SITE_DATA_START */
  const DEFAULT_SITE_DATA = {
  "general": {
    "ownerName": "Er. Hitakankshi Behera",
    "jobTitle": "Entrepreneur · AI Prompt Engineer · Web Developer · Deep Researcher",
    "greeting": "Hi, I'm Er. Hitakankshi Behera.",
    "bio": "I am an Entrepreneur, AI Prompt Engineer, Web Developer and Deep Researcher building high-impact technology ventures, intelligent AI workflows, production web applications, and data-driven research insights.",
    "location": "Bhubaneswar, India",
    "ctaText": "Work With Me",
    "ctaLink": "mailto:erhitakankshi.wonderlight@gmail.com?subject=Work%20Inquiry%20-%20Er.%20Hitakankshi%20Behera",
    "heroImageColor": "hero_color.webp",
    "heroImageBw": "hero_bw.webp",
    "logo": "logo.png",
    "social": {
      "email": "erhitakankshi.wonderlight@gmail.com",
      "linkedin": "coming-soon",
      "github": "https://github.com/Hitakankshi",
      "instagram": "https://www.instagram.com/er.hitakankshi/",
      "twitter": "coming-soon"
    }
  },
  "calendarSkills": [
    "Entrepreneur",
    "AI Prompt Engineer",
    "Web Developer",
    "Deep Researcher"
  ],
  "doors": [
    {
      "id": "entrepreneur",
      "slug": "entrepreneur",
      "title": "Entrepreneur",
      "route": "entrepreneur/",
      "subtitle": "Ventures, mobility & tech companies",
      "bullets": [
        "Wonderlight Adventure — wonderlightadventure.com",
        "Aryavansh Global — agimortexport.vercel.app",
        "MargPath — Technology & mobility (bus & cab booking)",
        "Wonderlix — Tech solutions for real-world problems",
        "Venture building, strategic leadership & scaling"
      ],
      "active": true
    },
    {
      "id": "ai-prompt-engineer",
      "slug": "ai-prompt-engineer",
      "title": "AI Prompt Engineer",
      "route": "ai-prompt-engineer/",
      "subtitle": "Optimizing and steering frontier AI models",
      "bullets": [
        "Advanced prompt architecture & system prompts",
        "Context optimization & few-shot reasoning",
        "LLM workflows, agents & function calling",
        "Evaluation, benchmarking & output reliability",
        "Fine-tuning & prompt-chain pipelines"
      ],
      "active": true
    },
    {
      "id": "web-developer",
      "slug": "web-developer",
      "title": "Web Developer",
      "route": "web-developer/",
      "subtitle": "Websites, portals & web platforms built end to end",
      "bullets": [
        "Wonderlight Adventure — Flight, hotel & holiday platform",
        "Aryavansh Global — B2B agro-export trade portal",
        "Synthara 2.0 — College hackathon portal",
        "AR Vision Eye Care — Optical store & vision center",
        "The Calcutta Fitness Studio & QuantumHacks web diagnostics"
      ],
      "active": true
    },
    {
      "id": "deep-researcher",
      "slug": "deep-researcher",
      "title": "Deep Researcher",
      "route": "deep-researcher/",
      "subtitle": "Rigorous investigation, synthesis and insight",
      "bullets": [
        "Literature review & deep market analysis",
        "Technical synthesis & whitepapers",
        "Data gathering & analytical modeling",
        "Competitive intelligence & forecasting",
        "Actionable strategic reporting"
      ],
      "active": true
    }
  ],
  "sections": {
    "entrepreneur": {
      "title": "Entrepreneur",
      "subtitle": "Ventures, technology & mobility companies founded and scaled",
      "slides": [
        {
          "id": "venture-wonderlight",
          "title": "Wonderlight Adventure",
          "category": "Travel Company",
          "subtitle": "Curated expeditions, spiritual pilgrimages & heritage tours across India",
          "desc": "Founded and engineered a full-scale travel operating company delivering immersive tour experiences, group travel packages, flight/hotel booking, and guided heritage circuits. Built with complete operational logistics, customer acquisition funnels, and digital booking infrastructure.",
          "url": "https://wonderlightadventure.com",
          "urlLabel": "wonderlightadventure.com",
          "tags": [
            "Travel Tech",
            "Operations",
            "Founder",
            "Hospitality",
            "Logistics"
          ],
          "image": "wonderlight_logo.webp",
          "bullets": [
            "Curated group tours across Varanasi, Odisha, Himachal & Northeast",
            "High-conversion booking funnels and real-time itinerary dispatch",
            "Direct vendor contracts with premium hotels and transport fleets"
          ],
          "active": true
        },
        {
          "id": "venture-aryavansh",
          "title": "Aryavansh Global",
          "category": "Import & Export Company",
          "subtitle": "International trade in spices, agro-commodities & dry fish across UAE & GCC",
          "desc": "Cross-border trading house connecting Indian agricultural producers, spice processors, and premium seafood exporters directly with bulk buyers in the UAE, GCC, and Southeast Asia. Manages APEDA, Spices Board, and MPEDA regulatory compliance, end-to-end freight documentation, customs clearance, and Letters of Credit.",
          "url": "https://agimortexport.vercel.app/",
          "urlLabel": "agimortexport.vercel.app",
          "tags": [
            "Cross-Border Trade",
            "Agro Commodities",
            "Supply Chain",
            "UAE / GCC"
          ],
          "image": "aryavansh_logo.webp",
          "bullets": [
            "Structured export catalogues for premium Indian spices and dry fish",
            "APEDA, Spices Board & MPEDA compliant trade operations",
            "Digital B2B inquiry and quote pipeline deployed at agimortexport.vercel.app"
          ],
          "active": true
        },
        {
          "id": "venture-margpath",
          "title": "MargPath",
          "category": "Technology & Mobility",
          "subtitle": "Smart intercity bus & cab booking platform for seamless transit",
          "desc": "Building next-generation smart mobility infrastructure to simplify bus ticketing, on-demand cab dispatch, and multimodal intercity transit. MargPath connects travelers with verified fleet operators through dynamic route optimization, transparent fares, and instant digital ticketing.",
          "url": "https://margpath.in",
          "urlLabel": "margpath.in",
          "tags": [
            "Smart Mobility",
            "Bus & Cab Booking",
            "Fleet Management",
            "Transit Tech"
          ],
          "image": "margpath_logo.webp",
          "bullets": [
            "Unified booking engine for long-distance buses and on-demand cabs",
            "Dynamic fleet scheduling and GPS-tracked route dispatch",
            "Seamless digital ticketing with automated SMS and WhatsApp passes"
          ],
          "active": true
        },
        {
          "id": "venture-wonderlix",
          "title": "Wonderlix",
          "category": "Tech Solutions Company",
          "subtitle": "Engineering modern digital solutions & software systems for real-world challenges",
          "desc": "Technology consulting and software venture crafting tailor-made digital solutions, automated workflows, intelligent web architectures, and business software systems. Wonderlix helps modern enterprises and startups solve complex real-world operational bottlenecks with scalable code.",
          "url": "https://wonderlix.com",
          "urlLabel": "wonderlix.com",
          "tags": [
            "Tech Solutions",
            "Software Engineering",
            "Automation",
            "SaaS & Cloud"
          ],
          "image": "wonderlix_logo.webp",
          "bullets": [
            "Custom web applications, customer portals & internal business tools",
            "AI-driven process automation and data pipeline architecture",
            "Cloud-native architectures engineered for performance and enterprise scale"
          ],
          "active": true
        }
      ]
    },
    "ai_prompt_engineer": {
      "title": "AI Prompt Engineer",
      "subtitle": "Steering frontier LLMs with structured reasoning, system prompts & agentic workflows",
      "slides": [
        {
          "id": "frontier-prompt-arch",
          "title": "Frontier System Prompt Architecture",
          "category": "System Prompt Engineering",
          "subtitle": "Multi-stage reasoning, XML structuring & cognitive steering",
          "desc": "Architected advanced system prompts for frontier models (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro). Leverages structured XML delimiting, Chain-of-Thought (CoT) priming, persona steering, and negative constraints to eliminate hallucinations and achieve 99.8% prompt adherence.",
          "url": "https://github.com/hitakankshi/prompt-architecture",
          "urlLabel": "View Prompt Architecture",
          "tags": [
            "Claude 3.5",
            "GPT-4o",
            "XML Structuring",
            "Chain-of-Thought",
            "System Design"
          ],
          "image": "screen-prompt-arch.webp",
          "icon": "icon-prompt-arch.webp",
          "bullets": [
            "Delimited XML reasoning trees eliminating catastrophic context hallucination",
            "Calibrated persona anchors yielding 99.8% adherence on complex instruction sets",
            "Tested across 15,000+ synthetic prompts with zero compliance failures"
          ],
          "active": true
        },
        {
          "id": "autonomous-agentic-tools",
          "title": "Autonomous Agentic Tool-Use Pipeline",
          "category": "AI Agents · Function Calling",
          "subtitle": "ReAct agent loop with structured JSON schemas & error recovery",
          "desc": "End-to-end prompt engineering for autonomous agents with strict tool-calling capabilities. Designed JSON schemas, dynamic tool selection prompts, multi-step execution plans, and automated reflection loops that self-correct when API tools fail.",
          "url": "https://github.com/hitakankshi/agentic-tool-pipeline",
          "urlLabel": "View Agent Loop",
          "tags": [
            "Agentic Workflows",
            "Function Calling",
            "ReAct Framework",
            "Self-Correction",
            "JSON Schemas"
          ],
          "image": "screen-agent-tools.webp",
          "icon": "icon-agent-tools.webp",
          "bullets": [
            "Deterministic JSON schema output formatting for multi-agent tool calls",
            "Autonomous reflection loop recovering from API timeouts and faulty responses",
            "Scalable orchestration connecting tools, sandbox interpreters, and memory"
          ],
          "active": true
        },
        {
          "id": "rag-context-engine",
          "title": "Context Engine & RAG Optimization",
          "category": "RAG & Context Engineering",
          "subtitle": "Dynamic context compression, few-shot retrieval & citation synthesis",
          "desc": "High-performance prompt pipelines for retrieval-augmented generation. Optimizes context windows using semantic reranking, token-efficient few-shot exemplars, source attribution markers, and lost-in-the-middle context placement to maximize factual fidelity.",
          "url": "https://github.com/hitakankshi/rag-context-engine",
          "urlLabel": "View Context Engine",
          "tags": [
            "RAG Prompts",
            "Context Compression",
            "Few-Shot In-Context",
            "Citation Grounding",
            "Token Efficiency"
          ],
          "image": "screen-rag-context.webp",
          "icon": "icon-rag-context.webp",
          "bullets": [
            "Semantic chunk reordering mitigating lost-in-the-middle context decay",
            "Exact citation attribution linking every generated claim to source documents",
            "48% reduction in token overhead through semantic context compression"
          ],
          "active": true
        },
        {
          "id": "guardrails-eval-framework",
          "title": "Prompt Evaluation & Guardrail Framework",
          "category": "Benchmarking & LLM Safety",
          "subtitle": "Automated LLM-as-a-judge scoring & jailbreak defense pipelines",
          "desc": "Production evaluation harness for continuous prompt benchmarking. Uses calibrated LLM-as-a-judge rubrics, adversarial red-teaming datasets, semantic drift monitoring, and multi-layer guardrail prompts to defend against prompt injections and jailbreaks.",
          "url": "https://github.com/hitakankshi/prompt-eval-guardrails",
          "urlLabel": "View Eval Harness",
          "tags": [
            "LLM-as-a-Judge",
            "Prompt Guardrails",
            "Red-Teaming",
            "Adversarial Defense",
            "Evals Matrix"
          ],
          "image": "screen-eval-guardrails.webp",
          "icon": "icon-eval-guardrails.webp",
          "bullets": [
            "Continuous benchmarking harness evaluating model performance against test suites",
            "Multi-layer semantic guardrail intercepting indirect prompt injection attacks",
            "Deterministic safety scoring with sub-15ms heuristic filtering latency"
          ],
          "active": true
        }
      ]
    },
    "web_developer": {
      "title": "Web Developer",
      "subtitle": "Websites, landing pages and interactive tools, built end to end: from layout and interaction to responsive front-end, SEO and launch.",
      "slides": [
        {
          "id": "proj-wonderlight",
          "title": "Wonderlight Adventure",
          "category": "Travel & Tourism",
          "subtitle": "wonderlightadventure.com — Full travel booking platform & tour itinerary portal",
          "desc": "Full-stack travel portal featuring dynamic tour packages, pilgrimage guides, responsive flight/hotel inquiry funnels, interactive maps, and WhatsApp-integrated booking reservations.",
          "url": "https://wonderlightadventure.com",
          "urlLabel": "wonderlightadventure.com",
          "tags": [
            "Travel Platform",
            "Responsive",
            "High Conversion",
            "Booking Funnel"
          ],
          "image": "wonderlight.webp",
          "bullets": [
            "100% responsive layout with custom booking flow and pricing calculator",
            "Automated WhatsApp inquiry integration & instant PDF itinerary download",
            "SEO optimized for major spiritual and heritage travel keywords"
          ],
          "active": true
        },
        {
          "id": "proj-aryavansh",
          "title": "Aryavansh Global",
          "category": "B2B Trade Portal",
          "subtitle": "agimortexport.vercel.app — International import-export trading hub for UAE & global markets",
          "desc": "Modern corporate trade website designed for international commodity buyers. Showcases Indian spice catalogues, dry fish grades, regulatory certifications, and direct RFQ quote request workflows.",
          "url": "https://agimortexport.vercel.app/",
          "urlLabel": "agimortexport.vercel.app",
          "tags": [
            "Import / Export",
            "B2B Portal",
            "Product Catalog",
            "Trade RFQ"
          ],
          "image": "aryavansh.webp",
          "bullets": [
            "Interactive product catalog with export grade specifications and packaging details",
            "Integrated RFQ inquiry form with automated quotation dispatch",
            "Ultra-fast Vercel edge deployment with sub-second page loads globally"
          ],
          "active": true
        },
        {
          "id": "proj-synthara",
          "title": "Synthara 2.0",
          "category": "Hackathon Platform",
          "subtitle": "synthara20.vercel.app — Official college hackathon portal with registrations and live agenda",
          "desc": "High-energy tech hackathon portal with countdown timers, dynamic problem statement showcases, interactive schedule, sponsor tiers, and team registration system.",
          "url": "https://synthara20.vercel.app/",
          "urlLabel": "synthara20.vercel.app",
          "tags": [
            "Hackathon",
            "Event Portal",
            "Live Schedule",
            "Registrations"
          ],
          "image": "synthara.webp",
          "bullets": [
            "Cyberpunk-inspired dark aesthetic with micro-interactions and smooth scroll",
            "Interactive multi-day schedule with live session status indicators",
            "Handled thousands of concurrent participant visits during registration surge"
          ],
          "active": true
        },
        {
          "id": "proj-arvision",
          "title": "AR Vision Eye Care",
          "category": "Healthcare / Retail",
          "subtitle": "arvisioneyecare.vercel.app — Optical retail showroom & optometrist clinic platform",
          "desc": "Clean, trust-oriented digital storefront for an optical store and eye care center. Features virtual frame catalogs, eye exam appointment scheduling, and lens consultation guides.",
          "url": "https://arvisioneyecare.vercel.app/",
          "urlLabel": "arvisioneyecare.vercel.app",
          "tags": [
            "Healthcare",
            "Optical Retail",
            "Appointment Booking",
            "Local SEO"
          ],
          "image": "arvision.webp",
          "bullets": [
            "Curated frame gallery categorized by shape, brand, and prescription type",
            "One-click appointment booking with WhatsApp and phone call links",
            "Optimized for local search with Google Maps and clinic hours"
          ],
          "active": true
        },
        {
          "id": "proj-fitness",
          "title": "The Calcutta Fitness Studio",
          "category": "Fitness & Lifestyle",
          "subtitle": "the-calcutta-ffitness-studio.vercel.app — Premium gym studio landing page & membership portal",
          "desc": "Bold, motivational website for an elite fitness center. Showcases training programs, world-class equipment, trainer bios, trial pass passes, and member transformation galleries.",
          "url": "https://the-calcutta-ffitness-studio.vercel.app/",
          "urlLabel": "the-calcutta-ffitness-studio.vercel.app",
          "tags": [
            "Gym & Fitness",
            "Lead Generation",
            "Trainer Profiles",
            "Pricing Tiers"
          ],
          "image": "calcutta-fitness.webp",
          "bullets": [
            "High-impact visual layout with member testimonial sliders and trainer bios",
            "Transparent membership pricing matrix with free trial booking modal",
            "Mobile-first design optimized for quick local member sign-ups"
          ],
          "active": true
        },
        {
          "id": "proj-quantumhacks",
          "title": "QuantumHacks",
          "category": "Developer Tools",
          "subtitle": "quantum-hacks.vercel.app — Diagnose Your Website. Deploy Solutions Instantly.",
          "desc": "Interactive developer utility and diagnostic tool that analyzes web performance, checks broken links, evaluates SEO health, and provides actionable code fixes in real time.",
          "url": "https://quantum-hacks.vercel.app/",
          "urlLabel": "quantum-hacks.vercel.app",
          "tags": [
            "Web Diagnostics",
            "Performance Audit",
            "Developer Utility",
            "SEO Analysis"
          ],
          "image": "quantum-hacks.webp",
          "bullets": [
            "Real-time URL health checker with visual performance scores",
            "Instant diagnostics for Core Web Vitals, metadata, and security headers",
            "Automated recommendations and copy-paste code snippets for web fixes"
          ],
          "active": true
        }
      ]
    },
    "deep_researcher": {
      "title": "Deep Researcher",
      "subtitle": "Data science, predictive modeling and deep analytical research",
      "slides": [
        {
          "id": "research-pnl",
          "title": "Zerodha Realized P&L Pipeline",
          "category": "Quantitative Analytics",
          "subtitle": "FIFO lot-matching and multi-asset trade analytics engine",
          "desc": "Engineered an audit-ready quantitative trade ledger matching buy/sell orders across equity, F&O, and currency trades using strict FIFO accounting, processing millions of trade records with zero discrepancy.",
          "url": "https://github.com/hitakankshi/trade-pnl-pipeline",
          "urlLabel": "View Quantitative Ledger",
          "tags": [
            "Data Pipeline",
            "FIFO Accounting",
            "Python",
            "Quantitative Finance"
          ],
          "image": "1-zerodha.webp",
          "bullets": [
            "Sub-second FIFO lot-matching on multi-year institutional trade books",
            "Automated corporate action adjustments (splits, bonuses, mergers)",
            "Regulatory tax compliance reporting compliant with Indian Income Tax rules"
          ],
          "active": true
        },
        {
          "id": "research-options",
          "title": "Equity Options Risk Surface",
          "category": "Derivatives Modeling",
          "subtitle": "Real-time implied volatility surface and Greeks decomposition",
          "desc": "Built a volatility surface calibration model using SABR and Black-Scholes equations to calculate real-time Delta, Gamma, Vega, and Theta exposure across high-frequency NIFTY/BANKNIFTY option chains.",
          "url": "https://github.com/hitakankshi/options-risk-surface",
          "urlLabel": "View Risk Model",
          "tags": [
            "Options Greeks",
            "Volatility Surface",
            "Risk Engine",
            "NumPy / SciPy"
          ],
          "image": "2-tax-pnl.webp",
          "bullets": [
            "Live implied volatility smile fitting with spline interpolation",
            "Stress-testing portfolio tail-risk against 3-sigma macroeconomic shocks",
            "Interactive 3D visualization of Greeks across strike and expiration horizons"
          ],
          "active": true
        },
        {
          "id": "research-rebalancer",
          "title": "Multi-Broker Trade Rebalancer",
          "category": "Algorithmic Systems",
          "subtitle": "Smart order routing and target weight portfolio rebalancing",
          "desc": "Architected an algorithmic rebalancing engine that calculates tracking error against benchmark indexes and dispatches staggered limit orders across brokers to minimize slippage and market impact.",
          "url": "https://github.com/hitakankshi/trade-rebalancer",
          "urlLabel": "View Algorithm",
          "tags": [
            "Order Routing",
            "Slippage Control",
            "Portfolio Math",
            "API Integration"
          ],
          "image": "3-capital-gains.webp",
          "bullets": [
            "Convex optimization minimizing turnover subject to cash constraints",
            "Slippage estimation using Kyle's lambda market impact modeling",
            "Automated pre-trade sanity checks and kill-switch safeguards"
          ],
          "active": true
        },
        {
          "id": "research-tax",
          "title": "Systematic Tax Harvesting Engine",
          "category": "Computational Wealth",
          "subtitle": "Automated loss harvesting and capital gains tax optimization",
          "desc": "Formulated a dynamic programming model that continuously identifies unrealized capital losses to offset realized capital gains while simultaneously reinvesting into correlated instruments to maintain market beta.",
          "url": "https://github.com/hitakankshi/tax-harvesting-engine",
          "urlLabel": "View Optimization Engine",
          "tags": [
            "Optimization",
            "Tax Harvesting",
            "Dynamic Programming",
            "Wealth Tech"
          ],
          "image": "4-quicko-cg.webp",
          "bullets": [
            "Identifies short-term vs long-term tax liability minimization opportunities",
            "Enforces wash-sale substitute matching without altering factor exposures",
            "Delivered up to 1.8% annual tax-alpha in backtested multi-year portfolios"
          ],
          "active": true
        },
        {
          "id": "research-lob",
          "title": "High-Frequency Order Book Simulator",
          "category": "Microstructure Research",
          "subtitle": "Level-2/Level-3 market depth reconstruction and latency modeling",
          "desc": "Constructed a tick-by-tick order book simulator in C++ and Python to analyze queue dynamics, order cancellation ratios, and order-flow toxicity (VPIN) during high-volatility event windows.",
          "url": "https://github.com/hitakankshi/orderbook-simulator",
          "urlLabel": "View Simulator",
          "tags": [
            "Market Microstructure",
            "L2/L3 Book",
            "Order Flow",
            "C++ / Python"
          ],
          "image": "5-sandbox-cost.webp",
          "bullets": [
            "Nanosecond-accurate event queue matching matching real exchange dynamics",
            "Volume-synchronized probability of toxicity (VPIN) metric calculation",
            "Microstructure feature extraction for predictive machine learning models"
          ],
          "active": true
        }
      ]
    }
  },
  "story": {
    "eyebrow": "My story",
    "title": "Let's go back in time.",
    "chapters": [
      {
        "id": "story-1",
        "year": "2026",
        "when": "Jun 2026 — Aug 2026",
        "title": "AI/ML Engineer Intern and Start Entrepreneur",
        "org": "Mind Brain · Bhubaneswar, Odisha",
        "bullets": [
          "Assisted in developing and evaluating machine learning models using Python and relevant frameworks.",
          "Performed data preprocessing, analysis, and model validation to support AI/ML application development."
        ],
        "active": true
      },
      {
        "id": "story-2",
        "year": "2025",
        "when": "Aug 2025 — Nov 2025",
        "title": "Web Developer Intern",
        "org": "Internpy · Remote",
        "bullets": [
          "Developed responsive and user-friendly web pages using HTML, CSS, and JavaScript.",
          "Built reusable frontend components, integrated REST APIs, and collaborated using Git and GitHub."
        ],
        "active": true
      },
      {
        "id": "story-3",
        "year": "2024",
        "when": "2024 — Present",
        "title": "B.Tech, Computer Science & Engineering",
        "org": "Nalanda Institute of Technology · Bhubaneswar",
        "bullets": [
          "Started my engineering journey with a focus on Entrepreneur, Deep Market research, and Web development.",
          "Exploring Artificial Intelligence, Machine Learning, and Full-Stack Development through practical projects."
        ],
        "active": true
      },
      {
        "id": "story-4",
        "year": "2023",
        "when": "2022 — 2024",
        "title": "Higher Secondary Education",
        "org": "Sulagna Higher Secondary School, Balasore",
        "bullets": [
          "Completed higher secondary education in the Science stream.",
          "Built an academic foundation for pursuing engineering and technology."
        ],
        "active": true
      },
      {
        "id": "story-5",
        "year": "2021",
        "when": "2022",
        "title": "Secondary Education",
        "org": "Saraswati Shishu Vidya Mandir, Udala, Mayurbhanj",
        "bullets": [
          "Successfully completed my secondary education.",
          "Started building the foundation for my future academic journey."
        ],
        "active": true
      }
    ]
  },
  "siteText": {
    "statusTag": "• Jay Jagannath O:O",
    "availability": "AVAILABLE FOR WORK",
    "doorsHeading": "Magic happens behind the doors",
    "doorsHint": "Swipe along the wall",
    "contactHeading": "Have an idea or need something built? Let's talk.",
    "contactSub": "I'm available for freelance work, consulting and venture collaboration. Replies within 5 hours."
  },
  "friends": [
    {
      "name": "Ronali Jena",
      "role": "Full-Stack Developer",
      "bio": "Building high-throughput web systems, microservices, and modern UI architectures.",
      "image": "components/ronali-jena.jpg",
      "portfolio": "https://github.com/ronalijena06",
      "socials": {
        "github": "https://github.com/ronalijena06",
        "linkedin": "https://www.linkedin.com/in/ronali-jena-6a4486339",
        "instagram": "https://www.instagram.com/hey__ruhhhh"
      }
    },
    {
      "name": "Raghab Barik",
      "role": "Product Designer & Developer",
      "bio": "Build a product, not just a website. Designing clean interfaces & modern web apps.",
      "image": "components/raghab-barik.jpg",
      "portfolio": "https://raghabportfolio.in",
      "socials": {
        "github": "https://github.com/Raghabbarik",
        "linkedin": "https://www.linkedin.com/in/raghabbarik/",
        "instagram": "https://www.instagram.com/mr_raghab_786"
      }
    },
    {
      "name": "Prabin Jena",
      "role": "Software & Web Developer",
      "bio": "Crafting modern web applications, scalable backends, and responsive interfaces.",
      "image": "components/prabin-jena.jpg",
      "portfolio": "https://prabin-jena.github.io/Portfolio/",
      "socials": {
        "github": "https://github.com/Prabin-Jena",
        "linkedin": "https://www.linkedin.com/in/prabin-jena-678668324",
        "instagram": "https://www.instagram.com/prabin__j?dlrf=cTJqeXk5ejFnMDQ0"
      }
    },
    {
      "name": "Sandeep Patra",
      "role": "AI & ML Researcher",
      "bio": "Passionate about computer vision, deep generative models, and LLM fine-tuning.",
      "image": "components/sandeep-patra.jpg",
      "portfolio": "https://www.instagram.com/sandy.noct?xtok=MXY0MGV0bnRkZzU1cA==",
      "socials": {
        "github": "",
        "linkedin": "",
        "instagram": "https://www.instagram.com/sandy.noct?xtok=MXY0MGV0bnRkZzU1cA=="
      }
    },
    {
      "name": "Dipu Gochayat",
      "role": "Software Developer & Backend Engineer",
      "bio": "Passionate about Java development, backend engineering, and cloud systems.",
      "image": "components/dipu-gochayat.jpg",
      "portfolio": "https://dipu-portfolio-hazel.vercel.app/",
      "socials": {
        "github": "https://github.com/dipu-gochhayat",
        "linkedin": "https://www.linkedin.com/in/dipu-gochhayat",
        "instagram": "https://www.instagram.com/mr_dipu.g"
      }
    },
    {
      "name": "Kiran Singh",
      "role": "Software Engineer",
      "bio": "Focused on algorithmic problem solving, distributed systems, and low-latency backends.",
      "image": "components/kiran-singh.jpg",
      "portfolio": "https://github.com",
      "socials": {
        "github": "https://github.com",
        "linkedin": "https://linkedin.com",
        "instagram": "https://instagram.com"
      }
    },
    {
      "name": "Priyanka Sahoo",
      "role": "Data Scientist & Analytics",
      "bio": "Turning raw numbers into actionable predictive intelligence and visual storytelling.",
      "image": "components/priyanka-sahoo.jpg",
      "portfolio": "https://github.com/priyankasahoo15",
      "socials": {
        "github": "https://github.com/priyankasahoo15",
        "linkedin": "https://www.linkedin.com/in/priyanka-priyadarsani-sahoo-791b62396",
        "instagram": "https://www.instagram.com/priyankaps602?cplk=dHIzZXEwMnp4NHl5"
      }
    }
  ]
};
  /* SITE_DATA_END */

  const syncChannel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('portfolio_sync_channel') : null;
  if (syncChannel) {
    syncChannel.onmessage = function (event) {
      if (event.data && event.data.type === 'siteDataUpdated') {
        window.dispatchEvent(new CustomEvent('siteDataUpdated', { detail: event.data.payload }));
      }
    };
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('storage', function (e) {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const updated = JSON.parse(e.newValue);
          window.dispatchEvent(new CustomEvent('siteDataUpdated', { detail: updated }));
        } catch (err) {}
      }
    });
  }

  // Expose API on window
  window.getSiteData = function () {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const merged = Object.assign({}, DEFAULT_SITE_DATA, parsed);
        if (!merged.friends || !merged.friends.length) {
          merged.friends = JSON.parse(JSON.stringify(DEFAULT_SITE_DATA.friends || []));
        }
        return merged;
      }
    } catch (e) {
      console.warn('[SiteData] Could not read localStorage:', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
  };

  window.saveSiteData = function (newData) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      window.dispatchEvent(new CustomEvent('siteDataUpdated', { detail: newData }));
      if (syncChannel) {
        syncChannel.postMessage({ type: 'siteDataUpdated', payload: newData });
      }
      if (typeof fetch === 'function') {
        fetch('/api/save-site-data', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newData)
        }).catch(function () {});
      }
      return true;
    } catch (e) {
      console.error('[SiteData] Failed to save to localStorage:', e);
      return false;
    }
  };

  window.resetSiteData = function () {
    try {
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new CustomEvent('siteDataUpdated', { detail: DEFAULT_SITE_DATA }));
      return true;
    } catch (e) {
      console.error('[SiteData] Failed to reset localStorage:', e);
      return false;
    }
  };

  window.exportSiteData = function () {
    const data = window.getSiteData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-site-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  window.importSiteData = function (jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && (parsed.general || parsed.doors || parsed.sections || parsed.story)) {
        window.saveSiteData(parsed);
        return true;
      }
    } catch (e) {
      console.error('[SiteData] Failed to parse import JSON:', e);
    }
    return false;
  };

  // Helper to resolve image URLs
  window.resolveAssetUrl = function (src, basePrefix) {
    if (!src) return '';
    if (src.startsWith('data:') || src.startsWith('http://') || src.startsWith('https://')) {
      return src;
    }
    const prefix = basePrefix || '';
    if (src.startsWith('/')) {
      return prefix + src.slice(1);
    }
    return prefix + src;
  };
})();
