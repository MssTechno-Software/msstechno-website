// src/data/servicesData.js

export const servicesData = {
  "website-development": {
    id: "serv-01",
    slug: "website-development",
    title: "Website Development",
    shortDescription: "Enterprise-grade web architectures, micro-frontends, and high-load web applications engineered for sub-second latency and zero-trust security.",
    category: "Web Engineering",
    icon: "Globe2",
    defaultBenefits: [
      {
        title: "Sub-Second Latency & Edge Caching",
        description: "Architected with modern server-side rendering, edge routing, and optimized DOM serialization to ensure instantaneous page loads and superior Core Web Vitals."
      },
      {
        title: "Zero-Trust Security & Compliance",
        description: "Built-in protection against OWASP Top 10 vulnerabilities, strict Content Security Policies (CSP), secure JWT/OAuth2 pipelines, and encrypted data transmission."
      },
      {
        title: "Micro-Frontend Modularity",
        description: "Decoupled frontend architectures that allow enterprise teams to develop, test, and deploy feature modules independently without monolithic bottlenecks."
      },
      {
        title: "AI-Integrated Workflows",
        description: "Seamless embedding of conversational AI agents, semantic search pipelines, and real-time operational telemetry into web interfaces."
      }
    ],
    defaultTechStack: [
      { name: "React 19", category: "Frontend Core" },
      { name: "Next.js / Vite", category: "Framework & SSR" },
      { name: "Python / FastAPI", category: "Backend Microservices" },
      { name: "Node.js / NestJS", category: "Enterprise API Gateway" },
      { name: "AWS / Azure Cloud", category: "Cloud Infrastructure" },
      { name: "PostgreSQL / Redis", category: "Database & Caching" }
    ],
    defaultProcess: [
      {
        step: "01",
        title: "Architecture Audit & Ecosystem Mapping",
        description: "Comprehensive technical evaluation of legacy web infrastructure, database bottlenecks, and data flow requirements to establish a scalable architectural blueprint."
      },
      {
        step: "02",
        title: "High-Fidelity Prototyping & API Contracts",
        description: "Design of interactive wireframes, component libraries, and OpenAPI specifications defining secure client-server communication."
      },
      {
        step: "03",
        title: "Agile Engineering & CI/CD Sprints",
        description: "Sprint-based frontend and backend execution with automated unit testing, static code analysis, and continuous security scanning."
      },
      {
        step: "04",
        title: "Edge Deployment & DevOps Handover",
        description: "Multi-region cloud deployment featuring automated SSL provisioning, edge CDN configuration, and complete SRE telemetry handover."
      }
    ],
    industriesServed: [
      "FinTech & Financial Services",
      "Healthcare & Life Sciences",
      "Logistics & Supply Chain",
      "E-Commerce & Retail Systems",
      "Enterprise SaaS & IT"
    ],
    technologies: [
      "React 19",
      "Next.js",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "FastAPI",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS CloudFront"
    ],
    defaultCTA: {
      title: "Ready to Architect Your Enterprise Web Platform?",
      subtitle: "Connect with our senior engineering architects to evaluate your technical requirements and define a high-performance roadmap.",
      buttonText: "Schedule Technical Consultation"
    }
  },

  "custom-software-development": {
    id: "serv-02",
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDescription: "Bespoke domain software, distributed microservices, and high-throughput transaction engines built around complex enterprise workflows.",
    category: "Enterprise Engineering",
    icon: "Code2",
    defaultBenefits: [
      {
        title: "Domain-Driven Custom Architecture",
        description: "Bespoke business logic and distributed data schemas engineered specifically around your organizational workflows and governance rules."
      },
      {
        title: "Legacy Monolith Decoupling",
        description: "Strangler-fig migration patterns and API wrapper layers that modernize legacy ERPs and core systems without operational downtime."
      },
      {
        title: "High-Throughput Data Pipelines",
        description: "Event-driven messaging queues and optimized database indexing engineered to process millions of secure transactions daily."
      },
      {
        title: "100% Intellectual Property Ownership",
        description: "Complete codebase transfer, clean repository architecture, automated build pipelines, and transparent licensing upon deployment."
      }
    ],
    defaultTechStack: [
      { name: "Python / Django", category: "Core Backend" },
      { name: "React / TypeScript", category: "Enterprise UI" },
      { name: "Apache Kafka", category: "Event Streaming" },
      { name: "Docker & Kubernetes", category: "Containerization" },
      { name: "PostgreSQL / MongoDB", category: "Multi-Model Data" },
      { name: "AWS / GCP Infrastructure", category: "Cloud Platform" }
    ],
    defaultProcess: [
      {
        step: "01",
        title: "Domain Discovery & Rules Modeling",
        description: "Intensive discovery sessions with stakeholders to map business rules, state machines, and data compliance constraints."
      },
      {
        step: "02",
        title: "Microservices Boundary Specification",
        description: "Drafting bounded contexts, database entity-relationship models, and asynchronous messaging schemas."
      },
      {
        step: "03",
        title: "Test-Driven Development Sprints",
        description: "Iterative software engineering sprints featuring 90%+ automated code coverage, static security analysis, and integration testing."
      },
      {
        step: "04",
        title: "Zero-Downtime Release & SLA Support",
        description: "Blue-green production deployments, distributed tracing setup, and dedicated post-launch maintenance SLAs."
      }
    ],
    industriesServed: [
      "Banking & FinTech",
      "Manufacturing & Industry 4.0",
      "Logistics & Fleet Management",
      "Pharmaceuticals & Healthcare",
      "Telecommunications"
    ],
    technologies: [
      "Python",
      "Django",
      "Go (Golang)",
      "TypeScript",
      "React",
      "Apache Kafka",
      "RabbitMQ",
      "PostgreSQL",
      "MongoDB",
      "Kubernetes",
      "Terraform",
      "OpenTelemetry"
    ],
    defaultCTA: {
      title: "Architect Bespoke Software for Your Complex Workflows",
      subtitle: "Speak directly with our principal software engineers to design a custom architecture tailored to your operational demands.",
      buttonText: "Request Architecture Review"
    }
  },

  "mobile-app-development": {
    id: "serv-03",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "High-performance native and cross-platform mobile applications engineered for offline resilience, biometric security, and enterprise scalability.",
    category: "Mobile Engineering",
    icon: "Smartphone",
    defaultBenefits: [
      {
        title: "Native & Cross-Platform Excellence",
        description: "Single-codebase cross-platform builds or pure native iOS/Android engines optimized for 60 FPS rendering and minimal battery drain."
      },
      {
        title: "Offline-First Data Synchronization",
        description: "Embedded local database caching and conflict-free replicated data types (CRDTs) ensuring uninterrupted field operations."
      },
      {
        title: "Enterprise Biometric & Hardware Security",
        description: "Integration of Secure Enclave biometric authentication, hardware-backed token storage, and root/jailbreak detection."
      },
      {
        title: "Low-Latency IoT & BLE Connectivity",
        description: "Robust communication layers engineered to interface with Bluetooth Low Energy (BLE) sensors, POS hardware, and industrial telemetry."
      }
    ],
    defaultTechStack: [
      { name: "React Native / Flutter", category: "Cross-Platform" },
      { name: "Swift / SwiftUI", category: "Native iOS" },
      { name: "Kotlin / Jetpack Compose", category: "Native Android" },
      { name: "SQLite / Realm", category: "Local Persistence" },
      { name: "Firebase / Supabase", category: "Realtime Sync" },
      { name: "Node.js API Layer", category: "Backend Gateway" }
    ],
    defaultProcess: [
      {
        step: "01",
        title: "Mobile UX/UI & Hardware Auditing",
        description: "Analyzing user personas, hardware constraints, and peripheral integration requirements to establish a responsive mobile blueprint."
      },
      {
        step: "02",
        title: "Interactive Prototyping & Security Design",
        description: "Developing clickable high-fidelity prototypes while designing secure mobile token management and offline sync schemas."
      },
      {
        step: "03",
        title: "Agile Mobile Sprints & QA Test Automation",
        description: "Executing iterative builds across real-device farms with automated UI testing, memory leak profiling, and network simulation."
      },
      {
        step: "04",
        title: "App Store Deployment & MDM Distribution",
        description: "Managing Apple App Store and Google Play compliance, or deploying via private Enterprise Mobile Device Management (MDM) platforms."
      }
    ],
    industriesServed: [
      "Field Operations & Energy",
      "Healthcare & Patient Telemedicine",
      "FinTech & Mobile Banking",
      "Logistics & Last-Mile Delivery",
      "Retail & Quick Commerce"
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "TypeScript",
      "SQLite",
      "Realm",
      "WebSockets",
      "BLE API",
      "Secure Enclave",
      "Fastlane",
      "Appium"
    ],
    defaultCTA: {
      title: "Deploy High-Performance Mobile Experiences",
      subtitle: "Partner with our mobile architects to engineer secure, resilient applications for iOS, Android, and enterprise field teams.",
      buttonText: "Schedule Mobile Discovery"
    }
  },

  "ai-development": {
    id: "serv-04",
    slug: "ai-development",
    title: "AI Development",
    shortDescription: "Custom Generative AI models, enterprise RAG pipelines, conversational agents, and machine learning inference engines designed for production scale.",
    category: "Artificial Intelligence",
    icon: "BrainCircuit",
    defaultBenefits: [
      {
        title: "Enterprise RAG & Domain Fine-Tuning",
        description: "Retrieval-Augmented Generation architectures that ground LLMs in your private enterprise documentation with zero hallucinations."
      },
      {
        title: "Private AI & Data Sovereignty",
        description: "On-premise or dedicated VPC model deployments that guarantee your proprietary training data is never exposed to public foundation models."
      },
      {
        title: "Optimized Inference & Low-Latency AI",
        description: "TensorRT and ONNX model quantization that reduces token inference latency and compute infrastructure costs."
      },
      {
        title: "Autonomous Agentic Workflows",
        description: "Multi-agent systems engineered to execute complex multi-step enterprise workflows, data synthesis, and system integrations."
      }
    ],
    defaultTechStack: [
      { name: "PyTorch / TensorFlow", category: "ML Frameworks" },
      { name: "LangChain / LlamaIndex", category: "Orchestration" },
      { name: "Pinecone / pgvector", category: "Vector Database" },
      { name: "OpenAI / Anthropic APIs", category: "Foundation Models" },
      { name: "Hugging Face / vLLM", category: "Open-Source Models" },
      { name: "Python / FastAPI", category: "Inference Server" }
    ],
    defaultProcess: [
      {
        step: "01",
        title: "AI Readiness & Data Pipeline Assessment",
        description: "Auditing organizational datasets, security governance, and computational infrastructure to identify high-ROI AI use cases."
      },
      {
        step: "02",
        title: "Data Structuring & Vector Embedding Design",
        description: "Cleaning unstructured text, engineering semantic chunking pipelines, and building optimized vector index schemas."
      },
      {
        step: "03",
        title: "Model Fine-Tuning & Evaluation Sprints",
        description: "Iterative model training, RAG evaluation benchmarking (Ragas), prompt engineering, and automated regression testing."
      },
      {
        step: "04",
        title: "Production Deployment & Guardrail Setup",
        description: "Deploying quantized inference endpoints with strict input/output safety guardrails, rate limiting, and observability."
      }
    ],
    industriesServed: [
      "Financial Legal & Compliance",
      "Healthcare Diagnostics & NLP",
      "Enterprise Customer Experience",
      "Supply Chain Predictive AI",
      "SaaS Productivity Tools"
    ],
    technologies: [
      "PyTorch",
      "TensorFlow",
      "Python",
      "LangChain",
      "LlamaIndex",
      "vLLM",
      "Hugging Face",
      "Pinecone",
      "pgvector",
      "ONNX",
      "Docker",
      "Kubernetes"
    ],
    defaultCTA: {
      title: "Embed Intelligence Into Your Enterprise Core",
      subtitle: "Consult our AI architects to design secure, proprietary Generative AI and ML pipelines that drive quantifiable operational ROI.",
      buttonText: "Schedule AI Consultation"
    }
  },

  "cloud-services": {
    id: "serv-05",
    slug: "cloud-services",
    title: "Cloud Services",
    shortDescription: "Cloud-native infrastructure architecture, multi-cloud migrations, serverless engineering, and FinOps optimization across AWS, Azure, and GCP.",
    category: "Cloud & Infrastructure",
    icon: "Cloud",
    defaultBenefits: [
      {
        title: "High-Availability Multi-Region Topologies",
        description: "Cloud architectures engineered with active-active failover, automated DNS routing, and 99.999% SLA availability targets."
      },
      {
        title: "Infrastructure as Code (IaC) Standardization",
        description: "Complete infrastructure provisioning automated via Terraform and Pulumi for repeatable, auditable environment deployments."
      },
      {
        title: "Continuous Cloud FinOps & Cost Optimization",
        description: "Right-sizing compute resources, spot instance automation, and storage lifecycle management to cut monthly cloud spend by up to 40%."
      },
      {
        title: "Enterprise CSPM & Zero-Trust Architecture",
        description: "Cloud Security Posture Management (CSPM), automated compliance auditing, and granular IAM role engineering."
      }
    ],
    defaultTechStack: [
      { name: "AWS / Azure / GCP", category: "Cloud Providers" },
      { name: "Terraform / OpenTofu", category: "IaC Engine" },
      { name: "Kubernetes (EKS/AKS)", category: "Orchestration" },
      { name: "Docker / Podman", category: "Containers" },
      { name: "AWS Lambda / CloudFunctions", category: "Serverless" },
      { name: "Prometheus / Grafana", category: "Observability" }
    ],
    defaultProcess: [
      {
        step: "01",
        title: "Cloud Maturity & Workload Assessment",
        description: "Analyzing existing server utilization, network dependencies, and compliance risks to define a structured migration strategy."
      },
      {
        step: "02",
        title: "Target Cloud Blueprint & IaC Scripting",
        description: "Architecting Virtual Private Clouds (VPCs), subnet routing, and security groups codified entirely in Terraform."
      },
      {
        step: "03",
        title: "Zero-Downtime Migration Sprints",
        description: "Executing database replication, container orchestration setup, and workload migration with continuous validation."
      },
      {
        step: "04",
        title: "SRE Handover & FinOps Governance",
        description: "Implementing automated backup policies, anomaly detection alarms, and cost allocation tags for ongoing cloud governance."
      }
    ],
    industriesServed: [
      "High-Growth Technology Enterprises",
      "Financial Institutions & Banking",
      "Healthcare Cloud Infrastructure",
      "E-Commerce & High-Traffic Retail",
      "Media & Streaming Services"
    ],
    technologies: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Terraform",
      "Kubernetes",
      "Docker",
      "AWS Lambda",
      "Amazon RDS",
      "Cloudflare",
      "Helm",
      "Ansible",
      "OpenTelemetry"
    ],
    defaultCTA: {
      title: "Scale Your Cloud Infrastructure Without Friction",
      subtitle: "Work with our certified cloud architects to migrate, optimize, and secure your enterprise workloads on AWS, Azure, or GCP.",
      buttonText: "Schedule Cloud Discovery"
    }
  },

  "ui-ux-design": {
    id: "serv-06",
    slug: "ui-ux-design",
    title: "UI UX Design",
    shortDescription: "Human-centered enterprise interface design, WCAG-compliant design systems, and high-fidelity interactive prototypes for complex digital ecosystems.",
    category: "Design & UX",
    icon: "Sparkles",
    defaultBenefits: [
      {
        title: "Standardized Enterprise Design Systems",
        description: "Scalable component libraries and atomic design tokens in Figma that bridge the gap between product design and frontend engineering."
      },
      {
        title: "WCAG 2.2 AA Accessibility Compliance",
        description: "Rigorous accessibility engineering ensuring interfaces are fully operable via screen readers, keyboard navigation, and high-contrast modes."
      },
      {
        title: "Data-Dense Industrial UX Engineering",
        description: "Specialized interface design for complex enterprise dashboards, SCADA monitoring tools, and multi-step transaction workflows."
      },
      {
        title: "Rapid High-Fidelity Prototyping",
        description: "Interactive, clickable prototypes that validate user journeys and stakeholder requirements before engineering sprints begin."
      }
    ],
    defaultTechStack: [
      { name: "Figma / FigJam", category: "Core Design System" },
      { name: "Adobe Creative Cloud", category: "Visual Assets" },
      { name: "Storybook", category: "Component Registry" },
      { name: "Tailwind CSS Tokens", category: "Design Tokens" },
      { name: "Zeroheight", category: "Documentation" },
      { name: "Maze / Hotjar", category: "UX Testing" }
    ],
    defaultProcess: [
      {
        step: "01",
        title: "User Research & Heuristic Evaluation",
        description: "Conducting user interviews, workflow shadow sessions, and heuristic usability audits on existing software applications."
      },
      {
        step: "02",
        title: "Information Architecture & Wireframing",
        description: "Structuring intuitive navigation hierarchies, user flow diagrams, and low-fidelity wireframes for complex workflows."
      },
      {
        step: "03",
        title: "Design System & High-Fidelity Prototyping",
        description: "Crafting atomic UI components, visual tokens, and interactive Figma prototypes tested against accessibility standards."
      },
      {
        step: "04",
        title: "Developer Handover & QA Review",
        description: "Providing annotated design specs, CSS token exports, and conducting visual regression reviews during frontend builds."
      }
    ],
    industriesServed: [
      "Enterprise FinTech & Banking UX",
      "Healthcare EHR & Patient Portals",
      "Industrial Automation & SCADA",
      "B2B Enterprise SaaS Applications",
      "Logistics & Dispatch Software"
    ],
    technologies: [
      "Figma",
      "FigJam",
      "Adobe Illustrator",
      "Storybook",
      "Tailwind CSS",
      "CSS Variables",
      "Zeroheight",
      "Maze",
      "Lottie Animations",
      "WCAG Auditing Tools"
    ],
    defaultCTA: {
      title: "Transform Complex Software Into Intuitive Experiences",
      subtitle: "Connect with our lead product designers to audit your existing user interfaces and build a scalable enterprise design system.",
      buttonText: "Schedule UX Consultation"
    }
  },

  "qa-testing": {
    id: "serv-07",
    slug: "qa-testing",
    title: "QA Testing",
    shortDescription: "Automated regression suites, end-to-end user journey validation, load stress testing, and continuous security penetration testing for software systems.",
    category: "Quality Assurance",
    icon: "ShieldCheck",
    defaultBenefits: [
      {
        title: "CI/CD Integrated Test Automation",
        description: "End-to-end automation suites powered by Playwright and Selenium embedded directly into deployment pipelines for rapid regression validation."
      },
      {
        title: "High-Concurrency Load & Stress Testing",
        description: "Simulating tens of thousands of concurrent users using k6 and JMeter to identify server bottlenecks and database deadlocks."
      },
      {
        title: "Continuous Security Penetration Testing",
        description: "Automated SAST/DAST security scanning combined with manual penetration testing to uncover zero-day vulnerabilities."
      },
      {
        title: "Comprehensive API & Contract Testing",
        description: "Automated validation of REST, GraphQL, and gRPC endpoints ensuring backward compatibility and strict schema adherence."
      }
    ],
    defaultTechStack: [
      { name: "Playwright / Cypress", category: "E2E Automation" },
      { name: "Selenium / Appium", category: "Cross-Device Testing" },
      { name: "k6 / Apache JMeter", category: "Performance / Load" },
      { name: "Postman / RestAssured", category: "API Automation" },
      { name: "SonarQube / OWASP ZAP", category: "Security QA" },
      { name: "TestRail / Allure", category: "Test Management" }
    ],
    defaultProcess: [
      {
        step: "01",
        title: "QA Strategy & Risk Coverage Analysis",
        description: "Evaluating software architecture, high-risk user journeys, and compliance requirements to establish an automated test matrix."
      },
      {
        step: "02",
        title: "Test Framework Design & Scripting",
        description: "Engineering modular, reusable automation frameworks for frontend, backend, and API automation."
      },
      {
        step: "03",
        title: "Pipeline Integration & Execution Sprints",
        description: "Embedding automation suites into CI/CD build servers, executing load benchmarks, and conducting manual exploratory QA."
      },
      {
        step: "04",
        title: "Defect Triage & Quality Sign-Off",
        description: "Delivering detailed execution telemetry, security remediation reports, and SLA-backed production release certification."
      }
    ],
    industriesServed: [
      "Mission-Critical Banking & FinTech",
      "Healthcare Medical Device Software",
      "High-Traffic E-Commerce Platforms",
      "Enterprise B2B Software Platforms",
      "Aviation & Defense Software"
    ],
    technologies: [
      "Playwright",
      "Cypress",
      "Selenium",
      "Appium",
      "k6",
      "JMeter",
      "Postman",
      "Jest",
      "PyTest",
      "SonarQube",
      "OWASP ZAP",
      "GitHub Actions QA"
    ],
    defaultCTA: {
      title: "Guarantee Software Reliability & Zero Defect Releases",
      subtitle: "Partner with our QA architects to implement automated regression testing and high-load stress benchmarking for your software.",
      buttonText: "Schedule QA Evaluation"
    }
  },

  "devops": {
    id: "serv-08",
    slug: "devops",
    title: "DevOps",
    shortDescription: "GitOps continuous delivery pipelines, Kubernetes orchestration, infrastructure automation, and Site Reliability Engineering (SRE) observability.",
    category: "DevOps & SRE",
    icon: "Workflow",
    defaultBenefits: [
      {
        title: "Zero-Touch GitOps CI/CD Automation",
        description: "Automated build, test, and deployment pipelines using ArgoCD and GitHub Actions that deploy code from Git to production in minutes."
      },
      {
        title: "Enterprise Kubernetes Orchestration",
        description: "Production-hardened Kubernetes cluster architecture featuring auto-scaling, service meshes, and automated secret injection."
      },
      {
        title: "Proactive SRE & Deep Observability",
        description: "Unified telemetry stacks using OpenTelemetry, Prometheus, and Grafana to detect and mitigate anomalies before SLA breaches occur."
      },
      {
        title: "Automated Disaster Recovery & Backup",
        description: "Geo-replicated storage snapshots, automated failover scripting, and verified RTO/RPO recovery metrics."
      }
    ],
    defaultTechStack: [
      { name: "Kubernetes / Helm", category: "Orchestration" },
      { name: "ArgoCD / GitHub Actions", category: "GitOps / CI/CD" },
      { name: "Terraform / Ansible", category: "IaC & Config" },
      { name: "Docker / Containerd", category: "Container Runtime" },
      { name: "Prometheus / Grafana", category: "SRE Observability" },
      { name: "HashiCorp Vault", category: "Secrets Management" }
    ],
    defaultProcess: [
      {
        step: "01",
        title: "DevOps Maturity & Pipeline Audit",
        description: "Assessing developer commit frequency, build latencies, deployment failures, and security controls to identify automation gaps."
      },
      {
        step: "02",
        title: "Pipeline Architecture & IaC Engineering",
        description: "Scripting immutable cloud environments, container registries, and declarative GitOps delivery pipelines."
      },
      {
        step: "03",
        title: "Telemetry Setup & Chaos Engineering",
        description: "Implementing distributed tracing, log aggregation, and executing resiliency tests against container clusters."
      },
      {
        step: "04",
        title: "SRE Onboarding & Automated Governance",
        description: "Handing over documented incident runbooks, setting up PagerDuty alerting, and configuring automated vulnerability patching."
      }
    ],
    industriesServed: [
      "SaaS Technology Providers",
      "Financial Exchange Platforms",
      "Cloud-Native Retail & E-Commerce",
      "Healthcare Cloud Providers",
      "Media & CDN Distributors"
    ],
    technologies: [
      "Kubernetes",
      "Docker",
      "Terraform",
      "ArgoCD",
      "GitHub Actions",
      "GitLab CI",
      "Ansible",
      "Helm",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "HashiCorp Vault"
    ],
    defaultCTA: {
      title: "Accelerate Engineering Velocity with Enterprise DevOps",
      subtitle: "Work with our SRE leads to automate your CI/CD pipelines, optimize container orchestration, and achieve 99.999% system reliability.",
      buttonText: "Schedule DevOps Audit"
    }
  },

  "digital-transformation": {
    id: "serv-09",
    slug: "digital-transformation",
    title: "Digital Transformation",
    shortDescription: "Enterprise ecosystem modernization, legacy ERP decoupling, cloud-first workflow automation, and data democratization for established organizations.",
    category: "Strategic Transformation",
    icon: "Cpu",
    defaultBenefits: [
      {
        title: "Legacy ERP & Monolith Modernization",
        description: "Decoupling rigid legacy systems into agile, cloud-native microservices while maintaining business continuity across operations."
      },
      {
        title: "Enterprise Data Democratization",
        description: "Unifying siloed organizational databases into high-speed data lakes and operational analytics warehouses."
      },
      {
        title: "Intelligent Workflow Automation",
        description: "Replacing manual administrative processes with automated event-driven software engines and AI decision pipelines."
      },
      {
        title: "Future-Proof Technology Strategy",
        description: "Aligning software architecture with multi-year business growth goals, ensuring zero vendor lock-in and high scalability."
      }
    ],
    defaultTechStack: [
      { name: "Python / Java Enterprise", category: "Core Backend" },
      { name: "AWS / Microsoft Azure", category: "Enterprise Cloud" },
      { name: "Apache Kafka / Snowflake", category: "Data Architecture" },
      { name: "React / Micro-Frontends", category: "Modern Web UI" },
      { name: "Kubernetes / Docker", category: "Infrastructure" },
      { name: "OpenAPI / MuleSoft", category: "API Integration" }
    ],
    defaultProcess: [
      {
        step: "01",
        title: "Ecosystem Discovery & Technical Debt Audit",
        description: "Evaluating organizational software assets, operational bottlenecks, and legacy dependencies to formulate a transformation roadmap."
      },
      {
        step: "02",
        title: "Target Enterprise Architecture Blueprint",
        description: "Designing cloud migration pathways, data governance frameworks, and microservices integration schemas."
      },
      {
        step: "03",
        title: "Iterative Decoupling & Deployment Sprints",
        description: "Executing incremental feature migrations, automating business workflows, and deploying modernized core software."
      },
      {
        step: "04",
        title: "Organizational Enablement & Support",
        description: "Providing comprehensive architectural documentation, engineering team mentoring, and continuous SLA support."
      }
    ],
    industriesServed: [
      "Industrial & Heavy Manufacturing",
      "Traditional Banking & Insurance",
      "Government & Public Sector IT",
      "Global Supply Chain & Logistics",
      "Healthcare & Hospital Networks"
    ],
    technologies: [
      "AWS Enterprise",
      "Microsoft Azure",
      "Python",
      "Java",
      "Apache Kafka",
      "Snowflake",
      "PostgreSQL",
      "Kubernetes",
      "MuleSoft",
      "React",
      "Terraform",
      "OpenTelemetry"
    ],
    defaultCTA: {
      title: "Modernize Your Enterprise Digital Ecosystem",
      subtitle: "Speak with our transformation architects to decouple legacy bottlenecks and build a resilient, cloud-first technology roadmap.",
      buttonText: "Schedule Transformation Review"
    }
  }
};