import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  Star,
  Quote,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "CTO, Global Logistics Corp",
    quote:
      "The level of technical expertise and strategic insight MSS Techno brought to our digital transformation journey was exceptional. They didn't just build software; they engineered a competitive advantage for us.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJdfkK36znMgyGH0s0VMbsxetTwkBeGCh-0fQtk-hMY_JpzG-3yxoOeNZtPxVR-uwQYdouYR_3gTZ6Rav_6SMik4EyXd0OPAFwfSGwcc0uLuXaPCKYtsa6GTQvIG2zKgYLWlktAiTdeYepgsfNPrvpHiduYnKIr8v8WP2r6iiLPYZNMEbZ1JpJcjrfkVZJlgbbbYZgK938q5Q2qq4pSLYtscKuSicmx1vTek_FfpMhuiAhtJr4Jma5",
    rating: 5,
  },
  {
    name: "Marcus Thorne",
    role: "Founder, PayStream",
    quote:
      "Seamless integration and robust security. MSS Techno exceeded all our expectations for our Series A launch.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAi15wZ3p9mMneBskUggeI0Nn5pjUJlVFPBVQF1RYAlNUjzXMQLHUfOtYDsGW_h832DOywcS0IubezQZfPdocw_F8aB6FusHd_U5wKdJu3699wzlX9sSOWgU5rz7WlS2xO5RHk4HgmTozKrU_lc0-Pr-9uz6gEgUan6KGxpXSrpm28xFt7IC9mue0fesf0fO2hIPgiSNFMLlXRGWfzao_8qRyo33IK1exQfpc6coQVsIT5kHmu8yb01",
    rating: 5,
  },
  {
    name: "Dr. Robert Vance",
    role: "Director, VitalCare",
    quote:
      "Their AI-driven diagnostics solutions significantly reduced our operational latency and improved patient outcomes.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCu3E0BYF8UvYMOLEwTPAqb5iWhzq0dEgmBabyR7fMTogCCt0T_aFfgo1r_sTtlXXcX1jLwf2xTkq6SP6ALCD1WKzAlWwuE5PEP1HweeVnBi_AO0af7L97jzRYXd0Swgq3HJyQ7C_NYAYgN0JoaJU0JoaxUtVp0jSGDJMmjfN5NmVsTQbAnNNldJ1Dhwv-LImJO_jFo_naAt5mRMlelAc6kD_Jvp44FDM0BZRywVBrb5XlZwoVDkXFt",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "VP, RetailX",
    quote:
      "The most professional team we've worked with. Highly recommended for complex builds and headless architecture.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "CTO, EduTech",
    quote:
      "Their software architecture is clean, scalable, and built for future growth. Extremely reliable long-term partners.",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 5,
  },
];

const POSITIONS = [
  {
    id: "center",
    className:
      "left-1/2 top-1/2 w-[92%] max-w-[700px]",
    x: "-50%",
    y: "-50%",
    rotate: 0,
    scale: 1,
    zIndex: 50,
    opacity: 1,
  },
  {
    id: "topLeft",
    className:
      "left-[2%] top-[4%] w-[310px] hidden md:block",
    x: 0,
    y: 0,
    rotate: -4,
    scale: 0.96,
    zIndex: 30,
    opacity: 0.88,
  },
  {
    id: "bottomRight",
    className:
      "right-[2%] bottom-[4%] w-[310px] hidden md:block",
    x: 0,
    y: 0,
    rotate: 4,
    scale: 0.96,
    zIndex: 30,
    opacity: 0.88,
  },
  {
    id: "topRight",
    className:
      "right-[8%] top-[9%] w-[270px] hidden xl:block",
    x: 0,
    y: 0,
    rotate: 7,
    scale: 0.9,
    zIndex: 10,
    opacity: 0.65,
  },
  {
    id: "bottomLeft",
    className:
      "left-[8%] bottom-[9%] w-[270px] hidden xl:block",
    x: 0,
    y: 0,
    rotate: -7,
    scale: 0.9,
    zIndex: 10,
    opacity: 0.65,
  },
];

