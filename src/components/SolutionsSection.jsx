import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { SOLUTIONS_DATA } from "../data";
import { LucideIcon } from "./LucideIcon";

const SolutionsSection = () => {
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
      id="solutions"
      className="
        relative
        overflow-hidden
        py-24

        bg-[radial-gradient(circle_at_8%_18%,rgba(77,139,79,0.18),transparent_28%),radial-gradient(circle_at_92%_20%,rgba(107,45,26,0.15),transparent_30%),radial-gradient(circle_at_50%_95%,rgba(77,139,79,0.10),transparent_35%),linear-gradient(135deg,#EEF5ED_0%,#F6F5F0_48%,#F2EAE4_100%)]
      "
    >
      {/* BACKGROUND AMBIENT LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[4%]
          h-[560px]
          w-[560px]
          rounded-full
          bg-[#75A979]/20
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[200px]
          top-[16%]
          h-[580px]
          w-[580px]
          rounded-full
          bg-[#B8795C]/18
          blur-[155px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-300px]
          left-[30%]
          h-[620px]
          w-[620px]
          rounded-full
          bg-white/70
          blur-[160px]
        "
      />

      {/* CONTENT */}
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
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
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
              relative
              inline-flex
              items-center
              gap-2
              overflow-hidden
              rounded-full
              border
              border-white/80
              bg-white/[0.28]
              px-4
              py-2
              backdrop-blur-[18px]
              backdrop-saturate-150
              shadow-[inset_1px_1px_0_rgba(255,255,255,1),inset_-1px_-1px_0_rgba(255,255,255,0.25),0_12px_30px_rgba(55,75,60,0.12)]
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-1/2
                bg-gradient-to-b
                from-white/90
                to-transparent
              "
            />

            <span
              className="
                relative
                z-10
                h-2
                w-2
                rounded-full
                bg-[#4D8B4F]
                shadow-[0_0_10px_rgba(77,139,79,0.55)]
              "
            />

            <span
              className="
                relative
                z-10
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#3C713F]
              "
            >
              Our Services
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              mt-6
              font-serif
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-semibold
              leading-[1.1]
              tracking-[-0.035em]
              text-[#18251D]
            "
          >
            Technology Solutions Built for{" "}
            <span className="text-[#4D8B4F]">
              Modern Businesses
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-5
              max-w-[690px]
              text-sm
              sm:text-base
              leading-[1.8]
              text-[#566159]
            "
          >
            We empower visionaries with deep-tech digital ecosystems,
            blending sophisticated glass-morphism aesthetics with
            industrial-grade engineering performance.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-7
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {SOLUTIONS_DATA.map((sol, index) => {
            const isBrown = index % 3 === 1;

            return (
              <motion.div
                key={sol.id}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                  scale: 1.012,
                }}
                onClick={goToContactSection}
                className="
                  group
                  relative

                  flex
                  h-[260px]
                  cursor-pointer
                  flex-col

                  overflow-hidden
                  rounded-[32px]

                  border
                  border-white/80

                  bg-gradient-to-br
                  from-white/[0.42]
                  via-white/[0.18]
                  to-white/[0.08]

                  p-7
                  sm:p-8

                  backdrop-blur-[22px]
                  backdrop-saturate-[1.4]

                  shadow-[inset_1px_1px_0_rgba(255,255,255,1),inset_-1px_-1px_0_rgba(255,255,255,0.22),0_18px_45px_rgba(38,55,45,0.12)]

                  transition-[box-shadow,border-color]
                  duration-500
                  ease-out

                  hover:border-white

                  hover:shadow-[inset_1px_1px_0_rgba(255,255,255,1),inset_-1px_-1px_0_rgba(255,255,255,0.30),0_28px_65px_rgba(38,55,45,0.18)]
                "
              >
                {/* TOP LIQUID GLASS REFLECTION */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-[20%]
                    -top-[38%]
                    h-[78%]
                    w-[90%]
                    rotate-[-12deg]
                    rounded-[50%]
                    bg-gradient-to-br
                    from-white/90
                    via-white/30
                    to-transparent
                    blur-[18px]
                    opacity-75
                  "
                />

                {/* TOP EDGE */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-[6%]
                    right-[6%]
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white
                    to-transparent
                    opacity-90
                  "
                />

                {/* COLOR REFRACTION */}
                <div
                  className={`
                    pointer-events-none
                    absolute
                    -right-[70px]
                    -top-[70px]
                    h-[210px]
                    w-[210px]
                    rounded-full
                    blur-[65px]
                    opacity-70
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110

                    ${
                      isBrown
                        ? "bg-[#B77A60]/25"
                        : "bg-[#74A878]/25"
                    }
                  `}
                />

                {/* BOTTOM REFRACTION */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-[48%]
                    right-[-8%]
                    h-[80%]
                    w-[80%]
                    rounded-full
                    bg-white/45
                    blur-[42px]
                  "
                />

                {/* SIDE LIGHT */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-[18%]
                    h-[58%]
                    w-px
                    bg-gradient-to-b
                    from-transparent
                    via-white/90
                    to-transparent
                  "
                />

                {/* CARD CONTENT */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    {/* ICON */}
                    <div
                      className={`
                        relative
                        flex
                        h-13
                        w-13
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-[18px]
                        border
                        border-white/90
                        backdrop-blur-[18px]

                        shadow-[inset_1px_1px_0_rgba(255,255,255,1),inset_-1px_-1px_0_rgba(255,255,255,0.22),0_10px_24px_rgba(40,58,46,0.12)]

                        ${
                          isBrown
                            ? "bg-[#6B2D1A]/10 text-[#884832]"
                            : "bg-[#4D8B4F]/12 text-[#39723D]"
                        }
                      `}
                    >
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-x-0
                          top-0
                          h-1/2
                          bg-gradient-to-b
                          from-white/90
                          to-transparent
                        "
                      />

                      <LucideIcon
                        name={sol.iconName}
                        className="
                          relative
                          z-10
                          h-6
                          w-6
                        "
                      />
                    </div>

                    {/* ARROW */}
                    <div
                      className="
                        relative
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-full
                        border
                        border-white/90
                        bg-white/[0.32]
                        text-[#314138]
                        backdrop-blur-[18px]

                        shadow-[inset_1px_1px_0_rgba(255,255,255,1),0_8px_20px_rgba(40,58,46,0.10)]

                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    >
                      <div
                        className="
                          absolute
                          inset-x-0
                          top-0
                          h-1/2
                          bg-white/50
                        "
                      />

                      <ArrowUpRight
                        className="
                          relative
                          z-10
                          h-4
                          w-4
                        "
                      />
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-6
                      font-serif
                      text-xl
                      sm:text-2xl
                      font-bold
                      tracking-[-0.025em]
                      text-[#18251D]
                    "
                  >
                    {sol.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-3
                      max-w-[320px]
                      text-xs
                      sm:text-sm
                      leading-[1.75]
                      text-[#59655D]
                    "
                  >
                    {sol.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <motion.button
            whileHover={{
              y: -3,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={goToContactSection}
            id="solutions-explore-all-btn"
            className="
              group
              relative

              inline-flex
              items-center
              gap-3

              overflow-hidden
              rounded-full

              border
              border-white/90

              bg-gradient-to-br
              from-white/[0.55]
              via-white/[0.25]
              to-white/[0.12]

              px-8
              py-3.5

              text-sm
              font-bold
              text-[#315E35]

              backdrop-blur-[20px]

              shadow-[inset_1px_1px_0_rgba(255,255,255,1),inset_-1px_-1px_0_rgba(255,255,255,0.20),0_16px_38px_rgba(77,139,79,0.16)]

              transition-shadow
              duration-300

              hover:shadow-[inset_1px_1px_0_rgba(255,255,255,1),0_22px_50px_rgba(77,139,79,0.24)]
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-1/2
                bg-gradient-to-b
                from-white/90
                to-transparent
              "
            />

            <span className="relative z-10">
              View All Services
            </span>

            <ArrowUpRight
              className="
                relative
                z-10
                h-4
                w-4
                transition-transform
                duration-300
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

export { SolutionsSection };