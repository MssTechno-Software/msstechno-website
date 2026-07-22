import { useState, useEffect } from "react";
import SEO from "./components/SEO";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { SolutionsSection } from "./components/SolutionsSection";
import { PartnersSection } from "./components/PartnersSection";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { CareersSection } from "./components/CareersSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { MeetingModal } from "./components/MeetingModal";
import { FeaturedInsights } from "./components/FeaturedInsights";

{/*import { IndustriesSection } from "./components/IndustriesSection";*/}
{/*import { ProcessSection } from "./components/ProcessSection";*/}
{/*import { TechStackSection } from "./components/TechStackSection";*/}
{/*import { TestimonialsSection } from "./components/TestimonialsSection";*/}

import Loader from "./components/Loader";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

{/*import TestimonialsPage from "./pages/TestimonialsPage";*/}
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";
import SolutionDetailPage from "./pages/SolutionDetailPage";
import Insights from "./pages/Insights";
import ArticleDetails from "./pages/ArticleDetails";

/* HOME PAGE */

function HomePage() {
  const [activeSection, setActiveSection] =
    useState("home");

  const [isMeetingOpen, setIsMeetingOpen] =
    useState(false);

// Update the active navigation item based on the current scroll position

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "industries",
        "why-us",
        "process",
      ];

      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);

        if (!el) continue;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);
 // Scroll to a specific section when redirected with a scroll query parameter
  // Example: /?scroll=contact-section or /?scroll=case-studies
  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const scrollTo = params.get("scroll");

  if (!scrollTo) return;

  setTimeout(() => {
    document
      .getElementById(scrollTo)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, 300);
}, []);

  return (
    <>
     <SEO
      title="MSS Techno Software Pvt Ltd"
      description="MSS Techno Software Pvt Ltd delivers AI Solutions, Custom Software Development, Web Development, Mobile App Development, Cloud Solutions, DevOps, UI/UX Design, Data Analytics and QA Testing."
      url={window.location.href}
      showSchemas={true}
    />
      <Header
      activeSection={activeSection}
      />

      <div
        className="
          min-h-screen
          bg-background-warm
          font-sans
          antialiased
          text-stone-900
          scroll-smooth
          selection:bg-mss-green/20
          selection:text-mss-brown
        "
      >
        <main>
          <HeroSection/>
           <AboutSection />

           <WhyUsSection/>

          <SolutionsSection/>

          <PartnersSection />

          <CaseStudiesSection/>

          {/*<TestimonialsSection />*/}

          <CareersSection />
          <FeaturedInsights />

          <ContactSection
            
            onOpenMeeting={() =>
              setIsMeetingOpen(true)
            }
          />
          {/* <IndustriesSection
            onOpenContact={handleOpenContact}
          />*/}

          {/*<ProcessSection
            onOpenContact={handleOpenContact}
          />*/}

           {/*<TechStackSection
            onOpenContact={handleOpenContact}
          />*/}
        </main>

       <Footer
      openMeetingModal={() => setIsMeetingOpen(true)}
       />
      </div>

    
      <MeetingModal
        isOpen={isMeetingOpen}
        onClose={() =>
          setIsMeetingOpen(false)
        }
      />
    </>
  );
}

/*APP*/

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/solutions"
          element={<SolutionsPage />}
        />

        {/*<Route
          path="/testimonials"
          element={<TestimonialsPage />}
        />*/}

        <Route
         path="/solutions/:serviceSlug"
        element={<SolutionDetailPage />}
        />
       <Route 
       path="/insights"
        element={<Insights />}
       />
         <Route
        path="/insights/:slug"
        element={<ArticleDetails />}
    />

      </Routes>
     

    {loading && <Loader />}
    </BrowserRouter>
  );
}

export default App;