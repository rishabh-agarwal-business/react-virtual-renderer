import { motion } from "motion/react";
import { Download, Tag, Users, Activity, Star } from "lucide-react";
import {
    FaGithub,
} from "react-icons/fa";
const stats = [
    { icon: Star, label: "GitHub Stars", value: "12.4k", color: "#F59E0B" },
    { icon: Download, label: "Weekly Downloads", value: "284k", color: "#3B82F6" },
    { icon: Tag, label: "Latest Version", value: "v2.1.0", color: "#22C55E" },
    { icon: Users, label: "Contributors", value: "47", color: "#8B5CF6" },
    { icon: Activity, label: "Commits this month", value: "138", color: "#EC4899" },
];

const activity = [
    { type: "release", msg: "v2.1.0 released — Masonry Layout stable", time: "2d ago", color: "#22C55E" },
    { type: "pr", msg: "PR #412 merged: SSR hydration improvements", time: "4d ago", color: "#3B82F6" },
    { type: "issue", msg: "Issue #389 closed: Dynamic height edge case fixed", time: "6d ago", color: "#8B5CF6" },
    { type: "release", msg: "v2.0.0 released — Complete API rewrite", time: "3w ago", color: "#F59E0B" },
    { type: "pr", msg: "PR #388 merged: React 18 Concurrent Mode support", time: "1mo ago", color: "#3B82F6" },
];

const OpenSource = () => {
    return (
        <section className="py-24 relative" style={{ borderTop: "1px solid #27272A", background: "#111113" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left */}
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-6" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", color: "#86EFAC" }}>
                            <FaGithub size={11} />
                            Open Source
                        </div>
                        <h2 className="text-white mb-4" style={{ fontSize: "2rem", fontWeight: 700, fontFamily: "Inter, sans-serif", letterSpacing: "-0.03em" }}>
                            Built in the open,<br />for everyone
                        </h2>
                        <p className="text-zinc-400 mb-8 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                            React Virtual Renderer is MIT licensed. Contributions are welcome — from bug fixes to new features. Join our community of developers building fast interfaces.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                            {stats.map((s, i) => {
                                const Icon = s.icon;
                                return (
                                    <motion.div
                                        key={s.label}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                        className="p-3 rounded-xl text-center"
                                        style={{ background: "#18181B", border: "1px solid #27272A" }}
                                    >
                                        <Icon size={16} style={{ color: s.color }} className="mx-auto mb-1.5" />
                                        <div className="font-bold text-white text-lg" style={{ fontFamily: "JetBrains Mono, monospace" }}>{s.value}</div>
                                        <div className="text-xs text-zinc-600 mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{s.label}</div>
                                    </motion.div>
                                );
                            })}
                        </div>
                        <div className="flex gap-3">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium text-sm transition-all hover:opacity-90 cursor-pointer"
                                style={{ background: "#18181B", border: "1px solid #27272A", fontFamily: "Inter, sans-serif" }}
                            >
                                <FaGithub size={15} /> View on GitHub
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-zinc-400 hover:text-white font-medium text-sm transition-all cursor-pointer"
                                style={{ fontFamily: "Inter, sans-serif" }}
                            >
                                Contribute
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Activity feed */}
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h3 className="text-sm font-medium text-zinc-400 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>Recent Activity</h3>
                        <div className="space-y-3">
                            {activity.map((a, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="flex items-start gap-3 p-4 rounded-xl"
                                    style={{ background: "#18181B", border: "1px solid #27272A" }}
                                >
                                    <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: a.color }} />
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm text-zinc-300 truncate" style={{ fontFamily: "Inter, sans-serif" }}>{a.msg}</div>
                                        <div className="text-xs text-zinc-600 mt-0.5">{a.time}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
export default OpenSource;