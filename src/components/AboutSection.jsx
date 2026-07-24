import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  BrainCircuit,
  CloudCog,
  PenTool,
} from "lucide-react";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";


const features = [
  {
    title: "Enterprise Software",
    description: "Scalable, secure, and future-ready enterprise applications.",
    tags: ["Architecture", "APIs", "Integration", "Performance"],
    icon: Building2,
    accent: "green",
    url: "/solutions/custom-software",
  },
  {
    title: "AI & Automation",
    description: "Intelligent solutions that automate workflows and accelerate innovation.",
    tags: ["AI", "Automation", "Analytics", "Innovation"],
    icon: BrainCircuit,
    accent: "brown",
    url: "/solutions/ai-solutions",
  },
  {
    title: "Cloud & DevOps",
    description: "Reliable cloud infrastructure with seamless deployment and continuous delivery.",
    tags: ["Cloud", "DevOps", "CI/CD", "Kubernetes"],
    icon: CloudCog,
    accent: "green",
    url: "/solutions/cloud-solutions",
  },
  {
    title: "UI/UX Excellence",
    description: "Beautiful, intuitive experiences designed for engagement and usability.",
    tags: ["UX", "UI", "Prototyping", "Accessibility"],
    icon: PenTool,
    accent: "brown",
   url: "/solutions/ui-ux-design",
  },
];



