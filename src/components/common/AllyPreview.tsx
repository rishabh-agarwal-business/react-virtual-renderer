export function AllyPreview() {
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