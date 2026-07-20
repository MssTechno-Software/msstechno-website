
const INDUSTRIES_DATA = [
  {
    id: "ind-1",
    title: "Healthcare",
    description:
      "Advancing patient care through precision AI diagnostics and secure health data systems.",
    iconName: "Activity",
  },
  {
    id: "ind-2",
    title: "Finance",
    description:
      "Secure, high-frequency infrastructure for modern banking and decentralized finance.",
    iconName: "Landmark",
  },
  {
    id: "ind-3",
    title: "Retail",
    description:
      "Unified commerce experiences powered by real-time inventory and predictive analytics.",
    iconName: "ShoppingBag",
  },
  {
    id: "ind-4",
    title: "Education",
    description:
      "Next-generation LMS and remote learning tools that personalize student journeys.",
    iconName: "GraduationCap",
  },
  {
    id: "ind-5",
    title: "Manufacturing",
    description:
      "Optimizing supply chains with IoT-driven insight and predictive maintenance models.",
    iconName: "Factory",
  },
  {
    id: "ind-6",
    title: "Logistics",
    description:
      "Global tracking and autonomous dispatch systems for zero-friction movement.",
    iconName: "Truck",
  },
];

const WHY_US_DATA = [
  {
    id: "why-1",
    title: "Innovation",
    description:
      "Building future-ready software using modern technologies and AI-driven solutions.",
    iconName: "Zap",
    tags: ["AI-First", "Predictive", "R&D Lab", "Smart Auto"],
  },
  {
    id: "why-2",
    title: "Expert Team",
    description:
      "Highly skilled engineers delivering enterprise-grade software with centuries of combined experience.",
    iconName: "Users",
  },
  {
    id: "why-3",
    title: "Agile Delivery",
    description:
      "Fast, transparent and customer-focused development cycles that ensure your product hits the market sooner.",
    iconName: "Rocket",
  },
  {
    id: "why-4",
    title: "Latest Tech",
    description:
      "Modern AI, Cloud, DevOps and scalable architectures built on the world's most stable stacks.",
    iconName: "Cpu",
  },
  {
    id: "why-5",
    title: "Scalable Solutions",
    description:
      "Applications designed to grow with your business, supporting millions of users without missing a beat.",
    iconName: "BarChart3",
  },
  {
    id: "why-6",
    title: "24/7 Support & Partnership",
    description:
      "Reliable long-term partnership with continuous maintenance, monitoring and technical support. We act as an extension of your own team, ensuring your critical systems are always operational and optimized.",
    iconName: "Headphones",
  },
];

const SOLUTIONS_DATA = [
  {
    id: "sol-1",
    title: "AI Solutions",
    description:
      "Intelligent automation and cognitive computing to transform raw data into a strategic business advantage.",
    iconName: "BrainCircuit",
  },
  {
    id: "sol-2",
    title: "Enterprise Dev",
    description:
      "Custom-engineered software architectures designed for maximum scalability, security, and performance.",
    iconName: "Terminal",
  },
  {
    id: "sol-3",
    title: "Web Experiences",
    description:
      "Next-generation digital interfaces that combine cinematic visual storytelling with technical precision.",
    iconName: "Globe",
  },
  {
    id: "sol-4",
    title: "Mobile Systems",
    description:
      "Seamless native applications that leverage device hardware to deliver frictionless user engagement.",
    iconName: "Smartphone",
  },
  {
    id: "sol-5",
    title: "Cloud Foundry",
    description:
      "Distributed infrastructure and cloud-native services that power global operations with zero downtime.",
    iconName: "Cloud",
  },
  {
  id: "sol-6",
  title: "Backend API Development",
  description:
  "Design and develop robust backend APIs with secure authentication, high availability, and seamless third-party integrations.",
  iconName: "Server",
},
];

