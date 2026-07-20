import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

/* ================================================= */
/* TECH STACK DATA */
/* ================================================= */

const TECH_STACK = [
  {
    name: "React",
    category: "Frontend",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-Rcz-r4uc7OTpVgzeGv0WD4O36CvPebNyA4TgsPvtu3xz8INa-Ruz_SRKtvqui2sLjsJfgAGind3NlQ-41jkELkkta6aBUR8oepz9s6cNqCFQDKzlVqZKre9TyJXHSN0Fn4FZGHinDO-QTkrfqwUVMiv3gDc9JxKSUGLmbCJ8GdNXADlddJrUf4Oi-BJQOPNc4m2Rq6IhdoOV75pL9UvhawZWh4RCSAXxt3pnXWvpTwC-odm6lkOq",
  },
  {
    name: "Next.js",
    category: "Frontend",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrAU5Qm-vq2U5ta-fMAhFMGJAPDnNkoXFbfDCoJ8pl6npgJRoD_di-BTBjdXGSoK_nbfq1KynBzDJDRUSmVr6oIqJZuIPjNiyjuS9ye4ZK8NBQM6vV3s7pG74zzPPOQgdgt_fgU9i0ZANOrmvXam9QQ4w64IWHgYINo9M6dYANXscdV3h7Juhw1cCr5RasyiwQ9OsA-8npBF3XAgAs-UYIfiQeMBzqrjKKmT5Vc2vDSNvHym-NMSTA",
  },
  {
    name: "Node.js",
    category: "Backend",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVBLzmxBUnSVnkSY--0PEcP_ZFBH42ERBXCXvYv1nidycPX5090DfgQfKUHMv7ajAkVMCLfIDaHTJag3ag3X-FyP62IwjMNPNFz3C6LfXTIY7bZ6ZLKEVQUBK3X9SNf5T1at6DV13sbev1ue5JkFTAvgRc-tGkAPLECrIbBqAHHdgRPHxIjkFb3J97mKKTcuxWp9D3erlyrc9-SH3lPdS_eHeUdsjAKI1xhleV_0eZ7VcBOa5FNbqa",
  },
  {
    name: "Python",
    category: "Backend",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCii1QG3sMAN1wf8WTloNqgFoFssPu_3LBkdDSM9b3Kn9j3ZmcCDmhNd0UfTCMosL4ud9SGY2xqIbpFs9xUn5JFVFxk7-hw1-yr185lqNHtFb6a2wJmsL_NUerczs-beZjl8D-T3oL79yrMbz20J1uURACYBXV74fz2oYPOJH9D2PU0m_Z0wfcFyTfxJkmU0xnadB-yXZaFue2UolALqPYYuItYQDzozNp8g7nEAUto5omUgn5ZydK3",
  },
  {
    name: "AWS",
    category: "Cloud",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbqz5QEeVvpIn3xPn9OjxliJKmJ5t7iRxuuQMNQ7xRAMMOHzp4NIeQBEdqtdIEd2pi-CFqfZ-K9QBqY2fJ3ZDETnL-hXeiOr-adnuYUt5Zr2mFVSooKCFCTfxbu1wHrnC5fLNwlP91q0a-Npk4r32XcPhUM77UVkASp2eAmSKr00oxgyqD7onq8tri3CQoagv8ZUJYw_54VxVXhRccK78LK1fOLyc7cSugmZvpmtpHOW83Py-VmkxM",
  },
  {
    name: "Docker",
    category: "DevOps",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCce-BUe3OtSmxnRJ3ASCD_kjrUfG7AzF06AN35nuy3je0bHDwqiGhabCYrA0K0EAtB224MNs-JGeLMQlObPdR3uJa9xJ7ffqNTpP4sOG4zVfff-FMt39NXZtUIdPidVFoKGk5PnReXfx4eAbuIjoeT0EXFI69EsUH8W9jmhpgRXzMJq5F9lV7dkM82JqscHGraNmDNS7NAJnAS6qfYiOZFw3Djh_zvOjuwDEN1gTluFFk3IRJMtfWg",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBf_Qx_7b5lv_IwUFq6pWtv0aMfAh4iEcyxxzea9A114Zk2-AaC2QAEwnNSoA2juuWY7wYmiwFl976Z26ALsqJGO3AcZ5vhIM5SiMa6TwZGl24opWz8PQBTybcgVxBPzcIzJQA8AiihMjDaSh26xoAcptU2yxpeXblj-zUjN2oOcyXnQnxM8hfEf5xFcpqriqkBw9ChZy4hVNjzV4YHONzA7i-SKhScImIoBRHhK-NedDjzbsiIf6A2",
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXbtcbHaONVIxD0zmY5-dKMdvFpM_1Ea66ezwhs9jHh2BGEwZ4cBMr4zi3g2QgNHXAZ0elGqWxrRUi8Tp5iME4PXSHFf8rsEVWG22Mc90r9-CXJRPPqUoRAduMK_BsyQ4YsEbjDpQDRCN65L_cUwjlHrs2ywW3TxqKSM75n0jPTpQwrkgxk-t8W-vlnzV2wJDiEcSPQxwPtoRtq_Y63tyv1P_JrC57WWgPWC7oi2lZrB1yNFP98JYW",
  },
  {
    name: "Java",
    category: "Backend",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbCuxDfEOS1SBcp4--zvHREIQcyE9eieDmiJCpGJ5kXcKm-YWOpfL8F3zds172B8N3qoZUMffkdyAgBg2V4tjBBnqQAAP-4P-6FEsTGpoGj_mK67IcqZQX5bqpCj9CvPtcSg6C5SNYUfJ4G5yJyafiy2VUbetESTdlbyvVLxN4eTP4nGhjy77gfGj866oQ11aLSRxBKDqxX1IAhI4QMeCmCZ9xGJZVMRn8oSBud2v3NW3HnQVvWzUi",
  },
  {
    name: "Angular",
    category: "Frontend",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuzPoJgVn1xQxcwLByUmyINzL4QPg13sA8JFoeFOYIV5jpLbQJLZ5Yy05wd08e6sql-9fQjisJUbcUxlLcOKzPb9Fy0raHpbb30UUWmGAHikqyb6tuc55YlN2Zr2rOzeaWvh5mEojk7vqojMPMlZPCW3LpzGGjdSS-slRi5GVhQxRXitt_xWTNa1--E2dnSrAtathC4lQ8rLKaXmiqci-UrpGmPzgm3dG5_o0HZsFLcoaEqgMp7bbr",
  },
  {
    name: "Azure",
    category: "Cloud",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXLvd_aq6HwZ1zMDQHbfZumYwA_u3YWQ8GfISucAfaIrOjCDi979hMB2RLBoR_oe58LpdUuw76rSNjWwMyWjkWOBPZlcHnFOo5uKerxAD5gn4D0QbZXVjfSynl3L780ZkWP-L_sy4ZTJ_5nE8qPVhQE6yZxif-JKaq77GYv2ndJ5LiaRb6luTpV2Rs9GrNPHS4w0FZXjFcCq8tFO5KMD9pu_Pk1lnmmJJvmFGHYK8AEg8GvUs-XwWU",
  },
  {
    name: "MongoDB",
    category: "Database",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpvLIVnsCeTxmNVHJbb74nU3c-qrq_keyxkhy5KqcNGheYsFfsCTDd5aE-cfUyN0UVA2xjO5KISE7oOmz6CUAcKXcFi_7y-0aGNcyhF-YOiQexLwwVe99s2nezLLaPQYZ3wR0r_NVM5ttnNLIkee-peHH2LVLwOjUxSbQ2uBHEoAJGX5yqYxPZOyAz_QVD8lHjHdej17VsvUy6IUlcZy2foNzU826iVIKOc5fYHsq3srx7I6rEeNXc",
  },
];

