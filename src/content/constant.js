import logo from "../assets/images/logo/logo.png";

import coldCreek from "../assets/images/portfolio/web-development/cold-creekcap.webp";
import thinkReality from "../assets/images/portfolio/web-development/think-reality.webp";
import akashMegaMart from "../assets/images/portfolio/web-development/akash-mega-mart.webp";
import midwam from "../assets/images/portfolio/web-development/midwam.webp";

import akashApp from "../assets/images/portfolio/app-development/akash_mega_mart-app.webp";
import feelitApp from "../assets/images/portfolio/app-development/feelit_app.webp";
import klikomicsApp from "../assets/images/portfolio/app-development/klikomics.webp";
import autosnapApp from "../assets/images/portfolio/app-development/autosnap-app.webp";
import rentopApp from "../assets/images/portfolio/app-development/rentop.webp";

import findMyAIToolImg from "../assets/images/portfolio/ai/find-my-ai-tool.png";
import vyroAIImg from "../assets/images/portfolio/ai/vyro-ai.webp";
import musiclyImg from "../assets/images/portfolio/ai/musicly.webp";

export { logo };

export const companyDetails = {
  phone: "+91-8929733555",
  email: "info@oclainex.com",
  address: "WeWork, Salarpuria Symbiosis, Arekere Village, Bannerghatta Rd, Begur Hobli, Bengaluru, Karnataka",
  facebook: "https://www.facebook.com/share/18TEf7gxth/",
  twitter: "https://x.com/oclainex",
  instagram: "https://www.instagram.com/oclainex?igsh=MXR4bmViNDhhYWozOA==",
  linkedin: "\https://www.linkedin.com/company/114434335/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B9mD%2FMsSRTny%2BYsbnTPJjEA%3D%3D",
};

export const testimonials = [
  {
    id: 1,
    img: require("../assets/images/testimonial/1.jpg"),
    quote: `Oclainex delivered a custom e‑commerce platform with Core Web Vitals–friendly performance, clean SEO structure, and a checkout flow that actually converts. Search visibility and on‑site engagement improved within the first quarter, and their team stayed transparent on timelines and trade‑offs.`,
    position: "CEO, Tech Innovators",
    author: "Sruthi M.",
  },
  {
    id: 2,
    img: require("../assets/images/testimonial/2.jpg"),
    quote: `We needed a cross‑platform mobile app with polished UI/UX and reliable offline behaviour. Oclainex mapped user journeys, shipped on a predictable sprint cadence, and helped us meet store guidelines—downloads and session length are both up materially since launch.`,
    position: "Marketing Director, Green Energy Solutions",
    author: "Rahul K.",
  },
  {
    id: 3,
    img: require("../assets/images/testimonial/3.jpg"),
    quote: `Their AI consulting moved us from pilots to production: document classification, routing, and monitoring are now automated with clear accuracy metrics. We reduced manual review time without sacrificing auditability—exactly what we needed from an enterprise AI partner.`,
    position: "Founder, HealthTech Innovators",
    author: "Amit Singh",
  },
  {
    id: 4,
    img: require("../assets/images/testimonial/4.jpg"),
    quote: `Oclainex built our analytics layer end‑to‑end—trusted metrics definitions, dashboards, and scheduled reports our leadership actually uses. Decision latency dropped because everyone points to the same numbers, backed by documented data lineage.`,
    position: "Chief Data Officer, FinCorp Analytics",
    author: "Raveendar S.",
  },
  {
    id: 5,
    img: require("../assets/images/testimonial/5.jpg"),
    quote: `For our EdTech rollout, they combined mobile app development with accessible UI patterns and solid analytics hooks. Students find the experience intuitive; we can measure feature adoption and iterate—great collaboration from discovery through app store release.`,
    position: "Co-Founder, EduTech Solutions",
    author: "Siddharth",
  },
];

// faq
export const faqs = [
  {
    id: 1,
    question: "What services does your company offer?",
    answer:
      "Oclainex delivers end‑to‑end technology services: artificial intelligence (AI), mobile app development, website development, UI/UX design, custom software development, data analytics, IoT, RPA, AR/VR, game development, blockchain solutions, cloud services, and cybersecurity—implemented with performance, security, and measurable outcomes in mind.",
  },
  {
    id: 2,
    question: "How does your process ensure success?",
    answer:
      "We run a structured delivery model: discovery and solution design, iterative build with demos, quality and security gates, launch support, and post‑go‑live optimization. Each phase ties to agreed success metrics so scope, risk, and ROI stay visible—not a black box.",
  },
  {
    id: 3,
    question: "What makes your web development services unique?",
    answer:
      "Our website development practice blends technical SEO foundations (semantic HTML, speed, structured data where appropriate), responsive UI, and scalable architecture—whether you need a marketing site, SaaS front end, or a complex web application integrated with APIs.",
  },
  {
    id: 4,
    question: "Can you assist with artificial intelligence development?",
    answer:
      "Yes. We design and ship practical AI: ML models, NLP and document automation, recommendation and ranking systems, and MLOps patterns for monitoring and retraining—always aligned to privacy, governance, and your existing data estate.",
  },
  {
    id: 5,
    question: "Do you offer mobile app development?",
    answer:
      "We build native and cross‑platform mobile applications for iOS and Android with store‑ready releases, analytics instrumentation, and UX tuned for retention. Engagements typically span product discovery, UI/UX, engineering, QA, and deployment.",
  },
  {
    id: 6,
    question:
      "What are your data analytics and business intelligence services?",
    answer:
      "We implement analytics engineering, dashboards, self‑serve reporting, and pipeline reliability—so KPIs are consistent, trusted, and fast. Expect SQL/ELT patterns, BI tooling, and cloud warehouse best practices suited to your stack.",
  },
  {
    id: 7,
    question:
      "How can your blockchain development services benefit my business?",
    answer:
      "We apply blockchain and smart contracts where decentralization or auditability truly helps—tokens, dApps, integrations, and secure wallet flows—after a clear fit assessment so you avoid unnecessary complexity or cost.",
  },
];

