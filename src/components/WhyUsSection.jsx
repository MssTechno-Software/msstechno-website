import { motion } from "motion/react";
import { WHY_US_DATA } from "../data";
import { LucideIcon } from "./LucideIcon";
import {
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

/* =====================================================
    GLOBAL LIGHTWEIGHT HARDWARE-ACCELERATED VARIANTS
===================================================== */
const SHARED_VIEWPORT = { once: true, amount: 0.1 };
const SMOOTH_CURVE = [0.25, 1, 0.5, 1];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: SMOOTH_CURVE }
  }
};

const WhyUsSection = () => {
  const goToContactSection = () => {
    const section = document.getElementById("contact-section");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#EEF2E9] py-24"
    >
      {/* =====================================================
          PREMIUM MSS LIQUID BACKGROUND (STATIC OPTIMIZED)
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.72),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(191,112,81,0.18),transparent_26%),radial-gradient(circle_at_52%_92%,rgba(255,255,255,0.68),transparent_30%),linear-gradient(118deg,#DCEBD8_0%,#EEF2E9_30%,#EEECE3_58%,#E9D8CE_100%)]"
        />

        <div
          className="absolute -left-[15%] top-[5%] h-[650px] w-[650px] rounded-full bg-[#62AD5E]/30 blur-[85px]"
        />

        <div
          className="absolute -right-[12%] top-[20%] h-[650px] w-[650px] rounded-full bg-[#B96B4C]/25 blur-[90px]"
        />

        <div
          className="absolute bottom-[-30%] left-[32%] h-[600px] w-[600px] rounded-full bg-white/50 blur-[80px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={SHARED_VIEWPORT}
          variants={fadeInUpVariants}
          className="mx-auto mb-16 max-w-3xl text-center transform-gpu"
        >
          <div
            className="relative isolate inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/85 bg-white/30 px-5 py-2 shadow-[inset_0_1px_1px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(48,65,50,0.04),0_8px_20px_rgba(48,65,50,0.06)] backdrop-blur-[12px] backdrop-saturate-[190%] before:pointer-events-none before:absolute before:inset-x-[10%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent"
          >
            <span className="relative h-2 w-2 rounded-full bg-[#79C968] shadow-[0_0_10px_rgba(121,201,104,0.7)]" />
            <span className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-[#38573D]">
              Why MSS Techno
            </span>
          </div>

          <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-[#172019] sm:text-5xl">
            Why Businesses Choose{" "}
            <span className="italic text-[#4D8B4F]">MSS Techno</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#526057] sm:text-base">
            We combine innovation, technical excellence, and customer-first thinking to build digital solutions that help businesses move faster and scale with confidence.
          </p>
        </motion.div>

        {/*GLASS BENTO GRID*/}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_US_DATA.map((item, index) => {
            const isLast = index === WHY_US_DATA.length - 1;
            const isBrown = index % 2 !== 0;

            return (
             <motion.div
  key={item.id}
  initial="hidden"
  whileInView="visible"
  viewport={SHARED_VIEWPORT}
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.04,
        ease: SMOOTH_CURVE,
      },
    },
  }}
  whileHover={{ y: -3 }}
  onClick={goToContactSection}
  whileTap={{ scale: 0.98 }}
  className={`cursor-pointer group relative isolate flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[34px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.48)_0%,rgba(255,255,255,0.20)_32%,rgba(255,255,255,0.10)_64%,rgba(255,255,255,0.28)_100%)] p-8 shadow-[inset_0_1px_2px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(61,82,64,0.06),inset_1px_0_1px_rgba(255,255,255,0.2),0_8px_20px_rgba(47,61,49,0.04),0_18px_45px_rgba(47,61,49,0.08)] backdrop-blur-[18px] backdrop-saturate-[180%] transition-transform duration-300 ease-out transform-gpu will-change-transform hover:border-white hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.62)_0%,rgba(255,255,255,0.27)_32%,rgba(255,255,255,0.15)_64%,rgba(255,255,255,0.38)_100%)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),inset_0_-1px_3px_rgba(61,82,64,0.06),0_12px_26px_rgba(47,61,49,0.06),0_24px_55px_rgba(47,61,49,0.12)] before:pointer-events-none before:absolute before:inset-[1px] before:rounded-[33px] before:bg-[linear-gradient(112deg,rgba(255,255,255,0.46)_0%,transparent_19%,transparent_68%,rgba(255,255,255,0.28)_100%)] before:opacity-90 after:pointer-events-none after:absolute after:inset-x-[14%] after:bottom-0 after:h-20 after:rounded-full after:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.42),transparent_68%)] after:blur-xl ${
    isLast
      ? "md:col-span-2 lg:col-span-3 min-h-[330px] border-white/90 bg-[linear-gradient(125deg,rgba(255,255,255,0.54)_0%,rgba(255,255,255,0.24)_36%,rgba(255,255,255,0.14)_68%,rgba(255,255,255,0.42)_100%)] shadow-[inset_0_1px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(122,70,51,0.06),inset_1px_0_2px_rgba(255,255,255,0.3),0_12px_26px_rgba(71,67,49,0.08),0_24px_60px_rgba(112,82,61,0.12)]"
      : ""
  }`}
  id={`why-us-card-${item.id}`}
>
                {/* GLASS COLOR REFRACTION (STATIC) */}
                <div
                  className={`pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full blur-[55px] ${
                    isBrown ? "bg-[#C17453]/20" : "bg-[#6BB665]/22"
                  }`}
                />

                {/* SECOND REFRACTION (STATIC) */}
                <div
                  className={`pointer-events-none absolute -bottom-28 -right-20 h-64 w-64 rounded-full blur-[60px] ${
                    isBrown ? "bg-[#69AD63]/14" : "bg-[#BF7051]/14"
                  }`}
                />

                {/* TOP GLASS SHINE (STATIC) */}
                <div className="pointer-events-none absolute left-[8%] right-[8%] top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 transition-all duration-300 group-hover:left-[3%] group-hover:right-[3%]" />

                {/*  NORMAL CARD CONTENT*/}
                {!isLast && (
                  <>
                    <div className="relative z-10">
                      <div
                        className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/90 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.90),rgba(255,255,255,0.28)_33%,rgba(255,255,255,0.12)_66%)] shadow-[inset_0_1px_2px_rgba(255,255,255,1),inset_0_-2px_3px_rgba(61,82,64,0.08),0_8px_16px_rgba(47,61,49,0.1)] backdrop-blur-[14px] backdrop-saturate-[220%] before:pointer-events-none before:absolute before:left-2 before:top-1.5 before:h-3 before:w-6 before:rounded-full before:bg-white/85 before:blur-[2px] after:pointer-events-none after:absolute after:bottom-2.5 after:right-2.5 after:h-1.5 after:w-1.5 after:rounded-full after:bg-white after:shadow-[-5px_-4px_0_1px_rgba(255,255,255,0.48)]"
                      >
                        <LucideIcon
                          name={item.iconName}
                          className={`relative z-10 h-6 w-6 ${
                            isBrown ? "text-[#A75C40]" : "text-[#438A48]"
                          }`}
                        />
                      </div>

                      <h3 className="mt-7 font-serif text-2xl font-semibold text-[#172019]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm font-medium leading-7 text-[#58665C]">
                        {item.description}
                      </p>

                      {item.tags && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="relative isolate overflow-hidden rounded-full border border-white/85 bg-[linear-gradient(135deg,rgba(255,255,255,0.52),rgba(255,255,255,0.18))] px-3 py-1.5 text-[10px] font-bold text-[#536057] shadow-[inset_0_1px_1px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(61,82,64,0.05),0_4px_10px_rgba(47,61,49,0.04)] backdrop-blur-[12px] backdrop-saturate-[180%] before:pointer-events-none before:absolute before:inset-x-2 before:top-0 before:h-px before:bg-white"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 mt-7 flex items-center justify-between border-t border-white/55 pt-5">
                      <span className="text-xs font-semibold text-[#536057]">
                        Discover our advantage
                      </span>

                      <div
                        className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/85 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.90),rgba(255,255,255,0.24)_55%)] text-[#438A48] shadow-[inset_0_1px_1px_white,inset_0_-1px_2px_rgba(61,82,64,0.06),0_5px_12px_rgba(47,61,49,0.06)] backdrop-blur-[12px] transition-transform duration-300 transform-gpu before:pointer-events-none before:absolute before:left-1.5 before:top-1 before:h-1.5 before:w-3.5 before:rounded-full before:bg-white/90 group-hover:translate-x-0.5"
                      >
                        <ArrowUpRight className="relative z-10 h-4 w-4" />
                      </div>
                    </div>
                  </>
                )}

                {/* =====================================================
                    FULL WIDTH LAST CARD
                ===================================================== */}
                {isLast && (
                  <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                    {/* LEFT */}
                    <div>
                      <div
                        className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white/90 bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.95),rgba(255,255,255,0.30)_35%,rgba(255,255,255,0.12)_68%)] text-[#A75C40] shadow-[inset_0_1px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(122,70,51,0.08),0_10px_24px_rgba(167,92,64,0.1)] backdrop-blur-[14px] backdrop-saturate-[220%] before:pointer-events-none before:absolute before:left-2.5 before:top-1.5 before:h-3.5 before:w-7 before:rounded-full before:bg-white/90 before:blur-[2px] after:pointer-events-none after:absolute after:bottom-3 after:right-3 after:h-2 after:w-2 after:rounded-full after:bg-white after:shadow-[-5px_-4px_0_1px_rgba(255,255,255,0.48)]"
                      >
                        <LucideIcon
                          name={item.iconName}
                          className="relative z-10 h-7 w-7"
                        />
                      </div>

                      <h3 className="mt-6 font-serif text-3xl font-semibold text-[#172019] sm:text-4xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-[540px] text-sm font-medium leading-7 text-[#58665C] sm:text-base">
                        {item.description}
                      </p>
                    </div>

                    {/* RIGHT */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {(item.tags || [
                        "Scalable Engineering",
                        "Secure Architecture",
                        "Human-Centered Design",
                        "Long-Term Partnership",
                      ]).map((tag, tagIndex) => (
                        <div
                          key={tag}
                          className="relative flex items-center gap-3 overflow-hidden rounded-[20px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.46),rgba(255,255,255,0.17))] px-5 py-4 shadow-[inset_0_1px_1px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(61,82,64,0.05),0_6px_16px_rgba(47,61,49,0.05)] backdrop-blur-[12px] backdrop-saturate-[190%] before:pointer-events-none before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent"
                        >
                          <div
                            className={`relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/85 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.88),rgba(255,255,255,0.24)_58%)] shadow-[inset_0_1px_1px_white,inset_0_-1px_2px_rgba(61,82,64,0.05)] before:pointer-events-none before:absolute before:left-1 before:top-1 before:h-1 before:w-3 before:rounded-full before:bg-white/90 ${
                              tagIndex % 2 === 0
                                ? "text-[#438A48]"
                                : "text-[#A75C40]"
                            }`}
                          >
                            <Check className="relative z-10 h-4 w-4" />
                          </div>

                          <span className="text-xs font-bold text-[#4E5C52]">
                            {tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            CTA
        ===================================================== */}
        <div className="mt-14 text-center">
          <motion.button
            type="button"
            onClick={goToContactSection}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.99 }}
            className="group inline-flex items-center gap-3 rounded-full border border-[#B8775C] bg-gradient-to-r from-[#8F432C] to-[#B76547] px-8 py-3.5 text-sm font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.30),0_12px_26px_rgba(143,67,44,0.18)] transition-transform duration-300 transform-gpu"
          >
            <Sparkles className="h-4 w-4" />

            <span>Why Partner With Us</span>

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export { WhyUsSection };