import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
} from "motion/react";

import {
  Search,
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  BrainCircuit,
  Code2,
  Globe2,
  Smartphone,
  Cloud,
  Infinity as InfinityIcon,
  PenTool,
  BarChart3,
  ShieldCheck,
  LifeBuoy,
  ChevronDown,
} from "lucide-react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import logo from "../../assets/images/logo.png";
import { SEARCH_DATA } from "../articles";

/* SOLUTIONS */

const solutions = [
  {
    title: "AI Solutions",
    text: "Build intelligent AI-powered applications and automation.",
    icon: BrainCircuit,
    slug: "ai-solutions",
  },
  {
    title: "Custom Software",
    text: "Tailored enterprise software for unique business needs.",
    icon: Code2,
    slug: "custom-software",
  },
  {
    title: "Web Development",
    text: "Modern, scalable, and responsive web applications.",
    icon: Globe2,
    slug: "web-development",
  },
  {
    title: "Mobile Development",
    text: "Native and cross-platform mobile experiences.",
    icon: Smartphone,
    slug: "mobile-development",
  },
  {
    title: "Cloud Solutions",
    text: "Secure cloud migration, infrastructure, and optimization.",
    icon: Cloud,
    slug: "cloud-solutions",
  },
  {
    title: "DevOps",
    text: "CI/CD pipelines, automation, and cloud operations.",
    icon: InfinityIcon,
    slug: "devops",
  },
  {
    title: "UI/UX Design",
    text: "Human-centered digital experiences and interfaces.",
    icon: PenTool,
    slug: "ui-ux-design",
  },
  {
    title: "Data Analytics",
    text: "Turn business data into meaningful insights.",
    icon: BarChart3,
    slug: "data-analytics",
  },
  {
    title: "QA & Testing",
    text: "Ensure software quality, reliability, and performance.",
    icon: ShieldCheck,
    slug: "qa-testing",
  },
];

/* =========================================================
   HEADER
========================================================= */

const Header = ({
  onOpenContact,
  activeSection = "home",
}) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [isSearchOpen, setIsSearchOpen] =
    useState(false);

  const [isSolutionsOpen, setIsSolutionsOpen] =
    useState(false);

  const [searchQuery, setSearchQuery] =
    useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const isScrolled = true;
  const goToContactSection = () => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setIsSolutionsOpen(false);

    const scroll = () => {
      const section = document.getElementById("contact-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(scroll, 300);
    } else {
      scroll();
    }
  };

  /* =========================================================
     NAV ITEMS
  ========================================================= */

  const navItems = [
    {
      label: "Home",
      type: "route",
      href: "/",
    },
    {
      label: "About",
      type: "route",
      href: "/about",
    },
    {
      label: "Solutions",
      type: "route",
      href: "/solutions",
    },
    {
      label: "Blogs",
      type: "route",
      href: "/insights",
    },
    {
      label: "Why Us",
      type: "section",
      href: "#why-us",
    },
    {
      label: "Process",
      type: "section",
      href: "#process",
    },
  ];
  const visibleNavItems =
    location.pathname === "/"
      ? navItems.filter((item) => item.label !== "Home")
      : navItems;

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const handleNavClick = (event, item) => {
    event.preventDefault();

    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setIsSolutionsOpen(false);

    // Completely updated router navigation with state routing for Process item
    if (item.label === "Process") {
      navigate("/about", {
        state: {
          scrollTo: "about-process",
        },
      });
      return;
    }

    if (item.type === "route") {
      navigate(item.href);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const scrollToSection = () => {
      const target = document.querySelector(
        item.href
      );

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollToSection();
      }, 250);

      return;
    }

    scrollToSection();
  };
  const [searchError, setSearchError] = useState("");
  /*SEARCH*/
  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return;

    // Search in all pages, solutions & blogs
    const result = SEARCH_DATA.find((item) =>
      item.title.toLowerCase().includes(query)
    );

    if (result) {
      navigate(result.url);
      setSearchQuery("");
      setIsSearchOpen(false);
      setSearchError("");
      return;
    }

    // Common keywords
    if (
      query === "service" ||
      query === "services" ||
      query === "solution" ||
      query === "solutions"
    ) {
      navigate("/solutions");
      setSearchQuery("");
      setIsSearchOpen(false);
      setSearchError("");
      return;
    }

    // No results
    setSearchError(`No results found for "${searchQuery}"`);

    setTimeout(() => {
      setSearchError("");
    }, 3000);
  };

  return (
    <>
      <header
        id="app-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 99999,
        }}
        className="
  transition-all
  duration-500
  ease-out
  py-4
