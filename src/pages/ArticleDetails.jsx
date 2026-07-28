import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Loader from "../components/Loader";
import { Linkedin, Twitter, Copy, ArrowLeft } from "lucide-react";

const fallbackImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200";

export default function ArticleDetails() {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        const fetchArticle = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    "https://websiteapi-backend-git-642918032467.asia-south1.run.app/blocks/approved?page=1&page_size=10"
                );
                //// Process the paginated API response and retrieve the requested active article
                const data = await response.json();

                const allArticles = data.dates?.flatMap((item) => item.blocks) || [];

                const activeArticles = allArticles
                    .filter((item) => item.is_active)
                    .sort((a, b) => a.display_order - b.display_order);

                const foundArticle = activeArticles.find(
                    (item) => item.slug === slug
                );

                setArticle(foundArticle || null);

            } catch (error) {
                console.error("Failed to fetch article details:", error);
                setArticle(null);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchArticle();
        }
    }, [slug]);

    const shareLinkedIn = () => {
        const url = encodeURIComponent(window.location.href);

        window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
            "_blank"
        );
    };

    const shareTwitter = () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(
            `🚀 ${article?.title || ""}\n\n${article?.description || ""}\n\nRead more:`
        );

        window.open(
            `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
            "_blank"
        );
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert("Link copied successfully!");
        } catch (err) {
            alert("Failed to copy link.");
        }
    };

    if (loading) {
        return <Loader />;
    }

    if (!article) {
        return (
            <main className="min-h-screen flex flex-col items-center justify-center bg-[#F8F6F2]">
                <h1 className="font-serif text-4xl mb-6 text-[#171A17]">Article Not Found</h1>
                <Link to="/insights" className="bg-[#4D8B4F] text-white px-8 py-3 rounded-full font-bold">Back to Insights</Link>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#F8F6F2] selection:bg-[#4D8B4F]/20">
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#4D8B4F] origin-left z-50" style={{ scaleX }} />
            <Header />

            <article className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
                <Link to="/insights" className="inline-flex items-center gap-2 text-[#4D8B4F] font-bold mb-12 hover:underline">
                    <ArrowLeft className="h-4 w-4" /> Back to Insights
                </Link>

                {/* Hero Section */}
                <header className="mb-16 text-center">
                    <span className="inline-block px-4 py-1 rounded-full bg-[#4D8B4F]/10 text-[#4D8B4F] text-xs font-black uppercase tracking-widest mb-6">
                        {article.category}
                    </span>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-[#171A17] leading-tight">{article.title}</h1>
                    <div className="flex justify-center items-center gap-4 text-sm text-[#5E6660] font-medium">
                        <span>{article.author?.name || article.author}</span> • <span>{article.publishedDate}</span> • <span>{article.readTime}</span>
                    </div>
                </header>

                <img
                    src={article.image}
                    onError={(e) => e.currentTarget.src = fallbackImage}
                    className="w-full h-[500px] object-cover rounded-[40px] mb-16 shadow-2xl"
                    alt={article.title}
                />

                {/* Content */}
                <div className="max-w-none">
                    <h2 className="font-serif text-3xl md:text-3xl font-bold text-[#171A17] mb-6">
                        Introduction
                    </h2>
                    <p className="mb-14 text-[15px] md:text-[20px] leading-10 text-[#3F4541]">
                        {article.content?.introduction}
                    </p>
                    {article.content?.sections?.map((section, index) => (
                        <section key={index} className="mb-16">
                            <h2 className="font-serif text-3xl md:text-3xl font-bold text-[#171A17] mb-6">
                                {section.title}
                            </h2>

                            {section.text && (
                                <p className="text-[15px] md:text-[20px] leading-10 text-[#3F4541]">
                                    {section.text}
                                </p>
                            )}

                            {section.list && (
                                <ul className="mt-6 list-disc pl-7 space-y-3 text-[20px] leading-9 text-[#3F4541]">
                                    {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                </div>
            </article>

            {/* Floating Share Panel */}
            <aside className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-50">

                <div className="group relative flex items-center">
                    <button
                        onClick={shareLinkedIn}
                        className="p-4 rounded-full border border-white/90 bg-white/60 backdrop-blur-xl shadow-lg text-[#4D8B4F] hover:scale-110 transition-transform"
                    >
                        <Linkedin className="h-5 w-5" />
                    </button>
                    <div className="pointer-events-none absolute left-[calc(100%+12px)] opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out z-50">
                        <div className="whitespace-nowrap rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-semibold text-[#171A17] backdrop-blur-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
                            Share on LinkedIn
                        </div>
                    </div>
                </div>

                <div className="group relative flex items-center">
                    <button
                        onClick={shareTwitter}
                        className="p-4 rounded-full border border-white/90 bg-white/60 backdrop-blur-xl shadow-lg text-[#4D8B4F] hover:scale-110 transition-transform"
                    >
                        <Twitter className="h-5 w-5" />
                    </button>
                    <div className="pointer-events-none absolute left-[calc(100%+12px)] opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out z-50">
                        <div className="whitespace-nowrap rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-semibold text-[#171A17] backdrop-blur-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
                            Share on X
                        </div>
                    </div>
                </div>

                <div className="group relative flex items-center">
                    <button
                        onClick={copyLink}
                        className="p-4 rounded-full border border-white/90 bg-white/60 backdrop-blur-xl shadow-lg text-[#4D8B4F] hover:scale-110 transition-transform"
                    >
                        <Copy className="h-5 w-5" />
                    </button>
                    <div className="pointer-events-none absolute left-[calc(100%+12px)] opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out z-50">
                        <div className="whitespace-nowrap rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-semibold text-[#171A17] backdrop-blur-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
                            Copy Link
                        </div>
                    </div>
                </div>

            </aside>

            <div className="max-w-4xl mx-auto px-6">
                {/* Newsletter section reused */}
                <section className="rounded-[40px] bg-[#4D8B4F] p-12 text-center text-white shadow-2xl border border-white/20 mb-24">
                    <h2 className="font-serif text-4xl mb-4">Stay Updated</h2>
                    <p className="mb-8 text-white/90">Receive the latest technology trends and exclusive architectural insights.</p>
                    <div className="max-w-md mx-auto flex gap-2 p-1 bg-white/20 rounded-full border border-white/20 backdrop-blur-md">
                        <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent px-4 outline-none text-white placeholder:text-white/60" />
                        <button className="rounded-full bg-white text-[#4D8B4F] px-8 py-3 font-bold text-xs uppercase tracking-widest">Subscribe</button>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}