import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { PROCESS_STEPS } from "../data";
import { LucideIcon } from "./LucideIcon";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const ProcessSection = ({ onOpenContact }) => {
  const [activeStepId, setActiveStepId] = useState("step-1");
  const navigate = useNavigate();

  const activeStep =
    PROCESS_STEPS.find((step) => step.id === activeStepId) ||
    PROCESS_STEPS[0];

  return (
    <section
      id="process"
      className="relative overflow-hidden py-24 bg-[#EEF2E9]"
    >
      {/* =====================================================
          PREMIUM MSS AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,#DCEBD8_0%,#EEF2E9_28%,#EEECE3_55%,#EAD8CD_100%)]" />

        <div
          className="
            absolute
            -left-[12%]
            top-[5%]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#5FA85B]/30
            blur-[145px]
          "
        />

        <div
          className="
            absolute
            -right-[10%]
            top-[12%]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#B86949]/26
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-[-35%]
            left-[30%]
            h-[580px]
            w-[580px]
            rounded-full
            bg-[#F5EBDD]/60
            blur-[130px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/70
              bg-white/30
              px-5
              py-2
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_12px_35px_rgba(48,65,50,0.12)]
              backdrop-blur-[22px]
              backdrop-saturate-[180%]
            "
          >
            <span className="h-2 w-2 rounded-full bg-[#79C968] shadow-[0_0_14px_rgba(121,201,104,0.9)]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#38573D]">
              Our Process
            </span>
          </div>

          <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-[#172019] sm:text-5xl">
            From Idea to{" "}
            <span className="italic text-[#4D8B4F]">
              Innovation
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#526057] sm:text-base">
            We combine precision engineering with human-centered
            design to transform ambitious ideas into scalable
            digital experiences.
          </p>
        </motion.div>

      

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* =====================================================
              LEFT PROCESS STEPS
          ===================================================== */}

          <div className="relative space-y-4 lg:col-span-5">
            <div
              className="
                absolute
                bottom-8
                left-[29px]
                top-8
                hidden
                w-[2px]
                bg-gradient-to-b
                from-[#4D8B4F]/20
                via-[#4D8B4F]/35
                to-[#A96043]/25
                sm:block
              "
            />

            {PROCESS_STEPS.map((step, index) => {
              const isActive = step.id === activeStepId;
              const isBrown = index % 2 !== 0;

              return (
                <motion.button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStepId(step.id)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    group
                    relative
                    z-10
                    flex
                    w-full
                    items-center
                    gap-5
                    overflow-hidden
                    rounded-[26px]
                    border
                    p-4
                    text-left
                    cursor-pointer
                    backdrop-blur-[28px]
                    backdrop-saturate-[190%]
                    transition-[background-color,border-color,box-shadow]
                    duration-500

                    ${
                      isActive
                        ? `
                          border-white/85
                          bg-white/38
                          shadow-[inset_0_1px_1px_rgba(255,255,255,1),inset_0_-1px_0_rgba(255,255,255,0.25),0_20px_55px_rgba(42,59,45,0.17)]
                        `
                        : `
                          border-white/55
                          bg-white/20
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_10px_30px_rgba(47,62,49,0.08)]
                          hover:border-white/85
                          hover:bg-white/32
                          hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_18px_45px_rgba(47,62,49,0.13)]
                        `
                    }
                  `}
                >
                  {/* GLASS REFRACTION */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -left-12
                      -top-14
                      h-36
                      w-36
                      rounded-full
                      blur-[42px]

                      ${
                        isBrown
                          ? "bg-[#C87552]/30"
                          : "bg-[#6CB766]/34"
                      }

                      ${
                        isActive
                          ? "opacity-80"
                          : "opacity-35"
                      }
                    `}
                  />

                  {/* TOP GLASS REFLECTION */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-[10%]
                      right-[10%]
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-white
                      to-transparent
                    "
                  />

                  {/* NUMBER GLASS */}

                  <div
                    className={`
                      relative
                      z-10
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-[19px]
                      border
                      font-serif
                      text-sm
                      font-bold
                      backdrop-blur-[20px]
                      transition-all
                      duration-500

                      ${
                        isActive
                          ? isBrown
                            ? `
                              border-[#D89373]/70
                              bg-[#A85F43]/90
                              text-white
                              shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_12px_30px_rgba(168,95,67,0.28)]
                            `
                            : `
                              border-[#82BC79]/70
                              bg-[#4D8B4F]/92
                              text-white
                              shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_12px_30px_rgba(77,139,79,0.28)]
                            `
                          : `
                            border-white/75
                            bg-white/36
                            text-[#425147]
                            shadow-[inset_0_1px_1px_white,0_8px_20px_rgba(45,60,48,0.08)]
                          `
                      }
                    `}
                  >
                    {String(step.num).padStart(2, "0")}
                  </div>

                  {/* CONTENT */}

                  <div className="relative z-10 min-w-0 flex-1">
                    <span className="block font-serif text-lg font-semibold text-[#202A22]">
                      {step.title}
                    </span>

                    <span className="mt-1 block truncate text-xs font-medium text-[#66736A]">
                      {step.description}
                    </span>
                  </div>

                  {isActive && (
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/80
                        bg-white/34
                        text-[#3F8144]
                        shadow-[inset_0_1px_1px_white,0_8px_22px_rgba(48,70,52,0.12)]
                        backdrop-blur-xl
                      "
                    >
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* =====================================================
              RIGHT PREMIUM LIQUID GLASS
          ===================================================== */}

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{
                  opacity: 0,
                  x: 20,
                  scale: 0.985,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -15,
                  scale: 0.985,
                }}
                transition={{
                  duration: 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  flex
                  min-h-[440px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[46px]
                  border
                  border-white/75
                  bg-white/22
                  p-8
                  shadow-[inset_0_1px_1px_rgba(255,255,255,1),inset_0_-1px_0_rgba(255,255,255,0.28),0_40px_100px_rgba(45,58,47,0.18)]
                  backdrop-blur-[38px]
                  backdrop-saturate-[200%]
                  sm:p-10
                "
              >
                {/* GREEN REFRACTION */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-32
                    -top-32
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-[#69B661]/38
                    blur-[100px]
                  "
                />

                {/* BROWN REFRACTION */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-40
                    -right-28
                    h-[440px]
                    w-[440px]
                    rounded-full
                    bg-[#C06F4E]/34
                    blur-[110px]
                  "
                />

                {/* CENTER LIGHT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-[30%]
                    top-[25%]
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-white/40
                    blur-[100px]
                  "
                />

                {/* GLASS TOP SHINE */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-[8%]
                    right-[8%]
                    top-0
                    h-[2px]
                    bg-gradient-to-r
                    from-transparent
                    via-white
                    to-transparent
                  "
                />

                <div className="relative z-10">
                  {/* TITLE */}

                  <div className="flex items-center gap-5">
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        shrink-0
                        items-center
                        justify-center
                        rounded-[22px]
                        border
                        border-white/85
                        bg-white/30
                        text-[#3F8745]
                        shadow-[inset_0_1px_1px_white,0_15px_35px_rgba(60,102,64,0.16)]
                        backdrop-blur-[24px]
                      "
                    >
                      <LucideIcon
                        name={activeStep.iconName}
                        className="h-7 w-7"
                      />
                    </div>

                    <h3 className="font-serif text-3xl font-semibold tracking-tight text-[#172019] sm:text-4xl">
                      {activeStep.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}

                  <p className="mt-8 max-w-xl text-sm font-medium leading-7 text-[#536158] sm:text-base">
                    {activeStep.description} Our team combines
                    secure modern frameworks, scalable engineering
                    practices, and thoughtful design to deliver each
                    milestone with clarity and precision.
                  </p>

                  {/* CHECKLIST */}

                  <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                      "Architecture Reviews",
                      "Security Validation",
                      "Performance Optimization",
                      "Continuous Delivery",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-[18px]
                          border
                          border-white/70
                          bg-white/24
                          px-4
                          py-3
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_8px_24px_rgba(49,63,51,0.06)]
                          backdrop-blur-[18px]
                        "
                      >
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 ${
                            index % 2 === 0
                              ? "text-[#418E47]"
                              : "text-[#B55F3E]"
                          }`}
                        />

                        <span className="text-xs font-bold text-[#4B594F]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BOTTOM */}

                <div className="relative z-10 mt-8 flex justify-end border-t border-white/50 pt-6">
                  <button
                    type="button"
                    onClick={() =>
                      navigate("/", {
                        state: {
                          scrollTo: "contact-section",
                        },
                      })
                    }
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/80
                      bg-white/28
                      px-5
                      py-2.5
                      text-xs
                      font-bold
                      text-[#3D7E42]
                      shadow-[inset_0_1px_1px_white,0_8px_25px_rgba(46,61,49,0.08)]
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-white/42
                    "
                  >
                    Request Process Details

                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}

        <div className="mt-16 text-center">
          <motion.button
            type="button"
            onClick={() =>
              navigate("/solutions", {
                state: {
                  scrollTo: "our-services",
                },
              })
            }
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#86B77B]
              bg-gradient-to-r
              from-[#3D7C42]
              to-[#68A95D]
              px-8
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_18px_42px_rgba(77,139,79,0.30)]
            "
          >
            <Sparkles className="h-4 w-4" />

            <span>Start Your Project</span>

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export { ProcessSection };