import { useState } from "react";
import {
  Calendar,
  Phone,
  Briefcase,
  Link2,
  Mail,
  Globe,
  MapPin,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Loader2,
} from "lucide-react";

import { motion, AnimatePresence } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";

const CONTACT_ITEMS_LEFT = [
  {
    id: "meeting",
    title: "Schedule Meeting",
    label: "Book a Consultation",
    value: "Available 9am - 6pm",
    Icon: Calendar,
    tone: "green",
  },
  {
    id: "call",
    title: "Call Us",
    label: "Talk to an expert",
    value: "+91 40 1234 5678",
    Icon: Phone,
    tone: "brown",
  },
  {
    id: "careers",
    title: "Careers",
    label: "Join our team",
    value: "12 Open Roles",
    Icon: Briefcase,
    tone: "green",
  },
];

const CONTACT_ITEMS_RIGHT = [
  {
    id: "email",
    title: "Email Us",
    label: "Direct Support",
    value: "info@msstechno.com",
    Icon: Mail,
    tone: "green",
  },
  {
    id: "website",
    title: "Website",
    label: "Explore Our Work",
    value: "www.msstechno.com",
    Icon: Globe,
    tone: "brown",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    label: "Fastest Response",
    value: "Chat Now",
    Icon: FaWhatsapp,
    tone: "green",
  },
];

