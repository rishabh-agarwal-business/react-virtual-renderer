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