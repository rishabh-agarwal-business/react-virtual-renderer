import type { NavLink, Feature } from "./types";
import {
    FaGithub,
    FaNpm,
    FaBug,
    FaComments,
} from "react-icons/fa";

import { TbCode } from "react-icons/tb";
import { MdGavel } from "react-icons/md";
import { List, Grid, Infinity as InfinityIcon, Ruler, Columns, Accessibility, Gauge, Code2 } from "lucide-react";
import { AllyPreview, GridPreview, HeightsPreview, InfinitePreview, ListPreview, MasonryPreview as MasonryLayout, MetricsPreview, TypeScriptPreview } from "./components/common";
import { VirtualListPreview } from "./components/examples/VirtualListPreview";
import MasonryPreview from "./components/examples/MasonryPreview";
import { StockTickerPreview } from "./components/examples/StockTickerPreview";

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

export const features: Feature[] = [
    { icon: List, title: "Virtual Lists", desc: "Render millions of rows with constant DOM node count. Fixed or variable heights supported.", color: "#3B82F6", Preview: ListPreview },
    { icon: Grid, title: "Virtual Grids", desc: "Two-dimensional virtualization for spreadsheets, galleries, and data tables.", color: "#8B5CF6", Preview: GridPreview },
    { icon: InfinityIcon, title: "Infinite Scroll", desc: "Load data progressively with built-in skeleton loaders and intersection detection.", color: "#22C55E", Preview: InfinitePreview },
    { icon: Ruler, title: "Dynamic Heights", desc: "Automatic measurement of variable-height items. Expand/collapse without remeasuring.", color: "#F59E0B", Preview: HeightsPreview },
    { icon: Columns, title: "Masonry Layouts", desc: "Pinterest-style variable-height grid columns with virtual rendering support.", color: "#EC4899", Preview: MasonryLayout },
    {
        icon: Accessibility, title: "Accessibility", desc: "WCAG AA compliant. Full keyboard navigation, ARIA attributes, and screen reader support.", color: "#06B6D4", Preview: AllyPreview
    },
    { icon: Gauge, title: "Performance Metrics", desc: "Built-in devtools overlay showing FPS, visible item count, DOM nodes, and scroll velocity.", color: "#EF4444", Preview: MetricsPreview },
    { icon: Code2, title: "TypeScript First", desc: "Full generic types, autocomplete, and type-safe props. Zero runtime overhead.", color: "#3B82F6", Preview: TypeScriptPreview },
];

export const virtualListCode = [
    { tokens: [{ text: "import", color: "#FF7B72" }, { text: " { VirtualList } ", color: "#E6EDF3" }, { text: "from", color: "#FF7B72" }, { text: " 'react-virtual-renderer'", color: "#A5D6FF" }] },
    { tokens: [{ text: "", color: "" }] },
    { tokens: [{ text: "const", color: "#FF7B72" }, { text: " items", color: "#79C0FF" }, { text: " = Array.from(", color: "#E6EDF3" }, { text: "{ length: 100_000 }", color: "#FFA657" }, { text: ", (_, id) => ({ id }))", color: "#E6EDF3" }] },
    { tokens: [{ text: "", color: "" }] },
    { tokens: [{ text: "<", color: "#E6EDF3" }, { text: "VirtualList", color: "#7EE787" }], highlight: true },
    { tokens: [{ text: "  items", color: "#79C0FF" }, { text: "={items}", color: "#E6EDF3" }] },
    { tokens: [{ text: "  height", color: "#79C0FF" }, { text: "={500}", color: "#E6EDF3" }] },
    { tokens: [{ text: "  itemHeight", color: "#79C0FF" }, { text: "={44}", color: "#E6EDF3" }], highlight: true },
    { tokens: [{ text: "  overscan", color: "#79C0FF" }, { text: "={4}", color: "#E6EDF3" }] },
    { tokens: [{ text: "  renderItem", color: "#79C0FF" }, { text: "={(item) => (", color: "#E6EDF3" }] },
    { tokens: [{ text: "    <", color: "#E6EDF3" }, { text: "div", color: "#7EE787" }, { text: ">Item #{item.id}</", color: "#E6EDF3" }, { text: "div", color: "#7EE787" }, { text: ">", color: "#E6EDF3" }] },
    { tokens: [{ text: "  )}", color: "#E6EDF3" }] },
    { tokens: [{ text: "/>", color: "#E6EDF3" }] },
];

