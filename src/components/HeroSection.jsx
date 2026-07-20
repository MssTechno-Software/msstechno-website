import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layers, ArrowRight } from "lucide-react";

import MSSHeroVisual from "./MSSHeroVisual";
import herobg1 from "../../assets/images/hero-bg-1.png";
import herobg2 from "../../assets/images/hero-bg-2.png";

const SLIDE_DATA = [
  {
    badge: "Our Company",
    title1: "We Build Custom",
    title2: "Solutions.",
    description: "We empower businesses of all sizes to thrive by building robust software solutions that drive innovation and scale modern digital enterprise systems.",
    image: herobg1, 
  },
  {
    badge: "Welcome to MssTechno",
    title1: "Cloud Solutions",
    title2: "& DevOps.",
    description: "Expertise covering web, mobile, AI backend APIs, data, and secure DevOps infrastructure orchestration to power your digital transformation ecosystem.",
    image: herobg2,
  }
];

// Typewriter dynamic tracking frames list array loop configuration
const TYPING_WORDS = ["intelligence.", "innovation.", "excellence."];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);

  // Background Slider loop timer interval setup 
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_DATA.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  // Text Typewriter loop timer configuration setup 
  useEffect(() => {
    const typingTimer = setInterval(() => {
      setTypingIndex((prev) => (prev + 1) % TYPING_WORDS.length);
    }, 2500);
    return () => clearInterval(typingTimer);
  }, []);

  const handleScrollToSolutions = () => {
    const target = document.querySelector("#solutions");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FAF8F5] flex flex-col justify-center"
    >
      {/* IMPROVED CINEMATIC IMAGE SLIDER & SUBTLE COLOR GRADING */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#1a1c1a]">
        <AnimatePresence mode="popLayout">
          {SLIDE_DATA.map((slide, index) => (
            currentSlide === index && (
              <motion.div
                key={slide.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "linear" }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Subtle Color Grading Tints */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4D8B4F]/15 via-[#6B2D1A]/10 to-white/5 mix-blend-overlay" />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Minimal Soft Ambient Highlights */}
        <div className="absolute -left-[10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[#4D8B4F]/10 blur-[120px]" />
        <div className="absolute -right-[10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-[#6B2D1A]/10 blur-[120px]" />
      </div>

      {/* ================================================= */}
      {/* MAIN CONTAINER CONTENT INTERFACE */}
      {/* ================================================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12 pt-[120px] pb-12 flex-1 flex flex-col justify-center">
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE ARCHITECTURE CONTENT */}
          <div className="w-full lg:col-span-7 max-w-[760px]">
            
            {/* iOS FROSTED HYPER-GLASS WATER DROPLET BADGE */}
            <div className="relative inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl shadow-lg">
              <span className="h-2 w-2 rounded-full bg-[#4FA653] shadow-[0_0_8px_rgba(79,166,83,0.5)]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/90">Innovate</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/90">Build</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/90">Elevate</span>
            </div>

            {/* DYNAMIC AUTO-SHIFTING SLIDER HEADING */}
            <div className="min-h-[160px] sm:min-h-[190px] md:min-h-[130px] lg:min-h-[210px] xl:min-h-[160px] flex flex-col justify-start mt-7">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className="text-[44px] sm:text-[54px] lg:text-[60px] xl:text-[68px] leading-[1.12] tracking-[-0.035em] font-bold text-white"
                >
                  {SLIDE_DATA[currentSlide].title1} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8FC56D] to-[#A3D99D]">
                    {SLIDE_DATA[currentSlide].title2}
                  </span>
                  
                  {currentSlide === 0 && (
                    <span className="block sm:inline ml-0 sm:ml-3 text-white/80">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={typingIndex}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.3 }}
                          className="inline-block"
                        >
                          with {TYPING_WORDS[typingIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                  )}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* PLATFORM SLIDE DESCRIPTION TRACK */}
            <div className="min-h-[80px] mt-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 }}
                  className="max-w-[580px] text-[15px] xl:text-[16px] leading-[1.8] text-white/80 font-medium"
                >
                  {SLIDE_DATA[currentSlide].description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* ACTION ELEMENTS BUTTON MATRIX */}
            <motion.div
              layout
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={goToContactSection}
                className="
                  group relative flex items-center justify-between gap-5 rounded-full 
                  border border-[#3D7C41] bg-gradient-to-b from-[#4FA653] to-[#2E6B32]
                  pl-7 pr-3 py-2.5 text-[13px] font-bold text-white tracking-wide
                  shadow-[inset_0_1px_2px_rgba(255,255,255,0.45),0_10px_25px_rgba(79,166,83,0.22)]
                  transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]
                "
              >
                <span>Free Consultation</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#2E6B32] shadow-sm transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </span>
              </button>

              <button
                onClick={handleScrollToSolutions}
                className="
                  group relative flex items-center gap-2.5 rounded-full 
                  border border-white/20 bg-white/10 hover:bg-white/20
                  px-7 py-3.5 text-[13px] font-bold text-white 
                  backdrop-blur-md
                  transition-all duration-300 hover:-translate-y-0.5
                "
              >
                <span>Explore Services</span>
                <Layers className="h-4 w-4 text-white/70 group-hover:text-white transition-colors" />
              </button>
            </motion.div>

          </div>

          {/* RIGHT COLUMN GRAPHIC FRAMEWORK WRAPPER */}
          <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[480px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full h-full flex items-center justify-center scale-[1.05]">
                <MSSHeroVisual />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export { HeroSection };