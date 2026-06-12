import { useState, useEffect } from "react";
import { TbMenu2, TbX, TbPackage, TbBolt } from "react-icons/tb";
import {
    FaGithub,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { navLinks } from "../constants";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === "/";

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const handleAnchor = (href: string) => {
        setMobileOpen(false);
        if (isHome) {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            navigate("/");
            setTimeout(() => {
                const el = document.querySelector(href);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 350);
        }
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                background: scrolled ? "rgba(9,9,11,0.88)" : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid #27272A" : "1px solid transparent",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 shrink-0"
                        style={{ textDecoration: "none" }}
                    >
                        <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                            style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)" }}
                        >
                            <TbBolt size={14} className="text-white" />
                        </div>
                        <span className="text-white font-semibold text-sm tracking-tight hidden sm:block">
                            React Virtual Renderer
                        </span>
                        <span className="text-white font-semibold text-sm tracking-tight sm:hidden">
                            RVR
                        </span>
                    </Link>

                    {/* Center nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) =>
                            link.isRoute ? (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    className="px-3 py-1.5 rounded-md text-sm transition-colors"
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                        color: location.pathname === link.href ? "#fff" : "#A1A1AA",
                                        background: location.pathname === link.href ? "rgba(59,130,246,0.12)" : "transparent",
                                        textDecoration: "none",
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                <button
                                    key={link.label}
                                    onClick={() => handleAnchor(link.href)}
                                    className="px-3 py-1.5 rounded-md text-sm text-zinc-400 hover:text-white transition-colors hover:bg-zinc-800/60 cursor-pointer"
                                    style={{ fontFamily: "Inter, sans-serif" }}
                                >
                                    {link.label}
                                </button>
                            )
                        )}
                    </nav>

                    {/* Right */}
                    <div className="hidden md:flex items-center gap-2 shrink-0">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-zinc-400 hover:text-white transition-colors hover:bg-zinc-800/60"
                        >
                            <FaGithub size={15} />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://npmjs.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-zinc-400 hover:text-white transition-colors hover:bg-zinc-800/60"
                        >
                            <TbPackage size={15} />
                            <span>npm</span>
                        </a>
                        <Link
                            to="/examples"
                            className="px-4 py-1.5 rounded-lg text-sm text-white font-medium transition-all hover:opacity-90"
                            style={{
                                background: "linear-gradient(135deg, #3B82F6, #6366F1)",
                                textDecoration: "none",
                            }}
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden text-zinc-400 hover:text-white transition-colors p-1"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <TbX size={20} /> : <TbMenu2 size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden"
                        style={{
                            background: "rgba(9,9,11,0.97)",
                            borderBottom: "1px solid #27272A",
                        }}
                    >
                        <div className="px-4 py-4 flex flex-col gap-1">
                            {navLinks.map((link) =>
                                link.isRoute ? (
                                    <Link
                                        key={link.label}
                                        to={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="px-3 py-2.5 rounded-md text-sm text-left"
                                        style={{
                                            fontFamily: "Inter, sans-serif",
                                            color: location.pathname === link.href ? "#93C5FD" : "#A1A1AA",
                                            background: location.pathname === link.href ? "rgba(59,130,246,0.1)" : "transparent",
                                            textDecoration: "none",
                                            display: "block",
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                ) : (
                                    <button
                                        key={link.label}
                                        onClick={() => handleAnchor(link.href)}
                                        className="text-left px-3 py-2.5 rounded-md text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer"
                                        style={{ fontFamily: "Inter, sans-serif" }}
                                    >
                                        {link.label}
                                    </button>
                                )
                            )}
                            <div className="border-t border-zinc-800 mt-3 pt-4 flex flex-col gap-2">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-400 hover:text-white rounded-md"
                                >
                                    {/* <Github size={15} /> */}
                                    GitHub
                                </a>
                                <a
                                    href="https://npmjs.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-400 hover:text-white rounded-md"
                                >
                                    <TbPackage size={15} /> npm
                                </a>
                                <Link
                                    to="/examples"
                                    onClick={() => setMobileOpen(false)}
                                    className="mx-3 py-2.5 rounded-lg text-sm text-white font-medium text-center"
                                    style={{
                                        background: "linear-gradient(135deg, #3B82F6, #6366F1)",
                                        textDecoration: "none",
                                        display: "block",
                                    }}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar