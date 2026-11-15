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
      "image": "data:image/jpeg;base64,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",
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
      "image": "data:image/jpeg;base64,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",
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
      "image": "data:image/jpeg;base64,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",
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
      "image": "data:image/jpeg;base64,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",
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
      "image": "data:image/jpeg;base64,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",
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
      "image": "data:image/jpeg;base64,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",
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
      "image": "data:image/jpeg;base64,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",
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