function TestimonialCard({
  testimonial,
  position,
  onClick,
  index,
}) {
  const isCenter = position.id === "center";
  const isBrown = index % 2 !== 0;



  return (
    <motion.div
      layout
      layoutId={`testimonial-${testimonial.name}`}
      onClick={onClick}
      initial={false}
      animate={{
        x: position.x,
        y: position.y,
        rotate: position.rotate,
        scale: position.scale,
        opacity: position.opacity,
        zIndex: position.zIndex,
      }}
      transition={{
        layout: {
          type: "spring",
          stiffness: 95,
          damping: 20,
          mass: 0.8,
        },
        rotate: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
      }}
      whileHover={
        isCenter
          ? {
              y: "-51%",
              scale: 1.012,
            }
          : {
              scale: position.scale + 0.035,
              rotate: 0,
            }
      }
      className={`
        group
        absolute
        ${position.className}

        overflow-hidden
        rounded-[38px]

        border
        border-white/80

        bg-gradient-to-br
        from-white/[0.48]
        via-white/[0.18]
        to-white/[0.07]

        text-left

        backdrop-blur-[28px]
        backdrop-saturate-[1.5]

        shadow-[inset_1px_1px_0_rgba(255,255,255,1),inset_-1px_-1px_0_rgba(255,255,255,0.18),0_28px_80px_rgba(38,55,45,0.16)]

        ${
          isCenter
            ? "cursor-default p-8 md:p-11"
            : "cursor-pointer p-5 md:p-6"
        }
      `}
    >
      {/* TOP LIQUID REFLECTION */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[20%]
          -top-[45%]
          h-[85%]
          w-[95%]
          rotate-[-14deg]
          rounded-[50%]
          bg-gradient-to-br
          from-white/95
          via-white/30
          to-transparent
          blur-[20px]
          opacity-80
        "
      />

      {/* COLOR REFRACTION */}

      <motion.div
        animate={{
          x: [0, 18, -8, 0],
          y: [0, -10, 12, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          pointer-events-none
          absolute
          -right-[80px]
          -top-[80px]
          h-[250px]
          w-[250px]
          rounded-full
          blur-[70px]
          opacity-60

          ${
            isBrown
              ? "bg-[#B77A60]/30"
              : "bg-[#74A878]/30"
          }
        `}
      />

      {/* BOTTOM GLASS LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[55%]
          left-[10%]
          h-[85%]
          w-[85%]
          rounded-full
          bg-white/50
          blur-[50px]
        "
      />

      {/* GLASS EDGE */}

      <div
        className="
          pointer-events-none
          absolute
          left-[7%]
          right-[7%]
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white
          to-transparent
        "
      />

      {/* MOVING GLASS SHINE */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[80%]
          top-0
          h-full
          w-[55%]
          rotate-[18deg]
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
          blur-xl

          transition-all
          duration-[1100ms]
          ease-out

          group-hover:left-[130%]
        "
      />

      {/* VERIFIED BADGE */}

      {isCenter && (
        <div
          className="
            absolute
            right-7
            top-6
            z-20

            flex
            items-center
            gap-2

            overflow-hidden
            rounded-full

            border
            border-white/90

            bg-white/[0.32]

            px-4
            py-2

            backdrop-blur-[20px]

            shadow-[inset_1px_1px_0_rgba(255,255,255,1),0_10px_25px_rgba(38,55,45,0.10)]
          "
        >
          <ShieldCheck className="h-4 w-4 text-[#4D8B4F]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#3D7040]">
            Verified Client
          </span>
        </div>
      )}

      {/* CONTENT */}

      <div
        className={`
          relative
          z-10

          ${
            isCenter
              ? "flex flex-col items-center gap-8 md:flex-row md:items-start"
              : ""
          }
        `}
      >
        {/* PROFILE */}

        <div
          className={
            isCenter
              ? "relative shrink-0"
              : "mb-5 flex items-center gap-3"
          }
        >
          <div
            className={`
              relative
              overflow-hidden
              rounded-full

              border
              border-white

              shadow-[0_12px_30px_rgba(38,55,45,0.18)]

              ${
                isCenter
                  ? "h-24 w-24 p-[4px]"
                  : "h-12 w-12 p-[2px]"
              }
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#A8D59D] to-[#C58A6C]" />

            <img
              src={testimonial.imageUrl}
              alt={testimonial.name}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="
                relative
                z-10
                h-full
                w-full
                rounded-full
                object-cover
              "
            />
          </div>

          {!isCenter && (
            <div className="min-w-0">
              <h4 className="truncate font-serif text-base font-bold text-[#18251D]">
                {testimonial.name}
              </h4>

              <p className="mt-1 truncate text-[9px] font-bold uppercase tracking-[0.12em] text-[#69736C]">
                {testimonial.role}
              </p>
            </div>
          )}
        </div>

        {/* TESTIMONIAL */}

        <div className={isCenter ? "flex-1" : ""}>
          <div
            className={`
              flex
              gap-1

              ${
                isCenter
                  ? "justify-center md:justify-start"
                  : "mb-4"
              }
            `}
          >
            {Array.from({
              length: testimonial.rating,
            }).map((_, starIndex) => (
              <Star
                key={starIndex}
                className={`
                  fill-[#D49A5B]
                  text-[#D49A5B]

                  ${
                    isCenter
                      ? "h-4 w-4"
                      : "h-3.5 w-3.5"
                  }
                `}
              />
            ))}
          </div>

          <blockquote
            className={
              isCenter
                ? "mt-5 font-serif text-lg italic leading-[1.7] text-[#28352D] md:text-xl"
                : "line-clamp-3 text-xs leading-[1.7] text-[#59655D] sm:text-sm"
            }
          >
            “{testimonial.quote}”
          </blockquote>

          {isCenter && (
            <div className="mt-6">
              <h4 className="font-serif text-xl font-bold text-[#315E35]">
                {testimonial.name}
              </h4>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#69736C]">
                {testimonial.role}
              </p>
            </div>
          )}

          {!isCenter && (
            <div className="mt-5 flex items-center gap-2">
              <ShieldCheck
                className={`
                  h-3.5
                  w-3.5

                  ${
                    isBrown
                      ? "text-[#8B4D37]"
                      : "text-[#4D8B4F]"
                  }
                `}
              />

              <span
                className={`
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.14em]

                  ${
                    isBrown
                      ? "text-[#8B4D37]"
                      : "text-[#4D8B4F]"
                  }
                `}
              >
                Verified
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const TestimonialsSection = ({ onOpenContact }) => {
  const navigate = useNavigate();

  const [cardOrder, setCardOrder] = useState([
    0, 1, 2, 3, 4,
  ]);
  
  const handleCardClick = (positionIndex) => {
    if (positionIndex === 0) return;

    setCardOrder((currentOrder) => {
      const nextOrder = [...currentOrder];
      const centerCard = nextOrder[0];

      nextOrder[0] = nextOrder[positionIndex];
      nextOrder[positionIndex] = centerCard;

      return nextOrder;
    });
  };

  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        py-24

        bg-[radial-gradient(circle_at_10%_20%,rgba(77,139,79,0.20),transparent_30%),radial-gradient(circle_at_90%_25%,rgba(107,45,26,0.17),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.75),transparent_38%),linear-gradient(135deg,#EDF5EC_0%,#F7F6F1_48%,#F1E8E1_100%)]
      "
    >
      {/* AMBIENT LIQUID ORBS */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-[200px]
          top-[20%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#76AD79]/20
          blur-[145px]
        "
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-[200px]
          top-[15%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#B8795C]/20
          blur-[155px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}

        <div className="mb-10 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="
              relative
              inline-flex
              items-center
              gap-2

              overflow-hidden
              rounded-full

              border
              border-white/90

              bg-white/[0.28]

              px-4
              py-2

              backdrop-blur-[20px]

              shadow-[inset_1px_1px_0_rgba(255,255,255,1),0_12px_30px_rgba(55,75,60,0.12)]
            "
          >
            <Sparkles className="h-3.5 w-3.5 text-[#4D8B4F]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#3D7040]">
              Client Testimonials
            </span>
          </motion.div>

          <h2
            className="
              mt-6
              font-serif
              text-3xl
              font-semibold
              tracking-[-0.035em]
              text-[#18251D]

              sm:text-4xl
              md:text-5xl
            "
          >
            Trusted by Clients.{" "}
            <span className="italic text-[#4D8B4F]">
              Driven by Results.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-[1.8] text-[#59655D] sm:text-base">
            Businesses across industries trust MSS Techno to deliver
            secure, scalable, AI-powered, and future-ready software
            solutions that create measurable business value.
          </p>
        </div>

        {/* TESTIMONIAL GLASS STAGE */}

        <div className="relative min-h-[700px]">
          <Quote className="pointer-events-none absolute left-[8%] top-[18%] h-40 w-40 text-[#4D8B4F] opacity-[0.05]" />

          <Quote className="pointer-events-none absolute bottom-[15%] right-[8%] h-40 w-40 rotate-180 text-[#6B2D1A] opacity-[0.05]" />

          {cardOrder.map(
            (testimonialIndex, positionIndex) => (
              <TestimonialCard
                key={TESTIMONIALS[testimonialIndex].name}
                testimonial={
                  TESTIMONIALS[testimonialIndex]
                }
                position={POSITIONS[positionIndex]}
                index={testimonialIndex}
                onClick={() =>
                  handleCardClick(positionIndex)
                }
              />
            )
          )}
        </div>

        {/* CTA */}

        <div className="mt-4 flex justify-center">
          <motion.button
            whileHover={{
              y: -3,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => navigate("/testimonials")}
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
              py-4

              text-sm
              font-bold
              text-[#315E35]

              backdrop-blur-[22px]

              shadow-[inset_1px_1px_0_rgba(255,255,255,1),0_18px_45px_rgba(77,139,79,0.18)]
            "
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/90 to-transparent" />

            <span className="relative z-10">
              View More Success Stories
            </span>

            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection };