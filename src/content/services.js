/** Unsplash CDN — royalty-free; hotlinking allowed per Unsplash guidelines */
const img = (photoPath) =>
  `https://images.unsplash.com/${photoPath}?auto=format&fit=crop&w=1200&q=80`;

export const allServices = [
  {
    id: 1,
    title: "Artificial Intelligence (AI)",
    image: img("photo-1677442136019-21780ecad995"),
    desc: "Custom machine learning, NLP, and workflow automation—production-ready models with monitoring, governance, and integration into your existing apps.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    image: img("photo-1512941937669-90a1b58e7e9c"),
    desc: "Native and Flutter/React Native builds for iOS and Android: App Store-ready releases, analytics instrumentation, and UX tuned for retention.",
  },
  {
    id: 3,
    title: "Website Development",
    image: img("photo-1498050108023-c5249f4df085"),
    desc: "High-performance websites and web apps with technical SEO, Core Web Vitals focus, CMS flexibility, and secure API integrations.",
  },
  {
    id: 4,
    title: "UI/UX Design",
    image: img("photo-1561070791-2526d30994b5"),
    desc: "Research-backed UI/UX design: design systems, prototypes, accessibility-minded patterns, and dev-ready specifications.",
  },
  {
    id: 5,
    title: "Custom Software Development",
    image: img("photo-1460925895917-afdab827c52f"),
    desc: "Line-of-business platforms, automation, and integrations modeled on your workflows—with APIs, auditing, and operational tooling included.",
  },
  {
    id: 6,
    title: "Data Analytics",
    image: img("photo-1551288049-bebda4e38f71"),
    desc: "KPI modeling, self-serve BI, and reliable pipelines so finance, product, and GTM teams cite the same metrics.",
  },
  {
    id: 7,
    title: "Internet of Things (IoT)",
    image: img("photo-1518770660439-4636190af475"),
    desc: "Firmware-adjacent software, MQTT/gateway patterns, OTA strategy, and cloud ingestion for consumer or industrial IoT.",
  },
  {
    id: 8,
    title: "Robotic Process Automation (RPA)",
    image: img("photo-1485827404703-89b55fcc595e"),
    desc: "Attended or unattended bots with exception queues, credential vaulting, and ROI reporting across legacy UIs.",
  },
  {
    id: 9,
    title: "Augmented Reality (AR) & Virtual Reality (VR)",
    image: img("photo-1622979135225-d2ba269cf1ac"),
    desc: "AR/VR experiences for training, sales, and spatial storytelling—optimized for real device constraints and distribution.",
  },
  {
    id: 10,
    title: "Game Development",
    image: img("photo-1511512578047-dfb367046420"),
    desc: "Gameplay systems, live ops hooks, multiplayer foundations, and art pipelines tuned for target frame budgets.",
  },
  {
    id: 11,
    title: "Blockchain Solutions",
    image: img("photo-1639762681485-074b7f938ba0"),
    desc: "Architecture-first blockchain delivery: smart contracts, wallets, indexing, and audits when decentralization is justified.",
  },
  {
    id: 12,
    title: "Cloud Services",
    image: img("photo-1451187580459-43490279c0fa"),
    desc: "Landing zones, Kubernetes/serverless hybrids, FinOps visibility, DR strategy, and SRE practices on AWS, Azure, or GCP.",
  },
  {
    id: 13,
    title: "Cybersecurity",
    image: img("photo-1563013544-824ae1b704d3"),
    desc: "Threat modeling, secure SDLC automation, detection pipelines, and governance patterns aligned to your risk profile.",
  },
];
// Web Development Services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Custom Website Design",
    image: require("../assets/images/landing page/Custom Website Design.webp"),
    description:
      "Brand-aligned, responsive web design with component libraries, typography systems, and conversion-oriented layout patterns for every breakpoint.",
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    image: require("../assets/images/landing page/E-commerce Solutions.webp"),
    description:
      "Composable storefronts with PCI-minded checkouts, tax/shipping integrations, catalog performance tuning, and CRO-friendly merchandising zones.",
  },
  {
    id: 3,
    title: "Content Management Systems",
    image: require("../assets/images/landing page/Content Management Systems.webp"),
    description:
      "Headless or traditional CMS implementations—editor workflows, preview environments, and governance so marketing ships content without outages.",
  },
  {
    id: 4,
    title: "API Integration",
    image: require("../assets/images/landing page/API Integration.webp"),
    description:
      "REST, GraphQL, and event-driven integrations with observability, retry policies, and documentation your engineers can extend safely.",
  },
  {
    id: 5,
    title: "Website Maintenance & Support",
    image: require("../assets/images/landing page/Website Maintenance & Support.webp"),
    description:
      "SLA-driven maintenance: dependency upgrades, uptime monitoring, performance budgets, SEO regression checks, and incident response playbooks.",
  },
];

