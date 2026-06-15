import { motion } from "motion/react";
import { useState } from "react";
import { Code } from "../components/common";
import { ALL_DEMOS } from "../constants";

const Examples = () => {
    const [active, setActive] = useState(0);
    const { Demo } = ALL_DEMOS[active];

    return (
        <div
            className="min-h-screen pt-16"
            style={{ background: "#09090B", fontFamily: "Inter, sans-serif" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* Page header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10"
                >
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-4"
                        style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)", color: "#C4B5FD" }}
                    >
                        All Examples
                    </div>
                    <h1
                        className="text-white mb-3"
                        style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
                    >
                        Interactive Examples
                    </h1>
                    <p className="text-zinc-400 max-w-xl" style={{ fontSize: "1rem" }}>
                        Every example shows a live preview and source code side-by-side. Copy and adapt to your use case.
                    </p>
                </motion.div>

                {/* Sidebar + content layout */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sidebar tabs — horizontal on mobile, vertical on lg */}
                    <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible shrink-0 lg:w-52 pb-2 lg:pb-0">
                        {ALL_DEMOS.map((demo, i) => (
                            <button
                                key={demo.id}
                                onClick={() => setActive(i)}
                                className="shrink-0 lg:shrink text-left px-4 py-3 rounded-xl transition-all cursor-pointer w-48 lg:w-full"
                                style={{
                                    background: active === i ? "rgba(59,130,246,0.12)" : "rgba(255,255,255,0.03)",
                                    border: `1px solid ${active === i ? "rgba(59,130,246,0.35)" : "#27272A"}`,
                                }}
                            >
                                <div className="flex items-center justify-between gap-2 mb-1">
                                    <span className="text-sm font-medium" style={{ color: active === i ? "#fff" : "#A1A1AA" }}>
                                        {demo.label}
                                    </span>
                                    <span
                                        className="text-xs px-1.5 py-0.5 rounded-full shrink-0"
                                        style={{ background: `${demo.tagColor}18`, color: demo.tagColor, fontFamily: "JetBrains Mono, monospace" }}
                                    >
                                        {demo.tag}
                                    </span>
                                </div>
                                <p className="text-xs text-zinc-600 leading-snug hidden lg:block">{demo.desc}</p>
                            </button>
                        ))}
                    </div>

                    {/* Split screen */}
                    <div className="flex-1 min-w-0">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className="grid grid-cols-1 xl:grid-cols-2 gap-4"
                        >
                            {/* Preview */}
                            <div
                                className="rounded-2xl overflow-hidden flex flex-col"
                                style={{ background: "#0F0F11", border: "1px solid #27272A" }}
                            >
                                <div
                                    className="flex items-center gap-2 px-4 py-3 shrink-0"
                                    style={{ borderBottom: "1px solid #27272A", background: "#18181B" }}
                                >
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                                        <div className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
                                        <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
                                    </div>
                                    <span className="text-xs text-zinc-500 ml-2 truncate" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                                        Preview — {ALL_DEMOS[active].label}
                                    </span>
                                    <div className="ml-auto flex items-center gap-1.5 shrink-0">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-xs text-green-400" style={{ fontFamily: "JetBrains Mono, monospace" }}>live</span>
                                    </div>
                                </div>
                                <div className="flex-1 p-4 overflow-hidden">
                                    <Demo />
                                </div>
                            </div>

                            {/* Code */}
                            <div style={{ minHeight: "500px" }}>
                                <Code tsCode={ALL_DEMOS[active].code} title={ALL_DEMOS[active].codeTitle} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Examples;