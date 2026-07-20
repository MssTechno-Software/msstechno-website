import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  Calendar,
  ArrowRight,
  ArrowUp,
  Check,
} from "lucide-react";

import { motion } from "motion/react";
import logo from "../../assets/images/logo.png";

const Footer = ({ openMeetingModal }) => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setIsSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleHomeScroll = (selector) => {
    if (window.location.pathname === "/") {
      if (selector === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(selector);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    } else {
      navigate("/");
      setTimeout(() => {
        if (selector === "#home") {
          window.scrollTo({ top: 0, behavior: "auto" });
        } else {
          const element = document.querySelector(selector);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, 300);
    }
  };

  const handleSolutionsNavigation = () => {
    navigate("/solutions");
    // Ensure scroll resets immediately on state change/render layer setup
    window.scrollTo(0, 0);
  };

  const socials = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/mss-techno-pvt-ltd/posts/?feedView=all",
      color: "#3F7F49",
      glow: "rgba(77,139,79,0.28)",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/mss_techno/?hl=en",
      color: "#8A351B",
      glow: "rgba(138,53,27,0.25)",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61550335696687",
      color: "#4D8B4F",
      glow: "rgba(77,139,79,0.28)",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/@ManikantaSneha",
      color: "#9A3D20",
      glow: "rgba(154,61,32,0.25)",
    },
  ];

  const quickLinks = [
    { name: "Home", action: () => handleHomeScroll("#home") },
    { name: "About Us", action: () => handleHomeScroll("#about") },
    { name: "Solutions", action: handleSolutionsNavigation },
    { name: "Case Studies", action: () => handleHomeScroll("#case-studies") },
    { name: "Insights", action: () => navigate("/insights") },
    { name: "Careers", action: () => handleHomeScroll("#careers-section"), badge: "Hiring" },
    { name: "Contact", action: () => handleHomeScroll("#contact-section") },
  ];

  const solutionsLinks = [
    { name: "AI Solutions", slug: "ai-solutions" },
    { name: "Custom Software", slug: "custom-software" },
    { name: "Web Development", slug: "web-development" },
    { name: "Mobile App", slug: "mobile-development" },
    { name: "Cloud Solutions", slug: "cloud-solutions" },
    { name: "DevOps", slug: "devops" },
    { name: "UI/UX Design", slug: "ui-ux-design" },
    { name: "Data Analytics", slug: "data-analytics" },
    { name: "QA & Testing", slug: "qa-testing" },
  ];

  return (
    <footer
      id="app-footer"
      className="
        relative
        overflow-hidden
        border-t
        border-white/80
        bg-[#F5F6F1]/80
        text-[#202821]
        backdrop-blur-[40px]
        backdrop-saturate-150
      "
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-[15%]
            -top-[60%]
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#82B875]/25
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-[12%]
            -top-[25%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#C98566]/20
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-[-70%]
            left-[35%]
            h-[700px]
            w-[700px]
            rounded-full
            bg-white/90
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          py-20
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-12
            pb-14
            md:grid-cols-2
            lg:grid-cols-12
            lg:gap-12
          "
        >
          {/* BRAND AREA */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-white/80
                  bg-white/40
                  p-1.5
                  shadow-[inset_0_1px_0_white,0_12px_35px_rgba(45,60,48,0.08)]
                  backdrop-blur-2xl
                "
              >
                <img
                  src={logo}
                  alt="MSS Techno Logo"
                  className="
                    h-full
                    w-full
                    object-contain
                  "
                />
              </div>

              <div>
                <h3
                  className="
                    font-serif
                    text-[24px]
                    font-bold
                    tracking-[-0.025em]
                    text-[#6B2D1A]
                  "
                >
                  MSS Techno
                </h3>

                <p
                  className="
                    mt-0.5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#667168]
                  "
                >
                  Lets get started on your journey to success
                </p>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="mt-8">
              <h4
                className="
                  mb-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#6B2D1A]
                "
              >
                Stay Informed
              </h4>

              {isSubscribed ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    flex
                    max-w-sm
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/80
                    bg-white/35
                    px-5
                    py-3
                    text-xs
                    font-semibold
                    text-[#4D8B4F]
                    shadow-[inset_0_1px_0_white]
                    backdrop-blur-2xl
                  "
                >
                  <Check className="h-4 w-4" />
                  Success! You have subscribed.
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="
                    flex
                    max-w-sm
                    items-center
                    rounded-full
                    border
                    border-white/80
                    bg-white/35
                    p-1.5
                    shadow-[inset_0_1px_0_white,0_12px_35px_rgba(50,60,50,0.06)]
                    backdrop-blur-2xl
                    transition-all
                    duration-300
                    focus-within:bg-white/50
                    focus-within:border-[#4D8B4F]/30
                  "
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      px-4
                      py-2
                      text-xs
                      text-[#283029]
                      outline-none
                      placeholder:text-[#7B857C]
                    "
                  />

                  <motion.button
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    type="submit"
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#4D8B4F]
                      px-5
                      py-2.5
                      text-xs
                      font-bold
                      text-white
                      shadow-[0_10px_25px_rgba(77,139,79,0.22)]
                    "
                  >
                    Subscribe
                    <ArrowRight className="h-3.5 w-3.5" />
                  </motion.button>
                </form>
              )}
            </div>

            {/* SOCIALS */}
            <div className="mt-8">
              <h4
                className="
                  mb-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#6B2D1A]
                "
              >
                Connect
              </h4>

              <div className="flex flex-wrap gap-2.5">
                {socials.map((social) => {
                  const Icon = social.icon;

                  const socialColors = {
                    LinkedIn: "#0A66C2",
                    Instagram: "#E4405F",
                    Facebook: "#1877F2",
                    YouTube: "#FF0000",
                  };

                  const iconColor = socialColors[social.label] || "#4D8B4F";

                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        y: -3,
                        scale: 1.06,
                      }}
                      whileTap={{
                        scale: 0.94,
                      }}
                      aria-label={social.label}
                      className="
                        group
                        relative
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-[14px]
                        border
                        border-white/50
                        bg-white/[0.025]
                        backdrop-blur-[6px]
                        backdrop-saturate-[160%]
                        shadow-[inset_1px_1px_1px_rgba(255,255,255,0.90),inset_-1px_-1px_1px_rgba(50,60,55,0.08),0_10px_25px_rgba(45,55,50,0.08)]
                        transition-all
                        duration-300
                        hover:border-white/70
                        hover:bg-white/[0.05]
                      "
                    >
                      <span
                        className="
                          pointer-events-none
                          absolute
                          left-[10%]
                          top-[6%]
                          h-[25%]
                          w-[58%]
                          rounded-full
                          bg-white/25
                          blur-[7px]
                        "
                      />

                      <Icon
                        className="
                          relative
                          z-10
                          h-4
                          w-4
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                        strokeWidth={2.2}
                        style={{
                          color: iconColor,
                          filter: `drop-shadow(0 3px 8px ${iconColor}40)`,
                        }}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* QUICK LINKS SECTION */}
          <div className="lg:col-span-2">
            <h4
              className="
                font-serif
                text-lg
                font-semibold
                text-[#4D8B4F]
              "
            >
              Quick Links
            </h4>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={link.action}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-[#5D685F]
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-[#6B2D1A]
                    "
                  >
                    {link.name}

                    {link.badge && (
                      <span
                        className="
                          rounded-full
                          bg-[#4D8B4F]/10
                          px-2
                          py-0.5
                          text-[8px]
                          font-bold
                          uppercase
                          text-[#4D8B4F]
                        "
                      >
                        {link.badge}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SOLUTIONS SECTION */}
          <div className="lg:col-span-3">
            <h4
              className="
                font-serif
                text-lg
                font-semibold
                text-[#4D8B4F]
              "
            >
              Solutions
            </h4>

            <ul className="mt-6 space-y-3">
              {solutionsLinks.map((solution) => (
                <li key={solution.name}>
                  <button
                    onClick={() => navigate(`/solutions/${solution.slug}`)}
                    className="
                      text-sm
                      font-medium
                      text-[#5D685F]
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-[#6B2D1A]
                    "
                  >
                    {solution.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* OFFICE INFRASTRUCTURE */}
          <div className="lg:col-span-3">
            <h4
              className="
                font-serif
                text-lg
                font-semibold
                text-[#4D8B4F]
              "
            >
              Office
            </h4>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-[14px]
                    border
                    border-white/80
                    bg-white/35
                    text-[#4D8B4F]
                    backdrop-blur-xl
                  "
                >
                  <Phone className="h-4 w-4" />
                </div>

                <a
                  href="tel:+1 (437) 299-7361"
                  className="
                    text-xs
                    font-semibold
                    text-[#5D685F]
                    hover:text-[#6B2D1A]
                  "
                >
                  +1 437 299-7361
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-[14px]
                    border
                    border-white/80
                    bg-white/35
                    text-[#6B2D1A]
                    backdrop-blur-xl
                  "
                >
                  <Mail className="h-4 w-4" />
                </div>

                <a
                  href="mailto:info@msstechno.com"
                  className="
                    text-xs
                    font-semibold
                    text-[#5D685F]
                    hover:text-[#6B2D1A]
                  "
                >
                  info@msstechno.com
                </a>
              </div>
            </div>

            <motion.button
              whileHover={{
                x: 3,
              }}
              onClick={openMeetingModal}
              className="
                mt-6
                flex
                items-center
                gap-2
                text-sm
                font-bold
                text-[#6B2D1A]
              "
            >
              <Calendar className="h-4 w-10" />
              Schedule a Meeting
            </motion.button>
          </div>
        </div>

        {/* LIQUID DIVIDER */}
        <div
          className="
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#566359]/20
            to-transparent
          "
        />

        {/* BOTTOM METADATA BAR */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5
            pt-8
            text-xs
            text-[#687269]
            sm:flex-row
          "
        >
          <p>
            © {currentYear} MSS Techno Software Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
              "Accessibility",
            ].map((policy) => (
              <button
                key={policy}
                onClick={() => handleHomeScroll("#contact-section")}
                className="
                  transition-colors
                  duration-300
                  hover:text-[#6B2D1A]
                "
              >
                {policy}
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.94,
            }}
            onClick={handleScrollToTop}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/80
              bg-white/35
              text-[#4D8B4F]
              shadow-[inset_0_1px_0_white,0_10px_30px_rgba(50,60,50,0.06)]
              backdrop-blur-xl
            "
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export { Footer };