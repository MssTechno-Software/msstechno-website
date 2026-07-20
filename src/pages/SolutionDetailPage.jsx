import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
} from "lucide-react";
import { motion } from "motion/react";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  const MainIcon = SERVICE_ICONS[serviceSlug] || BrainCircuit;

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8F6F2]">
        <div className="text-center rounded-[32px] border border-white bg-white/40 p-12 backdrop-blur-3xl shadow-[0_24px_70px_rgba(45,60,48,0.06)] max-w-md mx-auto">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-[#6B2D1A]">Service not found</h1>
          <button
            onClick={() => navigate("/solutions")}
            className="mt-8 rounded-full bg-[#4D8B4F] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_12px_30px_rgba(77,139,79,0.25)] hover:-translate-y-0.5 transition-all duration-300"
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

  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-[#F8F6F2] pb-32 pt-25 px-6 sm:px-12 lg:px-20">
        {/* WORLD-CLASS IMMERSIVE LIQUID GLASS BACKGROUND WITH CHROME REFLECTIONS */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {/* Large Radial Lights */}
          <div className="absolute -left-64 -top-20 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-[#4D8B4F]/18 via-[#4D8B4F]/4 to-transparent blur-[140px]" />
          <div className="absolute -right-48 -bottom-20 h-[900px] w-[900px] rounded-full bg-gradient-to-tl from-[#6B2D1A]/12 via-[#6B2D1A]/2 to-transparent blur-[160px]" />
          
          {/* Luxury Soft Champagne Lighting Ambient Pools */}
          <div className="absolute left-[35%] top-[15%] h-[750px] w-[750px] rounded-full bg-gradient-to-tr from-[#E9C6AE]/15 via-transparent to-transparent blur-[130px]" />
          <div className="absolute right-[25%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-[#4D8B4F]/5 blur-[120px]" />

          {/* Premium iOS Specular Edge Light Diffusers */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.75),transparent_65%)] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F2]/0 via-[#F8F6F2]/30 to-[#F8F6F2]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1560px] flex flex-col items-center">
          
          {/* =====================================================
              HERO SPLIT SECTION
          ===================================================== */}
          <section className="w-full grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] xl:gap-24">
            
            {/* LEFT COLUMN: HEROSCAPING DATA */}
            <div className="flex flex-col items-start text-left w-full">
              {/* Elegant Back Navigation Plate */}
              <motion.button
                whileHover={{ x: -4, backgroundColor: "rgba(255,255,255,0.85)" }}
                onClick={() => navigate("/solutions")}
                className="mb-12 inline-flex items-center gap-3 rounded-full border border-white/90 bg-white/50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#25352C] shadow-[inset_1px_1px_2px_white,0_12px_32px_rgba(0,0,0,0.03)] backdrop-blur-2xl transition-all duration-300 cursor-pointer"
              >
                <ArrowLeft size={15} className="text-[#4D8B4F]" />
                Back to Solutions
              </motion.button>

              {/* Apple Keynote Style Pill Labels */}
              <div className="flex items-center gap-2.5 rounded-full border border-white/95 bg-white/40 px-5 py-2.5 shadow-[inset_1px_1px_1px_white,0_8px_24px_rgba(77,139,79,0.04)] backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5 text-[#4D8B4F] drop-shadow-[0_0_6px_rgba(77,139,79,0.4)]" />
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
                <div className="mt-10 flex items-center gap-12 border-y border-white/60 py-6 w-full max-w-[640px]">
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
              <div className="absolute h-[440px] w-[420px] rounded-full bg-gradient-to-tr from-[#4D8B4F]/8 via-[#E9C6AE]/8 to-transparent blur-[80px] pointer-events-none" />

              {/* PROPORTIONALLY SCALED ORBITAL RINGS */}
              <div className="absolute h-[550px] w-[550px] rounded-full border border-dashed border-[#4D8B4F]/15 animate-[spin_120s_linear_infinite]" />
              <div className="absolute h-[430px] w-[430px] rounded-full border border-white/60 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
              <div className="absolute h-[310px] w-[310px] rounded-full border border-[#4D8B4F]/8" />

              {/* Central Apple Keynote Water Bubble Lens */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex h-[350px] w-[350px] items-center justify-center rounded-full border-[2.5px] border-white/95 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.3)_25%,rgba(240,245,240,0.2)_55%,rgba(255,255,255,0)_100%)] shadow-[inset_14px_16px_24px_rgba(255,255,255,1),inset_-14px_-16px_28px_rgba(94,110,96,0.07),0_42px_95px_rgba(60,75,65,0.13)] backdrop-blur-[32px] backdrop-saturate-[240%]"
              >
                {/* Internal Glass Slit Lens Flare Reflection */}
                <div className="absolute left-[20%] top-[9%] h-[3.5px] w-[35%] rounded-full bg-white/50 blur-[0.5px] rotate-[-14deg]" />
                <div className="absolute right-[18%] bottom-[12%] h-[50px] w-[60px] rounded-full bg-gradient-to-br from-white/20 to-transparent blur-md" />

                {/* Suspended Inner Sphere Brand Badge */}
                <div className="flex h-[205px] w-[205px] items-center justify-center rounded-full border border-white/90 bg-gradient-to-br from-white via-[#FAFAF8] to-[#EEF3EF] shadow-[inset_0_1.5px_3px_white,0_24px_60px_rgba(77,139,79,0.14)]">
                  <MainIcon
                    size={85}
                    strokeWidth={1.1}
                    className="text-[#4D8B4F] drop-shadow-[0_8px_14px_rgba(77,139,79,0.14)]"
                  />
                </div>
              </motion.div>

              {/* ORIGINAL SPACE ORBITAL POSITIONS RETAINED PROPORTIONALLY WITH REDUCED SCALED PILLS */}
              {service.features.slice(0, 6).map((feature, index) => {
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
                      border-white
                      bg-white/75
                      px-5
                      py-4
                      shadow-[inset_2px_2px_4px_white,0_24_55px_rgba(50,80,55,0.07)]
                      backdrop-blur-3xl
                      backdrop-saturate-150
                    `}
                  >
                    <div className="pointer-events-none absolute left-[15%] top-0 h-px w-[60%] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                    
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white bg-gradient-to-b from-white to-[#EEF3EE] shadow-sm text-[#4D8B4F]">
                      <MainIcon size={19} strokeWidth={2} />
                    </div>

                    <span className="text-[13px] font-bold tracking-tight text-[#171A17]">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =====================================================
              FULL-WIDTH DEDICATED CARDS BLOCK AREA
          ===================================================== */}
          <div className="w-full mt-20 flex flex-col items-center">
            
            {/* OPTIMIZED FULL-WIDTH LIQUID GLASS FEATURE GRID (3 COLUMNS, 2 ROWS, EQUAL WIDTH/HEIGHT) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {service.features.map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -6, scale: 1.02, backgroundColor: "rgba(255,255,255,0.72)" }}
                  className="group relative overflow-hidden rounded-[30px] border border-white bg-white/45 p-6 shadow-[inset_4px_4px_10px_rgba(255,255,255,0.95),inset_-3px_-3px_6px_rgba(77,139,79,0.02),0_20px_50px_rgba(50,80,55,0.04)] backdrop-blur-[40px] backdrop-saturate-[160%] transition-all duration-500 flex flex-col justify-between min-h-[160px]"
                >
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                  <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-full bg-gradient-to-br from-transparent to-[#4D8B4F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-[15px] border border-white bg-gradient-to-br from-white/95 to-[#F4F7F4] shadow-[0_5px_14px_rgba(77,139,79,0.07)] text-[#4D8B4F]">
                      <MainIcon size={19} strokeWidth={2} />
                    </div>

                    <h3 className="mt-5 text-[14px] font-bold tracking-tight text-[#171A17] group-hover:text-[#4D8B4F] transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-[11px] font-medium leading-[1.65] text-[#5E6960]">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* PREMIUM CTA PRESENTATION CENTRALLY ALIGNED BELOW NEW CONTAINER DESIGN */}
            <div className="mt-16">
              <motion.button
                whileHover={{ y: -4, scale: 1.02, shadow: "0_20px_45px_rgba(0,0,0,0.08)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContactAction}
                className="group relative flex items-center gap-8 rounded-full border border-white/95 bg-white/60 pl-8 pr-4 py-4.5 text-[13px] font-bold tracking-wide text-[#171A17] backdrop-blur-2xl shadow-[inset_4px_4px_10px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(0,0,0,0.01),0_16px_42px_rgba(0,0,0,0.03)] transition-all duration-500 cursor-pointer"
              >
                <div className="pointer-events-none absolute inset-[1.5px] rounded-full border border-white/70" />
                <span>{service.secondaryButton}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4D8B4F] text-white shadow-[0_5px_15px_rgba(77,139,79,0.35)] transition-transform duration-500 group-hover:translate-x-0.5">
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </span>
              </motion.button>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}