import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Globe2,
  Smartphone,
  Cloud,
  Infinity as InfinityIcon,
  PenTool,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Building2,
  MapPin,
  Layers,
  Workflow,
  Cpu,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { locationsData } from "../data/locationsData";
import { servicesData } from "../data/servicesData";

// Icon mapping matching servicesData icon identifiers
const SERVICE_ICONS = {
  BrainCircuit,
  Code2,
  Globe2,
  Smartphone,
  Cloud,
  InfinityIcon,
  PenTool,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Workflow,
  Cpu,
};

export default function LocationServiceDetailsPage() {
  const { locationSlug } = useParams();
  const navigate = useNavigate();
  const location = locationsData[locationSlug];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationSlug]);

  if (!location) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8F6F2]">
        <div className="text-center rounded-[32px] border border-white/40 bg-white/10 p-12 backdrop-blur-[35px] shadow-[0_24px_70px_rgba(45,60,48,0.06)] max-w-md mx-auto">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-[#6B2D1A]">
            Location not found
          </h1>
          <p className="mt-4 text-sm text-[#5E6960]">
            We couldn&apos;t find the specified regional hub in our directory.
          </p>
          <button
            onClick={() => navigate("/solutions")}
            className="mt-8 rounded-full bg-[#4D8B4F] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_12px_30px_rgba(77,139,79,0.25)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Back to Solutions
          </button>
        </div>
      </div>
    );
  }

  // 1. Dynamic Data Collections
  const servicesList = Object.values(servicesData);
  const otherLocations = Object.values(locationsData).filter(
    (item) => item.slug !== locationSlug
  );

  // 2. Localized Tokens
  const cityName = location.city;
  const stateName = location.state;
  const countryName = location.country;
  const badge = location.regionLabel || `${cityName} Tech Hub`;

  // 3. Localized SEO & Meta
  const seoTitle = `Best Software Development Company in ${cityName} | MSS Techno`;
  const seoDescription = `Looking for the top software development company in ${cityName}? MSS Techno delivers AI solutions, custom software development, web applications, and cloud engineering across ${stateName}.`;
  const baseUrl = window.location.origin;
  const currentUrl = window.location.href;
  const logoUrl = `${baseUrl}/logo.png`;

  // 4. Section Data (100% Dynamic & Localized)
  const aboutParagraphs = [
    `MSS Techno Software Pvt Ltd operates as a strategic technology partner for enterprises, fast-growing startups, and established organizations across ${cityName}, ${stateName}. We combine deep architectural engineering with an AI-first development culture to solve complex operational challenges.`,
    `Our engineering teams specialize in building custom digital platforms that scale seamlessly. By decoupling legacy bottlenecks and integrating cloud-native microservices, we empower businesses in ${cityName} to accelerate their digital transformation without compromising on security or system availability.`,
    `Whether your organization requires high-load web applications, bespoke enterprise software, mobile ecosystems, or proprietary AI pipelines, MSS Techno delivers SLA-backed solutions architected specifically around your long-term business goals in ${cityName}.`,
  ];

  const whyChooseUsCards = [
    {
      title: "Enterprise Experience",
      description: `Proven track record delivering mission-critical software systems across ${cityName} and ${stateName}.`,
    },
    {
      title: "AI-First Development",
      description:
        "Integrating generative AI, LLM pipelines, and intelligent automation into every solution we deploy.",
    },
    {
      title: "Agile Delivery",
      description:
        "Iterative engineering sprints with transparent reporting, rapid MVPs, and predictable launch timelines.",
    },
    {
      title: "Scalable Solutions",
      description:
        "Cloud-native architectures engineered for high concurrency, multi-region availability, and zero bottlenecks.",
    },
    {
      title: "Dedicated Local Support",
      description: `Direct SLA-backed communication with solution architects familiar with ${cityName}'s enterprise ecosystem.`,
    },
    {
      title: "Secure Development",
      description:
        "Zero-trust compliance, automated penetration testing, and adherence to international and regional governance.",
    },
  ];

  const industriesServedCards = [
    {
      title: "Healthcare & Life Sciences",
      description:
        "EHR integrations, HIPAA/PHIPA compliant patient portals, telemedicine apps, and medical diagnostic software.",
    },
    {
      title: "Banking & Financial Services",
      description:
        "High-frequency trading engines, secure payment gateways, compliance workflows, and core banking modernization.",
    },
    {
      title: "Retail & E-Commerce",
      description:
        "Omnichannel retail platforms, high-load inventory engines, AI recommendation pipelines, and POS integrations.",
    },
    {
      title: "Education & EdTech",
      description:
        "Interactive LMS ecosystems, automated grading pipelines, virtual classrooms, and student analytics portals.",
    },
    {
      title: "Manufacturing & Industry 4.0",
      description:
        "SCADA interfaces, industrial IoT monitoring, predictive maintenance software, and factory automation dashboards.",
    },
    {
      title: "Logistics & Supply Chain",
      description:
        "Real-time fleet tracking, automated warehouse dispatch engines, freight optimization, and supply chain ERPs.",
    },
  ];

  const faqs = [
    {
      question: `Why is MSS Techno considered a top software development company in ${cityName}?`,
      answer: `MSS Techno combines full-stack architectural engineering with an AI-first development culture. Unlike agencies that deploy slow template websites, we build bespoke software-grade web, mobile, and cloud applications tailored to ${cityName}'s competitive enterprise landscape.`,
    },
    {
      question: `What software development services do you offer to businesses in ${cityName}?`,
      answer: `We provide comprehensive digital engineering including Website Development, Custom Software Development, Mobile App Development, AI & Machine Learning Solutions, Cloud Infrastructure, UI/UX Design, QA Automation, DevOps, and Enterprise Digital Transformation.`,
    },
    {
      question: `How do I choose the right service model for my organization in ${cityName}?`,
      answer: `We offer flexible engagement models: dedicated agile engineering teams, staff augmentation for specialized roles (such as AI or DevOps architects), and end-to-end milestone-based project delivery tailored to your budget and timelines.`,
    },
    {
      question: `Can MSS Techno integrate custom AI and cloud solutions into our existing legacy systems?`,
      answer: `Yes. Our solution architects specialize in legacy modernization. We use incremental decoupling strategies (such as the Strangler Fig pattern) to transition legacy monoliths to modern microservices and AI pipelines without disrupting daily operations.`,
    },
    {
      question: `What is the typical timeline for an enterprise software project in ${cityName}?`,
      answer: `A modular web or mobile MVP typically takes 4 to 6 weeks, while a full-scale enterprise software system with complex database integrations and custom API gateways ranges from 8 to 14 weeks depending on technical scope.`,
    },
    {
      question: `How does MSS Techno ensure data security and regulatory compliance in ${stateName}?`,
      answer: `We implement zero-trust security frameworks, OWASP Top 10 mitigation, secure JWT/OAuth2 authentication pipelines, automated penetration testing, and full adherence to regional data governance standards.`,
    },
    {
      question: `How can we initiate a project with your ${cityName} engineering team?`,
      answer: `You can schedule an initial technical discovery meeting with our solution architects. We will evaluate your digital footprint, discuss your performance goals, and deliver a comprehensive architectural proposal and sprint roadmap.`,
    },
  ];

  // 5. Schema.org Structured Data
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${currentUrl}#organization`,
    name: `MSS Techno Software Pvt Ltd - ${cityName}`,
    description: seoDescription,
    url: currentUrl,
    image: logoUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: stateName,
      addressCountry: countryName,
    },
    areaServed: {
      "@type": "City",
      name: cityName,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${currentUrl}#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${currentUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${baseUrl}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cityName,
        item: currentUrl,
      },
    ],
  };

  const handleContactAction = () => {
    if (window.location.pathname === "/") {
      const section = document.getElementById("contact-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("contact-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  };

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta
          name="keywords"
          content={`software development company ${cityName.toLowerCase()}, custom software company ${cityName.toLowerCase()}, web development company ${cityName.toLowerCase()}, ai development company ${cityName.toLowerCase()}, cloud services ${cityName.toLowerCase()}`}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:site_name" content="MSS Techno" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={logoUrl} />

        <script type="application/ld+json">
          {JSON.stringify(locationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />
      <main className="relative min-h-screen overflow-hidden bg-[#F8F6F2] pb-32 pt-25 px-6 sm:px-12 lg:px-20 selection:bg-[#4D8B4F]/20 selection:text-[#171A17]">
        {/* LIQUID GLASS AMBIENT LIGHTING BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -left-64 -top-20 h-[950px] w-[950px] rounded-full bg-gradient-to-br from-[#4D8B4F]/20 via-[#4D8B4F]/6 to-transparent blur-[160px]" />
          <div className="absolute -right-48 -bottom-20 h-[1050px] w-[1050px] rounded-full bg-gradient-to-tl from-[#6B2D1A]/12 via-[#6B2D1A]/4 to-transparent blur-[190px]" />
          <div className="absolute left-[30%] top-[20%] h-[900px] w-[900px] rounded-full bg-gradient-to-tr from-[#E9C6AE]/15 via-[#4D8B4F]/4 to-transparent blur-[150px]" />
          <div className="absolute right-[20%] bottom-[15%] h-[800px] w-[800px] rounded-full bg-gradient-to-br from-[#4D8B4F]/8 via-[#E9C6AE]/8 to-transparent blur-[160px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.6),transparent_60%)] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F2]/0 via-[#F8F6F2]/10 to-[#F8F6F2]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1560px] flex flex-col items-center">
          {/* =====================================================
              1. HERO SECTION
          ===================================================== */}
          <section className="w-full grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] xl:gap-24">
            {/* LEFT COLUMN: HERO CONTENT */}
            <div className="flex flex-col items-start text-left w-full">
              <motion.button
                whileHover={{ x: -4, backgroundColor: "rgba(255,255,255,0.25)" }}
                onClick={() => navigate("/solutions")}
                className="mb-12 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#25352C] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.5),0_12px_32px_rgba(0,0,0,0.02)] backdrop-blur-2xl transition-all duration-300 cursor-pointer"
              >
                <ArrowLeft size={15} className="text-[#4D8B4F]" />
                Back to Solutions
              </motion.button>

              <div className="flex items-center gap-2.5 rounded-full border border-white/40 bg-white/15 px-5 py-2.5 shadow-[inset_1px_1px_1px_rgba(255,255,255,0.5),0_8px_24px_rgba(77,139,79,0.03)] backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5 text-[#4D8B4F] drop-shadow-[0_0_6px_rgba(77,139,79,0.3)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3F7843]">
                  {badge}
                </span>
                <span className="h-1 w-1 rounded-full bg-[#25352C]/20" />
                <span className="text-[9px] font-bold text-[#636E65] tracking-wide">
                  ACTIVE IN {cityName.toUpperCase()}
                </span>
              </div>

              <h1 className="mt-8 font-serif text-[46px] font-semibold leading-[1.06] tracking-[-0.045em] text-[#171A17] sm:text-[60px] xl:text-[72px]">
                Best Software Development <br />
                <span className="font-sans font-normal text-[#5A635C] italic">
                  Company in
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D8B4F] via-[#5BA45D] to-[#6BB668] drop-shadow-sm">
                  {cityName}
                </span>
              </h1>

              <p className="mt-6 max-w-[620px] text-[16px] xl:text-[17px] leading-[1.8] text-[#525B54] font-medium opacity-90">
                Localized software engineering, AI integration, web development, and cloud-native solutions designed to scale for enterprises, startups, and technology leaders in {cityName}, {stateName}.
              </p>

              {/* PRIMARY & SECONDARY CTAS */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContactAction}
                  className="inline-flex items-center gap-3 rounded-full bg-[#4D8B4F] px-8 py-4.5 text-[13px] font-bold uppercase tracking-wider text-white shadow-[0_15px_35px_rgba(77,139,79,0.3)] hover:bg-[#3F7843] transition-all duration-300 cursor-pointer"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight size={16} />
                </motion.button>

                <motion.a
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow: "0 20px 45px rgba(0,0,0,0.04)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="#services-section"
                  className="group relative flex items-center gap-6 rounded-full border border-white/50 bg-white/18 pl-7 pr-4 py-4 text-[13px] font-bold tracking-wide text-[#171A17] backdrop-blur-[30px] shadow-[inset_4px_4px_10px_rgba(255,255,255,0.5),inset_-4px_-4px_10px_rgba(0,0,0,0.01),0_16px_42px_rgba(0,0,0,0.02)] transition-all duration-500 cursor-pointer"
                >
                  <div className="pointer-events-none absolute inset-[1.5px] rounded-full border border-white/40" />
                  <span>Explore Services</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4D8B4F] text-white shadow-[0_5px_15px_rgba(77,139,79,0.3)] transition-transform duration-500 group-hover:translate-x-0.5">
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </span>
                </motion.a>
              </div>
            </div>

            {/* RIGHT COLUMN: ORBITAL GRAPHIC & ACTIVE REGION PILLS */}
            <div className="relative flex h-[580px] w-full items-center justify-center lg:mt-0 -mt-12 overflow-visible select-none lg:self-start">
              <div className="absolute h-[440px] w-[420px] rounded-full bg-gradient-to-tr from-[#4D8B4F]/10 via-[#E9C6AE]/10 to-transparent blur-[80px] pointer-events-none" />
              <div className="absolute h-[520px] w-[520px] rounded-full border border-dashed border-[#4D8B4F]/15 animate-[spin_120s_linear_infinite]" />
              <div className="absolute h-[410px] w-[410px] rounded-full border border-white/30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)] shadow-[inset_0_0_30px_rgba(255,255,255,0.2)]" />
              <div className="absolute h-[290px] w-[290px] rounded-full border border-[#4D8B4F]/10" />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex h-[330px] w-[330px] items-center justify-center rounded-full border-[1.5px] border-white/60 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.12)_25%,rgba(240,245,240,0.06)_55%,rgba(255,255,255,0)_100%)] shadow-[inset_14px_16px_24px_rgba(255,255,255,0.5),inset_-14px_-16px_28px_rgba(94,110,96,0.04),0_42px_95px_rgba(60,75,65,0.08)] backdrop-blur-[35px] backdrop-saturate-[240%]"
              >
                <div className="absolute left-[20%] top-[9%] h-[3.5px] w-[35%] rounded-full bg-white/50 blur-[0.5px] rotate-[-14deg]" />
                <div className="absolute right-[18%] bottom-[12%] h-[50px] w-[60px] rounded-full bg-gradient-to-br from-white/15 to-transparent blur-md" />

                <div className="flex h-[190px] w-[190px] items-center justify-center rounded-full border border-white/50 bg-gradient-to-br from-white/40 via-[#FAFAF8]/20 to-[#EEF3EF]/30 shadow-[inset_0_1.5px_3px_rgba(255,255,255,0.6),0_24px_60px_rgba(77,139,79,0.08)] backdrop-blur-md">
                  <MapPin
                    size={80}
                    strokeWidth={1.1}
                    className="text-[#4D8B4F] drop-shadow-[0_8px_14px_rgba(77,139,79,0.1)]"
                  />
                </div>
              </motion.div>

              {/* SURROUNDING SERVICE ORBITAL PILLS */}
              {servicesList.slice(0, 6).map((serviceItem, index) => {
                const IconComponent =
                  SERVICE_ICONS[serviceItem.icon] || BrainCircuit;
                const positions = [
                  "top-[2%] left-[36%]",
                  "top-[22%] right-[-5%]",
                  "bottom-[18%] right-[-2%]",
                  "bottom-[0%] left-[36%]",
                  "bottom-[18%] left-[-4%]",
                  "top-[22%] left-[-5%]",
                ];
                const sizeScales = [
                  "scale-[0.86]",
                  "scale-[0.83]",
                  "scale-[0.88]",
                  "scale-[0.85]",
                  "scale-[0.86]",
                  "scale-[0.81]",
                ];

                return (
                  <div
                    key={serviceItem.id || positions[index]}
                    className={`absolute ${positions[index]} ${sizeScales[index]} z-20 flex min-w-[225px] items-center gap-4 rounded-full border border-white/40 bg-white/12 px-5 py-4 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.4),0_24px_55px_rgba(50,80,55,0.04)] backdrop-blur-[35px] backdrop-saturate-150`}
                  >
                    <div className="pointer-events-none absolute left-[15%] top-0 h-px w-[60%] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-gradient-to-b from-white/50 to-[#EEF3EE]/35 shadow-sm text-[#4D8B4F]">
                      <IconComponent size={19} strokeWidth={2} />
                    </div>
                    <span className="text-[15px] font-bold tracking-tight text-[#171A17]">
                      {serviceItem.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =====================================================
              2. ABOUT MSS TECHNO IN {CITY}
          ===================================================== */}
          <section className="w-full mt-32">
            <div className="rounded-[40px] border border-white/40 bg-white/15 p-8 sm:p-14 shadow-[inset_4px_4px_16px_rgba(255,255,255,0.5),0_30px_70px_rgba(45,60,48,0.03)] backdrop-blur-[40px]">
              <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
                <div className="flex flex-col items-start text-left">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4D8B4F] mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                    <Sparkles size={13} /> Regional Leadership
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A17]">
                    About MSS Techno in {cityName}
                  </h2>
                  {aboutParagraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="mt-6 text-base sm:text-lg leading-[1.8] text-[#525B54] font-medium"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="absolute h-[320px] w-[320px] rounded-full bg-gradient-to-tr from-[#4D8B4F]/15 via-[#E9C6AE]/10 to-transparent blur-[70px] pointer-events-none" />

                  <div className="relative w-full rounded-[30px] border border-white/40 bg-white/20 p-8 shadow-[inset_2px_2px_8px_rgba(255,255,255,0.5),0_20px_50px_rgba(50,80,55,0.04)] backdrop-blur-[35px] flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/40 bg-gradient-to-br from-white/60 to-[#F4F7F4]/40 shadow-sm text-[#4D8B4F]">
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#171A17] text-base">
                          Enterprise Software Hub
                        </h3>
                        <p className="text-xs text-[#5E6960]">
                          Active digital transformation in {cityName}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/30">
                      <div className="rounded-2xl border border-white/40 bg-white/25 p-4 backdrop-blur-md shadow-sm">
                        <span className="font-serif text-2xl font-bold text-[#171A17]">
                          50+
                        </span>
                        <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#636E65]">
                          Projects Delivered
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/40 bg-white/25 p-4 backdrop-blur-md shadow-sm">
                        <span className="font-serif text-2xl font-bold text-[#171A17]">
                          100%
                        </span>
                        <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#636E65]">
                          IP Ownership
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4D8B4F]">
                      <Sparkles size={14} /> MSS Techno SLA Guarantee
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              3. SERVICES WE OFFER IN {CITY} (DYNAMIC CARDS)
          ===================================================== */}
          <section id="services-section" className="w-full mt-32 flex flex-col items-center">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4D8B4F] mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                <Layers size={13} /> Our Services in {cityName}
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A17]">
                Services We Offer in {cityName}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {servicesList.map((serviceItem) => {
                const IconComponent =
                  SERVICE_ICONS[serviceItem.icon] || BrainCircuit;
                const dynamicLink = `/${serviceItem.slug}-company-${locationSlug}`;

                return (
                  <motion.div
                    key={serviceItem.id || serviceItem.title}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      backgroundColor: "rgba(255,255,255,0.22)",
                    }}
                    className="group relative overflow-hidden rounded-[30px] border border-white/40 bg-white/12 p-8 shadow-[inset_4px_4px_12px_rgba(255,255,255,0.4),inset_-3px_-3px_8px_rgba(77,139,79,0.01),0_20px_50px_rgba(50,80,55,0.03)] backdrop-blur-[35px] backdrop-saturate-[160%] transition-all duration-500 flex flex-col justify-between min-h-[220px]"
                  >
                    <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                    <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-full bg-gradient-to-br from-transparent to-[#4D8B4F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-white/40 bg-gradient-to-br from-white/50 to-[#F4F7F4]/30 shadow-[0_5px_14px_rgba(77,139,79,0.04)] text-[#4D8B4F]">
                        <IconComponent size={22} strokeWidth={2} />
                      </div>

                      <h3 className="mt-5 text-[20px] font-bold tracking-tight text-[#171A17] group-hover:text-[#4D8B4F] transition-colors duration-300">
                        {serviceItem.title}
                      </h3>

                      <p className="mt-3 text-[14px] font-medium leading-[1.65] text-[#5E6960]">
                        {serviceItem.shortDescription}
                      </p>
                    </div>

                    <Link
                      to={dynamicLink}
                      className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4D8B4F] hover:text-[#3F7843] transition-colors"
                    >
                      <span>Explore in {cityName}</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* =====================================================
              4. WHY CHOOSE MSS TECHNO (6 COMPACT CARDS)
          ===================================================== */}
          <section className="w-full mt-32">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4D8B4F] mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                Strategic Advantages
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A17]">
                Why Choose MSS Techno in {cityName}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {whyChooseUsCards.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    y: -6,
                    backgroundColor: "rgba(255,255,255,0.22)",
                  }}
                  className="rounded-[30px] border border-white/40 bg-white/12 p-8 shadow-[inset_4px_4px_10px_rgba(255,255,255,0.4),0_20px_50px_rgba(50,80,55,0.03)] backdrop-blur-[40px] transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/40 bg-gradient-to-br from-white/50 to-[#F4F7F4]/30 shadow-sm text-[#4D8B4F] mb-6">
                    <CheckCircle2 size={22} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[#171A17] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-[#5E6960]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* =====================================================
              5. INDUSTRIES WE SERVE (6 SECTORS)
          ===================================================== */}
          <section className="w-full mt-32">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4D8B4F] mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                <Building2 size={13} /> Industry Expertise
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A17]">
                Industries We Serve in {cityName}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {industriesServedCards.map((industry, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    y: -6,
                    backgroundColor: "rgba(255,255,255,0.22)",
                  }}
                  className="rounded-[30px] border border-white/40 bg-white/12 p-8 shadow-[inset_4px_4px_10px_rgba(255,255,255,0.4),0_20px_50px_rgba(50,80,55,0.03)] backdrop-blur-[40px] transition-all duration-300"
                >
                  <h3 className="text-xl font-bold tracking-tight text-[#171A17] mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-[#5E6960]">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* =====================================================
              6. FREQUENTLY ASKED QUESTIONS (6-8 LOCALIZED FAQS)
          ===================================================== */}
          <section className="w-full mt-32">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4D8B4F] mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                Clarifications
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A17]">
                FAQ for {cityName}
              </h2>
            </div>

            <div className="max-w-3xl mx-auto flex flex-col gap-4 w-full">
              {faqs.map((faqItem, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-[24px] border border-white/40 bg-white/15 overflow-hidden shadow-[inset_2px_2px_6px_rgba(255,255,255,0.4),0_10px_30px_rgba(0,0,0,0.02)] backdrop-blur-[35px] transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#171A17] text-lg hover:text-[#4D8B4F] transition-colors cursor-pointer"
                    >
                      <span>{faqItem.question}</span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-[#4D8B4F] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 text-[15px] leading-[1.7] text-[#5E6960] border-t border-white/20 pt-4">
                            {faqItem.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =====================================================
              7. EXPLORE OTHER LOCATIONS (DYNAMIC GRID)
          ===================================================== */}
          <section className="w-full mt-32">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4D8B4F] mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                <Globe2 size={13} /> Global Network
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A17]">
                Explore Other Locations
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {otherLocations.map((locItem) => (
                <Link
                  key={locItem.slug}
                  to={`/locations/${locItem.slug}`}
                  className="group relative overflow-hidden rounded-[28px] border border-white/40 bg-white/12 p-7 shadow-[inset_4px_4px_12px_rgba(255,255,255,0.4),0_15px_40px_rgba(50,80,55,0.03)] backdrop-blur-[35px] transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/20 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-[#171A17] group-hover:text-[#4D8B4F] transition-colors">
                      Software Company in {locItem.city}
                    </h3>
                    <p className="mt-1 text-xs text-[#5E6960]">
                      {locItem.state}, {locItem.country}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/30 text-[#4D8B4F] transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowUpRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* =====================================================
              8. CONTACT CTA SECTION
          ===================================================== */}
          <section className="w-full mt-32">
            <div className="relative overflow-hidden rounded-[40px] border border-white/50 bg-gradient-to-br from-white/30 via-white/15 to-[#4D8B4F]/10 p-10 sm:p-20 text-center shadow-[inset_6px_6px_20px_rgba(255,255,255,0.6),0_40px_90px_rgba(45,60,48,0.05)] backdrop-blur-[50px]">
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#4D8B4F]/10 blur-3xl" />
              <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-[#6B2D1A]/10 blur-3xl" />

              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#4D8B4F]">
                  Ready To Elevate Your Business?
                </span>
                <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[#171A17]">
                  Contact MSS Techno {cityName}
                </h2>
                <p className="mt-6 text-base sm:text-lg text-[#525B54] font-medium leading-[1.7]">
                  Partner with our {cityName} engineering team to design, deploy, and scale intelligent software solutions engineered for measurable success.
                </p>

                <motion.button
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContactAction}
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#4D8B4F] px-10 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_15px_35px_rgba(77,139,79,0.3)] hover:bg-[#3F7843] transition-all duration-300 cursor-pointer"
                >
                  <span>Contact Our {cityName} Team</span>
                  <ArrowUpRight size={18} />
                </motion.button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}