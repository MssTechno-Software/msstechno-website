import React, { useMemo } from "react";
import { motion } from "motion/react";
import { LucideIcon } from "./LucideIcon";
import {
  Rocket,
  Globe2,
  Heart,
  Users,
  Building2,
  Car,
  Route,
  ShieldCheck,
  Map,
} from "lucide-react";

/* =====================================================
    STATIC DATA STRUCTS (UPDATED WITH APPROVED REFERENCES)
===================================================== */

const PARTNERS_DATA = [
  { name: "Leela Honda", icon: Car, type: "green" },
  { name: "TMS", icon: Route, type: "warm" },
  { name: "AIBA", icon: ShieldCheck, type: "green" },
  { name: "PRP Traffic AI", icon: Map, type: "warm" },
  { name: "Quran Lingo", icon: Building2, type: "green" },
];
const STATS_DATA = [
  { value: "50+", label: "Projects Delivered", icon: Rocket, type: "green" },
  { value: "98%", label: "Client Retention", icon: Heart, type: "warm" },
  { value: "30+", label: "Technology Experts", icon: Users, type: "green" },
  { value: "2+", label: "Countries Served", icon: Globe2, type: "warm" },
];


const CUBIC_OUT = [0.25, 1, 0.5, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: CUBIC_OUT,
    },
  },
};

const LiquidGlassLayers = React.memo(({ large = false }) => {
  return (
    <>
      {/* SINGLE WATER LENS */}
      <div
        className={`
          pointer-events-none absolute inset-0 rounded-[inherit] z-0
          bg-[radial-gradient(ellipse_at_24%_6%,rgba(255,255,255,0.46)_0%,rgba(255,255,255,0.10)_24%,transparent_52%),radial-gradient(ellipse_at_82%_92%,rgba(77,139,79,0.07)_0%,transparent_48%)]
          border border-white/60
          shadow-[inset_2px_2px_5px_rgba(255,255,255,0.88),inset_-3px_-3px_7px_rgba(70,80,75,0.10),0_18px_45px_rgba(50,60,55,0.09)]
          ${large ? "backdrop-blur-[16px]" : "backdrop-blur-[12px]"}
        `}
      />

      {/* ONE SOFT WATER REFLECTION */}
      <div
        className="
          pointer-events-none absolute left-[12%] top-[5%] h-[32%] w-[56%] rounded-[100%]
          bg-white/16 blur-[12px]
        "
      />

      <motion.div
        variants={{
          hidden: { x: "-150%" },
          visible: { x: "-150%" },
          hover: { 
            x: "550%",
            transition: { duration: 0.9, ease: "easeInOut" }
          }
        }}
        className="
          pointer-events-none absolute -top-[60%] h-[220%] w-[6%] rotate-[16deg]
          bg-white/20 blur-xl transform-gpu
        "
      />
    </>
  );
});

LiquidGlassLayers.displayName = "LiquidGlassLayers";

/* MAIN COMPONENT PARTNERS SECTION*/

