export function TypeScriptPreview() {
    return (
        <div className="mt-3 p-2 rounded" style={{ background: "#0D1117", border: "1px solid rgba(255,255,255,0.06)", fontFamily: "JetBrains Mono, monospace", fontSize: "11px" }}>
            <div><span style={{ color: "#FF7B72" }}>interface</span> <span style={{ color: "#79C0FF" }}>VirtualListProps</span><span style={{ color: "#E6EDF3" }}>&lt;</span><span style={{ color: "#FFA657" }}>T</span><span style={{ color: "#E6EDF3" }}>&gt; {"{"}</span></div>
            <div className="pl-3"><span style={{ color: "#79C0FF" }}>items</span><span style={{ color: "#E6EDF3" }}>: </span><span style={{ color: "#FFA657" }}>T</span><span style={{ color: "#E6EDF3" }}>[];</span></div>
            <div className="pl-3"><span style={{ color: "#79C0FF" }}>height</span><span style={{ color: "#E6EDF3" }}>: </span><span style={{ color: "#79C0FF" }}>number</span><span style={{ color: "#E6EDF3" }}>;</span></div>
            <div><span style={{ color: "#E6EDF3" }}>{"}"}</span></div>
        </div>
    );
}