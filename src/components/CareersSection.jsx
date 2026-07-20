import { useState } from "react";
import {
  Code,
  Brain,
  Cloud,
  Settings,
  Palette,
  LineChart,
  ClipboardCheck,
  Layers,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";
import logo from "../../assets/images/logo.png";

const ROLES = [
  {
    id: "react-dev",
    title: "React Developer",
    icon: Code,
    exp: "3-5 Years",
    type: "Full-time",
    location: "Hyderabad",
    description:
      "Build premium interactive front-ends using React, TypeScript, Tailwind, and motion engines with extreme precision.",
    orbitClass:
      "top-[8%] left-1/2 -translate-x-1/2 -translate-y-1/2",
    xPercent: "50%",
    yPercent: "8%",
    accent: "green",
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    icon: Brain,
    exp: "2-4 Years",
    type: "Remote",
    location: "India (Global)",
    description:
      "Integrate LLMs, vector search databases, agentic workflows, and predictive analytics tools into enterprise software.",
    orbitClass:
      "top-[21%] left-[79%] -translate-x-1/2 -translate-y-1/2",
    xPercent: "79%",
    yPercent: "21%",
    accent: "brown",
  },
  {
    id: "cloud-arch",
    title: "Cloud Architect",
    icon: Cloud,
    exp: "5+ Years",
    type: "Hybrid",
    location: "Hyderabad",
    description:
      "Design fault-tolerant cloud infrastructures, serverless pipelines, and secure cloud environments on AWS and GCP.",
    orbitClass:
      "top-1/2 left-[91%] -translate-x-1/2 -translate-y-1/2",
    xPercent: "91%",
    yPercent: "50%",
    accent: "green",
  },
  {
    id: "devops-eng",
    title: "DevOps Engineer",
    icon: Settings,
    exp: "3+ Years",
    type: "Full-time",
    location: "Hyderabad",
    description:
      "Maintain CI/CD automation, Kubernetes clusters, Docker configurations, and rigorous platform monitoring setups.",
    orbitClass:
      "top-[79%] left-[79%] -translate-x-1/2 -translate-y-1/2",
    xPercent: "79%",
    yPercent: "79%",
    accent: "brown",
  },
  {
    id: "uiux-designer",
    title: "UI/UX Designer",
    icon: Palette,
    exp: "2-5 Years",
    type: "Remote",
    location: "India (Global)",
    description:
      "Conceptualize high-fidelity design prototypes, bento grids, custom branding, and interactive micro-animations.",
    orbitClass:
      "top-[92%] left-1/2 -translate-x-1/2 -translate-y-1/2",
    xPercent: "50%",
    yPercent: "92%",
    accent: "green",
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    icon: LineChart,
    exp: "1-3 Years",
    type: "Full-time",
    location: "Hyderabad",
    description:
      "Analyze user behaviors, operational metrics, and model performances to deliver actionable visualization insights.",
    orbitClass:
      "top-[79%] left-[21%] -translate-x-1/2 -translate-y-1/2",
    xPercent: "21%",
    yPercent: "79%",
    accent: "brown",
  },
  {
    id: "qa-engineer",
    title: "QA Engineer",
    icon: ClipboardCheck,
    exp: "2+ Years",
    type: "Hybrid",
    location: "Hyderabad",
    description:
      "Lead automated integration tests, API performance audits, security safeguards, and manual usability passes.",
    orbitClass:
      "top-1/2 left-[9%] -translate-x-1/2 -translate-y-1/2",
    xPercent: "9%",
    yPercent: "50%",
    accent: "green",
  },
  {
    id: "fullstack-dev",
    title: "Full Stack Dev",
    icon: Layers,
    exp: "4+ Years",
    type: "Full-time",
    location: "Hyderabad",
    description:
      "Bridge system APIs with React frontends while maintaining solid Node.js and Python server architectures.",
    orbitClass:
      "top-[21%] left-[21%] -translate-x-1/2 -translate-y-1/2",
    xPercent: "21%",
    yPercent: "21%",
    accent: "brown",
  },
];

const CareersSection = () => {
  const [hoveredRoleId, setHoveredRoleId] = useState(null);

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
      id="careers-section"
      className="
        relative
        overflow-hidden
        bg-[#F5F6F1]
        py-24
      "
    >
      {/* Liquid background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-[15%]
            top-[5%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#8BC47A]/20
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-[12%]
            top-[20%]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#C98566]/20
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-[-15%]
            left-[30%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-white/80
            blur-[150px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          md:px-12
        "
      >
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/80
              bg-white/35
              px-4
              py-2
              shadow-[inset_0_1px_0_white,0_12px_35px_rgba(50,60,50,0.06)]
              backdrop-blur-[24px]
            "
          >
            <Sparkles className="h-3.5 w-3.5 text-[#4D8B4F]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#4D8B4F]
              "
            >
              We Are Hiring
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              font-serif
              text-4xl
              font-semibold
              leading-tight
              tracking-[-0.035em]
              text-[#202821]
              md:text-5xl
            "
          >
            Build the{" "}
            <span className="italic text-[#4D8B4F]">
              Future
            </span>{" "}
            with{" "}
            <span className="text-[#6B2D1A]">
              MSS Techno
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-[1.8]
              text-[#626C63]
              md:text-[17px]
            "
          >
            Join engineers, designers, AI builders, and cloud
            architects crafting secure, intelligent, and
            high-performance digital ecosystems.
          </motion.p>
        </div>

        {/* Desktop Orbit Layout */}
        <div
          className="
            relative
            mx-auto
            mb-16
            mt-8
            hidden
            aspect-[16/10]
            w-full
            max-w-[1120px]
            items-center
            justify-center
            lg:flex
          "
        >
          <svg
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              h-full
              w-full
              overflow-visible
            "
          >
            <ellipse
              cx="50%"
              cy="50%"
              rx="40%"
              ry="40%"
              fill="none"
              stroke="rgba(77,139,79,0.10)"
              strokeWidth="1"
              strokeDasharray="7 8"
            />

            <ellipse
              cx="50%"
              cy="50%"
              rx="25%"
              ry="25%"
              fill="none"
              stroke="rgba(107,45,26,0.07)"
              strokeWidth="1"
            />

            {ROLES.map((role) => {
              const isHovered = hoveredRoleId === role.id;
              const hasActiveHover = hoveredRoleId !== null;
              const lineColor = role.accent === "green" ? "#4D8B4F" : "#8B432C";

              return (
                <line
                  key={role.id}
                  x1="50%"
                  y1="50%"
                  x2={role.xPercent}
                  y2={role.yPercent}
                  stroke={isHovered ? lineColor : "rgba(91,105,94,0.35)"}
                  strokeWidth={isHovered ? "2" : "1"}
                  strokeDasharray={isHovered ? "0" : "5 6"}
                  style={{
                    opacity: isHovered
                      ? 0.75
                      : hasActiveHover
                        ? 0.08
                        : 0.3,
                    transition: "opacity 300ms ease, stroke 300ms ease",
                  }}
                />
              );
            })}
          </svg>

          {/* Center Brand Plate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              left-1/2
              top-1/2
              z-20
              flex
              h-[190px]
              w-[190px]
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-white/80
              bg-white/[0.38]
              shadow-[inset_2px_2px_2px_rgba(255,255,255,0.95),inset_-2px_-2px_4px_rgba(77,139,79,0.05),0_30px_80px_rgba(50,65,52,0.13)]
              backdrop-blur-[32px]
              backdrop-saturate-150
            "
          >
            <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[#72AA69]/30 blur-[45px]" />
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#B66A4E]/25 blur-[45px]" />
            <div className="pointer-events-none absolute inset-[13px] rounded-full border border-white/75 bg-white/20 shadow-[inset_0_1px_0_white] backdrop-blur-xl" />
            
            <img
              src={logo}
              alt="MSS Techno Logo"
              className="
                relative
                z-10
                h-[125px]
                 w-[125px]
                object-contain
               drop-shadow-[0_12px_20px_rgba(48,65,50,0.12)]
              "
            />
            <div className="pointer-events-none absolute left-[25%] top-[13px] h-[2px] w-[50%] rounded-full bg-white/90 blur-[1px]" />
          </motion.div>

          {/* Role Cards List */}
          {ROLES.map((role) => {
            const isHovered = hoveredRoleId === role.id;
            const hasActiveHover = hoveredRoleId !== null;
            const Icon = role.icon;
            const isGreen = role.accent === "green";

            return (
              <motion.div
                key={role.id}
                onMouseEnter={() => setHoveredRoleId(role.id)}
                onMouseLeave={() => setHoveredRoleId(null)}
                animate={{
                  opacity: hasActiveHover && !isHovered ? 0.72 : 1,
                  scale: isHovered ? 1.04 : 1,
                  y: isHovered ? -5 : 0,
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  absolute
                  ${role.orbitClass}
                  z-10
                  w-[238px]
                  cursor-pointer
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-white/75
                  bg-white/[0.36]
                  p-4
                  shadow-[inset_1px_1px_0_rgba(255,255,255,0.95),0_14px_40px_rgba(45,60,48,0.08)]
                  backdrop-blur-[26px]
                  backdrop-saturate-150
                  transform-gpu
                `}
              >
                <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div
                  className={`
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-28
                    w-28
                    rounded-full
                    blur-[45px]
                    transition-opacity
                    duration-300
                    ${isHovered ? "opacity-30" : "opacity-10"}
                    ${isGreen ? "bg-[#4D8B4F]" : "bg-[#A65B3F]"}
                  `}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-[14px]
                        border
                        border-white/75
                        bg-white/40
                        shadow-[inset_0_1px_0_white]
                        backdrop-blur-xl
                        ${isGreen ? "text-[#4D8B4F]" : "text-[#8B432C]"}
                      `}
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </div>

                    <span
                      className={`
                        rounded-full
                        border
                        border-white/75
                        bg-white/38
                        px-2.5
                        py-1
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        backdrop-blur-xl
                        ${isGreen ? "text-[#4D8B4F]" : "text-[#8B432C]"}
                      `}
                    >
                      Now Hiring
                    </span>
                  </div>

                  <h4
                    className="
                      mt-3
                      text-sm
                      font-bold
                      tracking-tight
                      text-[#252D26]
                    "
                  >
                    {role.title}
                  </h4>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0,
                      marginTop: isHovered ? 10 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div
                      className="
                        flex
                        flex-wrap
                        gap-1.5
                        text-[9px]
                        text-[#667067]
                      "
                    >
                      <span className="flex items-center gap-1 rounded-lg border border-white/77 bg-white/35 px-2 py-1">
                        <Clock className="h-3 w-3" />
                        {role.exp}
                      </span>
                      <span className="flex items-center gap-1 rounded-lg border border-white/77 bg-white/35 px-2 py-1">
                        <Briefcase className="h-3 w-3" />
                        {role.type}
                      </span>
                    </div>

                    <p className="mt-2.5 text-[10px] leading-[1.55] text-[#5D675F]">
                      {role.description}
                    </p>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goToContactSection();
                      }}
                      className={`
                        group/btn
                        mt-3
                        flex
                        items-center
                        gap-1
                        text-[10px]
                        font-bold
                        ${isGreen ? "text-[#4D8B4F]" : "text-[#8B432C]"}
                      `}
                    >
                      Apply Now
                      <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Grid Layout */}
        <div
          className="
            mt-4
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:hidden
          "
        >
          {ROLES.map((role, index) => {
            const Icon = role.icon;
            const isGreen = role.accent === "green";

            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                whileHover={{ y: -4 }}
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/75
                  bg-white/[0.35]
                  p-6
                  shadow-[inset_1px_1px_0_rgba(255,255,255,0.95),0_18px_50px_rgba(45,60,48,0.08)]
                  backdrop-blur-[26px]
                "
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-[15px]
                      border
                      border-white/80
                      bg-white/40
                      ${isGreen ? "text-[#4D8B4F]" : "text-[#8B432C]"}
                    `}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <span
                    className={`
                      rounded-full
                      bg-white/40
                      px-3
                      py-1.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-wider
                      ${isGreen ? "text-[#4D8B4F]" : "text-[#8B432C]"}
                    `}
                  >
                    Now Hiring
                  </span>
                </div>

                <h3
                  className="
                    mt-5
                    font-serif
                    text-xl
                    font-bold
                    text-[#252D26]
                  "
                >
                  {role.title}
                </h3>

                <div
                  className="
                    mt-3
                    flex
                    flex-wrap
                    gap-2
                    text-[11px]
                    text-[#657067]
                  "
                >
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {role.exp}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-3.5 w-3.5" />
                    {role.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {role.location}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-[1.7] text-[#5E695F]">
                  {role.description}
                </p>

                <button
                  onClick={goToContactSection}
                  className={`
                    mt-6
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    px-5
                    py-3
                    text-xs
                    font-bold
                    text-white
                    shadow-md
                    ${isGreen ? "bg-[#4D8B4F]" : "bg-[#6B2D1A]"}
                  `}
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Global Section Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-16
            space-y-5
            text-center
          "
        >
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={goToContactSection}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/80
              bg-white/40
              px-8
              py-3.5
              text-sm
              font-bold
              text-[#6B2D1A]
              shadow-[inset_0_1px_0_white,0_15px_40px_rgba(50,60,50,0.08)]
              backdrop-blur-2xl
            "
          >
            Explore All Open Positions
            <ArrowRight className="h-4 w-4 text-[#4D8B4F]" />
          </motion.button>

          <p className="text-xs text-[#657067] sm:text-sm">
            Don't see your ideal role listed above? We always
            welcome exceptional builders. Email us at{" "}
            <a
              href="mailto:careers@msstechno.com"
              className="
                font-semibold
                text-[#4D8B4F]
                hover:underline
              "
            >
              careers@msstechno.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export { CareersSection };