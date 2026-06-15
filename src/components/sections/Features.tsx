import { features } from "../../constants";
import { motion } from "motion/react";

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