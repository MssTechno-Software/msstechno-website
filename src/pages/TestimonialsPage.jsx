import { useEffect } from "react";
import { motion } from "motion/react";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Quote,
  Star,
} from "lucide-react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


/* =========================================================
   FEATURED TESTIMONIAL
========================================================= */

const FEATURED_TESTIMONIAL = {
  name: "Sarah Chen",
  role: "CTO, Global Logistics Corp",

  quote:
    "The level of technical expertise and strategic insight MSS Techno brought to our digital transformation journey was exceptional. They didn't just build software; they engineered a competitive advantage for us.",

  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAi15wZ3p9mMneBskUggeI0Nn5pjUJlVFPBVQF1RYAlNUjzXMQLHUfOtYDsGW_h832DOywcS0IubezQZfPdocw_F8aB6FusHd_U5wKdJu3699wzlX9sSOWgU5rz7WlS2xO5RHk4HgmTozKrU_lc0-Pr-9uz6gEgUan6KGxpXSrpm28xFt7IC9mue0fesf0fO2hIPgiSNFMLlXRGWfzao_8qRyo33IK1exQfpc6coQVsIT5kHmu8yb01",

  rating: 5,
};

/* =========================================================
   TESTIMONIAL DATA
========================================================= */

const TESTIMONIALS = [
  {
    id: 1,

    name: "Marcus Thorne",

    role: "Founder, PayStream",

    category: "FinTech",

    quote:
      "Seamless integration and robust security. MSS Techno exceeded all our expectations for our Series A launch.",

    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAi15wZ3p9mMneBskUggeI0Nn5pjUJlVFPBVQF1RYAlNUjzXMQLHUfOtYDsGW_h832DOywcS0IubezQZfPdocw_F8aB6FusHd_U5wKdJu3699wzlX9sSOWgU5rz7WlS2xO5RHk4HgmTozKrU_lc0-Pr-9uz6gEgUan6KGxpXSrpm28xFt7IC9mue0fesf0fO2hIPgiSNFMLlXRGWfzao_8qRyo33IK1exQfpc6coQVsIT5kHmu8yb01",

    rating: 5,

    accent: "green",
  },

  {
    id: 2,

    name: "Elena Rodriguez",

    role: "COO, Atlas Global",

    category: "Enterprise",

    quote:
      "MSS Techno brought clarity and precision to a highly complex transformation. The execution was seamless from strategy to deployment.",

    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHHTTZmQ3Tq6T_L7m_z_EBLo9ExnJ0vFrzW2AVB0e4RBCcx0rSYg_GTyEJGz8uGjRsTLmmr9iEkmKbQ4t4eZ4pZ2EAVxfL3y8B6JQxNCJwVXoGMSYPGc8eq8XU88jAlBzwT_3twY1a9byDMBF27f4Z_sGpNj5vS3y0kZkCG7b_M9g7DYcPeL4B1z9RwlHjHb2cVaWyQUTIXJXVGFP7fKfDZQqZPMj8dBFUJpU1HjNWH",

    rating: 5,

    accent: "brown",
  },

  {
    id: 3,

    name: "James Wilson",

    role: "Founder, StudioFlow",

    category: "Product Engineering",

    quote:
      "From MVP to scale, their engineering team felt like an extension of our own. Their collaborative approach consistently impressed us.",

    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvvBMlTxU5wRMF0hE-pMqCxWc28QOkpkP-DzAdnOibL1lYKpTE10JR8ALz-r0DE09H0TJ2DDsX4yyOcOb7OC4EJ6RpKu-AXrY77nLgO0wV1MyK2K2V-hRG5lCRYFKphwdGg_CxMtrF8u2WLWqG-LRxb9bXY5q7jvmqOGFJKwJq9oY7LkL-4trwEkM8dzU6oPtBFKExCJz6O90YlMyqLMSgABGUpPHPE2nMVKMXfGW2q",

    rating: 5,

    accent: "green",
  },

  {
    id: 4,

    name: "Dr. Robert Vance",

    role: "Director, VitalCare",

    category: "Healthcare",

    quote:
      "We needed a technology partner who understood innovation and real-world impact. MSS Techno delivered a reliable digital ecosystem.",

    imageUrl:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=90",

    rating: 5,

    accent: "brown",
  },

  {
    id: 5,

    name: "Amelia Brooks",

    role: "VP Innovation, AutoStream",

    category: "AI & Automation",

    quote:
      "Their automation strategy transformed repetitive workflows and helped our teams focus on higher-value business outcomes.",

    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=90",

    rating: 5,

    accent: "green",
  },

  {
    id: 6,

    name: "Daniel Kim",

    role: "Director Cloud Ops, Stratos",

    category: "Cloud",

    quote:
      "Our cloud modernization journey looked complex at first. MSS Techno made the process structured, transparent, and easier to execute.",

    imageUrl:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=500&q=90",

    rating: 5,

    accent: "brown",
  },
];

