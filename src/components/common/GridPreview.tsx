export function GridPreview() {
    return (
        <div className="grid grid-cols-3 gap-1 mt-3">
            {Array.from({ length: 9 }, (_, i) => (
                <div key={i} className="h-8 rounded" style={{ background: i % 4 === 0 ? "rgba(139,92,246,0.2)" : "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }} />
            ))}
        </div>
    );
}