const PartnersSection = () => {
  const scrollingPartners = useMemo(() => [
    ...PARTNERS_DATA,
    ...PARTNERS_DATA,
    ...PARTNERS_DATA,
  ], []);

  const glassClass = `
    relative isolate overflow-hidden border border-white/50 transform-gpu will-change-transform
    bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.025)_42%,rgba(255,255,255,0.012)_70%,rgba(255,255,255,0.07)_100%)]
    backdrop-blur-[14px] backdrop-saturate-[180%] backdrop-brightness-[1.04]
    shadow-[inset_2px_2px_4px_rgba(255,255,255,0.72),inset_-3px_-3px_6px_rgba(70,80,75,0.08),0_20px_45px_rgba(50,55,52,0.08)]
    transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]
  `;

  return (
    <section
      id="partners"
      className="relative overflow-hidden py-20 md:py-28 text-[#1D1D1F] bg-[#F3F4F1] z-10"
    >
      {/* LIQUID ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#E8EEE6_0%,#F4F1EB_30%,#ECEEF0_58%,#F3E8E1_78%,#E4EBDF_100%)]" />

        {/* Optimised Ambient Light Tones downscaled to modern system bounds */}
        <div className="absolute -left-[200px] top-[-150px] h-[700px] w-[700px] rounded-full bg-[#91B98A]/35 blur-[110px]" />
        <div className="absolute right-[-200px] top-[5%] h-[750px] w-[750px] rounded-full bg-[#C88E70]/25 blur-[120px]" />
        <div className="absolute left-[32%] top-[24%] h-[550px] w-[650px] rounded-full bg-[#AEBECB]/25 blur-[120px]" />
        <div className="absolute -left-[180px] bottom-[-250px] h-[700px] w-[800px] rounded-full bg-[#79A875]/25 blur-[120px]" />
        <div className="absolute left-[26%] top-[-200px] h-[600px] w-[750px] rounded-full bg-white/60 blur-[130px]" />

        {/* SOFT LIQUID COLOR FLOW WAVE */}
        <div className="absolute -left-[18%] top-[42%] h-[330px] w-[145%] -rotate-[6deg] rounded-[48%_52%_42%_58%/60%_38%_62%_40%] bg-[linear-gradient(90deg,rgba(77,139,79,0.12)_0%,rgba(255,255,255,0.08)_28%,rgba(151,169,185,0.12)_55%,rgba(138,53,27,0.09)_82%,rgba(255,255,255,0.06)_100%)] blur-[12px]" />

        {/* SOFT LOWER LIQUID WAVE */}
        <div className="absolute -right-[22%] bottom-[-360px] h-[650px] w-[125%] rotate-[6deg] rounded-[55%_45%_52%_48%/45%_58%_42%_55%] bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(77,139,79,0.04),rgba(138,53,27,0.04))] shadow-[inset_0_8px_28px_rgba(255,255,255,0.15)]" />

        {/* RECONSTRUCTED STATIONARY BLUR ORBS */}
        <div className="absolute left-[8%] top-[30%] h-24 w-24 rounded-full bg-[#4D8B4F]/8 blur-[6px]" />
        <div className="absolute right-[12%] top-[42%] h-36 w-36 rounded-full bg-[#8A351B]/6 blur-[8px]" />
        <div className="absolute left-[48%] bottom-[12%] h-28 w-28 rounded-full bg-[#91A7B8]/8 blur-[8px]" />
      </div>

      {/* WRAPPER MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TOP GLOSS BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: CUBIC_OUT }}
          className="mb-8 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`${glassClass} inline-flex items-center gap-3 rounded-full px-5 py-2.5 shadow-md`}
          >
            <LiquidGlassLayers />
            <span className="relative z-10 h-2 w-2 rounded-full bg-[#4D8B4F] shadow-[0_0_12px_rgba(77,139,79,0.8)]" />
            <span className="relative z-10 text-xs font-bold uppercase tracking-[0.15em] text-[#355D38]">
              Trusted by Businesses Worldwide
            </span>
          </motion.div>
        </motion.div>

        {/* MAIN TYPOGRAPHY HEADER */}
        <div className="mx-auto mb-14 md:mb-16 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: CUBIC_OUT }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1] tracking-tight text-[#1D1D1F]"
          >
            Trusted by Companies <br />
            <span className="font-serif italic font-normal text-[#4D8B4F]">Building the Future</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: CUBIC_OUT }}
            className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-7 text-[#5F6862]"
          >
            We help startups, growing businesses, and enterprises accelerate digital transformation through innovative software solutions.
          </motion.p>
        </div>
        {/* HIGH-PERFORMANCE MARQUEE LOGOS */}
        <div className="partners-marquee relative mb-20 md:mb-24 overflow-hidden py-12 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <div className="partners-track flex w-max items-center gap-6 md:gap-10 transform-gpu will-change-transform">
            {scrollingPartners.map((partner, index) => {
              const Icon = partner.icon;
              const isGreen = partner.type === "green";

              return (
                <motion.div
                  key={`${partner.name}-${index}`}
                  initial="hidden"
                  whileHover="hover"
                  className={`${glassClass} group flex shrink-0 cursor-pointer items-center gap-4 rounded-[34px] px-8 py-5 md:px-10 md:py-6 hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,0.88),0_20px_50px_rgba(50,60,55,0.12)] hover:-translate-y-1.5 hover:scale-[1.015]`}
                >
                  <LiquidGlassLayers />
                  
                  {/* ICON BLOCK */}
                  <div className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[22px] border border-white/60 bg-white/10 backdrop-blur-[8px] shadow-[inset_2px_2px_5px_rgba(255,255,255,0.5),0_8px_20px_rgba(50,55,52,0.05)] ${isGreen ? "text-[#39783E]" : "text-[#8A351B]"}`}>
                    <Icon strokeWidth={2} className="h-6 w-6" />
                  </div>

                  <span className="relative z-10 whitespace-nowrap text-base md:text-lg font-semibold text-[#202420]">
                    {partner.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* METRICS METRIC INTERFACES BLOCK */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS_DATA.map((stat, index) => {
            const Icon = stat.icon;
            const isGreen = stat.type === "green";

            return (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                whileHover="hover"
                className={`${glassClass} group flex min-h-[270px] flex-col items-center justify-center rounded-[46px] p-10 text-center hover:shadow-[inset_3px_3px_7px_rgba(255,255,255,0.90),0_25px_65px_rgba(50,60,55,0.13)] hover:-translate-y-2`}
              >
                <LiquidGlassLayers large />

                {/* COMPONENT ICON LAYER */}
                <div
                  className={`relative z-10 mb-7 flex h-[74px] w-[74px] items-center justify-center overflow-hidden rounded-[28px] border border-white/65 bg-white/10 backdrop-blur-[12px] shadow-[inset_2px_2px_5px_rgba(255,255,255,0.7),0_10px_22px_rgba(50,60,55,0.06)] transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-1 ${isGreen ? "text-[#39783E]" : "text-[#8A351B]"}`}
                >
                  <Icon className="h-8 w-8" strokeWidth={2} />
                </div>

                {/* STRATEGIC COUNT VALUE */}
                <div className={`relative z-10 font-serif text-5xl md:text-[54px] font-semibold leading-none ${isGreen ? "text-[#39783E]" : "text-[#8A351B]"}`}>
                  {stat.value}
                </div>

                {/* LABEL */}
                <div className="relative z-10 mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#58635C]">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>
        {`
          @keyframes partnersMarquee {
            from { transform: translate3d(0, 0, 0); }
            to { transform: translate3d(-33.3333%, 0, 0); }
          }
          .partners-track {
            animation: partnersMarquee 42s linear infinite;
          }
          .partners-marquee:hover .partners-track {
            animation-play-state: paused;
          }
          @media (max-width: 767px) {
            .partners-track { animation-duration: 30s; }
          }
        `}
      </style>
    </section>
  );
};

export { PartnersSection };