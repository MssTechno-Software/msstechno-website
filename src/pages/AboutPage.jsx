import { motion } from "motion/react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SEO from "../components/SEO";

import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Lightbulb,
  Code2,
  Cpu,
  ChevronDown,
  Mouse,
  Building2,
  BriefcaseBusiness,
  Users,
  Sparkles,
  Globe2,
  ShieldCheck,
  LockKeyhole,
  Leaf,
  Heart,
  Play,
  TrendingUp,
  Flag,
  Telescope,
} from "lucide-react";

import mssGlowLogo from "../../assets/images/mss-glow-logo.png";
import dnaImage from "../../assets/images/dna.png";

import { Header } from "../components/Header";
import { ProcessSection } from "../components/ProcessSection";
import { Footer } from "../components/Footer";


const AboutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
  if (location.state?.scrollTo === "about-process") {
    setTimeout(() => {
      document.getElementById("about-process")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  }

  if (location.state?.scrollTo === "about-story") {
    setTimeout(() => {
      document.getElementById("about-story")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  }
}, [location]);


  const handleStoryScroll = () => {
    document.getElementById("about-story")?.scrollIntoView({
      behavior: "smooth",
    });
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

  const goToSolutionsPage = () => {
    navigate("/solutions");
    setTimeout(() => {
      const section = document.getElementById("solutions");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    
    <div className="min-h-screen bg-[#F7F8F5] font-sans text-[#171A17] antialiased">
      <SEO
        title="About MSS Techno | Our Story & Mission"
        description="Learn about MSS Techno, our mission, vision and enterprise software expertise."
        url="https://msstechno.com/about"
      />
      <Header activeSection="about" />
      <main>
        {/* HERO SECTION */}
        <section
          id="about"
          className="
            relative
            min-h-screen
            overflow-hidden
            bg-[#F7F8F5]
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[radial-gradient(circle_at_8%_18%,rgba(255,255,255,1)_0%,transparent_36%),radial-gradient(circle_at_65%_58%,rgba(188,211,191,0.32)_0%,transparent_38%),radial-gradient(circle_at_92%_12%,rgba(145,77,50,0.18)_0%,transparent_31%),linear-gradient(135deg,#F9FAF7_0%,#F2F5F0_48%,#F4ECE7_100%)]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-[430px]
              -left-[190px]
              h-[760px]
              w-[1100px]
              rotate-[-8deg]
              rounded-[50%]
              border
              border-white/90
              bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(141,181,145,0.16),rgba(216,231,216,0.34))]
              backdrop-blur-[18px]
              shadow-[inset_0_12px_24px_rgba(255,255,255,0.95),inset_0_-18px_38px_rgba(77,139,79,0.10),0_-20px_60px_rgba(255,255,255,0.55)]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-[340px]
              -top-[430px]
              h-[860px]
              w-[920px]
              rounded-full
              border
              border-white/80
              bg-[linear-gradient(150deg,rgba(255,255,255,0.10),rgba(139,60,36,0.17),rgba(255,255,255,0.20))]
              backdrop-blur-[20px]
              shadow-[inset_12px_15px_28px_rgba(255,255,255,0.84),inset_-20px_-18px_38px_rgba(139,60,36,0.10)]
            "
          />

          <div
            className="
              relative
              z-20
              mx-auto
              grid
              min-h-screen
              max-w-[1600px]
              grid-cols-1
              items-center
              px-6
              pb-20
              pt-[125px]
              lg:grid-cols-[0.72fr_1.28fr]
              lg:px-12
              xl:px-14
            "
          >
            <div className="relative z-30 max-w-[510px]">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/90
                  bg-white/20
                  px-5
                  py-3
                  backdrop-blur-[35px]
                  backdrop-saturate-[220%]
                  shadow-[inset_3px_3px_5px_white,inset_-3px_-4px_7px_rgba(77,139,79,0.06),0_15px_40px_rgba(60,75,62,0.07)]
                "
              >
                <span className="h-2 w-2 rounded-full bg-[#4D8B4F]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#3F7843]">
                  About MSS Techno
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                className="
                  mt-7
                  text-[50px]
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.055em]
                  sm:text-[60px]
                  xl:text-[72px]
                "
              >
                Engineering
                <br />
                the{" "}
                <span className="text-[#4D8B4F]">
                  Future
                </span>
                <br />
                with{" "}
                <span className="text-[#8B3C24]">
                  Intelligence.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="
                  mt-8
                  max-w-[470px]
                  text-[17px]
                  leading-[1.75]
                  text-[#59625C]
                "
              >
                We build intelligent digital solutions through AI,
                Cloud, Software Engineering, and Human-Centered
                Design—helping businesses innovate, scale, and succeed
                in the digital era.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <button
                  onClick={handleStoryScroll}
                  className="
                    flex
                    min-w-[205px]
                    items-center
                    justify-between
                    rounded-full
                    border
                    border-white/80
                    bg-[#A8D9A5]/45
                    px-6
                    py-3
                    text-[13px]
                    font-semibold
                    text-[#244D2A]
                    backdrop-blur-[35px]
                    shadow-[inset_3px_3px_5px_white,0_16px_38px_rgba(77,139,79,0.13)]
                    transition
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  Explore Our Story
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4D8B4F] text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>

                <button
                  onClick={goToSolutionsPage}
                  className="
                    flex
                    min-w-[180px]
                    items-center
                    justify-between
                    rounded-full
                    border
                    border-white/90
                    bg-white/20
                    px-6
                    py-3
                    text-[13px]
                    font-semibold
                    text-[#426A45]
                    backdrop-blur-[35px]
                    shadow-[inset_3px_3px_5px_white,0_15px_35px_rgba(60,75,62,0.08)]
                    transition
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  Our Solutions
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            </div>

            <div className="relative hidden h-[720px] w-full lg:block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[650px]
                  w-[650px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-[45%_55%_48%_52%/58%_42%_58%_42%]
                  border-[2px]
                  border-white/90
                  bg-white/[0.025]
                  backdrop-blur-[7px]
                  backdrop-saturate-[220%]
                  shadow-[inset_12px_14px_22px_rgba(255,255,255,1),inset_-12px_-14px_25px_rgba(77,139,79,0.09),0_35px_100px_rgba(65,90,70,0.08)]
                "
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 38,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[560px]
                  w-[560px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-[60%_40%_52%_48%/42%_58%_44%_56%]
                  border-[2px]
                  border-white/85
                  bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(255,255,255,0.025),rgba(139,60,36,0.05))]
                  backdrop-blur-[10px]
                  backdrop-saturate-[230%]
                  shadow-[inset_10px_12px_20px_white,inset_-8px_-12px_22px_rgba(139,60,36,0.07)]
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[465px]
                  w-[465px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border-[3px]
                  border-white/90
                  bg-white/[0.045]
                  backdrop-blur-[15px]
                  backdrop-saturate-[240%]
                  shadow-[inset_10px_10px_20px_white,inset_-10px_-12px_28px_rgba(77,139,79,0.07),0_0_60px_rgba(80,95,85,0.08)]
                "
              />

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-[390px]
                  w-[390px]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border-[3px]
                  border-white/95
                  bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.28)_26%,rgba(226,235,225,0.16)_55%,rgba(235,222,214,0.12)_78%,rgba(255,255,255,0.12)_100%)]
                  backdrop-blur-[28px]
                  backdrop-saturate-[250%]
                  shadow-[inset_18px_20px_30px_rgba(255,255,255,1),inset_-18px_-20px_35px_rgba(94,110,96,0.10),0_40px_100px_rgba(60,75,65,0.13)]
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-[45px]
                    top-[80px]
                    h-[250px]
                    w-[250px]
                    rounded-full
                    bg-[#8EBB92]/20
                    blur-[70px]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-[50px]
                    top-[65px]
                    h-[260px]
                    w-[260px]
                    rounded-full
                    bg-[#9A563D]/18
                    blur-[75px]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[270px]
                    w-[270px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-white/20
                    blur-[38px]
                  "
                />

                <motion.div
                  animate={{
                    y: [0, -7, 0],
                    rotate: [-1, 1, -1],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    z-20
                    flex
                    h-[300px]
                    w-[300px]
                    items-center
                    justify-center
                    rounded-full
                  "
                >
                  <img
                    src={mssGlowLogo}
                    alt="MSS Techno"
                    className="
                      relative
                      z-20
                      h-[285px]
                      w-[285px]
                      object-contain
                      mix-blend-multiply
                      opacity-95
                      drop-shadow-[0_18px_32px_rgba(75,65,55,0.16)]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-[13%]
                      top-[8%]
                      z-30
                      h-[52px]
                      w-[175px]
                      rotate-[-18deg]
                      rounded-full
                      bg-white/30
                      blur-[20px]
                    "
                  />
                </motion.div>

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-[12px]
                    rounded-full
                    border
                    border-white/70
                  "
                />
              </motion.div>

              <FloatingBubble className="left-[2%] top-[12%]">
                <BrainCircuit className="h-6 w-6 text-[#4D8B4F]" />
                <BubbleText title="AI" text="Intelligence" />
              </FloatingBubble>

              <FloatingBubble className="right-[-4%] top-[23%]">
                <Cloud className="h-6 w-6 text-[#4D8B4F]" />
                <BubbleText title="Cloud" text="Solutions" />
              </FloatingBubble>

              <FloatingBubble className="bottom-[12%] left-[12%]">
                <Lightbulb className="h-6 w-6 text-[#4D8B4F]" />
                <BubbleText title="Innovation" text="At Every Step" />
              </FloatingBubble>

              <FloatingBubble className="bottom-[2%] left-[48%]">
                <Code2 className="h-6 w-6 text-[#8B3C24]" />
                <BubbleText title="Engineering" text="Excellence" />
              </FloatingBubble>

              <FloatingBubble className="bottom-[15%] right-[-3%]">
                <Cpu className="h-6 w-6 text-[#8B3C24]" />
                <BubbleText title="Technology" text="That Empowers" />
              </FloatingBubble>

              <WaterBubble className="left-[5%] top-[4%] h-12 w-12" />
              <WaterBubble className="right-[8%] top-[8%] h-6 w-6" />
              <WaterBubble className="bottom-[8%] right-[12%] h-10 w-10" />
            </div>
          </div>

          <motion.button
            onClick={handleStoryScroll}
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-6
              left-1/2
              z-40
              flex
              h-14
              w-14
              -translate-x-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/90
              bg-white/20
              backdrop-blur-3xl
              shadow-[inset_3px_3px_5px_white,0_15px_35px_rgba(60,80,65,0.10)]
            "
          >
            <ChevronDown className="h-5 w-5 text-[#4D8B4F]" />
          </motion.button>

          <div className="absolute bottom-7 left-12 z-30 hidden items-center gap-3 xl:flex">
            <Mouse className="h-5 w-5 text-[#4D8B4F]" />
            <span className="text-xs text-[#59645C]">
              Scroll to explore
            </span>
          </div>
        </section>

        {/* OUR STORY */}
        <section
          id="about-story"
          className="relative min-h-screen overflow-hidden bg-[#F7F8F5] px-6 py-24 lg:px-12 xl:px-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(255,255,255,1)_0%,transparent_38%),radial-gradient(circle_at_72%_35%,rgba(187,214,190,0.28)_0%,transparent_35%),radial-gradient(circle_at_92%_75%,rgba(150,79,51,0.18)_0%,transparent_34%),linear-gradient(135deg,#F9FAF7_0%,#F4F6F1_50%,#F5ECE7_100%)]" />
          <div className="pointer-events-none absolute -bottom-[360px] -left-[250px] h-[720px] w-[1100px] rotate-[8deg] rounded-[50%] border-2 border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(99,173,108,0.20),rgba(217,239,218,0.35))] backdrop-blur-[24px] shadow-[inset_0_1px_0_white,inset_0_-20px_40px_rgba(77,139,79,0.13),0_-30px_80px_rgba(255,255,255,0.50)]" />
          <div className="pointer-events-none absolute -bottom-[430px] -right-[300px] h-[720px] w-[1000px] -rotate-[10deg] rounded-[50%] border-2 border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(139,60,36,0.17),rgba(241,216,203,0.30))] backdrop-blur-[25px] shadow-[inset_0_1px_0_white,inset_0_-20px_40px_rgba(139,60,36,0.12)]" />

          <WaterBubble className="left-[40%] top-[20%] h-12 w-12" />
          <WaterBubble className="left-[43%] top-[40%] h-6 w-6" />
          <WaterBubble className="bottom-[15%] left-[44%] h-10 w-10" />
          <WaterBubble className="right-[8%] top-[43%] h-8 w-8" />

          <div className="relative z-20 mx-auto grid min-h-[760px] max-w-[1500px] grid-cols-1 items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className="relative z-30 max-w-[650px]"
            >
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-10 bg-[#4D8B4F]" />
                <p className="text-[14px] font-bold uppercase tracking-[0.12em] text-[#427B47]">
                  Our Story
                </p>
              </div>

              <h2 className="mt-7 text-[55px] font-semibold leading-[1.04] tracking-[-0.055em] text-[#171917] sm:text-[65px] xl:text-[78px]">
                Engineering
                <br />
                <span className="text-[#4D8B4F]">Beyond</span>
                <br />
                <span className="text-[#8B3C24]">Technology</span>
              </h2>

              <div className="mt-7 h-[2px] w-10 bg-[#4D8B4F]" />

              <h3 className="mt-5 text-[22px] font-medium tracking-[-0.025em] text-[#545B56] sm:text-[25px]">
                One vision. One team. Infinite possibilities.
              </h3>

              <p className="mt-5 max-w-[590px] text-[16px] leading-[1.8] text-[#5E665F] sm:text-[17px]">
                At MSS Techno, we blend innovation, intelligence, and engineering
                excellence to build digital solutions that create real impact.
                We don't just follow technology, we build what's next.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex min-w-[220px] items-center justify-center gap-4 rounded-full border border-white/80 bg-[#4D8B4F] px-7 py-4 text-[14px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_18px_40px_rgba(77,139,79,0.24)]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/70">
                    <Play className="h-3 w-3 fill-white" />
                  </span>
                  Explore Our Story
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9 }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: [0, 4, 0, -4, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="absolute h-[650px] w-[590px] rounded-[48%_52%_44%_56%/57%_43%_57%_43%] border-2 border-white/85 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(159,203,164,0.12),rgba(139,60,36,0.08))] backdrop-blur-[10px] shadow-[inset_15px_18px_30px_rgba(255,255,255,0.95),inset_-18px_-20px_35px_rgba(139,60,36,0.08),0_30px_80px_rgba(70,85,72,0.08)]"
              />

              <div className="relative z-20 w-full max-w-[510px] overflow-hidden rounded-[54px] border-2 border-white/90 bg-white/20 p-10 backdrop-blur-[42px] backdrop-saturate-[250%] shadow-[inset_5px_6px_10px_rgba(255,255,255,0.95),inset_-5px_-7px_12px_rgba(77,139,79,0.06),0_35px_90px_rgba(65,80,68,0.12)]">
                <div className="pointer-events-none absolute left-[10%] top-0 h-[2px] w-[70%] bg-white" />

                <StoryItem icon={Building2} label="Since" value="2018" description="Building the future with purpose" color="green" />
                <StoryDivider />
                <StoryItem icon={BriefcaseBusiness} value="50+" title="Projects Delivered" description="Cutting-edge digital solutions" color="green" />
                <StoryDivider />
                <StoryItem icon={Users} value="30+" title="Happy Clients" description="Trusted by startups to enterprises" color="brown" />
                <StoryDivider />
                <StoryItem icon={Sparkles} value="AI-First" title="Innovation Driven" description="Intelligence at the core of everything we build" color="green" />
                <StoryDivider />
                <StoryItem icon={Globe2} value="Global" title="Impact" description="Delivering excellence across the world" color="brown" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative z-30 mx-auto mt-4 grid max-w-[1080px] grid-cols-1 overflow-hidden rounded-[38px] border border-white/90 bg-white/20 backdrop-blur-[40px] backdrop-saturate-[250%] shadow-[inset_4px_5px_8px_white,inset_-4px_-5px_9px_rgba(77,139,79,0.05),0_25px_70px_rgba(60,75,63,0.10)] sm:grid-cols-2 lg:grid-cols-4"
          >
            <ValueItem icon={ShieldCheck} title="Quality First" text="We never compromise on quality" color="green" />
            <ValueItem icon={LockKeyhole} title="Secure & Reliable" text="Security and reliability built into every solution" color="brown" />
            <ValueItem icon={Leaf} title="Sustainable Growth" text="Building a better future for generations" color="green" />
            <ValueItem icon={Heart} title="People Focused" text="Our people are the heart of our success" color="brown" last />
          </motion.div>
        </section>
        <section id="about-process">
       <ProcessSection />
       </section>
        {/* WHO WE ARE / MSS DNA */}
        <section
          id="who-we-are"
          className="relative min-h-screen overflow-hidden bg-[#F7F8F5] px-6 py-24 lg:px-12 xl:px-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(255,255,255,1)_0%,transparent_36%),radial-gradient(circle_at_61%_43%,rgba(204,226,207,0.34)_0%,transparent_34%),radial-gradient(circle_at_94%_82%,rgba(139,60,36,0.16)_0%,transparent_35%),linear-gradient(135deg,#FAFBF8_0%,#F3F6F2_55%,#F6EEE9_100%)]" />
          <div className="pointer-events-none absolute -bottom-[430px] -left-[300px] h-[720px] w-[1100px] rotate-[8deg] rounded-[50%] border-2 border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(112,181,120,0.18),rgba(221,239,221,0.30))] backdrop-blur-[28px]" />
          <div className="pointer-events-none absolute -bottom-[500px] -right-[340px] h-[800px] w-[1050px] -rotate-[12deg] rounded-[50%] border-2 border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(139,60,36,0.14),rgba(235,211,198,0.26))] backdrop-blur-[30px]" />

          <WaterBubble className="left-[18%] top-[13%] h-9 w-9" />
          <WaterBubble className="right-[16%] top-[17%] h-5 w-5" />
          <WaterBubble className="bottom-[18%] left-[46%] h-7 w-7" />

          <div className="relative z-20 mx-auto grid min-h-[760px] max-w-[1500px] grid-cols-1 items-center gap-8 xl:grid-cols-[0.72fr_1.28fr]">
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative z-30 max-w-[520px]"
            >
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-8 bg-[#4D8B4F]" />
                <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#477B4B]">
                  Who We Are
                </p>
              </div>

              <h2 className="mt-8 text-[48px] font-semibold leading-[1.12] tracking-[-0.055em] text-[#191B19] sm:text-[58px] xl:text-[65px]">
                Inside Our <span className="text-[#4D8B4F]">DNA.</span>
                <br />
                Built on Values.
                <br />
                Driven by <span className="text-[#8B3C24]">Purpose.</span>
              </h2>

              <p className="mt-7 max-w-[470px] text-[16px] leading-[1.75] text-[#5E665F]">
                MSS Techno is more than a technology company. We are a team of
                problem solvers, innovators, and engineers who believe in
                creating digital solutions that transform businesses and touch
                lives.
              </p>

              <button
                onClick={handleStoryScroll}
                className="mt-8 flex items-center gap-4 text-[14px] font-semibold text-[#477B4B]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/90 bg-white/25 backdrop-blur-[30px] shadow-[inset_3px_3px_6px_white,0_12px_30px_rgba(55,70,58,0.08)]">
                  <Play className="h-4 w-4 fill-[#4D8B4F] text-[#4D8B4F]" />
                </span>
                Explore Our Story
              </button>
            </motion.div>

            <div className="relative min-h-[760px] w-full">
              <div className="pointer-events-none absolute left-[52%] top-[50%] z-[5] h-[600px] w-[690px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#4D8B4F]/35" />
              <div className="pointer-events-none absolute left-[52%] top-[50%] z-[5] h-[480px] w-[570px] -translate-x-1/2 -translate-y-1/2 rotate-[18deg] rounded-[50%] border border-[#4D8B4F]/20" />

              <motion.div
                animate={{ y: [0, -8, 0, 8, 0], rotate: [-1, 1, -1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute left-[55%] top-[50%] z-10 h-[760px] w-[600px] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="absolute left-1/2 top-1/2 h-[620px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9BC69F]/12 blur-[75px]" />
                <img
                  src={dnaImage}
                  alt="MSS Techno DNA"
                  className="relative z-10 h-full w-full scale-[1.24] object-contain mix-blend-multiply drop-shadow-[0_30px_60px_rgba(67,91,70,0.16)]"
                />
              </motion.div>

              <DNAValue
                className="left-[36%] top-[-1%]"
                icon={Lightbulb}
                title="Innovation"
                text="We challenge ideas and embrace creativity to build what's next."
              />

              <DNAValue
                className="left-[-1%] top-[22%]"
                icon={Code2}
                title="Engineering"
                text="We write the foundation of digital experiences that scale and last."
              />

              <DNAValue
                className="left-[-4%] top-[63%]"
                icon={ShieldCheck}
                title="Trust"
                text="We build relationships rooted in transparency, integrity, and respect."
                brown
              />

              <DNAValue
                className="right-[0%] top-[27%]"
                icon={BrainCircuit}
                title="AI First"
                text="Artificial Intelligence is at the core of everything we design and deliver."
                brown
              />

              <DNAValue
                className="right-[2%] top-[61%]"
                icon={TrendingUp}
                title="Quality"
                text="Excellence is not a goal, it's our standard in every solution we deliver."
              />

              <DNAValue
                className="bottom-[-1%] right-[25%]"
                icon={Globe2}
                title="Scalability"
                text="We build solutions that grow with your business tomorrow."
              />

              <span className="absolute left-[25%] top-[17%] z-20 h-2.5 w-2.5 rounded-full bg-[#4D8B4F]" />
              <span className="absolute left-[13%] top-[42%] z-20 h-2.5 w-2.5 rounded-full bg-[#4D8B4F]" />
              <span className="absolute left-[17%] top-[73%] z-20 h-2.5 w-2.5 rounded-full bg-[#4D8B4F]" />
              <span className="absolute right-[17%] top-[34%] z-20 h-2.5 w-2.5 rounded-full bg-[#4D8B4F]" />
              <span className="absolute right-[14%] top-[57%] z-20 h-2.5 w-2.5 rounded-full bg-[#4D8B4F]" />
              <span className="absolute bottom-[12%] right-[31%] z-20 h-2.5 w-2.5 rounded-full bg-[#4D8B4F]" />
            </div>
          </div>

          <div className="relative z-30 mt-5 flex flex-col items-center gap-2 text-[#566058]">
            <Mouse className="h-7 w-7" />
            <p className="text-[11px]">Scroll to explore our journey</p>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section
          id="mission-vision"
          className="relative min-h-screen overflow-hidden bg-[#F7F8F5] px-6 py-24 lg:px-12 xl:px-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(255,255,255,1)_0%,transparent_38%),radial-gradient(circle_at_55%_43%,rgba(199,221,201,0.24)_0%,transparent_34%),radial-gradient(circle_at_92%_65%,rgba(139,60,36,0.15)_0%,transparent_34%),linear-gradient(135deg,#FAFBF8_0%,#F5F7F3_50%,#F6EEE9_100%)]" />

          <div className="pointer-events-none absolute -bottom-[430px] -left-[280px] h-[720px] w-[1050px] rotate-[12deg] rounded-[50%] border-2 border-white/90 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(113,181,121,0.18),rgba(219,239,220,0.34))] backdrop-blur-[28px] shadow-[inset_0_18px_34px_rgba(255,255,255,0.96),inset_0_-20px_42px_rgba(77,139,79,0.10)]" />
          <div className="pointer-events-none absolute -bottom-[460px] -right-[280px] h-[760px] w-[980px] -rotate-[12deg] rounded-[50%] border-2 border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(139,60,36,0.17),rgba(238,213,200,0.30))] backdrop-blur-[30px] shadow-[inset_0_18px_34px_rgba(255,255,255,0.90),inset_0_-22px_44px_rgba(139,60,36,0.11)]" />

          <WaterBubble className="left-[16%] top-[17%] h-8 w-8" />
          <WaterBubble className="right-[15%] top-[18%] h-7 w-7" />
          <WaterBubble className="bottom-[14%] left-[22%] h-6 w-6" />
          <WaterBubble className="bottom-[10%] left-[52%] h-8 w-8" />

          <div className="relative z-20 mx-auto grid min-h-[760px] max-w-[1500px] grid-cols-1 items-center gap-14 xl:grid-cols-[0.72fr_1.28fr]">
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className="relative z-30 max-w-[500px]"
            >
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-8 bg-[#4D8B4F]" />
                <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#477B4B]">
                  Mission & Vision
                </p>
              </div>

              <h2 className="mt-10 text-[50px] font-semibold leading-[1.13] tracking-[-0.055em] text-[#191B19] sm:text-[58px] xl:text-[66px]">
                Guided by{" "}
                <span className="text-[#4D8B4F]">Purpose.</span>
                <br />
                Driven by{" "}
                <span className="text-[#8B3C24]">Impact.</span>
              </h2>

              <p className="mt-10 max-w-[470px] text-[17px] leading-[1.9] text-[#626963]">
                Every solution we build is rooted in our mission and inspired by
                our vision for a better tomorrow. Together, they shape the value
                we deliver to our clients and the world.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <motion.button
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleStoryScroll}
                  className="flex min-w-[215px] items-center gap-4 rounded-full border border-white/80 bg-[linear-gradient(90deg,#3F7843,#79B97D)] px-4 py-3 text-[14px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_18px_42px_rgba(77,139,79,0.22)]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/20 backdrop-blur-xl">
                    <Play className="h-3.5 w-3.5 fill-white text-white" />
                  </span>
                  Discover Our Journey
                </motion.button>

                <div className="flex items-center gap-5 text-[13px] text-[#687069]">
                  <span className="h-px w-8 bg-[#C8CEC8]" />
                  <span>Scroll to explore</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </motion.div>

            <div className="relative flex min-h-[700px] items-center justify-center gap-14">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute left-[29%] top-1/2 h-[590px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border-2 border-white/90 bg-white/[0.03] backdrop-blur-[10px] shadow-[inset_10px_14px_24px_white,inset_-10px_-14px_26px_rgba(77,139,79,0.08)]"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute right-[2%] top-1/2 h-[590px] w-[330px] -translate-y-1/2 rounded-[50%] border-2 border-white/90 bg-white/[0.03] backdrop-blur-[10px] shadow-[inset_10px_14px_24px_white,inset_-10px_-14px_26px_rgba(139,60,36,0.08)]"
              />

              <MissionVisionCard
                icon={Flag}
                title="Our Mission"
                text="To deliver intelligent, innovative, and reliable digital solutions that empower businesses, enrich lives, and build a smarter world."
              />

              <MissionVisionCard
                icon={Telescope}
                title="Our Vision"
                text="To be a global leader in technology and innovation, recognized for building solutions that transform businesses and create a sustainable future."
                brown
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const MissionVisionCard = ({
  icon: Icon,
  title,
  text,
  brown = false,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 45 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.75 }}
    className="relative z-20 flex min-h-[520px] w-[380px] flex-col items-center justify-center overflow-hidden rounded-[48px] border-2 border-white/90 bg-white/20 px-12 py-12 text-center backdrop-blur-[42px] backdrop-saturate-[250%] shadow-[inset_8px_10px_18px_rgba(255,255,255,0.98),inset_-8px_-10px_20px_rgba(77,139,79,0.05),0_35px_90px_rgba(65,80,68,0.10)]"
  >
    <div className="pointer-events-none absolute left-[12%] top-0 h-[2px] w-[72%] bg-white" />

    <div
      className={`flex h-[130px] w-[130px] items-center justify-center rounded-full border-2 border-white/90 backdrop-blur-[35px] ${
        brown
          ? "bg-[#EAD9D0]/35 text-[#9A4828]"
          : "bg-[#DCE9DC]/40 text-[#477B4B]"
      } shadow-[inset_6px_7px_12px_white,inset_-5px_-6px_12px_rgba(77,139,79,0.06),0_18px_45px_rgba(60,75,63,0.08)]`}
    >
      <Icon className="h-14 w-14" strokeWidth={1.8} />
    </div>

    <h3
      className={`mt-9 text-[27px] font-semibold tracking-[-0.035em] ${
        brown ? "text-[#974526]" : "text-[#3F8045]"
      }`}
    >
      {title}
    </h3>

    <span
      className={`mt-5 h-[2px] w-11 ${
        brown ? "bg-[#9A4828]" : "bg-[#4D8B4F]"
      }`}
    />

    <p className="mt-7 text-[15px] leading-[1.9] text-[#4F5650]">
      {text}
    </p>

    <motion.div
      whileHover={{ scale: 1.08 }}
      className="mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/90 bg-white/25 backdrop-blur-[30px] shadow-[inset_3px_3px_6px_white,0_12px_30px_rgba(55,70,58,0.08)]"
    >
      <ArrowRight
        className={`h-5 w-5 ${
          brown ? "text-[#9A4828]" : "text-[#4D8B4F]"
        }`}
      />
    </motion.div>
  </motion.div>
);

const DNAValue = ({ className = "", icon: Icon, title, text, brown = false }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className={`absolute z-20 flex w-[245px] items-center gap-4 ${className}`}
  >
    <div
      className={`flex h-[92px] w-[92px] shrink-0 items-center justify-center rounded-full border-2 border-white/90 backdrop-blur-[35px] ${
        brown
          ? "bg-[#EAD9D0]/45 text-[#91472E]"
          : "bg-[#DCE9DC]/45 text-[#477B4B]"
      } shadow-[inset_5px_6px_10px_white,inset_-4px_-5px_10px_rgba(77,139,79,0.06),0_18px_45px_rgba(60,75,63,0.10)]`}
    >
      <Icon className="h-9 w-9" />
    </div>

    <div>
      <h3 className={`text-[15px] font-semibold ${brown ? "text-[#8B3C24]" : "text-[#477B4B]"}`}>
        {title}
      </h3>
      <p className="mt-2 text-[11px] leading-[1.65] text-[#59625B]">{text}</p>
    </div>
  </motion.div>
);

const StoryItem = ({
  icon: Icon,
  label,
  value,
  title,
  description,
  color = "green",
}) => {
  const isGreen = color === "green";

  return (
    <motion.div whileHover={{ x: 5 }} className="flex items-center gap-6 py-5 transition">
      <div
        className={`flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-white/90 backdrop-blur-3xl ${
          isGreen
            ? "bg-[#CFE4D0]/45 text-[#3F8045]"
            : "bg-[#E8D7CE]/45 text-[#91472E]"
        } shadow-[inset_3px_3px_6px_white,0_12px_30px_rgba(60,75,63,0.08)]`}
      >
        <Icon className="h-7 w-7" />
      </div>

      <div>
        {label && (
          <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#4D8B4F]">
            {label}
          </p>
        )}

        <p className={`text-[29px] font-semibold leading-none tracking-[-0.035em] ${
          isGreen ? "text-[#3F8045]" : "text-[#9A4B30]"
        }`}>
          {value}
        </p>

        {title && <p className="mt-1 text-[15px] font-medium text-[#242924]">{title}</p>}

        <p className="mt-1 text-[12px] leading-[1.5] text-[#6C746D]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const StoryDivider = () => (
  <div className="ml-[94px] h-px bg-white/80 shadow-[0_1px_0_rgba(75,90,78,0.08)]" />
);

const ValueItem = ({
  icon: Icon,
  title,
  text,
  color = "green",
  last = false,
}) => {
  const isGreen = color === "green";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`flex items-center gap-4 px-7 py-7 ${
        !last ? "border-b border-white/70 lg:border-b-0 lg:border-r" : ""
      }`}
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/80 ${
          isGreen
            ? "bg-[#D8E8D8]/45 text-[#3F8045]"
            : "bg-[#EBDCD4]/45 text-[#91472E]"
        } shadow-[inset_2px_2px_4px_white]`}
      >
        <Icon className="h-6 w-6" />
      </div>

      <div>
        <h4 className="text-[13px] font-semibold text-[#262B27]">{title}</h4>
        <p className="mt-1 text-[11px] leading-[1.45] text-[#687069]">{text}</p>
      </div>
    </motion.div>
  );
};

const FloatingBubble = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        z-40
        flex
        items-center
        gap-3
        overflow-hidden
        rounded-[28px]
        border
        border-white/90
        bg-white/20
        px-6
        py-4
        backdrop-blur-[40px]
        backdrop-saturate-[240%]
        shadow-[inset_4px_4px_6px_white,inset_-4px_-5px_8px_rgba(77,139,79,0.06),0_20px_50px_rgba(65,85,68,0.09)]
        ${className}
      `}
    >
      <div className="pointer-events-none absolute left-[10%] top-0 h-px w-[65%] bg-white" />
      {children}
    </motion.div>
  );
};

const BubbleText = ({ title, text }) => {
  return (
    <div className="relative z-10">
      <p className="font-semibold text-[#405844]">
        {title}
      </p>
      <p className="text-[11px] text-[#788079]">
        {text}
      </p>
    </div>
  );
};

const WaterBubble = ({ className = "" }) => {
  return (
    <motion.div
      animate={{
        y: [0, -18, 0],
        x: [0, 5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        rounded-full
        border
        border-white/95
        bg-white/10
        backdrop-blur-xl
        backdrop-saturate-[240%]
        shadow-[inset_5px_5px_7px_white,inset_-4px_-5px_8px_rgba(77,139,79,0.10),0_10px_30px_rgba(65,90,70,0.10)]
        ${className}
      `}
    />
  );
};

export default AboutPage;