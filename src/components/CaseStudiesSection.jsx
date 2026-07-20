import { motion } from "motion/react";
import { CASE_STUDIES } from "../data";
import {
  ArrowUpRight,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const CaseStudiesSection = () => {
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
      id="case-studies"
      className="relative overflow-hidden bg-[#EDF2E9] py-24"
    >
      {/* Ambient background styling */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(118deg,#DCEBDA_0%,#F3F5EE_44%,#F5F1EA_70%,#EADFD6_100%)]" />
        <div className="absolute -left-[18%] top-[4%] h-[720px] w-[720px] rounded-full bg-[#67AE61]/30 blur-[150px]" />
        <div className="absolute -right-[17%] top-[28%] h-[680px] w-[680px] rounded-full bg-[#A85D3B]/17 blur-[160px]" />
        <div className="absolute bottom-[-20%] left-[28%] h-[650px] w-[650px] rounded-full bg-white/65 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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
              border-white/90
              bg-white/25
              px-5
              py-2
              shadow-[inset_0_1px_1px_white,0_12px_30px_rgba(44,72,47,0.10)]
              backdrop-blur-[26px]
              backdrop-saturate-[180%]
            "
          >
            <span className="h-2 w-2 rounded-full bg-[#76C76B] shadow-[0_0_12px_rgba(118,199,107,0.8)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#315B36]">
              Featured Case Studies
            </span>
          </div>

          <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-[#182119] sm:text-5xl">
            Real Projects.{" "}
            <span className="italic text-[#4D8B4F]">
              Real Business Impact.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-[#566159] sm:text-base">
            Explore how MSS Techno transforms complex business
            challenges into scalable, secure, and high-performing
            digital experiences.
          </p>
        </motion.div>

        {/* Case Studies Container */}
        <div className="space-y-8">
          {CASE_STUDIES.map((study, index) => {
            const isEven = index % 2 === 0;
            const useBrown = index % 3 === 1;

            const metricParts = study.metrics?.split(" ") || [];
            const metricValue = metricParts[0];
            const metricLabel = metricParts.slice(1).join(" ");

            return (
              <motion.article
                key={study.id}
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.985,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className={`
                  group
                  relative
                  flex
                  flex-col
                  items-center
                  gap-10
                  overflow-hidden
                  rounded-[42px]
                  border
                  border-white/90
                  bg-white/[0.20]
                  p-6
                  shadow-[inset_0_2px_2px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(255,255,255,0.40),0_24px_65px_rgba(47,67,49,0.14)]
                  backdrop-blur-[34px]
                  backdrop-saturate-[195%]
                  transition-[border-color,box-shadow]
                  duration-500
                  hover:border-white
                  hover:shadow-[inset_0_2px_3px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(255,255,255,0.5),0_35px_85px_rgba(47,67,49,0.19)]
                  sm:p-8
                  lg:gap-14
                  lg:p-10
                  ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
                `}
              >
                {/* Refraction styling backgrounds */}
                <div
                  className={`
                    pointer-events-none
                    absolute
                    -left-36
                    -top-44
                    h-[500px]
                    w-[500px]
                    rounded-full
                    blur-[130px]
                    transition-transform
                    duration-1000
                    group-hover:scale-110
                    ${useBrown ? "bg-[#A85B3B]/20" : "bg-[#65AF60]/27"}
                  `}
                />

                <div
                  className={`
                    pointer-events-none
                    absolute
                    -bottom-48
                    -right-36
                    h-[500px]
                    w-[500px]
                    rounded-full
                    blur-[140px]
                    transition-transform
                    duration-1000
                    group-hover:scale-110
                    ${useBrown ? "bg-[#C98969]/15" : "bg-[#9BD393]/20"}
                  `}
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-[55%]
                    top-[-80%]
                    h-[280%]
                    w-[22%]
                    rotate-[18deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/38
                    to-transparent
                    blur-2xl
                    transition-transform
                    duration-[1300ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:translate-x-[700%]
                  "
                />

                {/* Project Image */}
                <div
                  className="
                    relative
                    z-10
                    aspect-[4/3]
                    w-full
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/90
                    shadow-[inset_0_1px_1px_white,0_20px_50px_rgba(45,63,47,0.15)]
                    lg:w-1/2
                  "
                >
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-[1000ms]
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:scale-[1.055]
                    "
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172019]/65 via-[#172019]/5 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-[#4D8B4F]/5 mix-blend-soft-light" />

                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      rounded-full
                      border
                      border-white/40
                      bg-white/15
                      px-4
                      py-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-white
                      shadow-[inset_0_1px_1px_rgba(255,255,255,0.55)]
                      backdrop-blur-[22px]
                    "
                  >
                    {study.category}
                  </div>

                  {/* Metrics Interface */}
                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      right-5
                      overflow-hidden
                      rounded-[25px]
                      border
                      border-white/40
                      bg-white/[0.17]
                      p-5
                      text-white
                      shadow-[inset_0_1px_1px_rgba(255,255,255,0.65),0_15px_35px_rgba(0,0,0,0.18)]
                      backdrop-blur-[26px]
                      backdrop-saturate-[180%]
                    "
                  >
                    <div className="pointer-events-none absolute -left-10 -top-12 h-32 w-32 rounded-full bg-[#75C56D]/30 blur-[45px]" />
                    <div className="relative z-10 flex items-center justify-between gap-5">
                      <div>
                        <div className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                          {metricValue}
                        </div>
                        <div className="mt-1 text-[10px] font-bold uppercase leading-5 tracking-[0.14em] text-white/80">
                          {metricLabel}
                        </div>
                      </div>
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-[18px]
                          border
                          border-white/35
                          bg-white/15
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.55)]
                          backdrop-blur-xl
                        "
                      >
                        <TrendingUp className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study Details */}
                <div className="relative z-10 w-full text-left lg:w-1/2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="
                        rounded-full
                        border
                        border-white/85
                        bg-white/[0.20]
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#526158]
                        shadow-[inset_0_1px_1px_white]
                        backdrop-blur-xl
                      "
                    >
                      {study.category}
                    </span>

                    <span
                      className={`
                        rounded-full
                        border
                        border-white/85
                        bg-white/[0.20]
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        shadow-[inset_0_1px_1px_white]
                        backdrop-blur-xl
                        ${useBrown ? "text-[#8F4D35]" : "text-[#438649]"}
                      `}
                    >
                      {study.type}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-[#182119] sm:text-4xl">
                    {study.title}
                  </h3>

                  <p className="mt-5 text-sm font-medium leading-7 text-[#566159] sm:text-base">
                    {study.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-white/85
                          bg-white/[0.20]
                          px-3.5
                          py-2
                          text-xs
                          font-semibold
                          text-[#506056]
                          shadow-[inset_0_1px_1px_white]
                          backdrop-blur-xl
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-white/60 pt-6">
                    <button
                      type="button"
                      onClick={goToContactSection}
                      className={`
                        group/button
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        px-6
                        py-3
                        text-xs
                        font-bold
                        text-white
                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.30),0_14px_32px_rgba(47,67,49,0.18)]
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        ${
                          useBrown
                            ? "border-[#A86B52] bg-gradient-to-r from-[#87452F] to-[#A85D3B]"
                            : "border-[#6EA968] bg-gradient-to-r from-[#3F7F44] to-[#68A95D]"
                        }
                      `}
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight
                        className="
                          h-3.5
                          w-3.5
                          transition-transform
                          duration-500
                          group-hover/button:translate-x-1
                          group-hover/button:-translate-y-1
                        "
                      />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Portfolio CTA Area */}
        <div className="mt-14 text-center">
          <motion.button
            type="button"
            onClick={goToContactSection}
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
              border-white/90
              bg-white/[0.24]
              px-8
              py-3.5
              text-sm
              font-bold
              text-[#33483A]
              shadow-[inset_0_1px_1px_white,0_16px_38px_rgba(47,67,49,0.12)]
              backdrop-blur-[26px]
              backdrop-saturate-[190%]
            "
            id="case-studies-explore-all-btn"
          >
            <Sparkles className="h-4 w-4 text-[#438649]" />
            <span>View All Case Studies</span>
            <ArrowUpRight className="h-4 w-4 text-[#438649] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export { CaseStudiesSection };