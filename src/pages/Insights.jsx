import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import PageLoader from "../components/Loader";
import { ArrowRight, Search, Sparkles, User, Loader2 } from "lucide-react";

const fallbackImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200";
const CATEGORIES = ["All", "AI", "Backend", "Cloud", "UI/UX", "Security", "Data Analytics", "DevOps"];

const LiquidCard = ({ children, className = "", ...props }) => (
  <div
    className={`relative overflow-hidden rounded-[30px] border border-white/90 bg-white/60 backdrop-blur-[35px] backdrop-saturate-[180%] shadow-[inset_4px_4px_12px_rgba(255,255,255,0.9),0_20px_50px_rgba(40,60,45,0.1)] ${className}`}
    {...props}
  >
    {children}
  </div>
);

const LiquidImage = ({ src, alt, className = "" }) => (
  <div
    className={`relative overflow-hidden rounded-[20px] border border-white/80 shadow-inner bg-[#F8F6F2] ${className}`}
  >
    <motion.img
      src={src}
      alt={alt}
      loading="lazy"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.7 }}
      className="w-full h-full object-contain object-center block"
      onError={(e) => {
        e.currentTarget.src = fallbackImage;
      }}
    />

    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
  </div>
);

export default function Insights() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const initialSearch = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [newsletterMessageType, setNewsletterMessageType] = useState("");

  //get api 
  const fetchArticles = async (pageNumber = 1) => {

    try {
      const response = await fetch(
        `https://websiteapi-backend-git-642918032467.asia-south1.run.app/blocks/approved?page=${pageNumber}&page_size=10`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }

      const data = await response.json();

      const allArticles =
        data.dates?.flatMap((item) => item.blocks) || [];

      const activeArticles = allArticles
        .filter((article) => article.is_active)
        .sort((a, b) => a.display_order - b.display_order);

      setArticles((prev) =>
        pageNumber === 1
          ? activeArticles
          : [...prev, ...activeArticles]
      );
      setHasMore(
        data.pagination.page < data.pagination.total_pages
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchArticles(1);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchArticles(nextPage);
  };


  const filteredArticles = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    const categoryMap = {
      AI: "AI",
      Backend: "BACKEND",
      Cloud: "CLOUD",
      "UI/UX": "UI_UX",
      Security: "SECURITY",
      "Data Analytics": "DATA_ANALYTICS",
      DevOps: "DEVOPS",
    };

    return articles.filter((art) => {
      const matchesSearch =
        art.title?.toLowerCase().includes(query) ||
        art.description?.toLowerCase().includes(query) ||
        art.author?.name?.toLowerCase().includes(query) ||
        art.category?.toLowerCase().includes(query);

      const matchesCategory =
        activeCategory === "All" ||
        art.category === categoryMap[activeCategory];

      return matchesSearch && matchesCategory;
    });
  },
    [articles, searchTerm, activeCategory]);

  //subscribe Api  



  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setNewsletterMessage("Please enter your email.");
      setNewsletterMessageType("error");

      setTimeout(() => {
        setNewsletterMessage("");
        setNewsletterMessageType("");
      }, 4000);

      return;
    }

    setNewsletterStatus("loading");

    try {
      const response = await fetch(
        "https://websiteapi-backend-git-642918032467.asia-south1.run.app/subscribe",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setNewsletterStatus("idle");

        setNewsletterMessage(data.detail || "Subscription failed.");
        setNewsletterMessageType("error");

        setTimeout(() => {
          setNewsletterMessage("");
          setNewsletterMessageType("");
        }, 4000);

        return;
      }

      setNewsletterStatus("success");

      setNewsletterMessage(
        data.message || "Subscribed successfully."
      );

      setNewsletterMessageType("success");

      setEmail("");

      setTimeout(() => {
        setNewsletterStatus("idle");
        setNewsletterMessage("");
        setNewsletterMessageType("");
      }, 4000);

    } catch (error) {
      console.error(error);

      setNewsletterStatus("idle");

      setNewsletterMessage(
        "Something went wrong. Please try again."
      );

      setNewsletterMessageType("error");

      setTimeout(() => {
        setNewsletterMessage("");
        setNewsletterMessageType("");
      }, 4000);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  if (articles.length === 0) {
    return (
      <main className="relative min-h-screen bg-[#F8F6F2] pt-40 pb-24">
        <Header />

        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-[#A7D98E]/25 blur-[150px]" />
          <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-[#EADBC8]/30 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6">

          {/* Hero */}
          <section className="text-center mb-20">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/95 bg-white/60 px-5 py-2.5 shadow-[inset_1px_1px_1px_white,0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[#4D8B4F]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#355D38]">
                Latest Insights
              </span>
            </div>

            <h1 className="font-serif text-[48px] md:text-[72px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#1F2420]">
              Technology{" "}
              <span className="italic text-[#4D8B4F]">Insights</span> & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D8B4F] to-[#6B2D1A]">
                Industry Trends
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5E6660]">
              Stay informed with expert articles, technology trends, AI innovations,
              cloud engineering insights, and enterprise software best practices.
            </p>
          </section>

          {/* Empty State */}
          <LiquidCard className="relative isolate overflow-hidden mb-20">

            {/* Background Glow */}
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#A7D98E]/20 blur-[120px]" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#EADBC8]/25 blur-[120px]" />

            <div className="relative z-10 flex flex-col items-center justify-center py-28 px-8 text-center">

              {/* Glass Icon */}
              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/80 bg-white/60 backdrop-blur-3xl shadow-[inset_0_2px_8px_rgba(255,255,255,0.9),0_15px_40px_rgba(77,139,79,0.12)]">
                <Sparkles className="h-11 w-11 text-[#4D8B4F]" />
              </div>

              <span className="rounded-full border border-[#4D8B4F]/20 bg-[#4D8B4F]/10 px-5 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#4D8B4F]">
                Daily Insights
              </span>

              <h2 className="mt-8 font-serif text-[42px] md:text-[54px] font-semibold leading-tight text-[#1F2420]">
                No <span className="italic text-[#4D8B4F]">Insights</span> Available Today
              </h2>

              <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#5E6660]">
                There are no approved technology insights scheduled for today's date.
                Fresh articles will automatically appear here once they are published.
              </p>

              <div className="mt-10 h-px w-40 bg-gradient-to-r from-transparent via-[#4D8B4F]/40 to-transparent" />

              <p className="mt-8 text-sm font-semibold tracking-wide text-[#4D8B4F]">
                Please check back later for new updates.
              </p>

            </div>
          </LiquidCard>

        </div>

        <Footer />
      </main>
    );
  }
  return (
    <main className="relative min-h-screen bg-[#F8F6F2] pt-40 pb-24">
      <Header />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-[#A7D98E]/25 blur-[150px]" />
        <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-[#EADBC8]/30 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <section className="text-center mb-20">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/95 bg-white/60 px-5 py-2.5 shadow-[inset_1px_1px_1px_white,0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl mb-6">
            <Sparkles className="h-3.5 w-3.5 text-[#4D8B4F]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#355D38]">Latest Insights</span>
          </div>
          <h1 className="font-serif text-[48px] md:text-[72px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#1F2420]">
            Technology <span className="italic text-[#4D8B4F]">Insights</span> & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D8B4F] to-[#6B2D1A]">Industry Trends</span>
          </h1>
        </section>

        <section className="flex flex-col lg:flex-row gap-6 mb-16 items-center">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-[#4D8B4F]" />
            <input
              placeholder="Search articles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-14 rounded-full border border-white bg-white/60 pl-14 pr-6 outline-none backdrop-blur-3xl shadow-[inset_0_1px_2px_white,0_10px_20px_rgba(40,60,45,0.08)] text-[#2B322C] placeholder:text-[#6A726B]"
            />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat} onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-6 py-3 text-xs font-bold uppercase tracking-wider backdrop-blur-xl transition shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] ${activeCategory === cat
                  ? "bg-[#4D8B4F] text-white border-[#4D8B4F] shadow-[0_10px_25px_rgba(77,139,79,0.25)]"
                  : "bg-[rgba(255,255,255,0.65)] border-white/90 text-[#4D5450] hover:bg-[#4D8B4F] hover:text-white hover:shadow-[0_0_15px_rgba(77,139,79,0.3)]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {filteredArticles.length > 0 && (
          <LiquidCard
            className="cursor-pointer mb-16 p-8 flex flex-col lg:flex-row gap-8 items-center shadow-[0_25px_60px_rgba(50,70,50,0.15)]"
            onClick={() => navigate(`/insights/${filteredArticles[0].slug}`)}
          >
            <LiquidImage
              src={filteredArticles[0].image}
              alt="Featured"
              className="w-full lg:w-1/2 aspect-[16/9]"
            />            <div className="p-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4D8B4F]">{filteredArticles[0].category}</span>
              <h2 className="font-serif text-4xl mt-3 mb-5 text-[#1F2420]">{filteredArticles[0].title}</h2>
              <p className="text-[#5E6660] mb-8 leading-relaxed">{filteredArticles[0].description}</p>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-[#4D8B4F] text-white flex items-center justify-center font-bold text-sm">
                  {filteredArticles[0].author.initials}
                </div>

                <div className="flex flex-col">
                  <p className="font-semibold text-[#1F2420]">
                    {filteredArticles[0].author.name}
                  </p>

                  <p className="text-sm text-[#7A7A7A]">
                    {new Date(filteredArticles[0].publishedDate).toLocaleDateString(
                      "en-GB",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    )}{" "}
                    • {filteredArticles[0].readTime}
                  </p>
                </div>
              </div>
            </div>
          </LiquidCard>
        )}
        {filteredArticles.length === 0 && (
          <div className="py-24 text-center">
            <h2 className="text-4xl font-bold text-[#1F2420]">
              No Results Found
            </h2>

            <p className="mt-4 text-[#5E6660]">
              We couldn't find any articles matching "{searchTerm}".
            </p>

            <button
              onClick={() => setSearchTerm("")}
              className="mt-8 rounded-full bg-[#4D8B4F] px-8 py-3 text-white font-bold"
            >
              View All Articles
            </button>
          </div>
        )}
        {filteredArticles.length > 1 && (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredArticles.slice(1).map((art) => (
              <LiquidCard
                key={art.id}
                className="cursor-pointer p-5 flex flex-col group shadow-[0_20px_40px_rgba(50,70,50,0.1)]"
                onClick={() => navigate(`/insights/${art.slug}`)}
              >
                <LiquidImage
                  src={art.image}
                  alt={art.title}
                  className="w-full aspect-[16/9] mb-6"
                />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4D8B4F]">{art.category}</span>
                <h3 className="font-serif text-xl font-bold mt-2 mb-3 text-[#1F2420]">{art.title}</h3>
                <p className="text-xs text-[#5E6660] mb-6 leading-relaxed flex-1">{art.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#4D8B4F] text-white flex items-center justify-center font-bold text-sm">
                      {art.author.initials}
                    </div>

                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-[#1F2420]">
                        {art.author.name}
                      </p>

                      <p className="text-xs text-[#7A7A7A]">
                        {new Date(art.publishedDate).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}{" "}
                        • {art.readTime}
                      </p>
                    </div>
                  </div>

                  <button className="h-10 w-10 rounded-full bg-[#6B2D1A] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_5px_15px_rgba(107,45,26,0.3)]">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </LiquidCard>
            ))}

          </section>
        )}

        {hasMore && (
          <div className="text-center mb-20">
            <button
              onClick={handleLoadMore}
              className="rounded-full border border-white bg-white/60 px-10 py-4 font-bold text-xs uppercase tracking-widest backdrop-blur-xl hover:bg-[#4D8B4F] hover:text-white transition shadow-md">Load More Articles</button>
          </div>
        )}

        <div className="rounded-[40px] bg-[#4D8B4F] p-12 text-center text-white shadow-[0_20px_50px_rgba(77,139,79,0.3)] border border-white/20 relative overflow-hidden backdrop-blur-xl mb-12">
          <div className="absolute inset-0 bg-white/10" />
          <div className="relative z-10">
            <h2 className="font-serif text-4xl mb-4 text-white">Stay Updated</h2>
            <p className="mb-8 text-white/90 max-w-lg mx-auto">Receive the latest technology trends and exclusive architectural insights.</p>
            <form
              onSubmit={handleSubscribe}
              className="max-w-md mx-auto flex gap-2 p-1 bg-white/20 rounded-full border border-white/20 backdrop-blur-md"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 outline-none text-white placeholder:text-white/60"
              />

              <button
                type="submit"
                disabled={
                  newsletterStatus === "loading" ||
                  newsletterStatus === "success"
                }
                className="
      rounded-full
      bg-white
      text-[#4D8B4F]
      px-8
      py-3
      font-bold
      text-xs
      uppercase
      tracking-widest
      hover:bg-stone-100
      transition
      disabled:opacity-70
      disabled:cursor-not-allowed
    "
              >
                {newsletterStatus === "loading" ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : newsletterStatus === "success" ? (
                  "Subscribed ✓"
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>

            {newsletterMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mx-auto mt-5 max-w-md rounded-xl border px-4 py-3 text-sm font-medium ${newsletterMessageType === "success"
                  ? "border-green-300 bg-green-50 text-green-700"
                  : "border-red-300 bg-red-50 text-red-700"
                  }`}
              >
                {newsletterMessage}
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}