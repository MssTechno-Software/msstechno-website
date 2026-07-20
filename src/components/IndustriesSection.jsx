import { motion } from "motion/react";
import { INDUSTRIES_DATA } from "../data";
import { LucideIcon } from "./LucideIcon";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const IndustriesSection = ({ onOpenContact }) => {
  return (
    <section
      id="industries"
      className="
        relative
        overflow-hidden
        bg-[#EDF2E9]
        py-24
      "
    >
      {/* =====================================================
          MSS LIQUID AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(118deg,#DCEBDA_0%,#F3F5EE_44%,#F5F1EA_70%,#EADFD6_100%)]
          "
        />

        {/* GREEN AMBIENT */}

        <div
          className="
            absolute
            -left-[18%]
            top-[2%]
            h-[680px]
            w-[680px]
            rounded-full
            bg-[#67AE61]/30
            blur-[145px]
          "
        />

        {/* SOFT BROWN AMBIENT */}

        <div
          className="
            absolute
            -right-[16%]
            top-[15%]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#A85D3B]/17
            blur-[155px]
          "
        />

        {/* CENTER LIGHT */}

        <div
          className="
            absolute
            bottom-[-30%]
            left-[30%]
            h-[620px]
            w-[620px]
            rounded-full
            bg-white/70
            blur-[135px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
          "
        >
          {/* GLASS BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/90
              bg-white/25
              px-5
              py-2
              shadow-[inset_0_1px_1px_white,0_12px_30px_rgba(44,72,47,0.10)]
              backdrop-blur-[26px]
              backdrop-saturate-[180%]
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#76C76B]
                shadow-[0_0_12px_rgba(118,199,107,0.8)]
              "
            />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#315B36]
              "
            >
              Industries We Serve
            </span>
          </div>

          <h2
            className="
              mt-5
              font-serif
              text-4xl
              font-semibold
              tracking-tight
              text-[#182119]
              sm:text-5xl
            "
          >
            Driving Digital Innovation{" "}
            <span className="italic text-[#4D8B4F]">
              Across Every Industry
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              font-medium
              leading-7
              text-[#566159]
              sm:text-base
            "
          >
            MSS Techno delivers scalable software, AI, cloud,
            and digital transformation solutions tailored to
            the evolving needs of modern industries.
          </p>
        </motion.div>

        {/* =====================================================
            INDUSTRY GLASS GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {INDUSTRIES_DATA.map((ind, index) => {
            const useBrown = index % 3 === 1;

            return (
              <motion.div
                key={ind.id}
                initial={{
                  opacity: 0,
                  y: 24,
                  scale: 0.98,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -7,
                  scale: 1.012,
                  transition: {
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                onClick={() =>
                  onOpenContact(
                    `${ind.title} Solutions`
                  )
                }
                className="
                  group
                  relative
                  flex
                  h-[285px]
                  cursor-pointer
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/90
                  bg-white/[0.20]
                  p-8

                  shadow-[inset_0_2px_2px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(255,255,255,0.40),0_22px_55px_rgba(47,67,49,0.13)]

                  backdrop-blur-[32px]
                  backdrop-saturate-[190%]

                  transition-[border-color,box-shadow]
                  duration-500

                  hover:border-white
                  hover:shadow-[inset_0_2px_3px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(255,255,255,0.5),0_32px_72px_rgba(47,67,49,0.18)]
                "
                id={`industry-card-${ind.id}`}
              >
                {/* =================================================
                    COLOR REFRACTION
                ================================================= */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    -left-24
                    -top-28
                    h-[300px]
                    w-[300px]
                    rounded-full
                    blur-[100px]

                    transition-transform
                    duration-700
                    ease-out

                    group-hover:scale-110

                    ${
                      useBrown
                        ? "bg-[#A85B3B]/24"
                        : "bg-[#65AF60]/30"
                    }
                  `}
                />

                {/* SECOND REFRACTION */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    -bottom-28
                    -right-24
                    h-[300px]
                    w-[300px]
                    rounded-full
                    blur-[105px]

                    transition-transform
                    duration-700
                    ease-out

                    group-hover:scale-110

                    ${
                      useBrown
                        ? "bg-[#C98969]/16"
                        : "bg-[#9BD393]/22"
                    }
                  `}
                />

                {/* =================================================
                    LIQUID REFLECTION SWEEP
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-[80%]
                    top-[-55%]
                    h-[220%]
                    w-[38%]
                    rotate-[18deg]

                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent

                    blur-xl

                    transition-transform
                    duration-[1000ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    group-hover:translate-x-[520%]
                  "
                />

                {/* TOP GLASS REFLECTION */}

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

                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    {/* ICON GLASS */}

                    <div
                      className={`
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-[20px]
                        border
                        border-white/90
                        bg-white/[0.22]

                        shadow-[inset_0_1px_1px_white,0_10px_25px_rgba(48,65,50,0.10)]

                        backdrop-blur-[24px]

                        transition-transform
                        duration-500
                        ease-out

                        group-hover:scale-105

                        ${
                          useBrown
                            ? "text-[#925036]"
                            : "text-[#438649]"
                        }
                      `}
                    >
                      <LucideIcon
                        name={ind.iconName}
                        className="h-6 w-6"
                      />
                    </div>

                    {/* ARROW GLASS */}

                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/90
                        bg-white/[0.20]

                        shadow-[inset_0_1px_1px_white]

                        backdrop-blur-[22px]

                        transition-transform
                        duration-500

                        group-hover:translate-x-1
                        group-hover:-translate-y-1

                        ${
                          useBrown
                            ? "text-[#925036]"
                            : "text-[#438649]"
                        }
                      `}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <h3
                    className="
                      mt-7
                      font-serif
                      text-2xl
                      font-semibold
                      text-[#182119]
                    "
                  >
                    {ind.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      font-medium
                      leading-7
                      text-[#566159]
                    "
                  >
                    {ind.description}
                  </p>
                </div>

                {/* =================================================
                    BOTTOM
                ================================================= */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-2
                    border-t
                    border-white/60
                    pt-5
                  "
                >
                  <span
                    className={`
                      text-xs
                      font-semibold

                      ${
                        useBrown
                          ? "text-[#81503D]"
                          : "text-[#426A47]"
                      }
                    `}
                  >
                    Explore Industry
                  </span>

                  <ArrowUpRight
                    className="
                      h-3.5
                      w-3.5

                      transition-transform
                      duration-500

                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>
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
            onClick={() => onOpenContact()}
            whileHover={{
              y: -3,
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
              border-[#6EA968]

              bg-gradient-to-r
              from-[#3F7F44]
              to-[#68A95D]

              px-8
              py-3.5

              text-sm
              font-bold
              text-white

              shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_16px_38px_rgba(77,139,79,0.28)]

              transition-shadow
              duration-500

              hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_22px_48px_rgba(77,139,79,0.36)]
            "
            id="industries-explore-all-btn"
          >
            <Sparkles
              className="
                h-4
                w-4
                transition-transform
                duration-500
                group-hover:rotate-12
              "
            />

            <span>View All Industries</span>

            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                duration-500
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export { IndustriesSection };