export const masonryCode = [
    { tokens: [{ text: "import", color: "#FF7B72" }, { text: " { VirtualMasonry } ", color: "#E6EDF3" }, { text: "from", color: "#FF7B72" }, { text: " 'react-virtual-renderer'", color: "#A5D6FF" }] },
    { tokens: [{ text: "", color: "" }] },
    { tokens: [{ text: "<", color: "#E6EDF3" }, { text: "VirtualMasonry", color: "#7EE787" }], highlight: true },
    { tokens: [{ text: "  items", color: "#79C0FF" }, { text: "={photos}", color: "#E6EDF3" }] },
    { tokens: [{ text: "  columns", color: "#79C0FF" }, { text: "={3}", color: "#E6EDF3" }], highlight: true },
    { tokens: [{ text: "  columnGutter", color: "#79C0FF" }, { text: "={12}", color: "#E6EDF3" }] },
    { tokens: [{ text: "  height", color: "#79C0FF" }, { text: "={600}", color: "#E6EDF3" }] },
    { tokens: [{ text: "  getItemKey", color: "#79C0FF" }, { text: "={(item) => item.id}", color: "#E6EDF3" }] },
    { tokens: [{ text: "  renderItem", color: "#79C0FF" }, { text: "={(photo) => (", color: "#E6EDF3" }] },
    { tokens: [{ text: "    <", color: "#E6EDF3" }, { text: "img", color: "#7EE787" }, { text: " src={photo.url} alt={photo.alt} />", color: "#E6EDF3" }] },
    { tokens: [{ text: "  )}", color: "#E6EDF3" }] },
    { tokens: [{ text: "/>", color: "#E6EDF3" }] },
];

export const stockTickerCode = [
    {
        tokens: [
            { text: "import", color: "#FF7B72" },
            { text: " { VirtualList } ", color: "#E6EDF3" },
            { text: "from", color: "#FF7B72" },
            { text: " 'react-virtual-renderer'", color: "#A5D6FF" },
        ],
    },
    { tokens: [{ text: "", color: "" }] },

    {
        tokens: [
            { text: "const", color: "#FF7B72" },
            { text: " stocks", color: "#79C0FF" },
            { text: " = Array.from(", color: "#E6EDF3" },
            { text: "{ length: 500 }", color: "#FFA657" },
            { text: ", (_, i) => ({ id: i, symbol: `STOCK${i}` }))", color: "#E6EDF3" },
        ],
    },
    { tokens: [{ text: "", color: "" }] },

    {
        tokens: [
            { text: "useEffect", color: "#FF7B72" },
            { text: "(() => {", color: "#E6EDF3" },
        ],
    },
    {
        tokens: [
            { text: "  const interval = setInterval(() => {", color: "#E6EDF3" },
        ],
    },
    {
        tokens: [
            { text: "    setStocks(prev => prev.map(s => ({ ...s, price: s.price + (Math.random() - 0.5) * 5 })))", color: "#A5D6FF" },
        ],
    },
    {
        tokens: [
            { text: "  }, 1000);", color: "#E6EDF3" },
        ],
    },
    {
        tokens: [
            { text: "  return () => clearInterval(interval);", color: "#E6EDF3" },
        ],
    },
    {
        tokens: [
            { text: "}, []);", color: "#E6EDF3" },
        ],
    },
    { tokens: [{ text: "", color: "" }] },

    {
        tokens: [
            { text: "<", color: "#E6EDF3" },
            { text: "VirtualList", color: "#7EE787" },
            { text: " ", color: "#E6EDF3" },
            { text: "items", color: "#79C0FF" },
            { text: "={stocks}", color: "#E6EDF3" },
        ],
        highlight: true,
    },
    {
        tokens: [
            { text: "  height", color: "#79C0FF" },
            { text: "={500}", color: "#E6EDF3" },
        ],
    },
    {
        tokens: [
            { text: "  estimatedItemSize", color: "#79C0FF" },
            { text: "={50}", color: "#E6EDF3" },
        ],
        highlight: true,
    },
    {
        tokens: [
            { text: "  renderItem", color: "#79C0FF" },
            { text: "={(item) => (", color: "#E6EDF3" },
        ],
    },
    {
        tokens: [
            { text: "    <", color: "#E6EDF3" },
            { text: "div", color: "#7EE787" },
            { text: " style={{ display: 'flex', padding: 12 }}>", color: "#E6EDF3" },
        ],
    },
    {
        tokens: [
            { text: "      {item.symbol}", color: "#A5D6FF" },
        ],
    },
    {
        tokens: [
            { text: "      $", color: "#E6EDF3" },
            { text: "{item.price.toFixed(2)}", color: "#A5D6FF" },
        ],
    },
    {
        tokens: [
            { text: "    </", color: "#E6EDF3" },
            { text: "div", color: "#7EE787" },
            { text: ">", color: "#E6EDF3" },
        ],
    },
    {
        tokens: [
            { text: "  )}", color: "#E6EDF3" },
        ],
    },
    {
        tokens: [
            { text: "/>", color: "#E6EDF3" },
        ],
    },
];

export const commentThreadCode = [
    {
        tokens: [
            { text: "import", color: "#FF7B72" },
            { text: " { VirtualList } ", color: "#E6EDF3" },
            { text: "from", color: "#FF7B72" },
            { text: " 'react-virtual-renderer'", color: "#A5D6FF" },
        ],
    },
    { tokens: [{ text: "", color: "" }] },

    {
        tokens: [
            { text: "const", color: "#FF7B72" },
            { text: " comments", color: "#79C0FF" },
            { text: " = useMemo(() => Array.from(", color: "#E6EDF3" },
            { text: "{ length: 300 }", color: "#FFA657" },
            { text: ", (_, i) => ({ id: i }))", color: "#E6EDF3" },
        ],
    },
    { tokens: [{ text: "", color: "" }] },

    {
        tokens: [
            { text: "<", color: "#E6EDF3" },
            { text: "VirtualList", color: "#7EE787" },
            { text: " ", color: "#E6EDF3" },
            { text: "items", color: "#79C0FF" },
            { text: "={comments}", color: "#E6EDF3" },
        ],
        highlight: true,
    },
    {
        tokens: [
            { text: "  height", color: "#79C0FF" },
            { text: "={500}", color: "#E6EDF3" },
        ],
    },
    {
        tokens: [
            { text: "  estimatedItemSize", color: "#79C0FF" },
            { text: "={90}", color: "#E6EDF3" },
        ],
        highlight: true,
    },
    {
        tokens: [
            { text: "  renderItem", color: "#79C0FF" },
            { text: "={(item) => (", color: "#E6EDF3" },
        ],
    },
    {
        tokens: [
            { text: "    <", color: "#E6EDF3" },
            { text: "div", color: "#7EE787" },
            {
                text: " style={{ paddingLeft: item.level * 40, padding: 12 }}>",
                color: "#E6EDF3",
            },
        ],
    },
    {
        tokens: [
            { text: "      <", color: "#E6EDF3" },
            { text: "strong", color: "#7EE787" },
            { text: ">{item.author}</", color: "#E6EDF3" },
            { text: "strong", color: "#7EE787" },
            { text: ">", color: "#E6EDF3" },
        ],
    },
    {
        tokens: [
            { text: "      <", color: "#E6EDF3" },
            { text: "p", color: "#7EE787" },
            { text: ">{item.text}</", color: "#E6EDF3" },
            { text: "p", color: "#7EE787" },
            { text: ">", color: "#E6EDF3" },
        ],
    },
    {
        tokens: [
            { text: "    )}", color: "#E6EDF3" },
        ],
    },
    {
        tokens: [
            { text: "/>", color: "#E6EDF3" },
        ],
    },
];

export const LANDING_PAGE_DEMOS = [
    { id: "list", label: "Virtual List", desc: "100k rows with live controls", tag: "Core", tagColor: "#3B82F6", Demo: VirtualListPreview, code: virtualListCode, codeTitle: "VirtualList.tsx" },
    { id: "masonry", label: "Masonry Grid", desc: "Pinterest-style gallery", tag: "Layout", tagColor: "#F59E0B", Demo: MasonryPreview, code: masonryCode, codeTitle: "Masonry.tsx" },
];

export const EXAMPLES_PAGE_DEMOS = [
    { id: "list", label: "Stock Ticker", desc: "100k rows with live controls", tag: "Core", tagColor: "#3B82F6", Demo: StockTickerPreview, code: stockTickerCode, codeTitle: "VirtualList.tsx" },
    // { id: "heights", label: "Dynamic Heights", desc: "Expandable variable-height cards", tag: "Advanced", tagColor: "#8B5CF6", Demo: DynamicHeightsDemo, code: dynamicHeightsCode, codeTitle: "DynamicHeights.tsx" },
    // { id: "infinite", label: "Infinite Scroll", desc: "Social feed with skeleton loaders", tag: "Advanced", tagColor: "#22C55E", Demo: InfiniteScrollDemo, code: infiniteScrollCode, codeTitle: "InfiniteScroll.tsx" },
    // { id: "chat", label: "Chat App", desc: "Reverse-scrolling live chat", tag: "Patterns", tagColor: "#EC4899", Demo: ChatDemo, code: chatCode, codeTitle: "Chat.tsx" },
];

export const ALL_DEMOS = [...LANDING_PAGE_DEMOS, ...EXAMPLES_PAGE_DEMOS];