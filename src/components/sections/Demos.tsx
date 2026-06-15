import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Code from "../common/Code";
import { LANDING_PAGE_DEMOS } from "../../constants";

const Demos = () => {
    const [active, setActive] = useState(0);
    const { Demo } = LANDING_PAGE_DEMOS[active];

    return (
        <section id="demos" className="py-16 sm:py-24 relative" style={{ borderTop: "1px solid #27272A" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-4"
                        style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)", color: "#C4B5FD" }}
                    >
                        Interactive Demos
                    </div>
                    <h2
                        className="text-white mb-3"
                        style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, fontFamily: "Inter, sans-serif", letterSpacing: "-0.03em" }}
                    >
                        See it. Copy it. Ship it.
                    </h2>
                    <p className="text-zinc-400 max-w-lg mx-auto text-sm sm:text-base" style={{ fontFamily: "Inter, sans-serif" }}>
                        Live previews side-by-side with source code.
                    </p>
                </motion.div>

                {/* Demo tabs */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {LANDING_PAGE_DEMOS.map((demo, i) => (
                        <button
                            key={demo.id}
                            onClick={() => setActive(i)}
                            className="px-4 py-2 rounded-lg text-sm transition-all cursor-pointer"
                            style={{
                                fontFamily: "Inter, sans-serif",
                                background: active === i ? "rgba(59,130,246,0.15)" : "rgba(255,255,255,0.04)",
                                border: `1px solid ${active === i ? "rgba(59,130,246,0.4)" : "#27272A"}`,
                                color: active === i ? "#93C5FD" : "#71717A",
                            }}
                        >
                            <span className="font-medium">{demo.label}</span>
                            <span className="ml-2 text-xs opacity-60 hidden sm:inline">{demo.desc}</span>
                        </button>
                    ))}
                </div>

                {/* Split screen */}
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                >
                    {/* Preview panel */}
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
                            <span className="text-xs text-zinc-500 ml-2" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                                Preview — {LANDING_PAGE_DEMOS[active].label}
                            </span>
                            <div className="ml-auto flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-xs text-green-400" style={{ fontFamily: "JetBrains Mono, monospace" }}>live</span>
                            </div>
                        </div>
                        <div className="flex-1 p-4 overflow-hidden">
                            <Demo />
                        </div>
                    </div>

                    {/* Code panel */}
                    <div style={{ minHeight: "440px" }}>
                        <Code tsCode={LANDING_PAGE_DEMOS[active].code} title={LANDING_PAGE_DEMOS[active].codeTitle} />
                    </div>
                </motion.div>

                {/* View all examples CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center"
                >
                    <Link
                        to="/examples"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                        style={{
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            fontFamily: "Inter, sans-serif",
                            textDecoration: "none",
                        }}
                    >
                        View all examples
                        <ArrowRight size={15} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
export default Demos;