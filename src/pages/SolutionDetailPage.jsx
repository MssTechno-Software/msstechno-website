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
  Layers,
  Cpu,
  Building2,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";


import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { servicesData } from "../servicesData";

const SERVICE_ICONS = {
  "ai-solutions": BrainCircuit,
  "custom-software": Code2,
  "web-development": Globe2,
  "mobile-development": Smartphone,
  "cloud-solutions": Cloud,
  devops: InfinityIcon,
  "ui-ux-design": PenTool,
  "data-analytics": TrendingUp,
  "qa-testing": ShieldCheck,
};

export default function ServiceDetailsPage() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const service = servicesData[serviceSlug];

  // Accordion state for FAQ section
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  const MainIcon = SERVICE_ICONS[serviceSlug] || BrainCircuit;

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8F6F2]">
        <div className="text-center rounded-[32px] border border-white/40 bg-white/10 p-12 backdrop-blur-[35px] shadow-[0_24px_70px_rgba(45,60,48,0.06)] max-w-md mx-auto">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-[#6B2D1A]">Service not found</h1>
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

  // Dynamic JSON-LD Schema generation
  const baseUrl = window.location.origin;
  const currentUrl = window.location.href;
  const logoUrl = `${baseUrl}/logo.png`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",

    "@id": `${currentUrl}#service`,

    "name": service.badge,
    "description": service.seo?.description || service.description,
    "url": currentUrl,

    "serviceType": service.badge,

    "provider": {
      "@id": `${baseUrl}/#organization`
    },

    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Andhra Pradesh"
      },
      {
        "@type": "City",
        "name": "Rajahmundry"
      },
      {
        "@type": "City",
        "name": "Visakhapatnam"
      },
      {
        "@type": "City",
        "name": "Amalapuram"
      },
      {
        "@type": "City",
        "name": "Hyderabad"
      },
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "City",
        "name": "Toronto"
      },
      {
        "@type": "Country",
        "name": "Canada"
      }
    ]
  };

  const faqSchema =
    service.faqs && service.faqs.length > 0
      ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",

        "@id": `${currentUrl}#faq`,

        "mainEntity": service.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    "@id": `${currentUrl}#breadcrumb`,

    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Solutions",
        "item": `${baseUrl}/solutions`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.badge,
        "item": currentUrl
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>
          {service.seo?.title || `${service.title1} | MSS Techno`}
        </title>

        <meta
          name="description"
          content={service.seo?.description || service.description}
        />

        {service.seo?.keywords && (
          <meta name="keywords" content={service.seo.keywords} />
        )}

        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={service.seo?.title || `${service.title1} | MSS Techno`}
        />
        <meta
          property="og:description"
          content={service.seo?.description || service.description}
        />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:site_name" content="MSS Techno" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={service.seo?.title || `${service.title1} | MSS Techno`}
        />
        <meta
          name="twitter:description"
          content={service.seo?.description || service.description}
        />
        <meta name="twitter:image" content={logoUrl} />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />
      <main className="relative min-h-screen overflow-hidden bg-[#F8F6F2] pb-32 pt-25 px-6 sm:px-12 lg:px-20 selection:bg-[#4D8B4F]/20 selection:text-[#171A17]">
        {/* WORLD-CLASS IMMERSIVE LIQUID GLASS BACKGROUND WITH CHROME REFLECTIONS */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {/* Large Radial Lights */}
          <div className="absolute -left-64 -top-20 h-[950px] w-[950px] rounded-full bg-gradient-to-br from-[#4D8B4F]/20 via-[#4D8B4F]/6 to-transparent blur-[160px]" />
          <div className="absolute -right-48 -bottom-20 h-[1050px] w-[1050px] rounded-full bg-gradient-to-tl from-[#6B2D1A]/12 via-[#6B2D1A]/4 to-transparent blur-[190px]" />

          {/* Luxury Soft Champagne Lighting Ambient Pools */}
          <div className="absolute left-[30%] top-[20%] h-[900px] w-[900px] rounded-full bg-gradient-to-tr from-[#E9C6AE]/15 via-[#4D8B4F]/4 to-transparent blur-[150px]" />
          <div className="absolute right-[20%] bottom-[15%] h-[800px] w-[800px] rounded-full bg-gradient-to-br from-[#4D8B4F]/8 via-[#E9C6AE]/8 to-transparent blur-[160px]" />

          {/* Premium iOS Specular Edge Light Diffusers */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.6),transparent_60%)] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F2]/0 via-[#F8F6F2]/10 to-[#F8F6F2]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1560px] flex flex-col items-center">

          {/* =====================================================
              1. HERO SPLIT SECTION
          ===================================================== */}
          <section className="w-full grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] xl:gap-24">

            {/* LEFT COLUMN: HEROSCAPING DATA */}
            <div className="flex flex-col items-start text-left w-full">
              {/* Elegant Back Navigation Plate */}
              <motion.button
                whileHover={{ x: -4, backgroundColor: "rgba(255,255,255,0.25)" }}
                onClick={() => navigate("/solutions")}
                className="mb-12 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#25352C] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.5),0_12px_32px_rgba(0,0,0,0.02)] backdrop-blur-2xl transition-all duration-300 cursor-pointer"
              >
                <ArrowLeft size={15} className="text-[#4D8B4F]" />
                Back to Solutions
              </motion.button>

              {/* Apple Keynote Style Pill Labels */}
              <div className="flex items-center gap-2.5 rounded-full border border-white/40 bg-white/15 px-5 py-2.5 shadow-[inset_1px_1px_1px_rgba(255,255,255,0.5),0_8px_24px_rgba(77,139,79,0.03)] backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5 text-[#4D8B4F] drop-shadow-[0_0_6px_rgba(77,139,79,0.3)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3F7843]">
                  {service.badge}
                </span>
                {service.trustBadge && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-[#25352C]/20" />
                    <span className="text-[9px] font-bold text-[#636E65] tracking-wide">
                      {service.trustBadge}
                    </span>
                  </>
                )}
              </div>

              {/* Premium Dynamic Title */}
              <h1 className="mt-8 font-serif text-[46px] font-semibold leading-[1.06] tracking-[-0.045em] text-[#171A17] sm:text-[60px] xl:text-[72px]">
                {service.title1} <br />
                <span className="font-sans font-normal text-[#5A635C] italic">{service.title2}</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D8B4F] via-[#5BA45D] to-[#6BB668] drop-shadow-sm">
                  {service.highlight}
                </span>
              </h1>

              {/* Elegant Subtitle Description Plate */}
              {service.subtitle && (
                <h2 className="mt-4 text-lg font-medium tracking-tight text-[#6B2D1A] max-w-[620px]">
                  {service.subtitle}
                </h2>
              )}

              <p className="mt-6 max-w-[620px] text-[16px] xl:text-[17px] leading-[1.8] text-[#525B54] font-medium opacity-90">
                {service.description}
              </p>

              {/* SUCCESS METRICS ROW OVERLAY */}
              {service.successMetrics && (
                <div className="mt-10 flex items-center gap-12 border-y border-white/30 py-6 w-full max-w-[640px] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                  {service.successMetrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col">
                      <span className="font-serif text-3xl font-bold tracking-tight text-[#171A17]">{metric.value}</span>
                      <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#636E66]">{metric.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: ORIGINAL ORBIT SCENOGRAPHY */}
            <div className="relative flex h-[620px] w-full items-center justify-center lg:mt-0 -mt-12 overflow-visible select-none lg:self-start">
              {/* PROPORTIONALLY SCALED GLOW PLATES */}
              <div className="absolute h-[440px] w-[420px] rounded-full bg-gradient-to-tr from-[#4D8B4F]/10 via-[#E9C6AE]/10 to-transparent blur-[80px] pointer-events-none" />

              {/* PROPORTIONALLY SCALED ORBITAL RINGS */}
              <div className="absolute h-[550px] w-[550px] rounded-full border border-dashed border-[#4D8B4F]/15 animate-[spin_120s_linear_infinite]" />
              <div className="absolute h-[430px] w-[430px] rounded-full border border-white/30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)] shadow-[inset_0_0_30px_rgba(255,255,255,0.2)]" />
              <div className="absolute h-[310px] w-[310px] rounded-full border border-[#4D8B4F]/10" />

              {/* Central Apple Keynote Water Bubble Lens */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex h-[350px] w-[350px] items-center justify-center rounded-full border-[1.5px] border-white/60 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.12)_25%,rgba(240,245,240,0.06)_55%,rgba(255,255,255,0)_100%)] shadow-[inset_14px_16px_24px_rgba(255,255,255,0.5),inset_-14px_-16px_28px_rgba(94,110,96,0.04),0_42px_95px_rgba(60,75,65,0.08)] backdrop-blur-[35px] backdrop-saturate-[240%]"
              >
                {/* Internal Glass Slit Lens Flare Reflection */}
                <div className="absolute left-[20%] top-[9%] h-[3.5px] w-[35%] rounded-full bg-white/50 blur-[0.5px] rotate-[-14deg]" />
                <div className="absolute right-[18%] bottom-[12%] h-[50px] w-[60px] rounded-full bg-gradient-to-br from-white/15 to-transparent blur-md" />

                {/* Suspended Inner Sphere Brand Badge */}
                <div className="flex h-[205px] w-[205px] items-center justify-center rounded-full border border-white/50 bg-gradient-to-br from-white/40 via-[#FAFAF8]/20 to-[#EEF3EF]/30 shadow-[inset_0_1.5px_3px_rgba(255,255,255,0.6),0_24px_60px_rgba(77,139,79,0.08)] backdrop-blur-md">
                  <MainIcon
                    size={85}
                    strokeWidth={1.1}
                    className="text-[#4D8B4F] drop-shadow-[0_8px_14px_rgba(77,139,79,0.1)]"
                  />
                </div>
              </motion.div>

              {/* ORIGINAL SPACE ORBITAL POSITIONS */}
              {service.features?.slice(0, 6).map((feature, index) => {
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
                  "scale-[0.81]"
                ];

                return (
                  <div
                    key={positions[index]}
                    className={`
                      absolute
                      ${positions[index]}
                      ${sizeScales[index]}
                      z-20
                      flex
                      min-w-[225px]
                      items-center
                      gap-4
                      rounded-full
                      border
                      border-white/40
                      bg-white/12
                      px-5
                      py-4
                      shadow-[inset_2px_2px_5px_rgba(255,255,255,0.4),0_24px_55px_rgba(50,80,55,0.04)]
                      backdrop-blur-[35px]
                      backdrop-saturate-150
                    `}
                  >
                    <div className="pointer-events-none absolute left-[15%] top-0 h-px w-[60%] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-gradient-to-b from-white/50 to-[#EEF3EE]/35 shadow-sm text-[#4D8B4F]">
                      <MainIcon size={19} strokeWidth={2} />
                    </div>

                    <span className="text-[15px] font-bold tracking-tight text-[#171A17]">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =====================================================
              2. FEATURES
          ===================================================== */}
          <div className="w-full mt-20 flex flex-col items-center">

            {/* OPTIMIZED FULL-WIDTH LIQUID GLASS FEATURE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {service.features?.map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -6, scale: 1.02, backgroundColor: "rgba(255,255,255,0.22)" }}
                  className="group relative overflow-hidden rounded-[30px] border border-white/40 bg-white/12 p-6 shadow-[inset_4px_4px_12px_rgba(255,255,255,0.4),inset_-3px_-3px_8px_rgba(77,139,79,0.01),0_20px_50px_rgba(50,80,55,0.03)] backdrop-blur-[35px] backdrop-saturate-[160%] transition-all duration-500 flex flex-col justify-between min-h-[160px]"
                >
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                  <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-full bg-gradient-to-br from-transparent to-[#4D8B4F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-[15px] border border-white/40 bg-gradient-to-br from-white/50 to-[#F4F7F4]/30 shadow-[0_5px_14px_rgba(77,139,79,0.04)] text-[#4D8B4F]">
                      <MainIcon size={19} strokeWidth={2} />
                    </div>

                    <h3 className="mt-5 text-[18px] font-bold tracking-tight text-[#171A17] group-hover:text-[#4D8B4F] transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-[14px] font-medium leading-[1.65] text-[#5E6960]">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* PREMIUM CTA PRESENTATION CENTRALLY ALIGNED */}
            <div className="mt-16">
              <motion.button
                whileHover={{ y: -4, scale: 1.02, shadow: "0_20px_45px_rgba(0,0,0,0.04)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContactAction}
                className="group relative flex items-center gap-8 rounded-full border border-white/50 bg-white/18 pl-8 pr-4 py-4.5 text-[13px] font-bold tracking-wide text-[#171A17] backdrop-blur-[30px] shadow-[inset_4px_4px_10px_rgba(255,255,255,0.5),inset_-4px_-4px_10px_rgba(0,0,0,0.01),0_16px_42px_rgba(0,0,0,0.02)] transition-all duration-500 cursor-pointer"
              >
                <div className="pointer-events-none absolute inset-[1.5px] rounded-full border border-white/40" />
                <span>{service.secondaryButton}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4D8B4F] text-white shadow-[0_5px_15px_rgba(77,139,79,0.3)] transition-transform duration-500 group-hover:translate-x-0.5">
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </span>
              </motion.button>
            </div>

          </div>

          {/* =====================================================
              3. OVERVIEW SECTION
          ===================================================== */}
          {service.overview && (
            <section className="w-full mt-32">
              <div className="rounded-[40px] border border-white/40 bg-white/15 p-8 sm:p-14 shadow-[inset_4px_4px_16px_rgba(255,255,255,0.5),0_30px_70px_rgba(45,60,48,0.03)] backdrop-blur-[40px]">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                  <div className="flex flex-col items-start text-left">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4D8B4F] mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                      <Sparkles size={13} /> Enterprise Overview
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A17]">
                      {service.overview.title}
                    </h2>
                    <p className="mt-6 text-base sm:text-lg leading-[1.8] text-[#525B54] font-medium">
                      {service.overview.description}
                    </p>
                  </div>

                  <div className="relative flex items-center justify-center">
                    <div className="absolute h-[320px] w-[320px] rounded-full bg-gradient-to-tr from-[#4D8B4F]/15 via-[#E9C6AE]/10 to-transparent blur-[70px] pointer-events-none" />

                    <div className="relative w-full rounded-[30px] border border-white/40 bg-white/20 p-8 shadow-[inset_2px_2px_8px_rgba(255,255,255,0.5),0_20px_50px_rgba(50,80,55,0.04)] backdrop-blur-[35px] flex flex-col gap-6">
                      <div className="absolute top-0 right-0 p-6 opacity-15 text-[#4D8B4F]">
                        <MainIcon size={96} strokeWidth={1} />
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/40 bg-gradient-to-br from-white/60 to-[#F4F7F4]/40 shadow-sm text-[#4D8B4F]">
                          <ShieldCheck size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#171A17] text-base">Enterprise Grade Architecture</h4>
                          <p className="text-xs text-[#5E6960]">Built for maximum reliability & scale</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/30">
                        <div className="rounded-2xl border border-white/40 bg-white/25 p-4 backdrop-blur-md shadow-sm">
                          <span className="font-serif text-2xl font-bold text-[#171A17]">99.9%</span>
                          <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#636E65]">Uptime SLA</p>
                        </div>
                        <div className="rounded-2xl border border-white/40 bg-white/25 p-4 backdrop-blur-md shadow-sm">
                          <span className="font-serif text-2xl font-bold text-[#171A17]">24/7</span>
                          <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#636E65]">Expert Support</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4D8B4F]">
                        <Sparkles size={14} /> MSS Techno Standard Compliance
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* =====================================================
              4. BENEFITS SECTION
          ===================================================== */}
          {service.benefits && service.benefits.length > 0 && (
            <section className="w-full mt-32">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4D8B4F] mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  Strategic Advantages
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A17]">
                  Engineered for Maximum Business Impact
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {service.benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6, backgroundColor: "rgba(255,255,255,0.22)" }}
                    className="rounded-[30px] border border-white/40 bg-white/12 p-8 shadow-[inset_4px_4px_10px_rgba(255,255,255,0.4),0_20px_50px_rgba(50,80,55,0.03)] backdrop-blur-[40px] transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/40 bg-gradient-to-br from-white/50 to-[#F4F7F4]/30 shadow-sm text-[#4D8B4F] mb-6">
                      <CheckCircle2 size={22} strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-[#171A17] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-[15px] leading-[1.7] text-[#5E6960]">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* =====================================================
              5. DEVELOPMENT PROCESS SECTION
          ===================================================== */}
          {service.process && service.process.length > 0 && (
            <section className="w-full mt-32">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4D8B4F] mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  Execution Methodology
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A17]">
                  Our Proven Delivery Process
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {service.process.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-[30px] border border-white/40 bg-white/12 p-8 shadow-[inset_4px_4px_10px_rgba(255,255,255,0.4),0_20px_50px_rgba(50,80,55,0.03)] backdrop-blur-[40px] flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-[#4D8B4F]">
                        Phase {idx + 1}
                      </span>
                      <h3 className="mt-3 text-xl font-bold tracking-tight text-[#171A17]">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-sm leading-[1.7] text-[#5E6960]">
                        {step.description}
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-white/30 text-xs font-bold text-[#636E65]">
                      Milestone Aligned
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* =====================================================
              6. TECHNOLOGIES SECTION
          ===================================================== */}
          {service.technologies && service.technologies.length > 0 && (
            <section className="w-full mt-32">
              <div className="rounded-[40px] border border-white/40 bg-white/15 p-8 sm:p-14 shadow-[inset_4px_4px_16px_rgba(255,255,255,0.5),0_30px_70px_rgba(45,60,48,0.03)] backdrop-blur-[40px]">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4D8B4F] mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                      <Cpu size={13} /> Tech Stack
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A17]">
                      Powered By Next-Gen Enterprise Tech
                    </h2>
                    <p className="mt-4 text-base text-[#525B54] font-medium">
                      We leverage battle-tested modern tools and frameworks to guarantee scalability, security, and elite performance.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 max-w-xl">
                    {service.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="rounded-full border border-white/40 bg-white/20 px-6 py-3 text-sm font-bold text-[#171A17] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.5),0_10px_25px_rgba(0,0,0,0.02)] backdrop-blur-xl"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* =====================================================
              7. INDUSTRIES WE SERVE SECTION
          ===================================================== */}
          {service.industries && service.industries.length > 0 && (
            <section className="w-full mt-32">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4D8B4F] mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  <Building2 size={13} /> Industry Expertise
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A17]">
                  Tailored Solutions Across Sectors
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {service.industries.map((ind, idx) => (
                  <div
                    key={idx}
                    className="rounded-[30px] border border-white/40 bg-white/12 p-8 shadow-[inset_4px_4px_10px_rgba(255,255,255,0.4),0_20px_50px_rgba(50,80,55,0.03)] backdrop-blur-[40px]"
                  >
                    <h3 className="text-xl font-bold tracking-tight text-[#171A17] mb-3">
                      {ind.name}
                    </h3>
                    <p className="text-[15px] leading-[1.7] text-[#5E6960]">
                      {ind.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* =====================================================
              8. CASE STUDIES SECTION
          ===================================================== */}
          {service.caseStudies && service.caseStudies.length > 0 && (
            <section className="w-full mt-32">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4D8B4F] mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  Proven Track Record
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A17]">
                  Featured Client Success Stories
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                {service.caseStudies.map((cs, idx) => (
                  <div
                    key={idx}
                    className="rounded-[36px] border border-white/40 bg-white/15 p-8 sm:p-10 shadow-[inset_4px_4px_16px_rgba(255,255,255,0.5),0_25px_60px_rgba(45,60,48,0.03)] backdrop-blur-[40px] flex flex-col justify-between"
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F]/10 px-3.5 py-1 text-xs font-bold text-[#4D8B4F] mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                        {cs.client}
                      </div>
                      <h3 className="font-serif text-2xl font-semibold text-[#171A17] mb-4">
                        {cs.title}
                      </h3>
                      <p className="text-[15px] leading-[1.8] text-[#525B54]">
                        {cs.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/30 flex items-center justify-between">
                      <span className="text-sm font-bold text-[#171A17] bg-[#4D8B4F]/10 px-4 py-2 rounded-xl text-[#4D8B4F] shadow-sm">
                        {cs.results}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* =====================================================
              9. TESTIMONIALS SECTION
          ===================================================== */}
          {service.testimonials && service.testimonials.length > 0 && (
            <section className="w-full mt-32">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4D8B4F] mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  Client Testimonials
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A17]">
                  Trusted by Global Leaders
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {service.testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="rounded-[36px] border border-white/40 bg-white/15 p-8 sm:p-10 shadow-[inset_4px_4px_16px_rgba(255,255,255,0.5),0_25px_60px_rgba(45,60,48,0.03)] backdrop-blur-[40px] flex flex-col justify-between"
                  >
                    <p className="font-serif text-lg italic leading-[1.7] text-[#171A17] mb-8">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div>
                      <h4 className="font-bold text-[#171A17]">{t.author}</h4>
                      <p className="text-xs font-medium text-[#636E65] mt-0.5">{t.role}, {t.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* =====================================================
              10. FAQ SECTION (ACCORDION)
          ===================================================== */}
          {service.faqs && service.faqs.length > 0 && (
            <section className="w-full mt-32 max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4D8B4F] mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  <MessageSquare size={13} /> FAQ
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A17]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4 w-full">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-[24px] border border-white/40 bg-white/15 shadow-[inset_2px_2px_8px_rgba(255,255,255,0.5),0_10px_30px_rgba(45,60,48,0.02)] backdrop-blur-[35px] overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <span className="font-bold text-lg text-[#171A17]">{faq.question}</span>
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/30 text-[#4D8B4F] shadow-sm transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          <ChevronDown size={18} />
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-8 pb-6 pt-0 text-base text-[#525B54] leading-[1.7]">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* =====================================================
              11. RELATED SERVICES SECTION
          ===================================================== */}
          {service.relatedServices && service.relatedServices.length > 0 && (
            <section className="w-full mt-32">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#4D8B4F]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4D8B4F] mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  <Layers size={13} /> Explore More
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#171A17]">
                  Related Enterprise Solutions
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {service.relatedServices.map((rs, idx) => (
                  <Link
                    key={idx}
                    to={`/solutions/${rs.slug}`}
                    className="group rounded-[30px] border border-white/40 bg-white/12 p-8 shadow-[inset_4px_4px_10px_rgba(255,255,255,0.4),0_20px_50px_rgba(50,80,55,0.03)] backdrop-blur-[40px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/40 bg-gradient-to-br from-white/50 to-[#F4F7F4]/30 shadow-sm text-[#4D8B4F] mb-6">
                        <Sparkles size={20} />
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-[#171A17] group-hover:text-[#4D8B4F] transition-colors">
                        {rs.title}
                      </h3>
                      <p className="mt-3 text-sm leading-[1.7] text-[#5E6960]">
                        {rs.description}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4D8B4F]">
                      Explore Service <ArrowUpRight size={14} />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* =====================================================
              12. CONTACT CTA SECTION (RETAINED EXISTING DESIGN VIA HANDLER)
          ===================================================== */}
        </div>
      </main>

      <Footer />
    </>
  );
}