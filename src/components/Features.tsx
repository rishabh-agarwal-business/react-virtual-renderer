import type { Feature } from "./../types";
import { motion } from "motion/react";
import { List, Grid, Infinity as InfinityIcon, Ruler, Columns, Accessibility, Gauge, Code2 } from "lucide-react";

const features: Feature[] = [
    { icon: List, title: "Virtual Lists", desc: "Render millions of rows with constant DOM node count. Fixed or variable heights supported.", color: "#3B82F6", Preview: ListPreview },
    { icon: Grid, title: "Virtual Grids", desc: "Two-dimensional virtualization for spreadsheets, galleries, and data tables.", color: "#8B5CF6", Preview: GridPreview },
    { icon: InfinityIcon, title: "Infinite Scroll", desc: "Load data progressively with built-in skeleton loaders and intersection detection.", color: "#22C55E", Preview: InfinitePreview },
    { icon: Ruler, title: "Dynamic Heights", desc: "Automatic measurement of variable-height items. Expand/collapse without remeasuring.", color: "#F59E0B", Preview: HeightsPreview },
    { icon: Columns, title: "Masonry Layouts", desc: "Pinterest-style variable-height grid columns with virtual rendering support.", color: "#EC4899", Preview: MasonryPreview },
    { icon: Accessibility, title: "Accessibility", desc: "WCAG AA compliant. Full keyboard navigation, ARIA attributes, and screen reader support.", color: "#06B6D4", Preview: A11yPreview },
    { icon: Gauge, title: "Performance Metrics", desc: "Built-in devtools overlay showing FPS, visible item count, DOM nodes, and scroll velocity.", color: "#EF4444", Preview: MetricsPreview },
    { icon: Code2, title: "TypeScript First", desc: "Full generic types, autocomplete, and type-safe props. Zero runtime overhead.", color: "#3B82F6", Preview: TypeScriptPreview },
];

const Features = () => {
    return (
        <section id="features" className="py-20 sm:py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-4" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "#93C5FD" }}>
                        Everything you need
                    </div>
                    <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, fontFamily: "Inter, sans-serif", letterSpacing: "-0.03em" }}>
                        Built for developers,<br />optimized for performance
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base" style={{ fontFamily: "Inter, sans-serif" }}>
                        Every feature you need to build fast, accessible, and scalable list interfaces.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feat, i) => {
                        const Icon = feat.icon;
                        const colSpan = i === 0 ? "sm:col-span-2" : "";
                        return (
                            <motion.div
                                key={feat.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -2, scale: 1.01 }}
                                className={`group p-5 rounded-2xl cursor-default ${colSpan}`}
                                style={{ background: "#18181B", border: "1px solid #27272A", transition: "border-color 0.2s" }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${feat.color}40`; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#27272A"; }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${feat.color}18` }}>
                                        <Icon size={16} style={{ color: feat.color }} />
                                    </div>
                                    <h3 className="text-white font-medium text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{feat.title}</h3>
                                </div>
                                <p className="text-zinc-500 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{feat.desc}</p>
                                <feat.Preview />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
export default Features

function ListPreview() {
    return (
        <div className="space-y-1.5 mt-3">
            {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="flex items-center gap-2 px-2 py-1.5 rounded" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <div className="w-4 h-4 rounded-sm shrink-0" style={{ background: `hsl(${i * 40 + 200},60%,50%)` }} />
                    <div className="h-2 rounded-full flex-1 bg-zinc-700" style={{ width: `${60 + i * 8}%` }} />
                    <div className="text-xs text-zinc-600" style={{ fontFamily: "JetBrains Mono, monospace" }}>#{i * 1000}</div>
                </div>
            ))}
            <div className="text-center text-xs text-zinc-600 pt-1" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                99,994 more rows...
            </div>
        </div>
    );
}