"
      >
        {/* =====================================================
            WATER GLASS BACKGROUND
        ===================================================== */}

        <div
          className="
           pointer-events-none
           absolute
           inset-0
           overflow-hidden
           border-b
           transition-all
           duration-500

     border-white/20
     bg-[rgba(248,246,242,0.85)]
     backdrop-blur-[34px]
     backdrop-filter
     backdrop-saturate-[220%]
     backdrop-brightness-110
     shadow-[inset_0_1px_0_rgba(255,255,255,0.90),0_14px_45px_rgba(74,36,23,0.15)]
   "
        >
          <div
            className="
              absolute
              inset-x-0
              top-0
              h-[48%]
              bg-gradient-to-b
              from-white/40
              to-transparent
            "
          />

          <div
            className="
              absolute
              -right-[10%]
              -bottom-[120px]
              h-[220px]
              w-[500px]
              rounded-full
              bg-[#4D8B4F]/15
              blur-[80px]
            "
          />

          <div
            className="
              absolute
              right-[20%]
              -top-[160px]
              h-[260px]
              w-[500px]
              rounded-full
              bg-[#6B2D1A]/12
              blur-[90px]
            "
          />

          <div
            className="
              absolute
              left-[22%]
              -top-[150px]
              h-[250px]
              w-[500px]
              rounded-full
              bg-[#EADBC8]/20
              blur-[85px]
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-[2%]
              h-px
              w-[96%]
              bg-white/50
            "
          />
        </div>

        {/* =====================================================
            HEADER CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1600px]
            px-5
            sm:px-8
            lg:px-10
            xl:px-12
          "
        >
          <div
            className="
              flex
              w-full
              items-center
              justify-between
              gap-5
            "
          >
            {/* LOGO */}

            <button
              onClick={(event) =>
                handleNavClick(
                  event,
                  navItems[0]
                )
              }
              className="
                group
                flex
                shrink-0
                items-center
                gap-3
                cursor-pointer
              "
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -1,
                }}
                className="
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-white/60
                  bg-[#F8F6F2]/70
                  p-1
                  backdrop-blur-[28px]
                  backdrop-saturate-[220%]
                  shadow-[inset_2px_2px_3px_rgba(255,255,255,0.98),inset_-2px_-3px_5px_rgba(107,45,26,0.08),0_10px_26px_rgba(74,36,23,0.12)]
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-[10%]
                    top-[3px]
                    h-[35%]
                    w-[68%]
                    rounded-full
                    bg-white/70
                    blur-[5px]
                  "
                />

                <img
                  src={logo}
                  alt="MSS Techno"
                  className="
                    relative
                    z-10
                    h-full
                    w-full
                    object-contain
                  "
                />
              </motion.div>

              <div className="flex flex-col text-left">
                <span
                  className="
                    font-serif
                    text-xl
                    font-bold
                    tracking-[-0.025em]
                    text-[#6B2D1A]
                  "
                >
                  MSS Techno
                </span>

                <span
                  className="
                    mt-0.5
                    hidden
                    whitespace-nowrap
                    text-[10px]
                    font-semibold
                    leading-none
                    tracking-wide
                    text-[#355F37]
                    sm:inline-block
                  "
                >
                  Solutions Today Success Tomorrow
                </span>
              </div>
            </button>

            {/* =================================================
                NAVIGATION
            ================================================= */}

            <nav
              className="
                relative
                hidden
                flex-1
                max-w-[720px]
                items-center
                justify-between
                overflow-visible
                rounded-full
                border
                border-white/50
               bg-[#EADBC8]/25
                px-2
                py-1.5
                backdrop-blur-[30px]
                backdrop-saturate-[220%]
                shadow-[inset_3px_3px_4px_rgba(255,255,255,0.95),inset_-3px_-4px_7px_rgba(107,45,26,0.08),0_14px_38px_rgba(74,36,23,0.12)]
                lg:flex
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  left-[4%]
                  top-[1px]
                  h-[38%]
                  w-[68%]
                  rounded-full
                  bg-white/40
                  blur-[9px]
                "
              />

              {visibleNavItems.map((item) => {
                const isSolutions =
                  item.label === "Solutions";

                const isActive =
                  item.type === "route"
                    ? location.pathname ===
                    item.href
                    : location.pathname === "/" &&
                    activeSection ===
                    item.href.slice(1);

                if (isSolutions) {
                  return (
                    <div
                      key={item.href}
                      onMouseEnter={() =>
                        setIsSolutionsOpen(true)
                      }
                      className="relative z-10"
                    >
                      <button
                        onClick={(event) =>
                          handleNavClick(
                            event,
                            item
                          )
                        }
                        className={`
                          flex
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          px-5
                          py-2.5
                          text-xs
                          font-bold
                          tracking-wide
                          cursor-pointer
                          transition-all
                          duration-300

                          ${isSolutionsOpen ||
                            isActive
                            ? `
                                 border-white/50
                                 bg-[#F8F6F2]/80
                                 text-[#6B2D1A]
                                 shadow-[inset_2px_2px_3px_rgba(255,255,255,1),0_8px_20px_rgba(107,45,26,0.10)]
                               `
                            : `
                                 border-transparent
                                 text-[#4A2417]
                                 hover:bg-[#EADBC8]/30
                                 hover:text-[#4D8B4F]
                               `
                          }
                        `}
                      >
                        Solutions

                        <motion.span
                          animate={{
                            rotate:
                              isSolutionsOpen
                                ? 180
                                : 0,
                          }}
                        >
                          <ChevronDown className="h-3.5 w-3.5" />
                        </motion.span>
                      </button>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.href}
                    onClick={(event) =>
                      handleNavClick(
                        event,
                        item
                      )
                    }
                    className={`
                      relative
                      z-10
                      rounded-full
                      border
                      px-5
                      py-2.5
                      text-xs
                      font-bold
                      tracking-wide
                      cursor-pointer
                      transition-all
                      duration-300

                      ${isActive
                        ? `
                            border-white/50
                            bg-[#F8F6F2]/80
                            text-[#6B2D1A]
                            shadow-[inset_2px_2px_3px_rgba(255,255,255,1),0_8px_20px_rgba(107,45,26,0.10)]
                          `
                        : `
                            border-transparent
                            text-[#4A2417]
                            hover:bg-[#EADBC8]/30
                            hover:text-[#4D8B4F]
                          `
                      }
                    `}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* ACTIONS */}

            <div className="flex shrink-0 items-center gap-3">
              <motion.button
                whileHover={{
                  scale: 1.06,
                  y: -1,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                onClick={() =>
                  setIsSearchOpen(
                    (current) => !current
                  )
                }
                className="
                  hidden
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-[#EADBC8]/30
                  text-[#4A2417]
                  backdrop-blur-[28px]
                  cursor-pointer
                  sm:flex
                "
              >
                {isSearchOpen ? (
                  <X className="h-[18px] w-[18px]" />
                ) : (
                  <Search className="h-[18px] w-[18px]" />
                )}
              </motion.button>

              <motion.button
                whileHover={{
                  y: -2,
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={goToContactSection}
                className="
                  hidden
                  min-w-[190px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#4A2417]/20
                  bg-[linear-gradient(135deg,#6B2D1A_0%,#4A2417_55%,#355F37_100%)]
                  px-7
                  py-3.5
                  text-xs
                  font-bold
                  text-[#F8F6F2]
                  shadow-[0_12px_28px_rgba(107,45,26,0.25)]
                  cursor-pointer
                  md:flex
                "
              >
                Contact Sales

                <ArrowUpRight className="h-3.5 w-3.5" />
              </motion.button>

              <button
                onClick={() =>
                  setIsMobileMenuOpen(
                    (current) => !current
                  )
                }
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-[#EADBC8]/30
                  text-[#4A2417]
                  backdrop-blur-[28px]
                  cursor-pointer
                  lg:hidden
                "
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            SOLUTIONS MEGA MENU
        ===================================================== */}

        <AnimatePresence>
          {isSolutionsOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -14,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              transition={{
                duration: 0.28,
                ease: "easeOut",
              }}
              onMouseEnter={() =>
                setIsSolutionsOpen(true)
              }
              onMouseLeave={() =>
                setIsSolutionsOpen(false)
              }
              className="
                absolute
                left-1/2
                top-full
                hidden
                w-[min(1320px,calc(100vw-48px))]
                -translate-x-1/2
                pt-2
                lg:block
              "
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/20
                  bg-[#F8F6F2]/90
                  p-6
                  backdrop-blur-[48px]
                  backdrop-saturate-[220%]
                  shadow-[inset_0_1px_0_white,0_35px_100px_rgba(74,36,23,0.15)]
                "
              >
                <div className="pointer-events-none absolute -left-24 -top-28 h-[420px] w-[420px] rounded-full bg-[#4D8B4F]/10 blur-[90px]" />

                <div className="pointer-events-none absolute -bottom-32 -right-20 h-[420px] w-[420px] rounded-full bg-[#6B2D1A]/10 blur-[100px]" />

                <div className="relative flex gap-7">
                  {/* LEFT */}

                  <div className="flex w-[31%] flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4D8B4F]">
                        Solutions
                      </span>

                      <h2 className="mt-3 text-[36px] font-semibold leading-[1.06] tracking-[-0.05em] text-[#25352C]">
                        Digital Solutions Built for{" "}
                        <span className="text-[#6B2D1A]">
                          Modern Businesses.
                        </span>
                      </h2>

                      <p className="mt-4 max-w-[340px] text-[12px] leading-6 text-[#525B54]">
                        From AI-powered platforms to
                        enterprise software, we help
                        businesses innovate, automate,
                        and scale with modern digital
                        technologies.
                      </p>

                      <button
                        onClick={(event) =>
                          handleNavClick(
                            event,
                            navItems[2]
                          )
                        }
                        className="
                          mt-5
                          flex
                          items-center
                          gap-4
                          rounded-full
                          bg-[#6B2D1A]
                          px-6
                          py-3
                          text-[13px]
                          font-bold
                          text-[#F8F6F2]
                          shadow-[0_18px_40px_rgba(107,45,26,0.22)]
                        "
                      >
                        Explore All Solutions

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* CARDS */}

                  <div className="grid w-[69%] grid-cols-3 gap-3">
                    {solutions.map(
                      ({
                        title,
                        text,
                        slug,
                        icon: Icon,
                      }) => (
                        <motion.button
                          key={title}
                          whileHover={{
                            y: -5,
                          }}
                          onClick={() => {
                            setIsSolutionsOpen(false);
                            setIsMobileMenuOpen(false);
                            navigate(`/solutions/${slug}`);
                            window.scrollTo(0, 0);
                          }}
                          className="
                            group
                            flex
                            h-[140px]
                            flex-col
                            justify-between
                            rounded-[24px]
                            border
                            border-white/20
                            bg-[#EADBC8]/20
                            p-4
                            text-left
                            backdrop-blur-[28px]
                            shadow-[inset_3px_3px_5px_rgba(255,255,255,0.6),inset_-3px_-4px_7px_rgba(107,45,26,0.05)]
                            transition-all
                            duration-300
                            hover:bg-[#F8F6F2]
                            hover:shadow-[inset_3px_3px_5px_white,0_20px_45px_rgba(74,36,23,0.10)]
                          "
                        >
                          <div>
                            <span
                              className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/40
                                bg-[#F8F6F2]
                                text-[#4D8B4F]
                                shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]
                              "
                            >
                              <Icon className="h-4 w-4" />
                            </span>

                            <h3 className="mt-2 text-[13px] font-bold text-[#25352C]">
                              {title}
                            </h3>

                            <p className="mt-1 text-[10px] leading-4 text-[#525B54]">
                              {text}
                            </p>
                          </div>

                          <ArrowRight
                            className="
                              ml-auto
                              h-4
                              w-4
                              text-[#4D8B4F]
                              opacity-40
                              transition-all
                              duration-300
                              group-hover:translate-x-1
                              group-hover:opacity-100
                            "
                          />
                        </motion.button>
                      )
                    )}
                  </div>
                </div>

                {/* EXPERT BAR */}

                <div
                  className="
                    relative
                    mt-4
                    flex
                    items-center
                    justify-between
                    rounded-[26px]
                    border
                    border-[#EADBC8]/40
                    bg-[#EADBC8]/20
                    p-4
                    backdrop-blur-[30px]
                  "
                >
                  <div className="flex items-center gap-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-[#F8F6F2] text-[#4D8B4F] shadow-sm">
                      <LifeBuoy className="h-5 w-5" />
                    </span>

                    <div>
                      <h4 className="text-[15px] font-bold text-[#25352C]">
                        Need a custom solution?
                      </h4>

                      <p className="mt-1 text-[12px] text-[#525B54]">
                        Let's build something great
                        together.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSolutionsOpen(false);
                      setIsMobileMenuOpen(false);
                      goToContactSection();
                    }}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-full
                      border
                      border-white
                      bg-[#F8F6F2]
                      px-7
                      py-3
                      text-[13px]
                      font-bold
                      text-[#25352C]
                      shadow-sm
                    "
                  >
                    Talk to Our Experts

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EADBC8]/40">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================================
            SEARCH
        ===================================================== */}

        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              className="
                absolute
                left-0
                right-0
                top-full
                px-5
                py-4
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  max-w-3xl
                  gap-3
                  rounded-[28px]
                  border
                  border-white/50
                  bg-[#F8F6F2]/90
                  p-3
                  backdrop-blur-[36px]
                  shadow-[0_22px_60px_rgba(74,36,23,0.16)]
                "
              >
                <input
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(
                      event.target.value
                    )
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter"
                    ) {
                      handleSearch();
                    }
                  }}
                  placeholder="Search blogs, solutions, services..."
                  className="
                    flex-1
                    rounded-2xl
                    border
                    border-[#EADBC8]
                    bg-[#F8F6F2]
                    px-5
                    py-3
                    outline-none
                    text-[#25352C]
                  "
                />

                <button
                  onClick={handleSearch}
                  className="
                    rounded-2xl
                    bg-[#4D8B4F]
                    px-6
                    text-xs
                    font-bold
                    text-white
                    cursor-pointer
                  "
                >
                  Search
                </button>
              </div>
              {searchError && (
                <div className="mx-auto mt-3 max-w-3xl">
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600">
                    No results found for "<strong>{searchQuery}</strong>"
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              className="
                absolute
                left-4
                right-4
                top-full
                mt-2
                rounded-[30px]
                border
                border-white/50
                bg-[#F8F6F2]/95
                p-5
                backdrop-blur-[36px]
                shadow-[0_25px_65px_rgba(74,36,23,0.20)]
                lg:hidden
              "
            >
              <div className="flex flex-col gap-1">
                {visibleNavItems.map((item) => {
                  const isActive =
                    item.type === "route"
                      ? item.href === "/"
                        ? false
                        : location.pathname === item.href
                      : location.pathname === "/" &&
                      activeSection === item.href.slice(1);

                  return (
                    <button
                      key={item.href}
                      onClick={(event) =>
                        handleNavClick(
                          event,
                          item
                        )
                      }
                      className={`
                        rounded-xl
                        px-4
                        py-3
                        text-left
                        text-sm
                        font-bold
                        cursor-pointer
                        transition-all
                        duration-300

                        ${isActive
                          ? `
                              bg-[#EADBC8]/40
                              text-[#6B2D1A]
                            `
                          : `
                              text-[#25352C]
                              hover:bg-[#EADBC8]/30
                              hover:text-[#4D8B4F]
                            `
                        }
                      `}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={goToContactSection}
                className="
                  mt-4
                  w-full
                  rounded-2xl
                  bg-[#6B2D1A]
                  py-3
                  text-xs
                  font-bold
                  text-white
                  cursor-pointer
                "
              >
                Contact Sales
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export { Header };