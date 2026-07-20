// SolutionsPage.jsx
import { useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

import {
  BrainCircuit,
  Cloud,
  Code2,
  Infinity as InfinityIcon,
  Smartphone,
  BarChart3,
  ShieldCheck,
  PenTool,
  Globe2,
  Play,
  Headphones,
  ArrowRight,
} from "lucide-react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import mssLogo from "../../assets/images/logo.png";

const SolutionPill = ({ icon: Icon, title, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.04,
        y: -4,
      }}
      transition={{
        duration: 0.45,
      }}
      className={`
        absolute
        z-20
        flex
        min-w-[190px]
        items-center
        gap-4
        rounded-full
        border
        border-white/80
        bg-white/48
        px-5
        py-3
        backdrop-blur-[30px]
        backdrop-saturate-[180%]
        shadow-[inset_3px_3px_7px_rgba(255,255,255,0.95),inset_-3px_-3px_7px_rgba(77,139,79,0.04),0_16px_38px_rgba(49,70,52,0.10)]
        ${className}
      `}
    >
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-white
          bg-white/55
          text-[#4D8B4F]
          shadow-[0_10px_25px_rgba(77,139,79,0.10)]
        "
      >
        <Icon className="h-6 w-6" strokeWidth={1.8} />
      </div>

      <span
        className="
          whitespace-nowrap
          text-[13px]
          font-medium
          text-[#171B18]
        "
      >
        {title}
      </span>
    </motion.div>
  );
};

const ExpertiseCard = ({ icon: Icon, title, text, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{
        duration: 0.45,
      }}
      className="
        group
        relative
        min-h-[205px]
        cursor-pointer
        overflow-hidden
        rounded-[28px]
        border
        border-white/90
        bg-white/42
        p-6
        backdrop-blur-[38px]
        backdrop-saturate-[190%]
        shadow-[inset_4px_4px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(77,139,79,0.035),0_20px_55px_rgba(53,72,56,0.09)]
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-[20px]
          border
          border-white
          bg-white/60
          text-[#4D8B4F]
          shadow-[0_12px_28px_rgba(77,139,79,0.10)]
        "
      >
        <Icon className="h-7 w-7" strokeWidth={1.8} />
      </div>

      <h3
        className="
          mt-4
          max-w-[280px]
          text-[20px]
          font-semibold
          leading-[1.15]
          tracking-[-0.025em]
          text-[#171B18]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          max-w-[300px]
          pr-10
          text-[12px]
          leading-[1.8]
          text-[#626B64]
        "
      >
        {text}
      </p>

      <motion.button
        whileHover={{
          scale: 1.1,
          rotate: -4,
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
        className="
          absolute
          bottom-5
          right-5
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white
          bg-white/65
          text-[#4D8B4F]
          shadow-[0_12px_28px_rgba(55,72,57,0.12)]
        "
      >
        <ArrowRight className="h-5 w-5" />
      </motion.button>
    </motion.div>
  );
};

const SolutionsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToContactSection = () => {
    if (window.location.pathname === "/") {
      const section = document.getElementById("contact-section");
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("contact-section");
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    }
  };

  const scrollToExpertise = () => {
    document
      .getElementById("expertise")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <>
      <SEO
        title="Software Development Services | MSS Techno"
        description="Explore AI, Cloud, Web Development, Mobile Apps and Enterprise Software services."
        url="https://msstechno.com/services"
      />
      <Header activeSection="solutions" />

      <main
        className="
          overflow-hidden
          bg-[#F8FAF8]
          text-[#171B18]
        "
      >
        {/* SOLUTIONS HERO */}
        <section
          className="
            relative
            min-h-screen
            overflow-hidden
            px-6
            pb-14
            pt-[135px]
            lg:px-16
          "
        >
          {/* BACKGROUND */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="
                absolute
                -left-[220px]
                -top-[250px]
                h-[620px]
                w-[620px]
                rounded-full
                border
                border-white
                bg-[#D8EBDD]/55
                shadow-[inset_0_0_70px_rgba(255,255,255,0.95)]
                blur-[1px]
              "
            />

            <div
              className="
                absolute
                -right-[250px]
                top-[20px]
                h-[600px]
                w-[600px]
                rounded-full
                bg-[#EFD9CF]/50
                blur-[75px]
              "
            />

            <div
              className="
                absolute
                bottom-[-320px]
                left-[-150px]
                h-[680px]
                w-[680px]
                rounded-full
                border
                border-white
                bg-[#D5EAD9]/60
                shadow-[inset_0_0_80px_rgba(255,255,255,0.95)]
              "
            />

            <div
              className="
                absolute
                bottom-[-300px]
                right-[-120px]
                h-[650px]
                w-[650px]
                rounded-full
                border
                border-white
                bg-[#E8CDBF]/55
                shadow-[inset_0_0_80px_rgba(255,255,255,0.95)]
              "
            />

            <div
              className="
                absolute
                left-[32%]
                top-[20%]
                h-[500px]
                w-[500px]
                rounded-full
                bg-[#DDF0DF]/40
                blur-[110px]
              "
            />
          </div>

          <div
            className="
              relative
              z-10
              mx-auto
              grid
              max-w-[1450px]
              grid-cols-1
              items-center
              gap-12
              lg:grid-cols-[0.78fr_1.22fr]
            "
          >
            {/* LEFT CONTENT */}
            <motion.div
              initial={{
                opacity: 1,
                x: 0,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white
                  bg-white/55
                  px-5
                  py-3
                  backdrop-blur-2xl
                  shadow-[0_12px_30px_rgba(55,72,57,0.08)]
                "
              >
                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[#4D8B4F]
                    shadow-[0_0_12px_rgba(77,139,79,0.7)]
                  "
                />

                <span
                  className="
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-[0.05em]
                    text-[#4D8B4F]
                  "
                >
                  Solutions
                </span>
              </div>

              <h1
                className="
                  mt-7
                  max-w-[610px]
                  text-[46px]
                  font-semibold
                  leading-[1.12]
                  tracking-[-0.05em]
                  text-[#171B18]
                  lg:text-[58px]
                "
              >
                Engineering Digital
                <br />
                Experiences That
                <br />
                Drive{" "}
                <span className="text-[#4D8B4F]">
                  Business Growth.
                </span>
              </h1>

              <p
                className="
                  mt-7
                  max-w-[520px]
                  text-[16px]
                  leading-[2]
                  text-[#626B64]
                "
              >
                We combine strategy, design, and engineering
                to build powerful digital solutions that help
                businesses innovate, automate, and lead in a
                competitive world.
              </p>

              <div
                className="
                  mt-9
                  flex
                  flex-wrap
                  items-center
                  gap-5
                "
              >
                <button
                  onClick={scrollToExpertise}
                  className="
                    flex
                    items-center
                    gap-7
                    rounded-full
                    border
                    border-white
                    bg-white/55
                    px-7
                    py-4
                    text-[14px]
                    font-medium
                    backdrop-blur-2xl
                    shadow-[0_12px_35px_rgba(55,72,57,0.08)]
                  "
                >
                  Explore Services

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-white/70
                      text-[#4D8B4F]
                    "
                  >
                    <Play
                      className="h-4 w-4"
                      fill="currentColor"
                    />
                  </span>
                </button>
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <div
              className="
                relative
                hidden
                h-[620px]
                lg:block
              "
            >
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[430px]
                  w-[430px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#4D8B4F]/15
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[540px]
                  w-[540px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#4D8B4F]/12
                "
              />

              {/* CENTER GLASS */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-[260px]
                  w-[260px]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white
                  bg-white/38
                  backdrop-blur-[35px]
                  backdrop-saturate-[190%]
                  shadow-[inset_8px_8px_20px_rgba(255,255,255,0.98),inset_-8px_-8px_20px_rgba(77,139,79,0.06),0_25px_70px_rgba(55,72,57,0.12)]
                "
              >
                <div
                  className="
                    absolute
                    inset-[28px]
                    rounded-full
                    border
                    border-white
                    bg-white/35
                    shadow-[inset_0_0_45px_rgba(255,255,255,0.95)]
                  "
                />

                <img
                  src={mssLogo}
                  alt="MSS Techno"
                  className="
                    relative
                    z-10
                    w-[125px]
                    object-contain
                  "
                />
              </motion.div>

              <SolutionPill
                icon={BrainCircuit}
                title="AI Solutions"
                className="left-[41%] top-[3%]"
              />

              <SolutionPill
                icon={Code2}
                title="Custom Software"
                className="left-[3%] top-[19%]"
              />

              <SolutionPill
                icon={Globe2}
                title="Web Development"
                className="right-[-2%] top-[20%]"
              />

              <SolutionPill
                icon={ShieldCheck}
                title="QA & Testing"
                className="left-[1%] top-[45%]"
              />

              <SolutionPill
                icon={Smartphone}
                title="Mobile Development"
                className="right-[-6%] top-[45%]"
              />

              <SolutionPill
                icon={PenTool}
                title="UI/UX Design"
                className="left-[5%] top-[71%]"
              />

              <SolutionPill
                icon={Cloud}
                title="Cloud Solutions"
                className="right-[-1%] top-[71%]"
              />

              <SolutionPill
                icon={InfinityIcon}
                title="DevOps"
                className="bottom-[0%] left-[42%]"
              />
            </div>
          </div>

          {/* TRUST BAR */}
          <div
            className="
              relative
              z-10
              mx-auto
              mt-4
              flex
              max-w-[1050px]
              flex-wrap
              items-center
              justify-between
              gap-7
              rounded-[30px]
              border
              border-white
              bg-white/45
              px-10
              py-7
              backdrop-blur-[35px]
              shadow-[0_20px_50px_rgba(55,72,57,0.09)]
            "
          >
            <p
              className="
                max-w-[180px]
                text-[14px]
                leading-5
                text-[#687069]
              "
            >
              Trusted by forward-thinking companies worldwide
            </p>

            {[
              "Infosys",
              "Tech Mahindra",
              "TCS",
              "Wipro",
              "HCL",
              "Deloitte.",
            ].map((company) => (
              <span
                key={company}
                className="
                  text-[20px]
                  font-semibold
                  text-[#7C8580]
                "
              >
                {company}
              </span>
            ))}
          </div>
        </section>

        {/* OUR EXPERTISE */}
        <section
          id="expertise"
          className="
            relative
            overflow-hidden
            px-6
            py-20
            lg:px-16
          "
        >
          {/* BACKGROUND */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="
                absolute
                -left-[250px]
                top-[-100px]
                h-[620px]
                w-[620px]
                rounded-full
                border
                border-white
                bg-[#DDEEDF]/50
              "
            />

            <div
              className="
                absolute
                -right-[220px]
                top-[30px]
                h-[580px]
                w-[580px]
                rounded-full
                border
                border-white
                bg-[#F0DDD4]/50
              "
            />

            <div
              className="
                absolute
                bottom-[-200px]
                left-[25%]
                h-[500px]
                w-[500px]
                rounded-full
                bg-[#DCEEDF]/40
                blur-[100px]
              "
            />
          </div>

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-[1380px]
            "
          >
            {/* HEADING */}
            <motion.div
              initial={{
                opacity: 1,
                y: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-center"
            >
              <div
                className="
                  inline-flex
                  rounded-full
                  border
                  border-white
                  bg-white/55
                  px-5
                  py-2
                  backdrop-blur-2xl
                "
              >
                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-[#4D8B4F]
                  "
                >
                  Our Expertise
                </span>
              </div>

              <h2
                className="
                  mx-auto
                  mt-4
                  max-w-[780px]
                  text-[40px]
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.045em]
                  text-[#171B18]
                  lg:text-[48px]
                "
              >
                Choose the service that
                <br />
                <span className="text-[#4D8B4F]">
                  matches your business goals.
                </span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-[720px]
                  text-[15px]
                  leading-7
                  text-[#626B64]
                "
              >
                From strategy and design to engineering and
                support, we offer end-to-end services to help
                your business innovate, scale, and succeed.
              </p>
            </motion.div>

            {/* CARDS GRID */}
            <div
              className="
                mt-10
                grid
                grid-cols-1
                gap-4
                lg:grid-cols-3
              "
            >
              {/* AI CARD */}
              <motion.div
                onClick={() =>
                  navigate("/solutions/ai-solutions")
                }
                initial={{
                  opacity: 1,
                  y: 0,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  min-h-[205px]
                  cursor-pointer
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white
                  bg-[linear-gradient(135deg,rgba(237,248,235,0.9),rgba(255,255,255,0.48))]
                  p-6
                  backdrop-blur-[38px]
                  shadow-[inset_4px_4px_8px_rgba(255,255,255,0.95),0_20px_55px_rgba(53,72,56,0.10)]
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-[20px]
                    border
                    border-white
                    bg-white/60
                    text-[#4D8B4F]
                  "
                >
                  <BrainCircuit className="h-7 w-7" />
                </div>

                <h3
                  className="
                    mt-4
                    text-[22px]
                    font-semibold
                  "
                >
                  AI Solutions
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[260px]
                    text-[12px]
                    leading-6
                    text-[#626B64]
                  "
                >
                  Unlock the power of AI to automate
                  processes, gain insights, and build
                  intelligent products.
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/solutions/ai-solutions");
                  }}
                  className="
                    mt-3
                    flex
                    items-center
                    gap-3
                    text-[14px]
                    font-semibold
                    text-[#4D8B4F]
                  "
                >
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </button>

                <div
                  className="
                    absolute
                    -bottom-[70px]
                    right-[-35px]
                    h-[230px]
                    w-[230px]
                    rounded-full
                    border
                    border-white
                    bg-[#DDF2DE]/45
                    shadow-[inset_0_0_50px_rgba(255,255,255,0.95),0_0_55px_rgba(77,139,79,0.16)]
                  "
                />

                <motion.div
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    bottom-[35px]
                    right-[65px]
                    flex
                    h-[90px]
                    w-[90px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white
                    bg-white/50
                    text-[#4D8B4F]
                    backdrop-blur-2xl
                  "
                >
                  <BrainCircuit className="h-11 w-11" />
                </motion.div>
              </motion.div>

              <ExpertiseCard
                icon={Code2}
                title="Custom Software Development"
                text="Tailored software solutions designed to solve your unique business challenges."
                onClick={() =>
                  navigate("/solutions/custom-software")
                }
              />

              <ExpertiseCard
                icon={Globe2}
                title="Web Development"
                text="Modern, scalable, and responsive web applications that deliver seamless user experiences."
                onClick={() =>
                  navigate("/solutions/web-development")
                }
              />

              <ExpertiseCard
                icon={Smartphone}
                title="Mobile App Development"
                text="Native and cross-platform mobile apps that engage users and accelerate business growth."
                onClick={() =>
                  navigate("/solutions/mobile-development")
                }
              />

              <ExpertiseCard
                icon={Cloud}
                title="Cloud Solutions"
                text="Scalable, secure, and cost-effective cloud solutions to modernize your infrastructure."
                onClick={() =>
                  navigate("/solutions/cloud-solutions")
                }
              />

              <ExpertiseCard
                icon={InfinityIcon}
                title="DevOps"
                text="Streamline your development lifecycle with CI/CD, automation, and continuous delivery."
                onClick={() =>
                  navigate("/solutions/devops")
                }
              />

              <ExpertiseCard
                icon={PenTool}
                title="UI/UX Design"
                text="Human-centered designs that create meaningful digital experiences and drive user satisfaction."
                onClick={() =>
                  navigate("/solutions/ui-ux-design")
                }
              />

              <ExpertiseCard
                icon={BarChart3}
                title="Data Analytics"
                text="Transform your data into actionable insights to make smarter, faster business decisions."
                onClick={() =>
                  navigate("/solutions/data-analytics")
                }
              />

              <ExpertiseCard
                icon={ShieldCheck}
                title="QA & Testing"
                text="Ensure quality, reliability, and performance with comprehensive testing across all platforms."
                onClick={() =>
                  navigate("/solutions/qa-testing")
                }
              />
            </div>

            {/* CUSTOM SOLUTION */}
            <motion.div
              initial={{
                opacity: 1,
                y: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="
                mt-4
                flex
                flex-col
                items-start
                justify-between
                gap-5
                rounded-[28px]
                border
                border-white
                bg-white/45
                px-7
                py-5
                backdrop-blur-[38px]
                shadow-[0_18px_45px_rgba(55,70,57,0.09)]
                md:flex-row
                md:items-center
              "
            >
              <div className="flex items-center gap-5">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white
                    bg-white/60
                    text-[#4D8B4F]
                  "
                >
                  <Headphones className="h-6 w-6" />
                </div>

                <div>
                  <h3
                    className="
                      text-[19px]
                      font-semibold
                    "
                  >
                    Need a custom solution?
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[14px]
                      text-[#687069]
                    "
                  >
                    Let's build something great together.
                  </p>
                </div>
              </div>

              <button
                onClick={goToContactSection}
                className="
                  flex
                  items-center
                  gap-5
                  text-[15px]
                  font-semibold
                  text-[#4D8B4F]
                "
              >
                Talk to Our Experts

                <span
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white
                    bg-white/65
                    shadow-md
                  "
                >
                  <ArrowRight className="h-5 w-5" />
                </span>
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SolutionsPage;