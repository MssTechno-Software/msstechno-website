import React, { useEffect, useMemo } from "react";
import { motion } from "motion/react";
import { BLOGS } from "../articles";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SMOOTH_CURVE = [0.25, 1, 0.5, 1];

/* CLEAN TRANSLUCENT LIQUID GLASS MESH OVERLAY*/
const LiquidGlassHighlight = () => {
    return (
        <>
            <div
                className="
          pointer-events-none absolute inset-0 rounded-[inherit] z-0
          bg-[radial-gradient(ellipse_at_24%_6%,rgba(255,255,255,0.46)_0%,rgba(255,255,255,0.10)_24%,transparent_52%),radial-gradient(ellipse_at_82%_92%,rgba(77,139,79,0.07)_0%,transparent_48%)]
          border border-white/60
          shadow-[inset_2px_2px_5px_rgba(255,255,255,0.88),inset_-3px_-3px_7px_rgba(70,80,75,0.10),0_18px_45px_rgba(50,60,55,0.09)]
        "
            />
            <div className="pointer-events-none absolute left-[12%] top-[5%] h-[32%] w-[56%] rounded-[100%] bg-white/16 blur-[12px]" />
        </>
    );
};

export function FeaturedInsights() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [location.pathname]);

    const memoizedBlogs = useMemo(() => BLOGS, []);

    return (
        <section className="relative overflow-hidden bg-[#f8faf2] pt-12 pb-20 md:pt-16 md:pb-24">

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#b0f3ac]/20 blur-[120px] rounded-full" />
                <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-[#ffdbd1]/15 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">

                {/*SECTION HEADER TITLE SEGMENTS */}
                <div className="text-center mb-16 space-y-6">
                    <div className="mb-6 flex justify-center">
                        <div
                            className="
                                relative isolate
                                inline-flex items-center gap-2
                                rounded-full
                                border border-white/60
                                bg-white/35
                                px-5 py-2
                                backdrop-blur-xl
                                shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_8px_30px_rgba(0,0,0,0.05)]
                            "
                        >
                            <span className="h-2 w-2 rounded-full bg-[#6B2D1A]" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#38573D]">
                                Latest Insights
                            </span>
                        </div>
                    </div>

                    {/* TYPOGRAPHY MATCHED EXACTLY WITH "WHY BUSINESSES CHOOSE" SYSTEM */}
                    <h2
                        className="
                        mx-auto
                        max-w-6xl
                        font-serif
                        text-4xl
                        sm:text-5xl
                        font-semibold
                        tracking-tight
                        text-[#172019]
                         "
                    >
                        Technology{" "}
                        <span className="italic text-[#4D8B4F]">
                            Insights
                        </span>{" "}
                        &
                        <span className="text-[#6B2D1A]">
                            {" "}Industry Trends
                        </span>
                    </h2>

                    {/* PARAGRAPH TYPOGRAPHY EXPLICITLY SYNCED WITH THE EXACT VISUAL TARGET */}
                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#526057] sm:text-base">
                        Stay informed with expert articles, technology trends, AI innovations, cloud engineering insights, and enterprise software best practices from MSS Techno.
                    </p>
                </div>

                {/*INSIGHTS CRYSTALLINE GLASS BENTO GRID*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {memoizedBlogs.map((blog, index) => (
                        <motion.article
                            key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.05 }}
                            transition={{ duration: 0.65, delay: index * 0.08, ease: SMOOTH_CURVE }}
                            whileHover={{ y: -8 }}
                            className="group relative isolate flex flex-col h-full overflow-hidden rounded-[32px] border border-white/55 bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.025)_42%,rgba(255,255,255,0.012)_70%,rgba(255,255,255,0.07)_100%)] backdrop-blur-[14px] backdrop-saturate-[180%] backdrop-brightness-[1.04] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.72),inset_-3px_-3px_6px_rgba(70,80,75,0.08),0_20px_45px_rgba(50,55,52,0.08)] transition-all duration-300 transform-gpu"
                        >
                            <LiquidGlassHighlight />

                            {/* CARD TOP BANNER IMAGE PORT */}
                            <div className="relative h-64 overflow-hidden rounded-t-[32px]">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                                    style={{ backgroundImage: `url(${blog.image})` }}
                                />
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/40 text-[#2b6831] font-bold text-xs uppercase tracking-wider shadow-sm">
                                        {blog.category}
                                    </span>
                                </div>
                            </div>

                            {/* INTERACTIVE BODY DESCRIPTION WRAP */}
                            <div className="p-8 flex flex-col flex-grow relative z-10">
                                <time className="text-[#41493f]/60 text-[12px] font-bold uppercase tracking-[0.12em] mb-3">
                                    {blog.date}
                                </time>

                                <h3 className="text-[24px] font-semibold tracking-[0.02em] text-[#191d18] mb-4 line-clamp-2 leading-[1.3]">
                                    {blog.title}
                                </h3>

                                <p className="text-[#41493f] text-[16px] leading-[1.6] tracking-[0.01em] line-clamp-2 mb-8">
                                    {blog.excerpt}
                                </p>

                                {/* BOTTOM FOOTER CREDENTIAL LAYERS */}
                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/20">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full border flex items-center justify-center font-bold text-sm text-white shadow-inner ${index === 1 ? 'bg-[#914a35]/80 border-[#914a35]/20' : 'bg-[#2b6831]/80 border-[#2b6831]/20'}`}>
                                            {blog.author.initials}
                                        </div>
                                        <span className="text-[#191d18] font-bold text-sm">{blog.author.name}</span>
                                    </div>

                                    <Link
                                        to={`/insights/${blog.slug}`}
                                        className="inline-flex items-center gap-1.5 text-[#2b6831] font-extrabold text-sm transition-all duration-300 group-hover:gap-2.5"
                                    >
                                        Read More
                                        <ArrowRight className="h-4 w-4 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                        </motion.article>
                    ))}
                </div>

                {/*BOTTOM FOOTER CAPSULE ACTION CTA BUTTO*/}
                <div className="flex justify-center">
                    <motion.button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "auto" });
                            navigate("/insights");
                        }}
                        whileHover={{ y: -2, scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        className="group relative isolate overflow-hidden px-10 py-4 rounded-full border border-white/80 bg-white/60 text-[#2b6831] font-bold text-lg shadow-[inset_0_1px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(61,82,64,0.1),0_12px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all duration-300 flex items-center gap-3"
                    >
                        <div className="pointer-events-none absolute inset-[1px] rounded-full border border-white/40 z-0" />

                        <span className="relative z-10">
                            View All Insights
                        </span>

                        <ArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </motion.button>
                </div>

            </div>
        </section>
    );
}