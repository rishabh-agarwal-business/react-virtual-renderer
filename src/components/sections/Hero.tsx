import { useState } from "react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { Copy, Check, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router";

const INSTALL_CMD = "npm install react-virtual-renderer";

function AnimatedGrid() {
    const items = Array.from({ length: 12 }, (_, i) => i);
    return (
        <div className="relative w-full h-full overflow-hidden rounded-2xl" style={{ background: "#111113", border: "1px solid #27272A" }}>
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 70%)" }} />

            {/* Header bar */}
            <div className="flex items-center gap-1.5 px-4 py-3" style={{ borderBottom: "1px solid #27272A" }}>
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-zinc-500" style={{ fontFamily: "JetBrains Mono, monospace" }}>VirtualList.tsx</span>
            </div>

            {/* Virtualized rows */}
            <div className="p-4 space-y-2">
                {items.map((i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.3 }}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg"
                        style={{ background: i % 3 === 0 ? "rgba(59,130,246,0.08)" : "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.04)" }}
                    >
                        <div className="w-6 h-6 rounded-md shrink-0" style={{ background: `hsl(${i * 30},60%,45%)`, opacity: 0.8 }} />
                        <div className="flex-1 space-y-1">
                            <div className="h-2 rounded-full bg-zinc-700" style={{ width: `${55 + (i * 13) % 40}%` }} />
                            <div className="h-1.5 rounded-full bg-zinc-800" style={{ width: `${30 + (i * 17) % 30}%` }} />
                        </div>
                        <div className="text-xs text-zinc-600" style={{ fontFamily: "JetBrains Mono, monospace" }}>#{(i + 1) * 1000 - 999}</div>
                    </motion.div>
                ))}
            </div>

            {/* Floating perf cards */}
            <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -right-4 px-3 py-2 rounded-xl text-xs font-medium shadow-xl"
                style={{ background: "rgba(24,24,27,0.95)", border: "1px solid #27272A", backdropFilter: "blur(12px)" }}
            >
                <div className="text-zinc-400">Items Rendered</div>
                <div className="text-white font-bold" style={{ fontFamily: "JetBrains Mono, monospace" }}>100,000</div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-24 -left-4 px-3 py-2 rounded-xl text-xs font-medium shadow-xl"
                style={{ background: "rgba(24,24,27,0.95)", border: "1px solid #27272A", backdropFilter: "blur(12px)" }}
            >
                <div className="text-zinc-400">Smooth</div>
                <div className="font-bold" style={{ color: "#22C55E", fontFamily: "JetBrains Mono, monospace" }}>60 FPS</div>
            </motion.div>

            <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 right-6 px-3 py-2 rounded-xl text-xs font-medium shadow-xl"
                style={{ background: "rgba(24,24,27,0.95)", border: "1px solid #27272A", backdropFilter: "blur(12px)" }}
            >
                <div className="text-zinc-400">Bundle</div>
                <div className="font-bold" style={{ color: "#8B5CF6", fontFamily: "JetBrains Mono, monospace" }}>8 KB</div>
            </motion.div>
        </div>
    );
}

const Hero = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(INSTALL_CMD);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: "#3B82F6" }} />
                <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ background: "#8B5CF6" }} />
                <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 w-full">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left: Text */}
                    <div>
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-8"
                            style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)", color: "#93C5FD" }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            v2.0 — Now with Masonry Layouts
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-white leading-tight mb-6"
                            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, fontFamily: "Inter, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.1 }}
                        >
                            React Virtualization
                            <br />
                            <span style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                Built For Scale
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-zinc-400 mb-10 leading-relaxed"
                            style={{ fontSize: "1.125rem", maxWidth: "520px", fontFamily: "Inter, sans-serif" }}
                        >
                            Render 100,000+ items with smooth scrolling, dynamic heights, and zero performance headaches. TypeScript-first, accessible, and production-ready.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-3 mb-8"
                        >
                            <Link
                                to="/examples"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium text-sm transition-all hover:opacity-90 hover:scale-[1.02]"
                                style={{ background: "linear-gradient(135deg, #3B82F6, #6366F1)", fontFamily: "Inter, sans-serif", textDecoration: "none" }}
                            >
                                <Play size={14} />
                                Get Started
                            </Link>
                            <Link
                                to="/examples"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium text-sm transition-all hover:bg-zinc-700/50"
                                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "Inter, sans-serif", textDecoration: "none" }}
                            >
                                <ArrowRight size={14} />
                                View Examples
                            </Link>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-zinc-400 hover:text-white font-medium text-sm transition-all hover:bg-zinc-800/60"
                                style={{ fontFamily: "Inter, sans-serif" }}
                            >
                                <FaGithub size={14} />
                                GitHub
                            </a>
                        </motion.div>

                        {/* Install command */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl w-fit"
                            style={{ background: "#111113", border: "1px solid #27272A" }}
                        >
                            <span className="text-zinc-500 text-sm select-none" style={{ fontFamily: "JetBrains Mono, monospace" }}>$</span>
                            <span className="text-sm text-zinc-300 select-all" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                                {INSTALL_CMD}
                            </span>
                            <button
                                onClick={handleCopy}
                                className="ml-2 p-1 rounded-md text-zinc-500 hover:text-white transition-colors cursor-pointer"
                            >
                                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                            </button>
                        </motion.div>
                    </div>

                    {/* Right: Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative h-80 sm:h-100 lg:h-120"
                    >
                        <AnimatedGrid />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
export default Hero;