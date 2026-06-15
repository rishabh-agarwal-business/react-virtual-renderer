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