const LiquidGlassLayers = () => {
  return (
    <>
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[inherit]
          bg-[radial-gradient(ellipse_at_24%_6%,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.08)_24%,transparent_52%),radial-gradient(ellipse_at_84%_94%,rgba(77,139,79,0.07)_0%,transparent_50%)]
          border
          border-white/55
          shadow-[inset_2px_2px_5px_rgba(255,255,255,0.82),inset_-3px_-3px_7px_rgba(52,68,60,0.10),0_20px_50px_rgba(34,48,41,0.10)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[12%]
          top-[6%]
          h-[30%]
          w-[55%]
          rounded-[100%]
          bg-white/12
          blur-[20px]
        "
      />

      <motion.div
        animate={{
          x: ["-260%", "720%"],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -top-[65%]
          h-[230%]
          w-[5%]
          rotate-[16deg]
          bg-white/20
          blur-2xl
        "
      />
    </>
  );
};

/* MAIN ABOUT SECTION INTERFACE WRAPPER */


const AboutSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navigate = useNavigate();

  const goToOurStory = () => {
    navigate("/about", {
      state: {
        scrollTo: "about-story",
      },
    });
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FAF8F5] pt-12 pb-20 md:pt-16 md:pb-24"
    >
      {/* LIQUID ATMOSPHERIC BACKGROUND (UNTOUCHED) */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,#DDE9DA_0%,#F3F1E9_30%,#E7ECEC_56%,#F0DDD3_78%,#DFE8DA_100%)]" />
      <div className="pointer-events-none absolute -left-[280px] top-[-220px] h-[900px] w-[900px] rounded-full bg-[#79A875]/42 blur-[180px]" />
      <div className="pointer-events-none absolute right-[-320px] top-[8%] h-[850px] w-[850px] rounded-full bg-[#C98E70]/34 blur-[190px]" />
      <div className="pointer-events-none absolute left-[30%] top-[24%] h-[700px] w-[800px] rounded-full bg-[#AEBECB]/28 blur-[190px]" />
      <div className="pointer-events-none absolute left-[20%] top-[-300px] h-[750px] w-[900px] rounded-full bg-white/70 blur-[190px]" />
      <div className="pointer-events-none absolute -left-[20%] top-[48%] h-[420px] w-[145%] -rotate-[5deg] rounded-[48%_52%_42%_58%/60%_38%_62%_40%] bg-[linear-gradient(90deg,rgba(77,139,79,0.13),rgba(255,255,255,0.10),rgba(145,167,184,0.14),rgba(107,45,26,0.11))] blur-[18px]" />

      {/* CONTENT BUILD AREA */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* WHO WE ARE BADGE */}
        <div className="w-full flex justify-center mb-8">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative isolate inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/55 bg-white/[0.08] px-5 py-2 backdrop-blur-[18px] backdrop-saturate-[210%] shadow-[inset_2px_2px_5px_rgba(255,255,255,0.80),inset_-3px_-3px_6px_rgba(60,75,65,0.08),0_16px_38px_rgba(45,55,50,0.10)]"
          >
            <LiquidGlassLayers />
            <span className="relative z-10 h-2 w-2 rounded-full bg-[#8A351B] shadow-[0_0_12px_rgba(138,53,27,0.35)]" />
            <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.18em] text-[#355D38]">
              Who We Are
            </span>
          </motion.div>
        </div>

        {/* MAIN TEXT & SCENIC WORKSPACE COLLAPSED ROW */}
        <div id="about-story" className="mb-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">

          {/* LEFT CONTENT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <h2 className="max-w-[650px] font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.035em] text-[#172019] sm:text-5xl lg:text-[54px]">
              Building{" "}
              <span className="italic text-[#4D8B4F]">Future-Ready</span>
              <br />
              Software Solutions for Modern Businesses
            </h2>

            <p className="mt-5 max-w-[590px] text-base leading-7 text-[#53605A] md:text-[16px]">
              MSS Techno partners with startups, enterprises, and global
              organizations to build scalable software, AI-powered platforms,
              cloud-native applications, and digital transformation solutions.
            </p>

            <p className="mt-3 max-w-[590px] text-base leading-7 text-[#66706B] md:text-[16px]">
              We combine precise engineering with human-centered design to
              create digital experiences built for performance, scale, and
              long-term growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={goToOurStory}
                className="group flex items-center gap-3 rounded-full border border-[#8FC88D]/60 bg-[#4D8B4F] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(77,139,79,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3F7B43]"
              >
                Explore Our Story
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection("#solutions")}
                className="relative isolate overflow-hidden rounded-full border border-white/60 bg-white/[0.08] px-7 py-3.5 text-sm font-semibold text-[#71341F] backdrop-blur-[18px] backdrop-saturate-[210%] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.75),0_12px_30px_rgba(55,50,45,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10">View Our Solutions</span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE - LOGO-FOCUSED VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:col-span-6 lg:flex items-center justify-center origin-center py-4"
          >
            {/* Ambient Refraction Shadows */}
            <div className="pointer-events-none absolute left-[10%] top-[15%] h-64 w-64 rounded-full bg-[#4D8B4F]/10 blur-[90px]" />
            <div className="pointer-events-none absolute right-[8%] bottom-[12%] h-64 w-64 rounded-full bg-[#6B2D1A]/8 blur-[95px]" />

            {/* Glowing Particles Ambient Layer */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute top-[15%] left-[25%] h-1 w-1 rounded-full bg-[#4D8B4F] shadow-[0_0_8px_4px_#4D8B4F] animate-ping" />
              <div className="absolute bottom-[25%] right-[20%] h-1 w-1 rounded-full bg-[#6B2D1A] shadow-[0_0_8px_4px_#6B2D1A] animate-ping" style={{ animationDelay: '2s' }} />
              <div className="absolute top-[45%] right-[10%] h-1 w-1 rounded-full bg-white shadow-[0_0_6px_3px_rgba(255,255,255,0.8)] animate-pulse" />
            </div>

            {/* CLUSTER GEOMETRIC NETWORK MATRIX */}
            <div className="relative flex h-[310px] w-[310px] items-center justify-center">

              {/* Symmetrical Interface Connection Vector Lines*/}
              <svg className="absolute inset-0 overflow-visible w-full h-full pointer-events-none stroke-white/[0.05]" style={{ transform: 'scale(2.3)' }}>
                <line x1="50%" y1="50%" x2="50%" y2="-30%" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="50%" y1="50%" x2="140%" y2="5%" strokeWidth="0.5" />
                <line x1="50%" y1="50%" x2="140%" y2="95%" strokeWidth="0.5" />
                <line x1="50%" y1="50%" x2="50%" y2="130%" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="50%" y1="50%" x2="-40%" y2="95%" strokeWidth="0.5" />
                <line x1="50%" y1="50%" x2="-40%" y2="5%" strokeWidth="0.5" />
              </svg>

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 flex h-[230px] w-[230px] flex-col items-center justify-center rounded-full border border-white/90 bg-white/15 backdrop-blur-3xl shadow-[inset_5px_5px_12px_rgba(255,255,255,0.65),inset_-3px_-3px_10px_rgba(0,0,0,0.01),0_35px_70px_rgba(0,0,0,0.07)]"
              >
                {/* Center Core Ambient Glow Behind Logo */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#4D8B4F]/5 blur-[80px]" />

                <div className="text-center flex flex-col items-center justify-center w-full h-full p-6">
                  {/* Official Transparent Brand Logo Placement */}
                  <motion.img
                    src={logo}
                    alt="MSS Techno"
                    className="w-[160px] h-auto object-contain"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>

              {/* 1. Scalable Architecture (Top Center) */}
              <motion.div
                animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/95 bg-white/45 px-5 py-2 backdrop-blur-xl shadow-sm text-[12px] font-bold text-neutral-800"
              >
                Scalable Architecture
              </motion.div>

              {/* 2. Advanced Technology (Top Right) */}
              <motion.div
                animate={{ y: [0, -3, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-32 top-6 whitespace-nowrap rounded-full border border-white/95 bg-white/45 px-5 py-2 backdrop-blur-xl shadow-sm text-[12px] font-bold text-neutral-800"
              >
                Advanced Technology
              </motion.div>

              {/* 3. AI Innovation (Bottom Right) */}
              <motion.div
                animate={{ y: [0, -4, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-28 bottom-6 whitespace-nowrap rounded-full border border-white/95 bg-white/45 px-5 py-2 backdrop-blur-xl shadow-sm text-[12px] font-bold text-neutral-800"
              >
                AI Innovation
              </motion.div>

              {/* 4. Cloud Infrastructure (Bottom Center) */}
              <motion.div
                animate={{ y: [0, -5, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-20 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/95 bg-white/45 px-5 py-2 backdrop-blur-xl shadow-sm text-[12px] font-bold text-neutral-800"
              >
                Cloud Infrastructure
              </motion.div>

              {/* 5. Enterprise Security (Bottom Left) */}
              <motion.div
                animate={{ y: [0, -3, 0] }} transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-28 bottom-6 whitespace-nowrap rounded-full border border-white/95 bg-white/45 px-5 py-2 backdrop-blur-xl shadow-sm text-[12px] font-bold text-neutral-800"
              >
                Enterprise Security
              </motion.div>

              {/* 6. Agile Methodology (Top Left) */}
              <motion.div
                animate={{ y: [0, -4, 0] }} transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-32 top-6 whitespace-nowrap rounded-full border border-white/95 bg-white/45 px-5 py-2 backdrop-blur-xl shadow-sm text-[12px] font-bold text-neutral-800"
              >
                Agile Methodology
              </motion.div>

            </div>
          </motion.div>

        </div>
        {/* LOWER TRANSLUCENT CARDS MATIX */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isGreen = feature.accent === "green";

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                whileHover={{ y: -10, scale: 1.015 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => navigate(feature.url)}
                className="cursor-pointer group relative isolate min-h-[260px] overflow-hidden rounded-[38px] border border-white/55 bg-white/[0.055] p-7 backdrop-blur-[20px] backdrop-saturate-[220%] backdrop-brightness-[1.06] shadow-[inset_2px_2px_5px_rgba(255,255,255,0.82),inset_-3px_-3px_7px_rgba(55,70,62,0.09),0_22px_55px_rgba(45,55,50,0.11)] transform-gpu transition-shadow duration-500 hover:shadow-[inset_3px_3px_7px_rgba(255,255,255,0.92),inset_-4px_-4px_9px_rgba(55,70,62,0.11),0_34px_75px_rgba(45,55,50,0.15)]"
              >
                <LiquidGlassLayers />

                {/* MINI WATER DROPLET ICON */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  className={`relative z-10 flex h-14 w-14 items-center justify-center overflow-hidden rounded-[22px] border border-white/65 bg-white/[0.08] backdrop-blur-[18px] backdrop-saturate-[220%] shadow-[inset_2px_2px_5px_rgba(255,255,255,0.80),inset_-2px_-2px_5px_rgba(55,70,62,0.08),0_10px_25px_rgba(45,55,50,0.09)] ${isGreen ? "text-[#39783E]" : "text-[#963B20]"}`}
                >
                  <div className="pointer-events-none absolute left-[12%] top-[8%] h-[35%] w-[55%] rounded-full bg-white/25 blur-md" />
                  <Icon className="relative z-10 h-6 w-6" strokeWidth={2} />
                </motion.div>

                <div className="relative z-10 mt-10">
                  <h3 className={`font-serif text-xl font-semibold text-[#172019] transition-colors duration-500 ${isGreen ? "group-hover:text-[#39783E]" : "group-hover:text-[#8A351B]"}`}>
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#59655F]">
                    {feature.description}
                  </p>

                  {/* METADATA KEYWORDS STACKED FOOTER */}
                  <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[10px] font-bold tracking-tight text-neutral-400">
                    {feature.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="flex items-center gap-1.5">
                        {tagIdx > 0 && <span className="opacity-40">•</span>}
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 z-10 flex h-10 w-10 translate-x-3 items-center justify-center overflow-hidden rounded-full border border-white/60 bg-white/[0.07] opacity-0 backdrop-blur-[16px] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.72),0_8px_20px_rgba(45,55,50,0.08)] transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowRight className={`h-4 w-4 ${isGreen ? "text-[#39783E]" : "text-[#8A351B]"}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { AboutSection };