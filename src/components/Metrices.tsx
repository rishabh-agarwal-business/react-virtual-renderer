import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const metrics = [
    { value: 100000, suffix: "+", label: "Items Rendered", color: "#3B82F6" },
    { value: 60, suffix: " FPS", label: "Smooth Scrolling", color: "#22C55E" },
    { value: 8, suffix: " KB", label: "Bundle Size", color: "#8B5CF6" },
    { value: "WCAG AA", suffix: "", label: "Accessibility", color: "#F59E0B", isText: true },
    { value: "TypeScript", suffix: "", label: "First", color: "#3B82F6", isText: true },
];

function AnimatedNumber({ target, suffix, isText }: { target: number | string; suffix: string; isText?: boolean }) {
    const [display, setDisplay] = useState<string | number>(isText ? target : 0);
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView || isText) return;
        const num = target as number;
        let start = 0;
        const step = Math.ceil(num / 60);
        const timer = setInterval(() => {
            start = Math.min(start + step, num);
            setDisplay(start.toLocaleString());
            if (start >= num) clearInterval(timer);
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target, isText]);

    return <div ref={ref}>{isText ? target : display}{suffix}</div>;
}

const Metrics = () => {
    return (
        <section className="py-16 relative" style={{ borderTop: "1px solid #27272A", borderBottom: "1px solid #27272A", background: "#111113" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={m.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div
                                className="text-3xl font-bold mb-1"
                                style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em", color: m.color, fontVariantNumeric: "tabular-nums" }}
                            >
                                <AnimatedNumber target={m.value} suffix={m.suffix} isText={m.isText} />
                            </div>
                            <div className="text-sm text-zinc-500" style={{ fontFamily: "Inter, sans-serif" }}>{m.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Metrics