const ABOUT_FEATURES = [
  {
    id: "about-feat-1",
    title: "Enterprise Software",
    description:
      "Robust architecture designed to scale with your organization's growing complexities.",
    iconName: "Landmark",
  },
  {
    id: "about-feat-2",
    title: "AI & Automation",
    description:
      "Injecting intelligence into workflows to eliminate repetitive tasks and unlock insights.",
    iconName: "BrainCircuit",
  },
  {
    id: "about-feat-3",
    title: "Cloud & DevOps",
    description:
      "Continuous delivery pipelines and cloud-native strategies for 99.9% uptime.",
    iconName: "Cloud",
  },
  {
    id: "about-feat-4",
    title: "UI/UX Excellence",
    description:
      "Human-centric design that balances aesthetic beauty with functional efficiency.",
    iconName: "Layout",
  },
];

const ABOUT_STATS = [
  {
    id: "astat-1",
    value: "10+",
    label: "Years Experience",
    sublabel: "",
    iconName: "Activity",
  },
  {
    id: "astat-2",
    value: "500+",
    label: "Projects Delivered",
    sublabel: "",
    iconName: "Rocket",
  },
  {
    id: "astat-3",
    value: "50+",
    label: "Core Experts",
    sublabel: "",
    iconName: "Users",
  },
  {
    id: "astat-4",
    value: "12+",
    label: "Countries Reached",
    sublabel: "",
    iconName: "Globe",
  },
];

const PROCESS_STEPS = [
  {
    id: "step-1",
    num: "01",
    title: "Discover",
    description:
      "Deep immersion into your ecosystem and goals.",
    iconName: "Search",
  },
  {
    id: "step-2",
    num: "02",
    title: "Plan",
    description:
      "Strategic roadmapping and technical architecture.",
    iconName: "Compass",
  },
  {
    id: "step-3",
    num: "03",
    title: "Design",
    description:
      "Crafting immersive and intuitive human experiences.",
    iconName: "Paintbrush",
  },
  {
    id: "step-4",
    num: "04",
    title: "Develop",
    description:
      "Precision coding with scalable technologies.",
    iconName: "Code",
  },
  {
    id: "step-5",
    num: "05",
    title: "Test",
    description:
      "Rigorous quality assurance and security audits.",
    iconName: "CheckCircle2",
  },
  {
    id: "step-6",
    num: "06",
    title: "Deploy",
    description:
      "Seamless integration and global orchestration.",
    iconName: "Rocket",
  },
  {
    id: "step-7",
    num: "07",
    title: "Support",
    description:
      "24/7 technical oversight and adaptive growth.",
    iconName: "Headphones",
  },
];


const CASE_STUDIES = [
  {
    id: "case-1",
    title: "AI-Powered Enterprise Automation",
    category: "Artificial Intelligence",
    type: "Enterprise AI",
    description:
      "A scalable AI-powered digital ecosystem designed to automate complex business workflows, improve operational visibility, and accelerate enterprise decision-making.",
    metrics: "40% Faster Operations",
    imageUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=90",
    tags: [
      "Artificial Intelligence",
      "React",
      "Cloud",
    ],
  },
  {
    id: "case-2",
    title: "Cloud Infrastructure Modernization",
    category: "Cloud Solutions",
    type: "Cloud Transformation",
    description:
      "Modernized legacy infrastructure with a secure cloud-native architecture designed for scalability, reliability, and improved application performance.",
    metrics: "65% Faster Deployment",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=90",
    tags: ["AWS", "Cloud", "DevOps"],
  },
  {
    id: "case-3",
    title: "Digital Healthcare Experience",
    category: "Healthcare",
    type: "Digital Platform",
    description:
      "A modern healthcare platform focused on creating seamless patient experiences, secure digital workflows, and real-time operational insights.",
    metrics: "3X User Engagement",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=90",
    tags: ["Healthcare", "UI/UX", "Analytics"],
  },
];

export {
  INDUSTRIES_DATA,
  WHY_US_DATA,
  SOLUTIONS_DATA,
  ABOUT_FEATURES,
  ABOUT_STATS,
  PROCESS_STEPS,
  CASE_STUDIES,
};