function GridPreview() {
    return (
        <div className="grid grid-cols-3 gap-1 mt-3">
            {Array.from({ length: 9 }, (_, i) => (
                <div key={i} className="h-8 rounded" style={{ background: i % 4 === 0 ? "rgba(139,92,246,0.2)" : "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }} />
            ))}
        </div>
    );
}

function InfinitePreview() {
    return (
        <div className="space-y-2 mt-3">
            {[80, 60, 40].map((w, i) => (
                <div key={i} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full shrink-0 animate-pulse" style={{ background: "rgba(34,197,94,0.3)" }} />
                    <div className="h-2 rounded-full flex-1 animate-pulse" style={{ background: "rgba(255,255,255,0.06)", width: `${w}%` }} />
                </div>
            ))}
            <div className="flex items-center justify-center py-2">
                <div className="w-4 h-4 rounded-full border-2 border-zinc-700 border-t-green-400 animate-spin" />
            </div>
        </div>
    );
}

export function HeightsPreview() {
    return (
        <div className="space-y-1.5 mt-3">
            {[24, 48, 20, 36].map((h, i) => (
                <div key={i} className="rounded px-2 flex items-center gap-2" style={{ height: `${h}px`, background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
                    <span className="text-xs text-yellow-600" style={{ fontFamily: "JetBrains Mono, monospace" }}>{h}px</span>
                </div>
            ))}
        </div>
    );
}

export function MasonryPreview() {
    return (
        <div className="flex gap-1.5 mt-3">
            {[[40, 70, 35, 55], [60, 30, 65, 40]].map((col, ci) => (
                <div key={ci} className="flex-1 space-y-1.5">
                    {col.map((h, i) => (
                        <div key={i} className="rounded" style={{ height: `${h * 0.5}px`, background: `hsl(${ci * 60 + i * 20 + 280},60%,40%)`, opacity: 0.8 }} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export function A11yPreview() {
    return (
        <div className="mt-3 space-y-2">
            {["aria-rowcount", "aria-rowindex", "role='listbox'"].map((attr) => (
                <div key={attr} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400/70" />
                    <code className="text-xs text-cyan-400" style={{ fontFamily: "JetBrains Mono, monospace" }}>{attr}</code>
                </div>
            ))}
        </div>
    );
}

export function MetricsPreview() {
    return (
        <div className="mt-3 grid grid-cols-2 gap-2">
            {[
                { label: "FPS", val: "60", color: "#22C55E" },
                { label: "DOM Nodes", val: "24", color: "#3B82F6" },
                { label: "Visible", val: "15", color: "#8B5CF6" },
                { label: "MB Used", val: "3.2", color: "#F59E0B" },
            ].map((m) => (
                <div key={m.label} className="p-2 rounded text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="font-bold text-sm" style={{ color: m.color, fontFamily: "JetBrains Mono, monospace" }}>{m.val}</div>
                    <div className="text-xs text-zinc-600 mt-0.5">{m.label}</div>
                </div>
            ))}
        </div>
    );
}

export function TypeScriptPreview() {
    return (
        <div className="mt-3 p-2 rounded" style={{ background: "#0D1117", border: "1px solid rgba(255,255,255,0.06)", fontFamily: "JetBrains Mono, monospace", fontSize: "11px" }}>
            <div><span style={{ color: "#FF7B72" }}>interface</span> <span style={{ color: "#79C0FF" }}>VirtualListProps</span><span style={{ color: "#E6EDF3" }}>&lt;</span><span style={{ color: "#FFA657" }}>T</span><span style={{ color: "#E6EDF3" }}>&gt; {"{"}</span></div>
            <div className="pl-3"><span style={{ color: "#79C0FF" }}>items</span><span style={{ color: "#E6EDF3" }}>: </span><span style={{ color: "#FFA657" }}>T</span><span style={{ color: "#E6EDF3" }}>[];</span></div>
            <div className="pl-3"><span style={{ color: "#79C0FF" }}>height</span><span style={{ color: "#E6EDF3" }}>: </span><span style={{ color: "#79C0FF" }}>number</span><span style={{ color: "#E6EDF3" }}>;</span></div>
            <div><span style={{ color: "#E6EDF3" }}>{"}"}</span></div>
        </div>
    );
}