// App Development Services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landing page/iOS App Development.webp"),
    description:
      "Swift/SwiftUI or UIKit applications tuned for latency, background modes, push notifications, and App Store review readiness.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landing page/Android App Development.webp"),
    description:
      "Kotlin-first Android delivery with material guidelines, granular permissions UX, and Google Play compliance baked into CI.",
  },
  {
    id: 3,
    title: "Cross-Platform App Development",
    image: require("../assets/images/landing page/Cross-Platform App Development.webp"),
    description:
      "Flutter or React Native programs with shared design tokens, native module fallbacks, and automated UI tests across device matrices.",
  },
  {
    id: 4,
    title: "UI/UX Design for Apps",
    image: require("../assets/images/landing page/UIUX Design for Apps.webp"),
    description:
      "Mobile UX systems spanning onboarding, navigation models, empty states, and accessibility—handed off as inspectable specs to engineering.",
  },
  {
    id: 5,
    title: "App Testing & Deployment",
    image: require("../assets/images/landing page/App Testing & Deployment.webp"),
    description:
      "Device labs, automated regression suites, beta distribution, crash-symbolication pipelines, and phased rollouts guarded by feature flags.",
  },
];

const serviceEngagementProcess = [
  {
    step: 1,
    title: "Discovery",
    description: "Goals, constraints, stakeholders, and success metrics",
  },
  {
    step: 2,
    title: "Design",
    description: "Solution architecture, UX flows, and delivery plan",
  },
  {
    step: 3,
    title: "Build",
    description: "Iterative implementation with demos and feedback",
  },
  {
    step: 4,
    title: "Quality",
    description: "Testing, reviews, security checks, and performance tuning",
  },
  {
    step: 5,
    title: "Launch",
    description: "Release, migration, training, and go-live support",
  },
  {
    step: 6,
    title: "Evolve",
    description: "Monitoring, optimization, and roadmap iterations",
  },
];

// Service details page content (titles must match allServices for routing)
export const serviceDetailsList = [
  {
    id: 1,
    title: "Artificial Intelligence (AI)",
    shortDescription: "ML, NLP, and intelligent automation tailored to your workflows",
    heroImage: img("photo-1677442136019-21780ecad995"),
    overview:
      "We help you apply artificial intelligence where it creates real leverage: prediction, classification, document understanding, and workflow automation. From proof-of-concept to production, we focus on data quality, model reliability, and safe deployment.",
    features: [
      "Predictive models and forecasting",
      "NLP for search, support, and documents",
      "Computer vision and document capture",
      "MLOps: monitoring, retraining, and governance",
      "Integration with your existing systems",
      "Human-in-the-loop workflows",
      "Responsible AI and bias review",
      "Performance tuning on your infrastructure",
    ],
    technologies: [
      {
        name: "Frameworks",
        items: ["TensorFlow", "PyTorch", "scikit-learn", "Hugging Face"],
      },
      { name: "Languages", items: ["Python", "SQL", "R"] },
      { name: "NLP", items: ["Transformers", "spaCy", "LLM APIs", "RAG"] },
      { name: "DevOps", items: ["Docker", "Kubernetes", "MLflow", "CI/CD"] },
    ],
    process: serviceEngagementProcess,
    benefits: [
      "Automate repetitive decisions at scale",
      "Richer products with intelligence built in",
      "Faster insight from unstructured data",
      "Operational efficiency and fewer errors",
      "A pragmatic path from pilot to production",
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    shortDescription: "Native and cross-platform apps for iOS and Android",
    heroImage: img("photo-1512941937669-90a1b58e7e9c"),
    overview:
      "We design and ship mobile applications that feel fast and trustworthy: clear information architecture, offline-ready patterns where needed, and secure handling of accounts and data. Choose native or cross-platform based on your roadmap and budget.",
    features: [
      "Native iOS and Android when performance is critical",
      "Cross-platform with Flutter or React Native",
      "Secure auth, biometrics, and token handling",
      "Push notifications and deep linking",
      "App Store and Play Console release support",
      "Crash analytics and performance monitoring",
      "Accessibility and localization",
      "API integration with your backends",
    ],
    technologies: [
      { name: "Native", items: ["Swift", "Kotlin", "Jetpack Compose"] },
      {
        name: "Cross-Platform",
        items: ["Flutter", "React Native", "Expo"],
      },
      { name: "Backend", items: ["REST", "GraphQL", "Firebase", "AWS"] },
      { name: "Testing", items: ["Detox", "XCTest", "Espresso", "Jest"] },
    ],
    process: serviceEngagementProcess,
    benefits: [
      "Reach users on the devices they use daily",
      "One codebase option for faster iterations",
      "Strong security and store compliance",
      "Measurable retention and engagement",
      "Ongoing releases with clear ownership",
    ],
  },
  {
    id: 3,
    title: "Website Development",
    shortDescription: "Marketing sites, web apps, and portals that perform",
    heroImage: img("photo-1498050108023-c5249f4df085"),
    overview:
      "We build websites and web applications that load quickly, rank well, and scale with your traffic. Whether you need a brand presence, a customer portal, or a full product experience in the browser, we align engineering with your content and conversion goals.",
    features: [
      "Responsive, mobile-first layouts",
      "Headless CMS and content workflows",
      "E‑commerce and payments integration",
      "SEO, Core Web Vitals, and analytics",
      "Authentication and role-based access",
      "REST and GraphQL API layers",
      "Progressive enhancement and caching",
      "Hosting and CDN configuration",
    ],
    technologies: [
      {
        name: "Frontend",
        items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Backend",
        items: ["Node.js", "Python", "PHP", ".NET"],
      },
      { name: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
      { name: "DevOps", items: ["Vercel", "AWS", "Docker", "GitHub Actions"] },
    ],
    process: serviceEngagementProcess,
    benefits: [
      "A single hub for brand and product storytelling",
      "Better conversion through performance and UX",
      "Easier content updates for your team",
      "Secure, maintainable codebases",
      "Room to grow into a full web product",
    ],
  },
  {
    id: 4,
    title: "UI/UX Design",
    shortDescription: "Research, product UX, and polished interfaces",
    heroImage: img("photo-1561070791-2526d30994b5"),
    overview:
      "Great design reduces support burden and increases adoption. We combine user research, IA, and visual design so your product is easy to learn and aligned with your brand—on web, mobile, or internal tools.",
    features: [
      "User interviews and usability testing",
      "Personas, journeys, and service maps",
      "Wireframes and high-fidelity UI",
      "Design systems and component libraries",
      "Accessibility (WCAG-oriented) patterns",
      "Handoff specs for engineering",
      "Prototypes for stakeholder alignment",
      "Iteration from analytics and feedback",
    ],
    technologies: [
      { name: "Tools", items: ["Figma", "FigJam", "Miro", "Adobe CC"] },
      { name: "Research", items: ["UserTesting", "Hotjar", "Analytics"] },
      { name: "Design Ops", items: ["Tokens", "Storybook", "Zeroheight"] },
      { name: "Frontend", items: ["HTML/CSS", "Design QA", "Responsive"] },
    ],
    process: serviceEngagementProcess,
    benefits: [
      "Higher task success and lower confusion",
      "Consistent brand across touchpoints",
      "Faster build with reusable components",
      "Inclusive experiences for more users",
      "Design decisions backed by evidence",
    ],
  },
  {
    id: 5,
    title: "Custom Software Development",
    shortDescription: "Bespoke applications that match how you work",
    heroImage: img("photo-1460925895917-afdab827c52f"),
    overview:
      "Off-the-shelf tools often force compromises. We build custom software—internal platforms, customer portals, integrations, and automation—around your data model and approvals so teams move faster with fewer workarounds.",
    features: [
      "Domain-driven design workshops",
      "Modular services and clean boundaries",
      "Role-based workflows and auditing",
      "Integration with ERP, CRM, and legacy APIs",
      "Batch jobs, events, and reporting",
      "Admin consoles and self-service tooling",
      "Documentation and knowledge transfer",
      "SLAs for maintenance and enhancements",
    ],
    technologies: [
      { name: "Backend", items: ["Node.js", "Java", "Python", "Go"] },
      { name: "APIs", items: ["REST", "GraphQL", "gRPC", "Webhooks"] },
      { name: "Data", items: ["PostgreSQL", "Redis", "Kafka", "S3"] },
      { name: "DevOps", items: ["Docker", "Kubernetes", "IaC", "CI/CD"] },
    ],
    process: serviceEngagementProcess,
    benefits: [
      "Software shaped to your processes—not the reverse",
      "Fewer spreadsheets and manual handoffs",
      "Integration without vendor lock-in",
      "IP and code you own",
      "Roadmap control with a long-term partner",
    ],
  },
  {
    id: 6,
    title: "Data Analytics",
    shortDescription: "Dashboards, metrics, and trustworthy reporting",
    heroImage: img("photo-1551288049-bebda4e38f71"),
    overview:
      "We help you measure what matters: defining KPIs, modeling data for analysis, and delivering dashboards and reports that leaders and operators actually use. We emphasize data quality, lineage, and refresh reliability.",
    features: [
      "Metrics layer and semantic modeling",
      "Executive and operational dashboards",
      "Self-serve reporting for teams",
      "ETL/ELT pipelines and orchestration",
      "Data quality checks and alerting",
      "Forecasting and segmentation",
      "Cost-aware warehouse design",
      "Training on how to read and trust the numbers",
    ],
    technologies: [
      { name: "Tools", items: ["Power BI", "Tableau", "Looker", "Metabase"] },
      { name: "Languages", items: ["SQL", "Python", "dbt"] },
      { name: "Platforms", items: ["Snowflake", "BigQuery", "Redshift"] },
      { name: "Orchestration", items: ["Airflow", "Dagster", "Fivetran"] },
    ],
    process: serviceEngagementProcess,
    benefits: [
      "One source of truth for decisions",
      "Faster answers without analyst bottlenecks",
      "Improved revenue and cost visibility",
      "Confidence from tested pipelines",
      "Scales as data volume grows",
    ],
  },
  {
    id: 7,
    title: "Internet of Things (IoT)",
    shortDescription: "Firmware, connectivity, and cloud for connected products",
    heroImage: img("photo-1518770660439-4636190af475"),
    overview:
      "We support connected product initiatives: device software, secure connectivity, telemetry, and cloud services that scale. Whether consumer gadgets or industrial assets, we focus on reliability, updates, and operational monitoring.",
    features: [
      "Embedded firmware and OTA updates",
      "MQTT, CoAP, and gateway patterns",
      "Device provisioning and PKI",
      "Time-series ingestion and rules",
      "Edge preprocessing and offline sync",
      "Digital twin and asset tracking concepts",
      "Integration with existing IT/OT",
      "Field diagnostics and log pipelines",
    ],
    technologies: [
      { name: "Embedded", items: ["C/C++", "FreeRTOS", "Zephyr"] },
      { name: "Protocols", items: ["MQTT", "BLE", "LoRaWAN", "Modbus"] },
      { name: "Cloud", items: ["AWS IoT", "Azure IoT", "GCP IoT Core"] },
      { name: "Data", items: ["InfluxDB", "TimescaleDB", "Kafka"] },
    ],
    process: serviceEngagementProcess,
    benefits: [
      "Real-world data from your products",
      "Remote monitoring and support",
      "New revenue via subscriptions or insights",
      "Fewer truck rolls with predictive signals",
      "Security-minded device lifecycle",
    ],
  },
  {
    id: 8,
    title: "Robotic Process Automation (RPA)",
    shortDescription: "Attended and unattended bots for repetitive work",
    heroImage: img("photo-1485827404703-89b55fcc595e"),
    overview:
      "RPA excels at stable, rules-heavy tasks across legacy UIs and systems. We map processes, implement resilient automations, and add logging and exception handling so operations teams stay in control.",
    features: [
      "Process discovery and suitability checks",
      "Attended and unattended automations",
      "Exception queues and human review",
      "Credential vaulting and least privilege",
      "Scheduling, retries, and idempotency",
      "Monitoring and ROI reporting",
      "Documentation and runbooks",
      "Coexistence with API modernization",
    ],
    technologies: [
      { name: "Platforms", items: ["UiPath", "Power Automate", "Automation Anywhere"] },
      { name: "Integrations", items: ["OCR", "Email", "Excel", "SAP", "Salesforce"] },
      { name: "Languages", items: [".NET", "Python", "PowerShell"] },
      { name: "Ops", items: ["Queues", "Logging", "Secrets", "CI/CD"] },
    ],
    process: serviceEngagementProcess,
    benefits: [
      "Hours returned to teams every week",
      "Fewer copy-paste and data entry errors",
      "Audit trails for regulated workflows",
      "Quick wins without replatforming everything",
      "Foundation for broader automation",
    ],
  },
  {
    id: 9,
    title: "Augmented Reality (AR) & Virtual Reality (VR)",
    shortDescription: "Immersive training, visualization, and experiences",
    heroImage: img("photo-1622979135225-d2ba269cf1ac"),
    overview:
      "AR and VR can shorten training time, aid spatial understanding, and create memorable brand moments. We scope device targets (mobile AR, Quest, HoloLens-class) and build experiences that perform within real hardware constraints.",
    features: [
      "3D asset pipelines and optimization",
      "AR on iOS/Android with anchors and tracking",
      "VR training modules and simulations",
      "Multiplayer and session management",
      "Hand tracking and interaction design",
      "Content tooling for non-developers (where needed)",
      "Analytics for engagement and completion",
      "Distribution via stores or enterprise MDM",
    ],
    technologies: [
      { name: "Engines", items: ["Unity", "Unreal Engine"] },
      { name: "AR", items: ["ARKit", "ARCore", "WebXR"] },
      { name: "VR", items: ["OpenXR", "Meta SDK", "SteamVR"] },
      { name: "Backend", items: ["Photon", "PlayFab", "Custom APIs"] },
    ],
    process: serviceEngagementProcess,
    benefits: [
      "Memorable product demos and marketing",
      "Safer, repeatable training environments",
      "Complex ideas shown in 3D space",
      "Differentiation in crowded markets",
      "Roadmap from prototype to rollout",
    ],
  },
  {
    id: 10,
    title: "Game Development",
    shortDescription: "Gameplay, content pipelines, and live operations",
    heroImage: img("photo-1511512578047-dfb367046420"),
    overview:
      "From casual mobile titles to richer PC experiences, we help with core gameplay loops, networking foundations, and the pipelines that keep artists and designers productive. We care about frame budgets, netcode basics, and sustainable update cadence.",
    features: [
      "Core mechanics and progression design",
      "Multiplayer and authoritative server patterns",
      "UI/UX for games and metagame",
      "Content tooling and build automation",
      "Analytics, economy tuning hooks",
      "Platform compliance and certification support",
      "Performance profiling and optimization",
      "LiveOps: patches, events, and moderation hooks",
    ],
    technologies: [
      { name: "Engines", items: ["Unity", "Unreal", "Godot"] },
      { name: "Networking", items: ["Photon", "Mirror", "Custom UDP/TCP"] },
      { name: "Platforms", items: ["Steam", "Mobile stores", "Console ports"] },
      { name: "Art", items: ["Blender", "Substance", "2D pipelines"] },
    ],
    process: serviceEngagementProcess,
    benefits: [
      "Players get responsive, polished sessions",
      "Teams ship updates with less crunch",
      "Scalable architecture for growth",
      "Clear path through platform requirements",
      "Partners who understand game production",
    ],
  },
  {
    id: 11,
    title: "Blockchain Solutions",
    shortDescription: "Smart contracts and dApps when decentralization fits",
    heroImage: img("photo-1639762681485-074b7f938ba0"),
    overview:
      "Blockchain is not a default answer—we apply it where trust minimization, auditability, or programmable settlement genuinely helps. We deliver smart contracts, wallet flows, and indexing layers with security review in mind.",
    features: [
      "Use-case fit and architecture review",
      "Smart contract development and testing",
      "Token standards where appropriate",
      "dApp frontends and wallet connection",
      "Indexing, subgraphs, and APIs",
      "Key management and custody patterns",
      "Testnets to mainnet rollout planning",
      "Ongoing monitoring and upgrades strategy",
    ],
    technologies: [
      { name: "Platforms", items: ["Ethereum L2s", "Polygon", "Solana"] },
      { name: "Languages", items: ["Solidity", "Rust", "Go"] },
      { name: "Tools", items: ["Hardhat", "Foundry", "Web3 libraries"] },
      { name: "Storage", items: ["IPFS", "Arweave", "Hybrid models"] },
    ],
    process: serviceEngagementProcess,
    benefits: [
      "Transparent, automated settlement layers",
      "New models for ownership and access",
      "Audit-friendly on-chain activity",
      "Reduced reliance on central intermediaries",
      "Security-first engineering culture",
    ],
  },
  {
    id: 12,
    title: "Cloud Services",
    shortDescription: "Architecture, migration, and cost-effective scale",
    heroImage: img("photo-1451187580459-43490279c0fa"),
    overview:
      "We design and operate cloud foundations: accounts, networking, identity, data stores, and observability. Whether lifting-and-shifting, refactoring, or building cloud-native, we optimize for reliability, security, and spend.",
    features: [
      "Landing zones and guardrails",
      "Containers, Kubernetes, and serverless",
      "IaC with Terraform or similar",
      "Backup, DR, and multi-region patterns",
      "Cost monitoring and rightsizing",
      "Zero-trust networking and IAM",
      "Migration waves for legacy systems",
      "SRE-style on-call and incident practices",
    ],
    technologies: [
      { name: "Providers", items: ["AWS", "Azure", "Google Cloud"] },
      { name: "IaC", items: ["Terraform", "Pulumi", "CloudFormation"] },
      { name: "Kubernetes", items: ["EKS", "AKS", "GKE", "Helm"] },
      { name: "Observability", items: ["OpenTelemetry", "Prometheus", "Grafana"] },
    ],
    process: serviceEngagementProcess,
    benefits: [
      "Elastic scale without fragile hand-built servers",
      "Stronger security posture by default",
      "Predictable costs with visibility",
      "Faster delivery with automation",
      "Less downtime with tested runbooks",
    ],
  },
  {
    id: 13,
    title: "Cybersecurity",
    shortDescription: "Hardening, assessments, and resilient operations",
    heroImage: img("photo-1563013544-824ae1b704d3"),
    overview:
      "Security is a product of process and architecture. We help you reduce attack surface, detect issues earlier, and respond with clarity—through secure SDLC practices, reviews, and pragmatic tooling.",
    features: [
      "Threat modeling for apps and cloud",
      "Secure coding guidance and reviews",
      "Vulnerability scanning and prioritization",
      "Secrets management and key rotation",
      "SIEM/log pipelines and alerting",
      "Incident response playbooks",
      "Identity hardening (MFA, RBAC)",
      "Vendor and dependency risk review",
    ],
    technologies: [
      { name: "Testing", items: ["SAST/DAST", "Pen test partnerships", "Bug bounty"] },
      { name: "Identity", items: ["OIDC/SAML", "OAuth2", "WAF"] },
      { name: "Monitoring", items: ["SIEM", "EDR concepts", "CSPM"] },
      { name: "Compliance", items: ["ISO-oriented controls", "Data privacy patterns"] },
    ],
    process: serviceEngagementProcess,
    benefits: [
      "Fewer exploitable weaknesses in production",
      "Faster detection and containment",
      "Customer trust and regulatory readiness",
      "Developers ship with security guardrails",
      "Clear ownership for risks and fixes",
    ],
  },
];
