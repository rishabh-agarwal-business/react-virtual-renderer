export function MasonryPreview() {
    return (
        <div className="flex gap-1.5 mt-3">
            {[[40, 70, 35, 55], [60, 30, 65, 40]].map((col, ci) => (
                <div key={ci} className="flex-1 space-y-1.5">
                    {col.map((h, i) => (
                        <div key={i} className="rounded" style={{ height: `${h * 0.5}px`, background: `hsl(${ci * 60 + i * 20 + 280},60%,40%)`, opacity: 0.8 }} />
                    ))}
                </div>
            ))}
        </div>
    );
}