/* ================================================= */
/* APPLE CLEAR LIQUID GLASS */
/* ================================================= */

const LiquidGlassLayers = () => {
  return (
    <>
      {/* OPTICAL CLEAR GLASS */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[1px]
          rounded-[inherit]

          bg-[linear-gradient(145deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.018)_38%,rgba(255,255,255,0.008)_65%,rgba(255,255,255,0.055)_100%)]

          shadow-[inset_1px_1px_1px_rgba(255,255,255,0.82),inset_-1px_-1px_2px_rgba(40,50,46,0.08)]
        "
      />

      {/* SOFT CURVED REFLECTION */}

      <div
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-[4%]

          h-[18%]
          w-[62%]

          rotate-[-4deg]

          rounded-[100%]

          bg-white/20

          blur-[12px]
        "
      />

      {/* LOWER REFRACTION */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[3%]
          right-[7%]

          h-[18%]
          w-[50%]

          rounded-[100%]

          bg-white/[0.06]

          blur-[18px]
        "
      />

      {/* MOVING OPTICAL LIGHT */}

      <motion.div
        animate={{
          x: ["-400%", "1100%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatDelay: 7,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute

          -top-[50%]

          h-[200%]
          w-[3%]

          rotate-[18deg]

          bg-white/18

          blur-xl
        "
      />
    </>
  );
};

/* ================================================= */
/* TECH STACK SECTION */
/* ================================================= */

const TechStackSection = ({ onOpenContact }) => {
  const glassClass = `
    relative
    isolate
    overflow-hidden

    border
    border-white/45

    bg-white/[0.025]

    backdrop-blur-[6px]
    backdrop-saturate-[145%]
    backdrop-brightness-[1.04]
    backdrop-contrast-[1.02]

    shadow-[inset_1px_1px_1px_rgba(255,255,255,0.90),inset_-1px_-1px_1px_rgba(50,60,55,0.08),0_18px_45px_rgba(45,55,50,0.08)]
  `;

  return (
    <section
      id="tech-stack"
      className="
        relative
        overflow-hidden
        bg-[#F3F4F1]
        py-24
        md:py-28
      "
    >
      {/* ================================================= */}
      {/* LIQUID BACKGROUND */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[linear-gradient(135deg,#DDE9DA_0%,#F3F1E9_30%,#E7ECEC_56%,#F0DDD3_78%,#DFE8DA_100%)]
        "
      />

      {/* GREEN ATMOSPHERE */}

      <div
        className="
          pointer-events-none
          absolute

          -left-[280px]
          top-[-220px]

          h-[900px]
          w-[900px]

          rounded-full

          bg-[#79A875]/42

          blur-[180px]
        "
      />

      {/* BROWN ATMOSPHERE */}

      <div
        className="
          pointer-events-none
          absolute

          right-[-320px]
          top-[8%]

          h-[850px]
          w-[850px]

          rounded-full

          bg-[#C98E70]/34

          blur-[190px]
        "
      />

      {/* SILVER REFRACTION */}

      <div
        className="
          pointer-events-none
          absolute

          left-[30%]
          top-[24%]

          h-[700px]
          w-[800px]

          rounded-full

          bg-[#AEBECB]/28

          blur-[190px]
        "
      />

      {/* PEARL LIGHT */}

      <div
        className="
          pointer-events-none
          absolute

          left-[20%]
          top-[-300px]

          h-[750px]
          w-[900px]

          rounded-full

          bg-white/70

          blur-[190px]
        "
      />

      {/* LOWER GREEN */}

      <div
        className="
          pointer-events-none
          absolute

          -left-[240px]
          bottom-[-380px]

          h-[850px]
          w-[900px]

          rounded-full

          bg-[#79A875]/30

          blur-[190px]
        "
      />

      {/* ================================================= */}
      {/* SOFT LIQUID FLOW */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute

          -left-[20%]
          top-[46%]

          h-[420px]
          w-[145%]

          -rotate-[5deg]

          rounded-[48%_52%_42%_58%/60%_38%_62%_40%]

          bg-[linear-gradient(90deg,rgba(77,139,79,0.13),rgba(255,255,255,0.10),rgba(145,167,184,0.14),rgba(107,45,26,0.11))]

          blur-[18px]
        "
      />

      {/* BACKGROUND BUBBLES */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[28%]
          h-28
          w-28
          rounded-full
          bg-[#4D8B4F]/10
          blur-[10px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[45%]
          h-40
          w-40
          rounded-full
          bg-[#8A351B]/10
          blur-[14px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[48%]
          bottom-[8%]
          h-32
          w-32
          rounded-full
          bg-[#91A7B8]/12
          blur-[12px]
        "
      />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-7xl

          px-4

          text-center

          sm:px-6
          lg:px-8
        "
      >
        {/* ================================================= */}
        {/* BADGE */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`
              ${glassClass}

              inline-flex
              items-center
              gap-3

              rounded-full

              px-5
              py-2.5
            `}
          >
            <LiquidGlassLayers />

            <span
              className="
                relative
                z-10

                h-2
                w-2

                rounded-full

                bg-[#4D8B4F]
              "
            />

            <span
              className="
                relative
                z-10

                text-[11px]
                font-bold
                uppercase

                tracking-[0.18em]

                text-[#355D38]
              "
            >
              Technology Stack
            </span>
          </motion.div>
        </motion.div>

        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <motion.div
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
          }}
          transition={{
            duration: 0.65,
            delay: 0.08,
          }}
          className="
            mx-auto
            mt-8
            max-w-4xl
          "
        >
          <h2
            className="
              font-serif

              text-[40px]
              font-medium

              leading-[1.08]
              tracking-[-0.035em]

              text-[#172019]

              sm:text-5xl
              lg:text-[58px]
            "
          >
            Modern Technologies Powering{" "}

            <span className="italic text-[#4D8B4F]">
              Digital Innovation
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl

              text-base
              leading-8

              text-[#53605A]

              md:text-[17px]
            "
          >
            We leverage a world-class ecosystem of frameworks and tools to
            build scalable, high-performance software tailored for enterprise
            excellence.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* TECH CARDS */}
        {/* ================================================= */}

        <div
          className="
            mt-16

            grid
            grid-cols-2

            gap-4

            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
          "
        >
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={tech.name}
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
                amount: 0.1,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.025,
              }}
              whileHover={{
                y: -10,
                scale: 1.025,
              }}
              className={`
                ${glassClass}

                group

                min-h-[210px]

                rounded-[38px]

                p-5

                transform-gpu
                will-change-transform

                transition-shadow
                duration-500

                hover:border-white/65

                hover:bg-white/[0.045]

                hover:shadow-[inset_1px_1px_2px_rgba(255,255,255,1),inset_-1px_-1px_2px_rgba(50,60,55,0.08),0_28px_65px_rgba(45,55,50,0.12)]
              `}
            >
              <LiquidGlassLayers />

              <div
                className="
                  relative
                  z-10

                  flex
                  h-full
                  min-h-[170px]

                  flex-col

                  items-center
                  justify-between

                  gap-5
                "
              >
                {/* ================================================= */}
                {/* CLEAR LIQUID LOGO BUBBLE */}
                {/* ================================================= */}

                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    relative

                    flex
                    h-[72px]
                    w-[72px]

                    items-center
                    justify-center

                    overflow-hidden

                    rounded-[26px]

                    border
                    border-white/45

                    bg-white/[0.025]

                    backdrop-blur-[5px]
                    backdrop-saturate-[150%]

                    shadow-[inset_1px_1px_1px_rgba(255,255,255,0.90),inset_-1px_-1px_1px_rgba(50,60,55,0.06),0_8px_20px_rgba(45,55,50,0.06)]
                  "
                >
                  <div
                    className="
                      pointer-events-none
                      absolute

                      left-[10%]
                      top-[7%]

                      h-[22%]
                      w-[55%]

                      rounded-full

                      bg-white/22

                      blur-[8px]
                    "
                  />

                  <img
                    src={tech.logoUrl}
                    alt={`${tech.name} Logo`}
                    referrerPolicy="no-referrer"
                    className="
                      relative
                      z-10

                      h-10
                      w-10

                      object-contain

                      transition-transform
                      duration-300

                      group-hover:scale-110
                    "
                  />
                </motion.div>

                {/* ================================================= */}
                {/* TEXT */}
                {/* ================================================= */}

                <div>
                  <h3
                    className="
                      font-serif

                      text-lg
                      font-semibold

                      text-[#172019]
                    "
                  >
                    {tech.name}
                  </h3>

                  <span
                    className="
                      relative

                      mt-2

                      inline-flex

                      overflow-hidden

                      rounded-full

                      border
                      border-white/45

                      bg-white/[0.025]

                      px-3
                      py-1

                      backdrop-blur-[5px]

                      text-[9px]
                      font-bold
                      uppercase

                      tracking-[0.12em]

                      text-[#526059]

                      shadow-[inset_1px_1px_1px_rgba(255,255,255,0.72)]
                    "
                  >
                    {tech.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================================================= */}
        {/* CTA */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-16"
        >
          <button
            onClick={() =>
              onOpenContact?.(
                "Enterprise Technology Stack Integration"
              )
            }
            id="tech-stack-cta-btn"
            className="
              group

              relative

              inline-flex
              items-center
              gap-3

              overflow-hidden

              rounded-full

              border
              border-[#A7D98E]/60

              bg-[#4D8B4F]

              px-8
              py-4

              text-sm
              font-semibold
              text-white

              shadow-[inset_1px_1px_2px_rgba(255,255,255,0.38),0_16px_40px_rgba(77,139,79,0.28)]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#3F7B43]
            "
          >
            <span className="relative z-10">
              Explore Our Technology Stack
            </span>

            <ArrowRight
              className="
                relative
                z-10

                h-4
                w-4

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />
          </button>

          <p
            className="
              mt-5

              text-[10px]
              font-semibold
              uppercase

              tracking-[0.18em]

              text-[#657169]
            "
          >
            Over 50+ Frameworks & Tools Managed
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export { TechStackSection };