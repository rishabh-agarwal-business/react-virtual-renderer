import { motion } from "motion/react";
import { Check, X, Minus } from "lucide-react";

const FEATURES = [
    "Virtual Lists",
    "Virtual Grids",
    "Masonry Layout",
    "Dynamic Heights",
    "Infinite Scroll",
    "Reverse Scroll (Chat)",
    "TypeScript First",
    "WCAG AA Accessible",
    "Performance Devtools",
    "Zero Dependencies",
    "SSR Compatible",
    "React 18 Concurrent",
];

type Status = "yes" | "no" | "partial";

const DATA: Record<string, Status[]> = {
    "React Virtual Renderer": ["yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes"],
    "TanStack Virtual": ["yes", "yes", "no", "yes", "partial", "no", "yes", "partial", "no", "yes", "yes", "yes"],
    "react-window": ["yes", "yes", "no", "partial", "partial", "no", "partial", "no", "no", "yes", "partial", "no"],
    "react-virtualized": ["yes", "yes", "partial", "yes", "yes", "no", "no", "partial", "no", "no", "partial", "no"],
};

const LIBS = Object.keys(DATA);

function Cell({ status }: { status: Status }) {
    if (status === "yes") return <div className="flex justify-center"><Check size={16} className="text-green-400" /></div>;
    if (status === "no") return <div className="flex justify-center"><X size={16} className="text-red-500/60" /></div>;
    return <div className="flex justify-center"><Minus size={16} className="text-yellow-500/60" /></div>;
}

const Comparison = () => {
    return (
        <section id="comparison" className="py-24 relative" style={{ borderTop: "1px solid #27272A" }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-4" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "#93C5FD" }}>
                        Feature Comparison
                    </div>
                    <h2 className="text-white mb-4" style={{ fontSize: "2.25rem", fontWeight: 700, fontFamily: "Inter, sans-serif", letterSpacing: "-0.03em" }}>
                        How we stack up
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
                        React Virtual Renderer is the only library that ships every feature you need without compromise.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden overflow-x-auto"
                    style={{ border: "1px solid #27272A" }}
                >
                    <div style={{ minWidth: "600px" }}>
                        {/* Header row */}
                        <div className="grid" style={{ gridTemplateColumns: `2fr ${LIBS.map(() => "1fr").join(" ")}` }}>
                            <div className="px-6 py-5" style={{ background: "#18181B", borderBottom: "1px solid #27272A" }} />
                            {LIBS.map((lib, i) => (
                                <div
                                    key={lib}
                                    className="px-3 py-5 text-center"
                                    style={{
                                        background: i === 0 ? "rgba(59,130,246,0.08)" : "#18181B",
                                        borderBottom: "1px solid #27272A",
                                        borderLeft: "1px solid #27272A",
                                    }}
                                >
                                    <div
                                        className="text-xs font-semibold leading-tight"
                                        style={{ fontFamily: "Inter, sans-serif", color: i === 0 ? "#93C5FD" : "#71717A" }}
                                    >
                                        {lib}
                                    </div>
                                    {i === 0 && (
                                        <div className="mt-1 inline-flex items-center px-2 py-0.5 rounded-full text-xs" style={{ background: "rgba(59,130,246,0.2)", color: "#93C5FD", fontFamily: "JetBrains Mono, monospace" }}>
                                            ← Best
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Feature rows */}
                        {FEATURES.map((feat, fi) => (
                            <div
                                key={feat}
                                className="grid hover:bg-white/2 transition-colors"
                                style={{ gridTemplateColumns: `2fr ${LIBS.map(() => "1fr").join(" ")}` }}
                            >
                                <div className="px-6 py-3.5 text-sm text-zinc-400" style={{ fontFamily: "Inter, sans-serif", borderBottom: fi < FEATURES.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                                    {feat}
                                </div>
                                {LIBS.map((lib, li) => (
                                    <div
                                        key={lib}
                                        className="px-3 py-3.5"
                                        style={{
                                            background: li === 0 ? "rgba(59,130,246,0.04)" : "transparent",
                                            borderLeft: "1px solid rgba(255,255,255,0.04)",
                                            borderBottom: fi < FEATURES.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                                        }}
                                    >
                                        <Cell status={DATA[lib][fi]} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Legend */}
                <div className="flex items-center gap-6 mt-4 justify-center">
                    <div className="flex items-center gap-2 text-xs text-zinc-500"><Check size={13} className="text-green-400" /> Supported</div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500"><Minus size={13} className="text-yellow-500/60" /> Partial</div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500"><X size={13} className="text-red-500/60" /> Not supported</div>
                </div>
            </div>
        </section>
    );
}
export default Comparison