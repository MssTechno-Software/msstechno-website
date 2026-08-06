import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FiGlobe,
  FiDollarSign,
  FiCpu,
  FiCloud,
  FiBriefcase,
  FiLayers,
  FiUsers,
  FiCode,
  FiShield,
  FiMail,
  FiChevronDown, 
  FiLayout,
  FiClock,
  FiSearch
} from 'react-icons/fi';

// FAQ Dataset
const faqData = [
  {
    id: "faq-1",
    question: "Why choose MSS Techno for website development?",
    answer: "MSS Techno provides custom website development and web application development designed for long-term scalability and security. We build customized digital platforms that align precisely with specific operational workflows and brand requirements. Our engineering team utilizes React, Next.js, Node.js, and modern cloud infrastructure to build fast, secure systems. This structured approach helps businesses improve online visibility, streamline user interactions, and achieve measurable growth.",
    icon: FiGlobe
  },
  {
    id: "faq-2",
    question: "What website development services does MSS Techno provide?",
    answer: "MSS Techno offers full-cycle website development, including corporate site design, web application development, and e-commerce platforms. We deliver custom software development, frontend UI/UX design, backend API integration, and database management. Our solutions incorporate responsive layouts, content management systems, microservices, and secure payment gateway integrations. As a result, client organizations receive reliable, manageable digital platforms that support daily operations.",
    icon: FiLayout
  },
  {
    id: "faq-3",
    question: "How much does website development cost?",
    answer: "Website development costs at MSS Techno depend on the total scope, feature complexity, and technical requirements of the project. We offer structured pricing models for basic informational websites, web applications, and large enterprise systems. Estimates are calculated based on wireframing, custom software development, third-party API integrations, and quality assurance testing. This transparent structure ensures organizations can plan budgets accurately without encountering unexpected software development expenses.",
    icon: FiDollarSign
  },
  {
    id: "faq-4",
    question: "How long does it take to build a website?",
    answer: "Building a website with MSS Techno typically takes between four weeks and sixteen weeks, depending on project complexity. Standard corporate sites require four to six weeks, while complex web application development or custom ERP tools take longer. Timeline phases include requirements gathering, system architecture design, frontend and backend development, testing, and deployment. This systematic schedule guarantees predictable delivery dates and maintains high software testing standards.",
    icon: FiClock
  },
  {
    id: "faq-5",
    question: "Do you build SEO-friendly websites?",
    answer: "Yes, MSS Techno develops SEO-friendly websites engineered to perform well across major search engines and AI search systems. We build platforms using clean semantic HTML, fast loading speeds, structured data, and mobile-responsive architecture. Technical implementations include optimized XML sitemaps, canonical tags, automated schema markup, and clean URL routing. This foundation ensures search engines index content accurately, driving organic traffic and online discoverability.",
    icon: FiSearch
  },
  {
    id: "faq-6",
    question: "Do you develop AI applications?",
    answer: "Yes, MSS Techno builds practical AI solutions and machine learning features tailored for corporate workflow automation. We provide natural language processing, predictive analytics tools, automated data processing pipelines, and conversational AI agents. Our development team integrates models using Python, TensorFlow, PyTorch, and secure cloud API endpoints. These intelligent tools help companies automate repetitive tasks, analyze operational data, and improve customer response times.",
    icon: FiCpu
  },
  {
    id: "faq-7",
    question: "Do you provide cloud services?",
    answer: "Yes, MSS Techno delivers cloud services to assist organizations with infrastructure migration, setup, and continuous management. We design and maintain cloud environments across Amazon Web Services, Microsoft Azure, and Google Cloud Platform. Capabilities include serverless architecture, DevOps CI/CD pipeline automation, containerization with Docker and Kubernetes, and automated backups. This infrastructure ensures high system availability, data protection, and seamless operational scaling.",
    icon: FiCloud
  },
  {
    id: "faq-8",
    question: "Which industries does MSS Techno serve?",
    answer: "MSS Techno serves companies across healthcare, finance, logistics, e-commerce, real estate, education, and technology sectors. We deliver specialized software development company services that address industry-specific operational needs and compliance requirements. Systems include custom dashboards, data management tools, regulatory tracking features, and secure customer portals. This industry expertise allows businesses to adopt digital transformation technologies suited to their market.",
    icon: FiBriefcase
  },
  {
    id: "faq-9",
    question: "Do you develop ERP software?",
    answer: "Yes, MSS Techno builds ERP development solutions to centralize business processes within a single secure management system. We develop tailored enterprise resource planning modules for inventory management, accounting, procurement, human resources, and operational analytics. Our team constructs modular software using robust database systems, role-based access controls, and real-time reporting tools. This unified platform reduces administrative overhead, minimizes data duplication, and improves resource allocation.",
    icon: FiLayers
  },
  {
    id: "faq-10",
    question: "Do you build CRM software?",
    answer: "Yes, MSS Techno offers custom CRM development services designed to help organizations manage customer relationships and sales pipelines. We build platforms that automate lead management, track customer service history, organize communications, and run analytics. Built-in capabilities include automated email workflows, customer segmentation tools, third-party communications integrations, and performance reporting. These features help sales teams organize interactions and increase customer retention rates.",
    icon: FiUsers
  },
  {
    id: "faq-11",
    question: "What technologies does MSS Techno use?",
    answer: "MSS Techno utilizes modern programming languages, software frameworks, databases, and cloud platforms to construct digital applications. Our technical stack includes React, Next.js, Vue.js, Node.js, Python, Java, PostgreSQL, MongoDB, and Docker. We apply structured coding practices, RESTful and GraphQL API protocols, and continuous deployment workflows. This technology foundation ensures software products remain secure, maintainable, and scalable over time.",
    icon: FiCode
  },
  {
    id: "faq-12",
    question: "Do you provide website maintenance and support?",
    answer: "Yes, MSS Techno provides continuous website maintenance and technical support services to keep platforms secure and operational. We perform routine software updates, security vulnerability scanning, performance optimizations, bug fixes, and data backups. Services include server uptime monitoring, framework security patching, database optimization, and content updates. This ongoing management prevents downtime, protects system data, and maintains stable application performance.",
    icon: FiShield
  },
  {
    id: "faq-13",
    question: "How can I contact MSS Techno?",
    answer: "You can contact MSS Techno through our website contact form, email address, or telephone channels to request project consultations. Our engineering team reviews inquiry details, outlines service options, and provides technical project proposals. Communication channels include direct email contact at info@msstechno.com, phone inquiries, and structured online submission forms. This responsive inquiry process ensures prospective clients receive clear technical guidance and accurate timelines.",
    icon: FiMail
  }
];

