export function InfinitePreview() {
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