/* =========================================================
   TESTIMONIAL CARD
========================================================= */
  
const TestimonialCard = ({ item, index }) => {
  const isGreen = item.accent === "green";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 26,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.55,

        delay: Math.min(index * 0.05, 0.25),

        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-[32px]

        border
        border-white/70

        bg-white/[0.34]

        p-8

        backdrop-blur-[28px]
        backdrop-saturate-150

        shadow-[inset_1px_1px_0_rgba(255,255,255,0.9),0_24px_70px_rgba(45,60,48,0.10)]

        transform-gpu
      "
    >
      {/* TOP GLASS REFLECTION */}

      <div
        className="
          pointer-events-none

          absolute

          inset-x-8
          top-0

          h-px

          bg-gradient-to-r

          from-transparent
          via-white
          to-transparent
        "
      />

      {/* AMBIENT LIGHT */}

      <div
        className={`
          pointer-events-none

          absolute

          -right-16
          -top-16

          h-48
          w-48

          rounded-full

          blur-[70px]

          opacity-20

          ${
            isGreen
              ? "bg-[#4D8B4F]"
              : "bg-[#A65B3F]"
          }
        `}
      />

      <div className="relative z-10">
        {/* PROFILE */}

        <div className="flex items-center justify-between gap-4">
          <div className="relative">
            <div
              className={`
                absolute

                inset-0

                scale-110

                rounded-full

                blur-xl

                opacity-25

                ${
                  isGreen
                    ? "bg-[#4D8B4F]"
                    : "bg-[#A65B3F]"
                }
              `}
            />

            <div
              className="
                relative

                h-16
                w-16

                overflow-hidden

                rounded-full

                border-2
                border-white/80

                bg-white/40

                p-1

                shadow-[0_10px_30px_rgba(40,55,43,0.14)]

                backdrop-blur-xl
              "
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                loading="lazy"
                className="
                  h-full
                  w-full

                  rounded-full

                  object-cover
                "
              />
            </div>

            <div
              className="
                absolute

                -bottom-1
                -right-1

                flex

                h-6
                w-6

                items-center
                justify-center

                rounded-full

                border-2
                border-white

                bg-[#4D8B4F]

                text-white

                shadow-md
              "
            >
              <BadgeCheck className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* CATEGORY */}

          <span
            className={`
              rounded-full

              border
              border-white/70

              bg-white/40

              px-4
              py-2

              text-[10px]
              font-bold

              uppercase
              tracking-[0.13em]

              backdrop-blur-xl

              ${
                isGreen
                  ? "text-[#3F7F46]"
                  : "text-[#8B432C]"
              }
            `}
          >
            {item.category}
          </span>
        </div>

        {/* RATING */}

        <div className="mt-7 flex items-center gap-1.5">
          {Array.from({
            length: item.rating,
          }).map((_, starIndex) => (
            <Star
              key={starIndex}
              className={`
                h-4
                w-4

                fill-current

                ${
                  isGreen
                    ? "text-[#579553]"
                    : "text-[#A65B3F]"
                }
              `}
            />
          ))}
        </div>

        {/* QUOTE */}

        <div className="relative mt-6">
          <Quote
            className="
              absolute

              -left-1
              -top-4

              h-12
              w-12

              text-[#4D8B4F]/10
            "
          />

          <p
            className="
              relative
              z-10

              font-serif

              text-[18px]

              italic

              leading-[1.75]

              text-[#2C332D]
            "
          >
            “{item.quote}”
          </p>
        </div>

        {/* PERSON */}

        <div
          className="
            mt-8

            border-t
            border-[#526256]/15

            pt-6
          "
        >
          <h3
            className="
              font-serif

              text-xl
              font-semibold

              text-[#202821]
            "
          >
            {item.name}
          </h3>

          <p className="mt-1 text-sm text-[#667067]">
            {item.role}
          </p>

          <button
            className={`
              mt-5

              inline-flex
              items-center
              gap-2

              text-xs
              font-bold

              uppercase
              tracking-[0.12em]

              ${
                isGreen
                  ? "text-[#4D8B4F]"
                  : "text-[#8B432C]"
              }
            `}
          >
            View Success Story

            <ArrowUpRight
              className="
                h-4
                w-4

                transition-transform
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

/* =========================================================
   TESTIMONIALS PAGE
========================================================= */

const TestimonialsPage = ({ onOpenContact }) => {
  /* =========================================================
     IMPORTANT SCROLL FIX
  ========================================================= */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const goHome = () => {
    window.location.href = "/";
  };

  const goToOurWork = () => {
    window.location.href = "/#solutions";
  };

  return (
    <>
        <Header
      activeSection="testimonials"
      onOpenContact={onOpenContact}
      />
      <main
        className="
          relative

          min-h-screen

          overflow-hidden

          bg-[#F5F6F1]

          text-[#202821]
        "
      >
        {/* =================================================
            BACKGROUND
        ================================================= */}

        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute

              -left-[12%]
              top-[-4%]

              h-[700px]
              w-[700px]

              rounded-full

              bg-[#8BC47A]/25

              blur-[150px]
            "
          />

          <div
            className="
              absolute

              -right-[10%]
              top-[3%]

              h-[650px]
              w-[650px]

              rounded-full

              bg-[#C98566]/25

              blur-[150px]
            "
          />

          <div
            className="
              absolute

              left-[30%]
              top-[35%]

              h-[600px]
              w-[600px]

              rounded-full

              bg-white/70

              blur-[150px]
            "
          />
        </div>

        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="
            relative
            z-10

            px-4
            pb-20
            pt-32

            sm:px-6

            lg:px-8
            lg:pt-36
          "
        >
          <div className="mx-auto max-w-7xl">
            {/* BREADCRUMB */}

            <motion.div
              initial={{
                opacity: 0,
                y: -12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                mx-auto

                flex
                w-fit

                items-center
                gap-2

                rounded-full

                border
                border-white/70

                bg-white/35

                px-5
                py-2.5

                shadow-[inset_1px_1px_0_rgba(255,255,255,0.9),0_12px_40px_rgba(50,60,50,0.08)]

                backdrop-blur-[24px]
              "
            >
              <button
                onClick={goHome}
                className="
                  inline-flex

                  items-center
                  gap-1.5

                  text-xs
                  font-semibold

                  text-[#536057]

                  transition-colors
                  duration-300

                  hover:text-[#4D8B4F]
                "
              >
                <ArrowLeft className="h-3.5 w-3.5" />

                Home
              </button>

              <span className="text-[#7A857B]/50">
                /
              </span>

              <span
                className="
                  text-xs
                  font-bold

                  text-[#6B2D1A]
                "
              >
                Testimonials
              </span>
            </motion.div>

            {/* BADGE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="
                mx-auto
                mt-10

                flex
                w-fit

                items-center
                gap-2

                rounded-full

                border
                border-white/70

                bg-white/40

                px-4
                py-2

                backdrop-blur-2xl
              "
            >
              <BadgeCheck className="h-4 w-4 text-[#4D8B4F]" />

              <span
                className="
                  text-[11px]
                  font-bold

                  uppercase
                  tracking-[0.16em]

                  text-[#4D8B4F]
                "
              >
                Client Success Stories
              </span>
            </motion.div>

            {/* TITLE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="
                mx-auto
                mt-7

                max-w-4xl

                text-center
              "
            >
              <h1
                className="
                  font-serif

                  text-[42px]
                  font-medium

                  leading-[1.05]

                  tracking-[-0.04em]

                  text-[#202721]

                  sm:text-[54px]

                  lg:text-[68px]
                "
              >
                Built on Trust.
                <br />

                Proven Through{" "}
                <span className="italic text-[#4D8B4F]">
                  Results.
                </span>
              </h1>

              <p
                className="
                  mx-auto
                  mt-7

                  max-w-2xl

                  text-[16px]

                  leading-[1.8]

                  text-[#626C63]

                  sm:text-[17px]
                "
              >
                Discover how organizations across industries
                partnered with MSS Techno to transform ideas,
                solve complex challenges, and create meaningful
                digital impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =================================================
            FEATURED TESTIMONIAL
        ================================================= */}

        <section className="relative z-10 px-4 pb-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,

              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative

              mx-auto

              grid
              max-w-6xl

              overflow-hidden

              rounded-[42px]

              border
              border-white/75

              bg-white/35

              p-8

              shadow-[inset_1px_1px_0_rgba(255,255,255,0.9),0_35px_100px_rgba(45,60,48,0.12)]

              backdrop-blur-[32px]
              backdrop-saturate-150

              md:grid-cols-[0.75fr_1.6fr]
              md:p-12

              lg:p-14
            "
          >
            <Quote
              className="
                pointer-events-none

                absolute

                -bottom-16
                -right-10

                h-72
                w-72

                text-[#4D8B4F]/[0.05]
              "
            />

            {/* FEATURED PROFILE */}

            <div
              className="
                flex
                flex-col

                items-center
                justify-center

                border-b
                border-[#566458]/15

                pb-10

                text-center

                md:border-b-0
                md:border-r
                md:pb-0
                md:pr-12
              "
            >
              <div className="relative">
                <div
                  className="
                    absolute
                    inset-0

                    scale-125

                    rounded-full

                    bg-[#73A969]/25

                    blur-3xl
                  "
                />

                <div
                  className="
                    relative

                    h-44
                    w-44

                    overflow-hidden

                    rounded-full

                    border-2
                    border-white/80

                    bg-white/45

                    p-1.5

                    shadow-[inset_0_1px_0_white,0_25px_60px_rgba(57,78,59,0.15)]

                    backdrop-blur-2xl
                  "
                >
                  <img
                    src={FEATURED_TESTIMONIAL.imageUrl}
                    alt={FEATURED_TESTIMONIAL.name}
                    className="
                      h-full
                      w-full

                      rounded-full

                      object-cover
                    "
                  />
                </div>

                <div
                  className="
                    absolute

                    -bottom-2
                    -right-4

                    flex
                    items-center
                    gap-1.5

                    rounded-full

                    border
                    border-white/80

                    bg-white/65

                    px-3
                    py-2

                    shadow-lg

                    backdrop-blur-xl
                  "
                >
                  <BadgeCheck className="h-4 w-4 text-[#4D8B4F]" />

                  <span
                    className="
                      text-[9px]
                      font-bold

                      uppercase
                      tracking-widest

                      text-[#4D8B4F]
                    "
                  >
                    Verified
                  </span>
                </div>
              </div>

              <h3
                className="
                  mt-8

                  font-serif

                  text-2xl
                  font-semibold

                  text-[#202821]
                "
              >
                {FEATURED_TESTIMONIAL.name}
              </h3>

              <p
                className="
                  mt-2

                  text-[10px]
                  font-bold

                  uppercase
                  tracking-[0.15em]

                  text-[#697269]
                "
              >
                {FEATURED_TESTIMONIAL.role}
              </p>
            </div>

            {/* FEATURED CONTENT */}

            <div
              className="
                relative

                flex
                flex-col

                justify-center

                pt-10

                md:pl-14
                md:pt-0
              "
            >
              <div className="flex gap-1.5">
                {Array.from({
                  length: FEATURED_TESTIMONIAL.rating,
                }).map((_, index) => (
                  <Star
                    key={index}
                    className="
                      h-5
                      w-5

                      fill-current

                      text-[#4D8B4F]
                    "
                  />
                ))}
              </div>

              <blockquote
                className="
                  mt-8

                  max-w-3xl

                  font-serif

                  text-[24px]

                  italic

                  leading-[1.65]

                  text-[#283029]

                  sm:text-[28px]
                "
              >
                “{FEATURED_TESTIMONIAL.quote}”
              </blockquote>

              <button
                onClick={goToOurWork}
                className="
                  group

                  mt-8

                  inline-flex
                  w-fit

                  items-center
                  gap-2

                  text-xs
                  font-bold

                  uppercase
                  tracking-[0.14em]

                  text-[#6B2D1A]
                "
              >
                View Case Study

                <ArrowRight
                  className="
                    h-4
                    w-4

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </motion.div>
        </section>

        {/* =================================================
            METRICS
        ================================================= */}

        <section className="relative z-10 px-4 pb-28 sm:px-6 lg:px-8">
          <div
            className="
              mx-auto

              grid
              max-w-6xl

              grid-cols-2

              overflow-hidden

              rounded-[36px]

              border
              border-white/75

              bg-white/35

              shadow-[inset_1px_1px_0_rgba(255,255,255,0.9),0_25px_70px_rgba(45,60,48,0.09)]

              backdrop-blur-[30px]

              lg:grid-cols-4
            "
          >
            {[
              ["98%", "Client Satisfaction"],

              ["50+", "Solutions Delivered"],

              ["15+", "Industries Served"],

              ["4.9/5", "Average Rating"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className="
                  border-[#526056]/15

                  px-5
                  py-9

                  text-center

                  lg:border-r

                  last:lg:border-r-0
                "
              >
                <div
                  className={`
                    font-serif

                    text-4xl
                    font-semibold

                    sm:text-5xl

                    ${
                      index % 2 === 0
                        ? "text-[#4D8B4F]"
                        : "text-[#8B432C]"
                    }
                  `}
                >
                  {value}
                </div>

                <div
                  className="
                    mt-3

                    text-[10px]
                    font-bold

                    uppercase
                    tracking-[0.15em]

                    text-[#6C756D]
                  "
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            STORIES
        ================================================= */}

        <section className="relative z-10 px-4 pb-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <span
                className="
                  text-[11px]
                  font-bold

                  uppercase
                  tracking-[0.16em]

                  text-[#6B2D1A]
                "
              >
                Real Partnerships
              </span>

              <h2
                className="
                  mt-4

                  font-serif

                  text-4xl
                  font-medium

                  tracking-[-0.03em]

                  text-[#202821]

                  sm:text-5xl
                "
              >
                Stories From Our{" "}
                <span className="italic text-[#4D8B4F]">
                  Partners
                </span>
              </h2>

              <p
                className="
                  mt-5

                  max-w-xl

                  text-[16px]

                  leading-7

                  text-[#657067]
                "
              >
                Real experiences, meaningful partnerships, and
                measurable impact across modern digital
                ecosystems.
              </p>
            </div>

            <div
              className="
                grid
                grid-cols-1

                gap-7

                md:grid-cols-2

                lg:grid-cols-3
              "
            >
              {TESTIMONIALS.map((item, index) => (
                <TestimonialCard
                  key={item.id}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =================================================
            CTA
        ================================================= */}

        <section className="relative z-10 px-4 pb-28 sm:px-6 lg:px-8">
          <div
            className="
              relative

              mx-auto
              max-w-6xl

              overflow-hidden

              rounded-[44px]

              border
              border-white/70

              bg-white/35

              px-6
              py-20

              text-center

              shadow-[inset_1px_1px_0_rgba(255,255,255,0.9),0_35px_100px_rgba(45,60,48,0.10)]

              backdrop-blur-[32px]

              sm:px-10
            "
          >
            {/* GREEN LIGHT */}

            <div
              className="
                pointer-events-none

                absolute

                -left-20
                -top-20

                h-72
                w-72

                rounded-full

                bg-[#70AC65]/20

                blur-[90px]
              "
            />

            {/* BROWN LIGHT */}

            <div
              className="
                pointer-events-none

                absolute

                -bottom-24
                -right-20

                h-72
                w-72

                rounded-full

                bg-[#B96A4C]/20

                blur-[90px]
              "
            />

            <div className="relative z-10">
              <h2
                className="
                  font-serif

                  text-4xl
                  font-medium

                  leading-[1.1]

                  tracking-[-0.035em]

                  text-[#202821]

                  sm:text-5xl

                  lg:text-6xl
                "
              >
                Let's Build Something
                <br />

                Worth{" "}
                <span className="italic text-[#4D8B4F]">
                  Talking About.
                </span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-6

                  max-w-xl

                  text-base

                  leading-7

                  text-[#657067]
                "
              >
                Bring your vision to MSS Techno and let's create
                a digital experience built for meaningful growth.
              </p>

              <div
                className="
                  mt-9

                  flex
                  flex-wrap

                  items-center
                  justify-center

                  gap-4
                "
              >
                {/* CONTACT */}

                <motion.button
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() => onOpenContact?.()}
                  className="
                    group

                    inline-flex
                    items-center
                    gap-3

                    rounded-full

                    border
                    border-[#7BBE72]

                    bg-[#4D8B4F]

                    px-8
                    py-4

                    text-sm
                    font-bold

                    text-white

                    shadow-[0_18px_45px_rgba(77,139,79,0.25)]
                  "
                >
                  Start a Conversation

                  <ArrowRight
                    className="
                      h-4
                      w-4

                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  />
                </motion.button>

                {/* OUR WORK */}

                <motion.button
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={goToOurWork}
                  className="
                    inline-flex
                    items-center
                    gap-3

                    rounded-full

                    border
                    border-white/80

                    bg-white/45

                    px-8
                    py-4

                    text-sm
                    font-bold

                    text-[#6B2D1A]

                    shadow-[inset_0_1px_0_white,0_15px_40px_rgba(50,60,50,0.08)]

                    backdrop-blur-xl
                  "
                >
                  Explore Our Work

                  <ArrowUpRight className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </>
  );
};

export default TestimonialsPage;