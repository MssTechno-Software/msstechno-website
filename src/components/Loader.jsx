import React from "react";
import { motion } from "motion/react";

/*GLOBAL STATIC CONSTANTS */
const CUBIC_EASE = [0.25, 1, 0.5, 1];
const DOT_COLORS = ["#4D8B4F", "#6B2D1A", "#4D8B4F"];

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
        {/* SOFT HALO */}
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

        {/* ROTATING RING  */}
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
            h-[270px]
            w-[270px]
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
              <stop offset="0%" stopColor="#4D8B4F" />
              <stop offset="48%" stopColor="#6B2D1A" />
              <stop offset="100%" stopColor="#4D8B4F" />
            </linearGradient>
          </defs>

          {/* GLASS TRACK */}
          <circle
            cx="150"
            cy="150"
            r="105"
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="3"
          />

          {/* BRAND ARC */}
          <circle
            cx="150"
            cy="150"
            r="105"
            fill="none"
            stroke="url(#mssLoaderGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="185 475"
            transform="rotate(-90 150 150)"
          />
        </motion.svg>

        {/* GLASS BUBBLE*/}
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
            h-[180px]
            w-[180px]
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-white/60
            bg-white/[0.06]
            shadow-[inset_1px_1px_1px_rgba(255,255,255,0.8),inset_-1px_-1px_1px_rgba(70,80,70,0.04),0_12px_35px_rgba(55,70,55,0.06)]
            backdrop-blur-[2px]
            transform-gpu
            will-change-transform
          "
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {/* TOP WATER REFLECTION */}
          <div
            className="
              pointer-events-none
              absolute
              left-[18%]
              top-[8%]
              h-[24px]
              w-[100px]
              -rotate-[10deg]
              rounded-full
              bg-white/30
              blur-[6px]
            "
          />

          {/* BOTTOM REFRACTION */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[8%]
              right-[12%]
              h-[30px]
              w-[70px]
              rounded-full
              bg-white/5
              blur-lg
            "
          />

          {/* MSS LOGO (SYNCHRONIZED TRANSLATION MATRIX SHIFTS) */}
          <motion.svg
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: [1, 1.015, 1],
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
              w-[128px]
              transform-gpu
              overflow-visible
            "
            style={{
              backfaceVisibility: "hidden",
            }}
            viewBox="0 0 6.3568 3.55"
            aria-label="MSS Techno"
          >
            <path
              d="M 3.226692182244268 3.547829004842157 L 2.8156103989601755 3.1367472215580983 L 4.104155243160136 1.8475361183901038 C 4.134433035280558 1.824063513500798 4.15215219311037 1.7879067258315973 4.15215219311037 1.7495960500874193 C 4.15215219311037 1.711285374343241 4.134433035280558 1.6751285866740404 4.104155243160136 1.651655981784734 L 3.6897421650358475 1.236576644692403 L 3.27466282794352 0.8221635665681171 C 3.25170932896516 0.791480231905304 3.215852482878667 0.7731412252261718 3.1775392269861937 0.7724896392416056 C 3.1392259710936843 0.7718380532570394 3.1027662654828942 0.7889471866079865 3.078782691338168 0.8188322717278896 L 1.8641925925912397 2.0274260397623824 L 1.452444550339144 1.615677997510278 L 2.9528597463775768 0.1152628014718672 C 3.010000695881514 0.04784157839479875 3.091900058875204 0.0062914616853889235 3.180054054481094 0 L 4.5791978873766 0 C 4.670309820793047 -0.01019633998815188 4.760442118190429 0.026106946463574848 4.81905111587297 0.0966075503665938 L 6.256171709947069 1.5337281444406843 C 6.318239214083064 1.5843400882372054 6.354255361591043 1.6601813224237827 6.354255361591043 1.740268424534782 C 6.354255361591043 1.8203555266457807 6.318239214083064 1.8961967608323578 6.256171709947069 1.9468087046288796 L 4.773079247077836 3.438562534082699 C 4.724761005310184 3.493242460884543 4.658232821546782 3.5285189711363163 4.585860477057064 3.537835120321475 Z"
              fill="#6B2D1A"
            />
            <path
              d="M 1.5377256982489862 3.444558864795109 C 1.590330903530079 3.51126087101996 1.6715839224548132 3.5488879546306165 1.7564797454068695 3.5458606617191464 C 1.8413755683589978 3.5428333688076763 1.9197421397529248 3.4995144238368185 1.9674627326383192 3.429234908530063 L 3.4698767055808695 1.9288197124916515 L 3.0581286633287736 1.5170716702395477 L 1.8442048235499207 2.728996733114268 C 1.8203347174762388 2.763783359247202 1.78290312467848 2.781980099289642 1.7434216501067388 2.781322074713447 C 1.7039401755350339 2.780664050137251 1.6671357618515963 2.761230043320124 1.6443271331362614 2.728996733114268 L 0.8155009768876489 1.8995043178976507 C 0.7852381967983191 1.8761674091297629 0.7675119036298526 1.840113176461452 0.7675119036298526 1.8018973790789892 C 0.7675119036298526 1.7636815816965261 0.7852381967983191 1.7276273490282148 0.8155009768876489 1.7042904402603265 L 2.107377115927841 0.4117480422521039 L 1.6962953326437846 0 L 0.11859409631208837 1.5777012363316858 C 0.048314581005338426 1.6254218292170566 0.004995636034468574 1.7037884006109978 0.0019683431229846685 1.78868422356309 C -0.0010589497884992366 1.8735800465151817 0.036568133822162674 1.9548330654399395 0.10327014004704345 2.007438270721017 Z"
              fill="#4D8B4F"
            />
          </motion.svg>
        </motion.div>

        {/* DOTS */}
        <div
          className="
            absolute
            bottom-[24px]
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