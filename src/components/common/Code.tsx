import { useState } from "react";
import { Copy, Check } from "lucide-react";
import type { CodeBlockProps, CodeLine } from "../../types";

function renderLine(line: CodeLine, lineNum: number) {
    return (
        <div
            key={lineNum}
            className="flex items-stretch min-h-5.5"
            style={{ background: line.highlight ? "rgba(59,130,246,0.08)" : "transparent", borderLeft: line.highlight ? "2px solid #3B82F6" : "2px solid transparent" }}
        >
            <span
                className="select-none text-right pr-4 pt-0.5 shrink-0"
                style={{ width: "40px", color: "#4B5563", fontSize: "12px", fontFamily: "JetBrains Mono, monospace" }}
            >
                {lineNum}
            </span>
            <span className="flex-1 pt-0.5 pr-4" style={{ fontSize: "13px", fontFamily: "JetBrains Mono, monospace" }}>
                {line.tokens.map((t, i) => (
                    <span key={i} style={{ color: t.color }}>{t.text}</span>
                ))}
            </span>
        </div>
    );
}

const Code = ({ tsCode, jsCode, title }: CodeBlockProps) => {
    const [lang, setLang] = useState<"ts" | "js">("ts");
    const [copied, setCopied] = useState(false);

    const code = lang === "ts" ? tsCode : (jsCode ?? tsCode);
    const rawText = code.map((l) => l.tokens.map((t) => t.text).join("")).join("\n");

    const copy = () => {
        navigator.clipboard.writeText(rawText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col h-full rounded-xl overflow-hidden" style={{ background: "#0D1117", border: "1px solid #30363D" }}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 shrink-0" style={{ borderBottom: "1px solid #21262D", background: "#161B22" }}>
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                        <div className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
                        <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
                    </div>
                    {title && <span className="text-xs text-zinc-500" style={{ fontFamily: "JetBrains Mono, monospace" }}>{title}</span>}
                </div>
                <div className="flex items-center gap-2">
                    {jsCode && (
                        <div className="flex rounded-md overflow-hidden" style={{ border: "1px solid #30363D" }}>
                            {(["ts", "js"] as const).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className="px-3 py-1 text-xs transition-colors cursor-pointer"
                                    style={{
                                        fontFamily: "JetBrains Mono, monospace",
                                        background: lang === l ? "#1F6FEB" : "transparent",
                                        color: lang === l ? "#fff" : "#8B949E",
                                    }}
                                >
                                    {l === "ts" ? "TypeScript" : "JavaScript"}
                                </button>
                            ))}
                        </div>
                    )}
                    <button onClick={copy} className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-zinc-500 hover:text-white transition-colors cursor-pointer" style={{ fontFamily: "Inter, sans-serif" }}>
                        {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                        {copied ? "Copied" : "Copy"}
                    </button>
                </div>
            </div>

            {/* Code */}
            <div className="flex-1 overflow-y-auto py-3" style={{ scrollbarWidth: "thin", scrollbarColor: "#374151 transparent" }}>
                {code.map((line, i) => renderLine(line, i + 1))}
            </div>
        </div>
    );
}
export default Code;