function LiquidContactBubble({
  item,
  index,
  onClick,
}) {
  const { Icon } = item;

  const isBrown = item.tone === "brown";

  return (

    <motion.button
      type="button"
      onClick={onClick}
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
      className="
        group
        relative
        w-full
        max-w-[310px]
        min-h-[125px]
        overflow-hidden
        rounded-[30px]
        border
        border-white/80
        bg-white/38
        px-6
        py-7
        text-left
        shadow-[0_18px_55px_rgba(46,58,49,0.10)]
        backdrop-blur-[26px]
        backdrop-saturate-[160%]
        transition-[border-color,box-shadow]
        duration-500
        hover:border-white
        hover:shadow-[0_24px_70px_rgba(46,58,49,0.14)]
        cursor-pointer
      "
    >
      <div
        className={`
          pointer-events-none
          absolute
          -left-10
          -top-12
          h-36
          w-36
          rounded-full
          blur-[45px]
          ${isBrown
            ? "bg-[#C98361]/18"
            : "bg-[#8ECF77]/20"
          }
        `}
      />

      <div
        className={`
          pointer-events-none
          absolute
          -bottom-16
          -right-12
          h-40
          w-40
          rounded-full
          blur-[55px]
          ${isBrown
            ? "bg-[#6B2D1A]/10"
            : "bg-[#4D8B4F]/12"
          }
        `}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-5
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white
          to-transparent
        "
      />

      <div className="relative z-10 flex items-center gap-4">
        <div
          className={`
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-[20px]
            border
            border-white/80
            bg-white/46
            shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_8px_24px_rgba(44,54,46,0.08)]
            backdrop-blur-xl
            transition-transform
            duration-500
            group-hover:scale-105
            ${isBrown
              ? "text-[#8A3D27]"
              : "text-[#4D8B4F]"
            }
          `}
        >
          <Icon className="h-6 w-6" strokeWidth={1.8} />
        </div>

        <div className="min-w-0">
          <h4 className="text-[17px] font-semibold text-[#1F2921]">
            {item.title}
          </h4>

          <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7A827B]">
            {item.label}
          </p>

          <p
            className={`
              mt-1.5
              truncate
              text-sm
              font-bold
              ${isBrown
                ? "text-[#8A3D27]"
                : "text-[#4D8B4F]"
              }
            `}
          >
            {item.value}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

function ContactSection({
  onOpenContact,
  onOpenMeeting,
}) {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Custom Software Development",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [isSubmitted, setIsSubmitted] =
    useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleBubbleClick = (id) => {
    if (id === "meeting") {
      onOpenMeeting?.();
      return;
    }

    if (id === "call") {
      window.location.href = "tel:+14372997361";
      return;
    }

    if (id === "careers") {
      scrollToSection("careers-section");
      return;
    }

    if (id === "email") {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=info@msstechno.com",
        "_blank"
      );
      return;
    }

    if (id === "website") {
      scrollToSection("case-studies");
      return;
    }

    if (id === "whatsapp") {
      if (id === "whatsapp") {
        window.open(
          "https://wa.me/14372997361?text=Hello%20MSS%20Techno,%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
          "_blank"
        );
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formState.name ||
      !formState.email ||
      !formState.message
    ) {
      alert(
        "Please fill out the required fields (Name, Email, and Message)."
      );

      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setFormState({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "Custom Software Development",
        message: "",
      });
    }, 1500);
  };

  const inputClass = `
    w-full
    rounded-[18px]
    border
    border-white/80
    bg-white/46
    px-5
    py-3.5
    text-sm
    text-[#263128]
    placeholder:text-[#9AA19B]
    shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_8px_25px_rgba(55,65,57,0.04)]
    backdrop-blur-xl
    outline-none
    transition-all
    duration-300
    focus:border-[#79A97A]/60
    focus:bg-white/62
    focus:ring-4
    focus:ring-[#4D8B4F]/8
  `;

  return (

    <section
      id="contact-section"
      className="
        relative
        overflow-hidden
        bg-[#F7F8F4]
        py-24
      "
    >

      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(115deg,#edf5e9_0%,#f8f8f3_38%,#f8f5ef_64%,#f3e8e1_100%)]
          "
        />

        <div
          className="
            absolute
            -left-[12%]
            top-[8%]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#75B56C]/20
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-[10%]
            top-[16%]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#B86B4B]/18
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            bottom-[-25%]
            left-[35%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-white/70
            blur-[120px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          px-6
          lg:px-10
        "
      >
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/80
              bg-white/42
              px-5
              py-2
              shadow-[inset_0_1px_0_white,0_10px_35px_rgba(52,65,54,0.07)]
              backdrop-blur-2xl
            "
          >
            <span className="h-2 w-2 rounded-full bg-[#7FCB68] shadow-[0_0_14px_rgba(127,203,104,0.75)]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4D6850]">
              Contact Us
            </span>
          </div>

          <h2
            className="
              font-serif
              text-4xl
              font-semibold
              tracking-tight
              text-[#202920]
              md:text-5xl
              lg:text-[58px]
              lg:leading-[1.05]
            "
          >
            Let's Build{" "}
            <span className="italic text-[#4D8B4F]">
              Something
            </span>{" "}
            <span className="text-[#8B452E]">
              Extraordinary
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-[#657067]
            "
          >
            Tell us about your project, schedule a
            consultation, or connect directly with our
            technology team.
          </p>
        </motion.div>

        {/* CONTACT GRID */}

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-8
            xl:grid-cols-[280px_minmax(0,1fr)_280px]
          "
        >
          {/* LEFT */}

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-5
              xl:flex-col
              xl:items-end
            "
          >
            {CONTACT_ITEMS_LEFT.map((item, index) => (
              <LiquidContactBubble
                key={item.id}
                item={item}
                index={index}
                onClick={() =>
                  handleBubbleClick(item.id)
                }
              />
            ))}

          </div>

          {/* MAIN LIQUID GLASS FORM */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[42px]
              border
              border-white/85
              bg-white/38
              p-7
              shadow-[0_35px_100px_rgba(50,61,52,0.13)]
              backdrop-blur-[34px]
              backdrop-saturate-[175%]
              md:p-10
              lg:p-12
            "
          >
            {/* GLASS REFLECTION */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-12
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -left-32
                -top-32
                h-80
                w-80
                rounded-full
                bg-[#91CD7D]/18
                blur-[90px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-36
                -right-28
                h-96
                w-96
                rounded-full
                bg-[#C88363]/17
                blur-[100px]
              "
            />

            <div className="relative z-10 mx-auto max-w-2xl">
              <div className="mb-8 text-center">
                <h3 className="font-serif text-3xl font-semibold text-[#202920]">
                  Start the conversation
                </h3>

                <p className="mt-2 text-sm text-[#6C766E]">
                  Share your vision. Our team will get back
                  to you shortly.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="
                      flex
                      min-h-[450px]
                      flex-col
                      items-center
                      justify-center
                      text-center
                    "
                  >
                    <div
                      className="
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/80
                        bg-white/50
                        text-[#4D8B4F]
                        shadow-[0_20px_50px_rgba(77,139,79,0.16)]
                        backdrop-blur-2xl
                      "
                    >
                      <CheckCircle2 className="h-10 w-10" />
                    </div>

                    <h4 className="mt-6 font-serif text-2xl font-semibold text-[#202920]">
                      Message Sent Successfully
                    </h4>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-[#6A746C]">
                      Thank you for reaching out to MSS
                      Techno. Our team will contact you
                      within 24 hours.
                    </p>

                    <button
                      onClick={() =>
                        setIsSubmitted(false)
                      }
                      className="
                        mt-7
                        rounded-full
                        border
                        border-white/80
                        bg-white/48
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        text-[#465148]
                        shadow-[inset_0_1px_0_white]
                        backdrop-blur-xl
                        transition-all
                        hover:bg-white/75
                      "
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="
                      grid
                      grid-cols-1
                      gap-5
                      md:grid-cols-2
                    "
                  >
                    <div>
                      <label className="mb-2 block px-2 text-xs font-semibold text-[#5F6961]">
                        Full Name *
                      </label>

                      <input
                        required
                        type="text"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            name: e.target.value,
                          })
                        }
                        className={inputClass}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block px-2 text-xs font-semibold text-[#5F6961]">
                        Company Name
                      </label>

                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            company: e.target.value,
                          })
                        }
                        className={inputClass}
                        placeholder="Acme Corp"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block px-2 text-xs font-semibold text-[#5F6961]">
                        Business Email *
                      </label>

                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            email: e.target.value,
                          })
                        }
                        className={inputClass}
                        placeholder="john@acme.com"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block px-2 text-xs font-semibold text-[#5F6961]">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            phone: e.target.value,
                          })
                        }
                        className={inputClass}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="mb-2 block px-2 text-xs font-semibold text-[#5F6961]">
                        Service Interested
                      </label>

                      <select
                        value={formState.service}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            service: e.target.value,
                          })
                        }
                        className={`${inputClass} cursor-pointer appearance-none`}
                      >
                        <option>AI-Powered Solutions & Intelligent Automation</option>

                        <option>Custom Software Development</option>

                        <option>Modern Web Application Development</option>

                        <option>Cross-Platform Mobile App Development</option>

                        <option>Cloud Solutions & Infrastructure</option>

                        <option>DevOps, CI/CD & Cloud Operations</option>

                        <option>UI/UX Design & Digital Experience</option>

                        <option>Data Analytics & Business Intelligence</option>

                        <option>Quality Assurance (QA) & Software Testing</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="mb-2 block px-2 text-xs font-semibold text-[#5F6961]">
                        Message *
                      </label>

                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        className={`${inputClass} resize-none rounded-[24px]`}
                        placeholder="Tell us about your project goals..."
                      />
                    </div>

                    <div
                      className="
                        mt-3
                        flex
                        flex-col
                        items-center
                        md:col-span-2
                      "
                    >
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          rounded-full
                          border
                          border-[#79AC70]
                          bg-gradient-to-r
                          from-[#3F7D43]
                          to-[#69A95C]
                          px-9
                          py-3.5
                          font-semibold
                          text-white
                          shadow-[0_16px_38px_rgba(77,139,79,0.25)]
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:shadow-[0_20px_45px_rgba(77,139,79,0.32)]
                          disabled:opacity-60
                        "
                      >
                        {isSubmitting ? (
                          <>
                            Sending
                            <Loader2 className="h-5 w-5 animate-spin" />
                          </>
                        ) : (
                          <>
                            Send Message

                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>

                      <div className="mt-5 flex flex-wrap justify-center gap-3">
                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/80
                            bg-white/40
                            px-4
                            py-2
                            backdrop-blur-xl
                          "
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#4D8B4F]" />

                          <span className="text-[11px] font-medium text-[#667068]">
                            Free Consultation
                          </span>
                        </div>

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/80
                            bg-white/40
                            px-4
                            py-2
                            backdrop-blur-xl
                          "
                        >
                          <ShieldCheck className="h-3.5 w-3.5 text-[#8A432D]" />

                          <span className="text-[11px] font-medium text-[#667068]">
                            NDA Available
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* RIGHT */}

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-5
              xl:flex-col
              xl:items-start
            "
          >
            {CONTACT_ITEMS_RIGHT.map((item, index) => (
              <LiquidContactBubble
                key={item.id}
                item={item}
                index={index + 3}
                onClick={() =>
                  handleBubbleClick(item.id)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { ContactSection };