import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis } from "recharts";

const renderTimeData = [
    { name: "React Virtual Renderer", value: 4.2, fill: "#3B82F6" },
    { name: "TanStack Virtual", value: 8.1, fill: "#8B5CF6" },
    { name: "react-window", value: 15.3, fill: "#F59E0B" },
    { name: "react-virtualized", value: 22.7, fill: "#EF4444" },
];

const memoryData = [
    { name: "React Virtual Renderer", value: 3.2, fill: "#3B82F6" },
    { name: "TanStack Virtual", value: 5.8, fill: "#8B5CF6" },
    { name: "react-window", value: 9.4, fill: "#F59E0B" },
    { name: "react-virtualized", value: 18.1, fill: "#EF4444" },
];

const fpsData = [
    { name: "React Virtual Renderer", value: 60, fill: "#3B82F6" },
    { name: "TanStack Virtual", value: 58, fill: "#8B5CF6" },
    { name: "react-window", value: 52, fill: "#F59E0B" },
    { name: "react-virtualized", value: 41, fill: "#EF4444" },
];

const bundleData = [
    { name: "React Virtual Renderer", value: 8, fill: "#3B82F6" },
    { name: "TanStack Virtual", value: 14, fill: "#8B5CF6" },
    { name: "react-window", value: 6.5, fill: "#F59E0B" },
    { name: "react-virtualized", value: 28, fill: "#EF4444" },
];

const radarData = [
    { subject: "Render Speed", rvr: 100, rw: 65, rv: 45, tan: 80 },
    { subject: "Memory", rvr: 95, rw: 72, rv: 40, tan: 78 },
    { subject: "Bundle Size", rvr: 88, rw: 90, rv: 42, tan: 75 },
    { subject: "TypeScript", rvr: 100, rw: 60, rv: 50, tan: 90 },
    { subject: "Features", rvr: 95, rw: 55, rv: 70, tan: 80 },
    { subject: "DX", rvr: 98, rw: 65, rv: 55, tan: 82 },
];

const TOOLTIP_STYLE = {
    background: "#18181B",
    border: "1px solid #27272A",
    borderRadius: "8px",
    color: "#E4E4E7",
    fontSize: "12px",
    fontFamily: "Inter, sans-serif",
};

function BenchChart({ title, data, unit, lower = false }: { title: string; data: typeof renderTimeData; unit: string; lower?: boolean }) {
    return (
        <div className="p-5 rounded-2xl" style={{ background: "#18181B", border: "1px solid #27272A" }}>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-zinc-300" style={{ fontFamily: "Inter, sans-serif" }}>{title}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: lower ? "rgba(34,197,94,0.1)" : "rgba(59,130,246,0.1)", color: lower ? "#22C55E" : "#93C5FD", fontFamily: "JetBrains Mono, monospace" }}>
                    {lower ? "lower is better" : "higher is better"}
                </span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data} layout="vertical" margin={{ left: 0, right: 20, top: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272A" horizontal={false} />
                    <XAxis type="number" tick={{ fill: "#71717A", fontSize: 11, fontFamily: "JetBrains Mono, monospace" }} axisLine={false} tickLine={false} unit={unit} />
                    <YAxis type="category" dataKey="name" width={0} hide />
                    <Tooltip
                        contentStyle={TOOLTIP_STYLE}
                        formatter={(v: number) => [`${v}${unit}`, ""]}
                        cursor={{ fill: "rgba(255,255,255,0.03)" }}
                    />
                    <Bar
                        dataKey="value"
                        radius={[0, 4, 4, 0]}
                        label={{ position: "insideLeft", fill: "#E4E4E7", fontSize: 11, fontFamily: "JetBrains Mono, monospace", dx: 8 }}
                        shape={(props: Record<string, unknown>) => {
                            const { x, y, width, height, index } = props as { x: number; y: number; width: number; height: number; index: number };
                            return <rect x={x} y={y} width={width} height={height} fill={data[index]?.fill ?? "#3B82F6"} rx={4} ry={4} />;
                        }}
                    />
                </BarChart>
            </ResponsiveContainer>
            {/* Legend */}
            <div className="mt-3 space-y-1.5">
                {data.map((d) => (
                    <div key={d.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: d.fill }} />
                            <span className="text-xs text-zinc-500" style={{ fontFamily: "Inter, sans-serif" }}>{d.name}</span>
                        </div>
                        <span className="text-xs font-medium" style={{ color: d.fill, fontFamily: "JetBrains Mono, monospace" }}>{d.value}{unit}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

const Benchmark = () => {
    return (
        <section id="benchmarks" className="py-24 relative" style={{ borderTop: "1px solid #27272A", background: "#111113" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-4" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", color: "#86EFAC" }}>
                        Performance Benchmarks
                    </div>
                    <h2 className="text-white mb-4" style={{ fontSize: "2.25rem", fontWeight: 700, fontFamily: "Inter, sans-serif", letterSpacing: "-0.03em" }}>
                        Numbers don't lie
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
                        Benchmarked against the most popular virtualization libraries. Tests run on 100,000 items with Chrome DevTools performance profiler.
                    </p>
                </motion.div>

                {/* Benchmark grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}>
                        <BenchChart title="Initial Render Time" data={renderTimeData} unit="ms" lower />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                        <BenchChart title="Memory Usage (Peak)" data={memoryData} unit="MB" lower />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <BenchChart title="Scroll FPS (60fps target)" data={fpsData} unit=" fps" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                        <BenchChart title="Bundle Size (gzipped)" data={bundleData} unit=" KB" lower />
                    </motion.div>
                </div>

                {/* Radar chart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl"
                    style={{ background: "#18181B", border: "1px solid #27272A" }}
                >
                    <h3 className="text-sm font-medium text-zinc-300 mb-6 text-center" style={{ fontFamily: "Inter, sans-serif" }}>Overall Performance Radar</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <RadarChart data={radarData}>
                            <PolarGrid stroke="#27272A" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: "#71717A", fontSize: 11, fontFamily: "Inter, sans-serif" }} />
                            <Radar name="React Virtual Renderer" dataKey="rvr" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.2} />
                            <Radar name="TanStack Virtual" dataKey="tan" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.1} />
                            <Radar name="react-window" dataKey="rw" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.1} />
                            <Radar name="react-virtualized" dataKey="rv" stroke="#EF4444" fill="#EF4444" fillOpacity={0.1} />
                            <Tooltip contentStyle={TOOLTIP_STYLE} />
                            <Legend wrapperStyle={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#71717A" }} />
                        </RadarChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>
        </section>
    );
}
export default Benchmark