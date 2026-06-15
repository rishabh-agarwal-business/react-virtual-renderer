import { TbViewportWide } from "react-icons/tb";
import { links } from "../../constants";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="py-10 relative" style={{ borderTop: "1px solid #27272A" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 shrink-0" style={{ textDecoration: "none" }}>
                        <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)" }}>
                            <TbViewportWide size={12} className="text-white" />
                        </div>
                        <span className="text-sm font-medium text-zinc-400" style={{ fontFamily: "Inter, sans-serif" }}>React Virtual Renderer</span>
                        <span className="text-xs text-zinc-700 ml-1" style={{ fontFamily: "JetBrains Mono, monospace" }}>v2.1.0</span>
                    </Link>

                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
                        {links.map((link) => {
                            const Icon = link.icon;
                            if (link.external) {
                                return (
                                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                                        style={{ fontFamily: "Inter, sans-serif" }}>
                                        <Icon size={12} />{link.label}
                                    </a>
                                );
                            }
                            return (
                                <Link key={link.label} to={link.href}
                                    className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                                    style={{ fontFamily: "Inter, sans-serif", textDecoration: "none" }}>
                                    <Icon size={12} />{link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Copyright */}
                    <div className="text-xs text-zinc-700 shrink-0" style={{ fontFamily: "Inter, sans-serif" }}>
                        © 2026 React Virtual Renderer - Rishabh Agarwal
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer