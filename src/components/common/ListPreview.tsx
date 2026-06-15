export function ListPreview() {
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