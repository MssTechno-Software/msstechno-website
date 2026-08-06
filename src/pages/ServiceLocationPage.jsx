// src/pages/ServiceLocationPage.jsx
import React, { useState, useEffect, lazy, Suspense } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Globe2,
  MapPin,
  Quote,
  Sparkles,
  Zap,
} from "lucide-react";

// Existing Core Components
import SEO from "../components/SEO";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MeetingModal } from "../components/MeetingModal";

// Relational Synthesis Resolver
import { getMergedServiceLocationData } from "../data/getMergedServiceLocationData";

// Lazy Load Existing Heavy Sections
const ContactSection = lazy(() =>
  import("../components/ContactSection").then((m) => ({ default: m.ContactSection }))
);

const ServiceLocationPage = () => {
  const { serviceLocationSlug } = useParams();
  const navigate = useNavigate();
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);

  // Constant-time O(1) relational lookup & merge
  const pageData = getMergedServiceLocationData(serviceLocationSlug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [serviceLocationSlug]);

  // Clean 404 Fallback in Liquid Glass UI
  if (!pageData) {
    return (
      <div className="min-h-screen bg-[#F7F8F5] font-sans text-stone-900 antialiased flex flex-col justify-between">
        <Header activeSection="solutions" />
        <div className="flex flex-col items-center justify-center py-36 px-6 text-center">
          <h1 className="text-[42px] font-semibold tracking-[-0.04em] text-[#191D1A]">
            Page Not Found
          </h1>
          <p className="mt-4 text-[16px] text-[#59625C] max-w-md">
            We couldn&apos;t find the specific localized service page you requested. Explore our full suite of enterprise digital solutions.
          </p>
          <button
            onClick={() => navigate("/solutions")}
            className="mt-8 flex items-center gap-3 rounded-full border border-white/80 bg-[#4D8B4F] px-8 py-4 text-[14px] font-semibold text-white shadow-[0_18px_40px_rgba(77,139,79,0.24)] transition hover:-translate-y-1"
          >
            Explore All Solutions
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <Footer openMeetingModal={() => setIsMeetingOpen(true)} />
      </div>
    );
  }

  const {
    canonicalUrl,
    seo,
    hero,
    aeoOverview,
    benefits,
    technology,
    process,
    nearbyAreas,
    caseStudies,
    testimonials,
    faqs,
    cta,
    relatedServices,
    relatedLocations,
    location,
    service,
    schemas,
  } = pageData;

  return (
    <>
      {/* Dynamic SEO Meta Abstraction */}
      <SEO
        title={seo?.title}
        description={seo?.description}
        url={canonicalUrl}
        keywords={seo?.keywords}
        showSchemas={false}
      />

      {/* Complete JSON-LD Schema Cluster Injection */}
      <Helmet>
        {schemas?.map((schemaObj, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schemaObj)}
          </script>
        ))}
      </Helmet>

      <Header activeSection="solutions" />

      <div className="min-h-screen bg-[#F7F8F5] font-sans antialiased text-stone-900 scroll-smooth selection:bg-[#4D8B4F]/20 selection:text-[#8B3C24]">
        <main>
          {/* 1. HERO SECTION */}
          <section className="relative min-h-[85vh] overflow-hidden bg-[#F7F8F5] px-6 pb-20 pt-[140px] lg:px-12 xl:px-16 flex items-center">
            {/* Ambient Lighting & Glass Background Layers */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(255,255,255,1)_0%,transparent_36%),radial-gradient(circle_at_65%_58%,rgba(188,211,191,0.32)_0%,transparent_38%),radial-gradient(circle_at_92%_12%,rgba(145,77,50,0.18)_0%,transparent_31%),linear-gradient(135deg,#F9FAF7_0%,#F2F5F0_48%,#F4ECE7_100%)]" />
            <div className="pointer-events-none absolute -bottom-[430px] -left-[190px] h-[760px] w-[1100px] rotate-[-8deg] rounded-[50%] border border-white/90 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(141,181,145,0.16),rgba(216,231,216,0.34))] backdrop-blur-[18px] shadow-[inset_0_12px_24px_rgba(255,255,255,0.95),inset_0_-18px_38px_rgba(77,139,79,0.10)]" />
            <div className="pointer-events-none absolute -right-[340px] -top-[430px] h-[860px] w-[920px] rounded-full border border-white/80 bg-[linear-gradient(150deg,rgba(255,255,255,0.10),rgba(139,60,36,0.17),rgba(255,255,255,0.20))] backdrop-blur-[20px]" />

            <div className="relative z-20 mx-auto max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-14">
              <div>
                {/* Regional Pill Badge */}
                {hero?.badge && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 rounded-full border border-white/90 bg-white/20 px-5 py-3 backdrop-blur-[35px] backdrop-saturate-[220%] shadow-[inset_3px_3px_5px_white,inset_-3px_-4px_7px_rgba(77,139,79,0.06),0_15px_40px_rgba(60,75,62,0.07)]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#4D8B4F]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#3F7843]">
                      {hero.badge}
                    </span>
                  </motion.div>
                )}

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="mt-7 text-[44px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-[56px] xl:text-[66px] text-[#191D1A]"
                >
                  {hero?.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="mt-8 max-w-[620px] text-[17px] leading-[1.75] text-[#59625C]"
                >
                  {hero?.subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="mt-9 flex flex-wrap gap-3"
                >
                  <button
                    onClick={() => setIsMeetingOpen(true)}
                    className="flex min-w-[205px] items-center justify-between rounded-full border border-white/80 bg-[#A8D9A5]/45 px-6 py-3 text-[13px] font-semibold text-[#244D2A] backdrop-blur-[35px] shadow-[inset_3px_3px_5px_white,0_16px_38px_rgba(77,139,79,0.13)] transition duration-300 hover:-translate-y-1"
                  >
                    {hero?.primaryCtaText || "Schedule Technical Discovery"}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4D8B4F] text-white">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>

                  <button
                    onClick={() =>
                      document.getElementById("aeo-overview")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="flex min-w-[180px] items-center justify-between rounded-full border border-white/90 bg-white/20 px-6 py-3 text-[13px] font-semibold text-[#426A45] backdrop-blur-[35px] shadow-[inset_3px_3px_5px_white,0_15px_35px_rgba(60,75,62,0.08)] transition duration-300 hover:-translate-y-1"
                  >
                    {hero?.secondaryCtaText || "Explore Architecture"}
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </motion.div>
              </div>

              {/* Liquid Glass Visual Accent Card */}
              <div className="relative hidden lg:flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute h-[460px] w-[460px] rounded-[48%_52%_44%_56%/57%_43%_57%_43%] border-2 border-white/85 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(159,203,164,0.15),rgba(139,60,36,0.08))] backdrop-blur-[12px] shadow-[inset_15px_18px_30px_white,0_30px_80px_rgba(70,85,72,0.08)]"
                />
                <div className="relative z-20 w-full max-w-[420px] rounded-[54px] border-2 border-white/90 bg-white/20 p-8 backdrop-blur-[42px] backdrop-saturate-[250%] shadow-[inset_5px_6px_10px_rgba(255,255,255,0.95),inset_-5px_-7px_12px_rgba(77,139,79,0.06),0_35px_90px_rgba(65,80,68,0.12)]">
                  <div className="flex items-center gap-3 border-b border-white/60 pb-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4D8B4F]/15 text-[#4D8B4F]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-semibold text-[#191D1A]">
                        {location?.city} Engineering Hub
                      </h3>
                      <p className="text-[12px] text-[#59625C]">{location?.regionLabel}</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4 text-[13px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#59625C]">Specialization</span>
                      <span className="font-semibold text-[#4D8B4F]">{service?.title}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#59625C]">Security Compliance</span>
                      <span className="font-semibold text-[#191D1A]">Enterprise Zero-Trust</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#59625C]">Regional Coverage</span>
                      <span className="font-semibold text-[#8B3C24]">100% Dedicated Teams</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. AI OVERVIEW / AEO DIRECT ANSWER BLOCK */}
          {aeoOverview && (
            <section
              id="aeo-overview"
              className="relative bg-[#F7F8F5] px-6 py-20 lg:px-12 xl:px-16 border-t border-white/60"
            >
              <div className="mx-auto max-w-[1200px]">
                <div className="rounded-[44px] border border-white/90 bg-white/30 p-8 sm:p-12 backdrop-blur-[40px] shadow-[inset_3px_3px_6px_white,0_20px_50px_rgba(60,75,62,0.07)]">
                  <div className="flex items-center gap-3 text-[#4D8B4F] mb-4">
                    <Sparkles className="h-5 w-5" />
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em]">
                      Direct AI Overview & Executive Summary
                    </span>
                  </div>
                  <h2 className="text-[26px] sm:text-[32px] font-semibold tracking-[-0.03em] text-[#191D1A]">
                    {aeoOverview.question}
                  </h2>
                  <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.8] text-[#4A524C]">
                    {aeoOverview.directAnswer}
                  </p>

                  {aeoOverview.keyTakeaways && aeoOverview.keyTakeaways.length > 0 && (
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/60">
                      {aeoOverview.keyTakeaways.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#4D8B4F] shrink-0 mt-0.5" />
                          <p className="text-[14px] leading-[1.6] text-[#2C332E] font-medium">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* 3. BENEFITS SECTION */}
          {benefits && benefits.length > 0 && (
            <section className="relative bg-[#F7F8F5] px-6 py-24 lg:px-12 xl:px-16">
              <div className="mx-auto max-w-[1400px]">
                <div className="text-center max-w-[700px] mx-auto mb-16">
                  <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#477B4B]">
                    Architectural Advantages
                  </span>
                  <h2 className="mt-3 text-[38px] sm:text-[46px] font-semibold tracking-[-0.04em] text-[#191B19]">
                    Why Enterprise Leaders Partner With Us.
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="rounded-[36px] border border-white/80 bg-white/20 p-8 backdrop-blur-[35px] shadow-[inset_2px_2px_5px_white,0_15px_35px_rgba(60,75,62,0.06)] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/90 bg-[#D8E8D8]/50 text-[#3F8045] mb-6">
                          <Zap className="h-6 w-6" />
                        </div>
                        <h3 className="text-[20px] font-semibold text-[#191D1A]">
                          {benefit.title}
                        </h3>
                        <p className="mt-3 text-[14px] leading-[1.7] text-[#5E665F]">
                          {benefit.description}
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-white/50 flex items-center gap-2 text-[12px] font-semibold text-[#4D8B4F]">
                        <span>Enterprise Specification</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 4. TECH STACK SECTION */}
          {technology && technology.length > 0 && (
            <section className="relative bg-[#F7F8F5] px-6 py-20 lg:px-12 xl:px-16 border-t border-white/60">
              <div className="mx-auto max-w-[1400px]">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                  <div>
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#477B4B]">
                      Engineering Arsenal
                    </span>
                    <h2 className="mt-3 text-[34px] sm:text-[42px] font-semibold tracking-[-0.04em] text-[#191B19]">
                      Deployment Stack & Infrastructure
                    </h2>
                  </div>
                  <p className="mt-4 md:mt-0 text-[15px] text-[#59625C] max-w-md">
                    Our architectures are built on modern open-source frameworks and secure cloud environments.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {technology.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center rounded-[24px] border border-white/80 bg-white/25 p-5 text-center backdrop-blur-[30px] shadow-[inset_2px_2px_4px_white]"
                    >
                      <Code2 className="h-6 w-6 text-[#4D8B4F] mb-2" />
                      <span className="text-[14px] font-semibold text-[#2C332E]">
                        {tech.name}
                      </span>
                      <span className="mt-1 text-[11px] text-[#6C746D]">
                        {tech.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 5. PROCESS SECTION */}
          {process && process.length > 0 && (
            <section className="relative bg-[#F7F8F5] px-6 py-24 lg:px-12 xl:px-16">
              <div className="mx-auto max-w-[1400px]">
                <div className="text-center max-w-[700px] mx-auto mb-16">
                  <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#477B4B]">
                    Execution Roadmap
                  </span>
                  <h2 className="mt-3 text-[38px] sm:text-[46px] font-semibold tracking-[-0.04em] text-[#191B19]">
                    How We Architect & Deliver.
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {process.map((stepItem, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-[36px] border border-white/80 bg-white/20 p-8 backdrop-blur-[35px] shadow-[inset_2px_2px_5px_white,0_15px_35px_rgba(60,75,62,0.06)]"
                    >
                      <span className="text-[36px] font-bold text-[#4D8B4F]/30">
                        {stepItem.step}
                      </span>
                      <h3 className="mt-4 text-[20px] font-semibold text-[#191D1A]">
                        {stepItem.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-[1.7] text-[#5E665F]">
                        {stepItem.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 6. GEO NEARBY AREAS */}
          {nearbyAreas && nearbyAreas.length > 0 && (
            <section className="relative bg-[#F7F8F5] px-6 py-16 lg:px-12 xl:px-16 border-t border-white/60">
              <div className="mx-auto max-w-[1200px] rounded-[44px] border border-white/90 bg-white/30 p-8 sm:p-12 backdrop-blur-[40px] shadow-[inset_3px_3px_6px_white]">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <div className="max-w-[580px]">
                    <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#8B3C24]">
                      GEO Regional Coverage
                    </span>
                    <h3 className="mt-2 text-[28px] font-semibold text-[#191D1A]">
                      Local Engineering Coverage & Nearby Business Hubs
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.8] text-[#59625C]">
                      We provide direct architectural support and technical consulting to corporate headquarters, IT campuses, and regional offices across:
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 max-w-[480px]">
                    {nearbyAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-white/80 bg-white/40 px-4 py-2 text-[13px] font-medium text-[#244D2A] backdrop-blur-md"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* 7. CASE STUDIES */}
          {caseStudies && caseStudies.length > 0 && (
            <section className="relative bg-[#F7F8F5] px-6 py-20 lg:px-12 xl:px-16">
              <div className="mx-auto max-w-[1200px]">
                <div className="text-center mb-16">
                  <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#477B4B]">
                    Proven Results
                  </span>
                  <h2 className="mt-3 text-[36px] sm:text-[44px] font-semibold tracking-[-0.04em] text-[#191B19]">
                    Regional Deployment Case Studies
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {caseStudies.map((study, idx) => (
                    <div
                      key={idx}
                      className="rounded-[36px] border border-white/80 bg-white/20 p-8 backdrop-blur-[35px] shadow-[inset_2px_2px_5px_white]"
                    >
                      <span className="text-[12px] font-bold text-[#8B3C24] uppercase tracking-wider">
                        {study.client}
                      </span>
                      <h3 className="mt-2 text-[28px] font-semibold text-[#191D1A]">
                        {study.metric}
                      </h3>
                      <p className="mt-4 text-[15px] leading-[1.8] text-[#5E665F]">
                        {study.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 8. TESTIMONIALS */}
          {testimonials && testimonials.length > 0 && (
            <section className="relative bg-[#F7F8F5] px-6 py-16 lg:px-12 xl:px-16 border-t border-white/60">
              <div className="mx-auto max-w-[1000px] space-y-8">
                {testimonials.map((testi, idx) => (
                  <div
                    key={idx}
                    className="rounded-[40px] border border-white/90 bg-white/30 p-10 sm:p-14 text-center backdrop-blur-[40px] shadow-[inset_3px_3px_6px_white]"
                  >
                    <Quote className="h-8 w-8 mx-auto mb-4 text-[#8B3C24]" />
                    <p className="text-[18px] sm:text-[22px] font-medium italic leading-[1.6] text-[#2C332E]">
                      &ldquo;{testi.quote}&rdquo;
                    </p>
                    <div className="mt-6">
                      <p className="text-[16px] font-semibold text-[#191D1A]">
                        {testi.author}
                      </p>
                      <p className="text-[13px] font-medium text-[#4D8B4F]">
                        {testi.designation} • {testi.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 9. FAQS */}
          {faqs && faqs.length > 0 && (
            <section className="relative bg-[#F7F8F5] px-6 py-24 lg:px-12 xl:px-16">
              <div className="mx-auto max-w-[1000px]">
                <div className="text-center mb-16">
                  <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#477B4B]">
                    Frequently Asked Questions
                  </span>
                  <h2 className="mt-3 text-[36px] sm:text-[44px] font-semibold tracking-[-0.04em] text-[#191B19]">
                    Architecture & Engagement FAQs
                  </h2>
                </div>

                <div className="space-y-6">
                  {faqs.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-[28px] border border-white/80 bg-white/20 p-8 backdrop-blur-[35px] shadow-[inset_2px_2px_5px_white]"
                    >
                      <h3 className="text-[18px] font-semibold text-[#191D1A] flex items-center gap-3">
                        <span className="text-[#4D8B4F] font-bold">Q.</span>
                        {item.question}
                      </h3>
                      <p className="mt-3 pl-7 text-[15px] leading-[1.8] text-[#5E665F]">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 10. TOPICAL AUTHORITY CLUSTER (RELATED SERVICES & RELATED LOCATIONS) */}
          <section className="relative bg-[#F7F8F5] px-6 py-20 lg:px-12 xl:px-16 border-t border-white/60">
            <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Related Locations for this Service */}
              <div className="rounded-[36px] border border-white/80 bg-white/20 p-8 backdrop-blur-[35px] shadow-[inset_2px_2px_5px_white]">
                <h3 className="text-[20px] font-semibold text-[#191D1A] mb-6 flex items-center gap-2">
                  <Globe2 className="h-5 w-5 text-[#4D8B4F]" />
                  Explore Our Services in Other Locations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedLocations &&
                    relatedLocations.map((relLoc, idx) => (
                      <Link
                        key={idx}
                        to={relLoc.slug}
                        className="flex items-center justify-between rounded-xl border border-white/60 bg-white/30 p-3 text-[14px] font-medium text-[#2C332E] transition hover:bg-white/60"
                      >
                        <span>{relLoc.city}</span>
                        <ChevronRight className="h-4 w-4 text-[#4D8B4F]" />
                      </Link>
                    ))}
                </div>
              </div>

              {/* Related Services in this Location */}
              <div className="rounded-[36px] border border-white/80 bg-white/20 p-8 backdrop-blur-[35px] shadow-[inset_2px_2px_5px_white]">
                <h3 className="text-[20px] font-semibold text-[#191D1A] mb-6 flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-[#8B3C24]" />
                  More Enterprise Solutions Available
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedServices &&
                    relatedServices.map((relServ, idx) => (
                      <Link
                        key={idx}
                        to={relServ.slug}
                        className="flex items-center justify-between rounded-xl border border-white/60 bg-white/30 p-3 text-[14px] font-medium text-[#2C332E] transition hover:bg-white/60"
                      >
                        <span>{relServ.title}</span>
                        <ChevronRight className="h-4 w-4 text-[#8B3C24]" />
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </section>

          {/* 11. CTA SECTION */}
          {cta && (
            <section className="relative bg-[#F7F8F5] px-6 py-24 lg:px-12 xl:px-16">
              <div className="mx-auto max-w-[1200px] rounded-[54px] border-2 border-white/90 bg-white/30 p-10 sm:p-16 text-center backdrop-blur-[45px] shadow-[inset_0_2px_6px_white,0_35px_100px_rgba(77,139,79,0.12)]">
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#4D8B4F]">
                  Initiate Your Architecture
                </span>
                <h2 className="mt-4 text-[36px] sm:text-[48px] font-semibold tracking-[-0.04em] text-[#191D1A]">
                  {cta.title}
                </h2>
                <p className="mt-4 max-w-[600px] mx-auto text-[17px] leading-[1.8] text-[#5E665F]">
                  {cta.subtitle}
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => setIsMeetingOpen(true)}
                    className="flex items-center gap-3 rounded-full border border-white/80 bg-[#4D8B4F] px-9 py-4 text-[14px] font-semibold text-white shadow-[0_18px_40px_rgba(77,139,79,0.24)] transition hover:-translate-y-1"
                  >
                    {cta.buttonText}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* 12. EXISTING CONTACT SECTION */}
          <Suspense fallback={null}>
            <ContactSection onOpenMeeting={() => setIsMeetingOpen(true)} />
          </Suspense>
        </main>

        <Footer openMeetingModal={() => setIsMeetingOpen(true)} />
      </div>

      <MeetingModal
        isOpen={isMeetingOpen}
        onClose={() => setIsMeetingOpen(false)}
      />
    </>
  );
};

export default ServiceLocationPage;