// Structural JSON-LD Schema for AI & Search Engines (SEO & AEO)
const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
};

export default function MSSFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8F6F2] py-24 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#4D8B4F] selection:text-white">
      {/* Dynamic Ambient Glass Glows */}
      <div className="pointer-events-none absolute top-12 -left-40 h-[600px] w-[600px] rounded-full bg-[#4D8B4F]/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-12 -right-40 h-[600px] w-[600px] rounded-full bg-[#6B2D1A]/12 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#A7D98E]/20 blur-[160px]" />

      {/* SEO/AEO JSON-LD Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          {/* Liquid Glass Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/40 px-4 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#4D8B4F] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B2D1A]/80">
              Frequently Asked Questions
            </span>
          </div>

          {/* Heading with Custom Typography Accent */}
          <h2 className="mt-6 font-serif text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.15]">
            Everything You Need to Know About{' '}
            <span className="text-[#4D8B4F]">MSS Techno</span> Services
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto font-light">
            We answer the most common questions about software development, website development, AI solutions, cloud services, ERP, CRM, mobile applications, and digital transformation.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const IconComponent = faq.icon;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div
                  className={`group relative overflow-hidden rounded-[32px] border transition-all duration-500 ${
                    isOpen
                      ? 'border-[#4D8B4F]/30 bg-white/75 shadow-[0_20px_50px_rgba(77,139,79,0.08)] backdrop-blur-2xl'
                      : 'border-white/80 bg-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.02)] backdrop-blur-xl hover:border-white hover:bg-white/60 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] hover:-translate-y-0.5'
                  }`}
                >
                  {/* Top Edge Gloss Reflection */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

                  {/* Header Button (Keyboard Accessible & ARIA Compliant) */}
                  <button
                    type="button"
                    id={`faq-button-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D8B4F] focus-visible:ring-offset-2 rounded-[32px]"
                  >
                    {/* Left Icon Container */}
                    <div className="flex items-center gap-4 sm:gap-5 flex-1 min-w-0">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                          isOpen
                            ? 'border-[#4D8B4F]/20 bg-[#4D8B4F] text-white shadow-[0_4px_12px_rgba(77,139,79,0.3)]'
                            : 'border-white/80 bg-white/60 text-[#4D8B4F] shadow-[0_2px_8px_rgba(0,0,0,0.04)] group-hover:bg-[#A7D98E]/30'
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </div>

                      {/* Question Text */}
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 tracking-tight leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Right Chevron Indicator */}
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/50 text-gray-500 backdrop-blur-md transition-all duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[#6B2D1A] text-white border-[#6B2D1A]'
                          : 'group-hover:bg-white group-hover:text-gray-800'
                      }`}
                    >
                      <FiChevronDown className="h-4 w-4 transition-transform duration-300" />
                    </div>
                  </button>

                  {/* Accordion Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-button-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                          transition: {
                            height: {
                              duration: 0.4,
                              ease: [0.16, 1, 0.3, 1]
                            },
                            opacity: { duration: 0.3, delay: 0.1 }
                          }
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: {
                              duration: 0.3,
                              ease: [0.16, 1, 0.3, 1]
                            },
                            opacity: { duration: 0.15 }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 sm:px-7 sm:pb-7 pl-[4.25rem] sm:pl-[4.75rem]">
                          <div className="h-px w-full bg-gradient-to-r from-gray-200/60 via-gray-200/20 to-transparent mb-4" />
                          <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-normal">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}