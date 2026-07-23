import React from "react";
import { motion } from "motion/react";

/* GLOBAL STATIC CONSTANTS */
const CUBIC_EASE = [0.25, 1, 0.5, 1];
const DOT_COLORS = ["#2d6a31", "#8b321a", "#2d6a31"];

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.45,
        ease: CUBIC_EASE,
      }}
      className="
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        bg-white/15
        backdrop-blur-[8px]
        transform-gpu
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 1.02,
        }}
        transition={{
          duration: 0.55,
          ease: CUBIC_EASE,
        }}
        className="
          relative
          flex
          h-[320px]
          w-[320px]
          items-center
          justify-center
          transform-gpu
          will-change-transform
        "
      >
        {/* SOFT AMBIENT HALO */}
        <div
          className="
            pointer-events-none
            absolute
            h-[220px]
            w-[220px]
            rounded-full
            bg-white/20
            blur-[30px]
          "
        />

        {/* ROTATING BRAND RING */}
        <motion.svg
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "linear",
          }}
          viewBox="0 0 300 300"
          className="
            absolute
            h-[280px]
            w-[280px]
            transform-gpu
            will-change-transform
          "
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <defs>
            <linearGradient
              id="mssLoaderGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2d6a31" />
              <stop offset="50%" stopColor="#8b321a" />
              <stop offset="100%" stopColor="#2d6a31" />
            </linearGradient>
          </defs>

          {/* GLASS TRACK */}
          <circle
            cx="150"
            cy="150"
            r="110"
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="2.5"
          />

          {/* BRAND ARC */}
          <circle
            cx="150"
            cy="150"
            r="110"
            fill="none"
            stroke="url(#mssLoaderGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="185 475"
            transform="rotate(-90 150 150)"
          />
        </motion.svg>

        {/* GLASS BUBBLE CONTAINER */}
        <motion.div
          animate={{
            scale: [1, 1.012, 1],
            y: [0, -2, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            flex
            h-[200px]
            w-[200px]
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-white/60
            bg-white/[0.12]
            shadow-[inset_1px_1px_2px_rgba(255,255,255,0.9),inset_-1px_-1px_2px_rgba(0,0,0,0.05),0_12px_35px_rgba(45,106,49,0.08)]
            backdrop-blur-[3px]
            transform-gpu
            will-change-transform
          "
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {/* WATER REFLECTION HIGHLIGHT */}
          <div
            className="
              pointer-events-none
              absolute
              left-[18%]
              top-[8%]
              z-20
              h-[24px]
              w-[100px]
              -rotate-[10deg]
              rounded-full
              bg-white/40
              blur-[5px]
            "
          />

          {/* BOTTOM REFRACTION HIGHLIGHT */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[8%]
              right-[12%]
              z-20
              h-[30px]
              w-[70px]
              rounded-full
              bg-white/10
              blur-md
            "
          />

          {/* MSS TECHNO LOGO IMAGE */}
          <motion.img
            src="/logo.png"
            alt="MSS Techno Logo"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: [1, 1.025, 1],
            }}
            transition={{
              opacity: {
                duration: 0.4,
              },
              scale: {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              relative
              z-10
              h-[160px]
              w-[160px]
              object-contain
              drop-shadow-[0_4px_10px_rgba(0,0,0,0.08)]
              transform-gpu
            "
            style={{
              backfaceVisibility: "hidden",
            }}
          />
        </motion.div>

        {/* PULSING DOTS */}
        <div
          className="
            absolute
            bottom-[10px]
            flex
            items-center
            gap-2
          "
        >
          {DOT_COLORS.map((color, index) => (
            <motion.span
              key={index}
              animate={{
                y: [0, -3, 0],
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: index * 0.12,
                ease: "easeInOut",
              }}
              className="
                h-2
                w-2
                rounded-full
                transform-gpu
              "
              style={{
                backgroundColor: color,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;