// why work with us
export const whyworkwithus = [
  {
    id: 1,
    img: require("../assets/images/why work with us/1.webp"),
    title: "Customized Solutions",
    description:
      "Roadmaps, architecture, and UX are shaped around your market, compliance context, and KPIs—not generic templates—so every release moves a specific business needle.",
  },
  {
    id: 2,
    img: require("../assets/images/why work with us/2.webp"),
    title: "Expert Professionals",
    description:
      "Senior engineers, designers, and cloud practitioners collaborate across web, mobile, AI, data, and security so you get depth without hand‑offs that slow delivery.",
  },
  {
    id: 3,
    img: require("../assets/images/why work with us/3.webp"),
    title: "Innovative Technologies",
    description:
      "We adopt proven modern stacks (cloud‑native, API‑first, observability, automation) where they reduce risk and time‑to‑value—not hype for its own sake.",
  },
  {
    id: 4,
    img: require("../assets/images/why work with us/4.webp"),
    title: "Client-Focused Approach",
    description:
      "Transparent communication, documented decisions, and demos you can share internally keep stakeholders aligned from sprint zero to production.",
  },
  {
    id: 5,
    img: require("../assets/images/why work with us/5.webp"),
    title: "Future-Ready Solutions",
    description:
      "We design for extension—modular services, clean contracts, and operability—so new channels, regions, or product lines do not force a rewrite.",
  },
];

// core values
export const coreValues = [
  {
    title: "Pioneering Progress",
    desc: "We test emerging patterns in AI, cloud, and product engineering in controlled pilots, then productionize what proves durable—so clients gain an edge without betting the business on unproven stacks.",
  },
  {
    title: "Empowerment Through Intelligence",
    desc: "Automation, analytics, and AI should amplify people. We embed observability, access controls, and explainability appropriate to your domain so intelligent systems stay accountable and auditable.",
  },
  {
    title: "Integrity and Trust",
    desc: "Clear scopes, honest trade‑offs, and direct communication build partnerships that last longer than any single release. We treat your roadmap and data with the same seriousness you do.",
  },
  {
    title: "Adaptability and Agility",
    desc: "Markets shift; architectures should bend, not break. We prefer incremental delivery, feature flags, and modular boundaries so teams can respond to feedback without gridlock.",
  },
  {
    title: "Excellence in Execution",
    desc: "Definition of done includes performance budgets, accessibility checks, and operational readiness—not only “works on my machine.” Craft and reliability ship together.",
  },
  {
    title: "Security-First Mindset",
    desc: "Threat modeling, least privilege, dependency hygiene, and secure SDLC practices are defaults. Security is designed in—from APIs and mobile clients to cloud landing zones.",
  },
  {
    title: "Collaboration and Synergy",
    desc: "Shared Slack or Teams channels, living documentation, and regular demos keep your product, engineering, and Oclainex specialists moving as one team.",
  },
  {
    title: "Future-Forward Vision",
    desc: "We align technical choices with a 12–36 month horizon: interoperability, vendor posture, and total cost of ownership—so today’s build does not become tomorrow’s dead end.",
  },
  {
    title: "Sustainable Innovation",
    desc: "Efficient workloads, thoughtful cloud usage, and inclusive design reduce waste—digital, economic, and human—while still shipping ambitious products.",
  },
];

// Portfolio (web, app, AI) — single source; links optional for future CTAs
export const allProjects = [
  {
    id: 2,
    title: "Cold Creekcap",
    image: coldCreek,
    link: "https://www.coldcreekcap.com",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Think Reality",
    image: thinkReality,
    link: "https://thinkrealty.ae",
    category: "Web Development",
  },
  {
    id: 4,
    title: "Akash Mega Mart",
    image: akashMegaMart,
    link: "https://akashmegamart.com/",
    category: "Web Development",
  },
  {
    id: 5,
    title: "Midwam – Immersive Experience Design Company",
    image: midwam,
    link: "https://www.midwam.com/en/about",
    category: "Web Development",
  },
  {
    id: 6,
    title: "Akash Mega Mart Mobile App",
    image: akashApp,
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
    category: "App Development",
  },
  {
    id: 7,
    title: "FeelIt Mobile App",
    image: feelitApp,
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
    category: "App Development",
  },
  {
    id: 8,
    title: "Klikomics Mobile App",
    image: klikomicsApp,
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
    category: "App Development",
  },
  {
    id: 9,
    title: "AutoSnap Mobile App",
    image: autosnapApp,
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
    category: "App Development",
  },
  {
    id: 10,
    title: "Rentop Bike and Car",
    image: rentopApp,
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
    category: "App Development",
  },
  {
    id: 11,
    title: "Find My AI Tool",
    image: findMyAIToolImg,
    link: "https://findmyaitool.com",
    category: "AI Development",
  },
  {
    id: 12,
    title: "AI Art Generator – Vyro AI",
    image: vyroAIImg,
    link: "https://vyro.ai",
    category: "AI Development",
  },
  {
    id: 13,
    title: "Musicly – AI Music Generator",
    image: musiclyImg,
    link: "https://musicly.ai",
    category: "AI Development",
  },
];

export const webDevelopmentPortfolio = allProjects.filter(
  (p) => p.category === "Web Development"
);

export const appDevelopmentPortfolio = allProjects.filter(
  (p) => p.category === "App Development"
);

export const aiDevelopmentPortfolio = allProjects.filter(
  (p) => p.category === "AI Development"
);
