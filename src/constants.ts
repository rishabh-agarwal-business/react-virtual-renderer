import type { NavLink } from "./types";
import {
    FaGithub,
    FaNpm,
    FaBug,
    FaComments,
} from "react-icons/fa";

import { TbCode } from "react-icons/tb";
import { MdGavel } from "react-icons/md";

export const navLinks: NavLink[] = [
    { label: "Features", href: "#features" },
    { label: "Examples", href: "/examples", isRoute: true },
    { label: "Benchmarks", href: "#benchmarks" },
    { label: "Comparison", href: "#comparison" },
];

export const links = [
    {
        icon: FaGithub,
        label: "GitHub",
        href: "https://github.com",
        external: true,
    },
    {
        icon: FaNpm,
        label: "npm",
        href: "https://npmjs.com",
        external: true,
    },
    {
        icon: TbCode,
        label: "Examples",
        href: "/examples",
        external: false,
    },
    {
        icon: FaBug,
        label: "Issues",
        href: "https://github.com",
        external: true,
    },
    {
        icon: FaComments,
        label: "Discussions",
        href: "https://github.com",
        external: true,
    },
    {
        icon: MdGavel,
        label: "MIT License",
        href: "https://github.com",
        external: true,
    },
];