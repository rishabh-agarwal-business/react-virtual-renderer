// import { useState } from "react";
import { VirtualGrid } from "react-virtual-renderer";

type MasonryItem = {
    id: number;
    url: string;
    title: string;
    height: number;
};

import React, {
    forwardRef,
    useMemo,
    useState,
    useRef,
    useEffect,
    useImperativeHandle,
    useCallback,
} from "react";

export interface RenderItemProps<T> {
    item: T;
    index: number;
    isScrolling: boolean;
}

export interface VirtualGridProps<T> {
    // Required
    items: T[];
    renderItem: (props: RenderItemProps<T>) => React.ReactNode;

    // Optional: Keys
    itemKey?: (index: number, item: T) => string | number;

    // Layout sizing
    height?: number | string;
    width?: number | string;
    columnCount?: number | "auto";
    rowHeight?: number | ((index: number) => number);
    columnWidth?: number | ((index: number) => number);
    gap?: number;

    // Layout type
    layout?: "grid" | "masonry";

    // Virtualization
    overscan?: number;
    estimatedItemHeight?: number;

    // Styling
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
    innerClassName?: string;
    innerStyle?: React.CSSProperties;

    // Callbacks
    onScroll?: (scrollTop: number, scrollLeft: number) => void;
    onVisibleRangeChange?: (start: number, end: number) => void;
}

interface GridPosition {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface VirtualItem {
    index: number;
    key: string | number;
}

// ============================================
// VIRTUALGRID COMPONENT
// ============================================

// export const VirtualGrid = forwardRef<HTMLDivElement, VirtualGridProps<any>>(
//     (
//         {
//             items,
//             renderItem,
//             itemKey,
//             height = 600,
//             width = "100%",
//             columnCount = 3,
//             rowHeight = 200,
//             columnWidth,
//             layout = "grid",
//             overscan = 5,
//             gap = 16,
//             onScroll,
//             onVisibleRangeChange,
//             innerClassName,
//             innerStyle,
//             containerClassName,
//             containerStyle,
//         },
//         ref
//     ) => {
//         const containerRef = useRef<HTMLDivElement>(null);
//         useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

//         const [scrollTop, setScrollTop] = useState(0);
//         const [isScrolling, setIsScrolling] = useState(false);
//         const [containerWidth, setContainerWidth] = useState(0);

//         const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

//         // ✅ FIX 1: Proper ResizeObserver with validation
//         useEffect(() => {
//             if (!containerRef.current) return;

//             const el = containerRef.current;
//             const observer = new ResizeObserver((entries) => {
//                 for (const entry of entries) {
//                     const width = entry.contentRect.width;
//                     if (width > 0) {
//                         setContainerWidth(width);
//                     }
//                 }
//             });

//             observer.observe(el);
//             return () => observer.disconnect();
//         }, []);

//         // ✅ FIX 2: Cleanup timeout on unmount
//         useEffect(() => {
//             return () => {
//                 if (scrollTimeout.current) {
//                     clearTimeout(scrollTimeout.current);
//                 }
//             };
//         }, []);

//         // ✅ FIX 3: Better ready check
//         const isReady = containerWidth > 0 && items.length > 0;

//         // ✅ FIX 4: Proper column calculation with gap
//         const cols = useMemo(() => {
//             if (columnCount === "auto") {
//                 const minColWidth = 200;
//                 const calculatedCols = Math.max(
//                     1,
//                     Math.floor(containerWidth / (minColWidth + gap))
//                 );
//                 return calculatedCols;
//             }
//             return Math.max(1, Number(columnCount));
//         }, [columnCount, containerWidth, gap]);

//         // ✅ FIX 5: Proper column width calculation
//         const colWidth = useMemo(() => {
//             if (typeof columnWidth === "number") {
//                 return columnWidth;
//             }

//             if (columnWidth && typeof columnWidth === "function") {
//                 return columnWidth(0);
//             }

//             // Calculate: (containerWidth - totalGaps) / numberOfColumns
//             const totalGapWidth = gap * Math.max(0, cols - 1);
//             return Math.max(50, (containerWidth - totalGapWidth) / cols);
//         }, [columnWidth, containerWidth, cols, gap]);

//         // ✅ FIX 6: Improved position calculation for masonry AND grid
//         const positions = useMemo<GridPosition[]>(() => {
//             if (!isReady) return [];

//             const pos: GridPosition[] = [];

//             if (layout === "masonry") {
//                 // Masonry: Fill shortest column
//                 const colHeights = Array(cols).fill(0);

//                 for (let i = 0; i < items.length; i++) {
//                     const itemHeight =
//                         typeof rowHeight === "function"
//                             ? rowHeight(i)
//                             : Number(rowHeight);

//                     // Find shortest column
//                     const minColIndex = colHeights.indexOf(
//                         Math.min(...colHeights)
//                     );

//                     const xPos = minColIndex * (colWidth + gap);
//                     const yPos = colHeights[minColIndex];

//                     pos.push({
//                         x: xPos,
//                         y: yPos,
//                         width: colWidth,
//                         height: itemHeight,
//                     });

//                     // Update column height
//                     colHeights[minColIndex] += itemHeight + gap;
//                 }
//             } else {
//                 // Grid: Standard rows and columns
//                 for (let i = 0; i < items.length; i++) {
//                     const row = Math.floor(i / cols);
//                     const col = i % cols;

//                     const itemHeight =
//                         typeof rowHeight === "function"
//                             ? rowHeight(i)
//                             : Number(rowHeight);

//                     pos.push({
//                         x: col * (colWidth + gap),
//                         y: row * (itemHeight + gap),
//                         width: colWidth,
//                         height: itemHeight,
//                     });
//                 }
//             }

//             return pos;
//         }, [items, cols, colWidth, gap, layout, rowHeight, isReady]);

//         // ✅ FIX 7: Better visible range calculation
//         const visibleRange = useMemo(() => {
//             if (!positions.length || !isReady) {
//                 return { start: 0, end: 0 };
//             }

//             const heightNum =
//                 typeof height === "string" ? parseInt(height) : Number(height);

//             let startIndex = 0;
//             for (let i = 0; i < positions.length; i++) {
//                 if (positions[i].y + positions[i].height >= scrollTop) {
//                     startIndex = i;
//                     break;
//                 }
//             }

//             let endIndex = positions.length - 1;
//             for (let i = positions.length - 1; i >= 0; i--) {
//                 if (positions[i].y <= scrollTop + heightNum) {
//                     endIndex = i;
//                     break;
//                 }
//             }

//             const start = Math.max(0, startIndex - overscan);
//             const end = Math.min(items.length - 1, endIndex + overscan);

//             return { start, end };
//         }, [positions, scrollTop, height, overscan, items.length, isReady]);

//         // ✅ FIX 8: Proper total height calculation
//         const totalHeight = useMemo(() => {
//             if (!positions.length) return 0;
//             const maxHeight = Math.max(...positions.map((p) => p.y + p.height));
//             return maxHeight || 0;
//         }, [positions]);

//         // ✅ FIX 9: Better scroll handler
//         const handleScroll = useCallback(
//             (e: React.UIEvent<HTMLDivElement>) => {
//                 const target = e.currentTarget;
//                 const top = target.scrollTop;
//                 const left = target.scrollLeft;

//                 setScrollTop(top);
//                 setIsScrolling(true);

//                 onScroll?.(top, left);

//                 // Clear previous timeout
//                 if (scrollTimeout.current) {
//                     clearTimeout(scrollTimeout.current);
//                 }

//                 // Set new timeout
//                 scrollTimeout.current = setTimeout(() => {
//                     setIsScrolling(false);
//                 }, 120);
//             },
//             [onScroll]
//         );

//         // ✅ FIX 10: Notify visible range change
//         useEffect(() => {
//             onVisibleRangeChange?.(visibleRange.start, visibleRange.end);
//         }, [visibleRange, onVisibleRangeChange]);

//         // ✅ FIX 11: Proper height/width conversion
//         const heightNum =
//             typeof height === "string" ? height : `${height}px`;
//         const widthNum = typeof width === "string" ? width : `${width}px`;

//         const containerStyleComputed: React.CSSProperties = {
//             height: heightNum,
//             width: widthNum,
//             overflowY: "auto",
//             overflowX: "hidden",
//             position: "relative",
//             ...containerStyle,
//         };

//         const innerStyleComputed: React.CSSProperties = {
//             position: "relative",
//             height: totalHeight || 1, // Ensure minimum height
//             width: Math.max(0, cols * colWidth + (cols - 1) * gap),
//             ...innerStyle,
//         };

//         // ✅ FIX 12: Complete render logic
//         if (!isReady) {
//             return (
//                 <div
//                     ref={containerRef}
//                     className={containerClassName}
//                     style={containerStyleComputed}
//                     onScroll={handleScroll}
//                 >
//                     <div className={innerClassName} style={innerStyleComputed} />
//                 </div>
//             );
//         }

//         // ✅ FIX 13: Render visible items properly
//         const visibleItems: VirtualItem[] = [];
//         for (let i = visibleRange.start; i <= visibleRange.end; i++) {
//             if (i >= 0 && i < items.length) {
//                 visibleItems.push({
//                     index: i,
//                     key: itemKey?.(i, items[i]) ?? i,
//                 });
//             }
//         }

//         return (
//             <div
//                 ref={containerRef}
//                 className={containerClassName}
//                 style={containerStyleComputed}
//                 onScroll={handleScroll}
//             >
//                 <div
//                     className={innerClassName}
//                     style={innerStyleComputed}
//                 >
//                     {visibleItems.map((vItem) => {
//                         const item = items[vItem.index];
//                         const pos = positions[vItem.index];

//                         if (!item || !pos) return null;

//                         const itemStyle: React.CSSProperties = {
//                             position: "absolute",
//                             top: `${pos.y}px`,
//                             left: `${pos.x}px`,
//                             width: `${pos.width}px`,
//                             height: `${pos.height}px`,
//                             boxSizing: "border-box",
//                         };

//                         return (
//                             <div
//                                 key={vItem.key}
//                                 style={itemStyle}
//                             >
//                                 {renderItem({
//                                     item,
//                                     index: vItem.index,
//                                     isScrolling,
//                                 })}
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         );
//     }
// );

// VirtualGrid.displayName = "VirtualGrid";

export default function MasonryPreview() {
    const [images] = useState<MasonryItem[]>(
        Array.from({ length: 200 }, (_, i) => ({
            id: i,
            url: `https://picsum.photos/500/${220 + (i % 6) * 60}?random=${i}`,
            title: `Beautiful Image ${i + 1}`,
            height: 220 + (i % 6) * 60,
        }))
    );
    console.log("Rendered MasonryPreview with images:", images);

    return (
        <div
            className="
                min-h-screen 
                bg-linear-to-br from-zinc-950 via-black to-zinc-900 
                text-white 
                flex flex-col gap-6 p-6
            "
        >
            <div
                className="
                    w-full 
                    rounded-2xl 
                    border border-zinc-800/60 
                    bg-zinc-950/40 
                    backdrop-blur-xl 
                    p-4 
                    shadow-2xl
                    overflow-hidden
                "
            >
                {/* <VirtualGrid
                    items={images}
                    layout="masonry"
                    columnCount={4}
                    height={800}
                    gap={16}
                    rowHeight={(i) => images[i].height}
                    renderItem={({ item, isScrolling }) => (
                        <img
                            src={item.url}
                            loading="lazy"
                            style={{
                                // width: '100%',        // ← Full width
                                height: '100%',       // ← Full height
                                objectFit: 'cover',   // ← Maintain aspect
                                display: 'block',      // ← No inline gap
                                opacity: isScrolling ? 0.7 : 1
                            }}
                        />
                    )}
                /> */}
                <VirtualGrid
                    items={images}
                    layout="masonry"
                    columnCount={5}
                    gap={16}
                    overscan={4}
                    rowHeight={(index) => images[index]?.height ?? 250}
                    renderItem={({ item, isScrolling, index }) => (
                        <div
                            className={`
                                relative 
                                w-full 
                                overflow-hidden 
                                rounded-2xl 
                                border border-zinc-800/70 
                                bg-zinc-900 
                                shadow-[0_10px_30px_rgba(0,0,0,0.45)]
                                
                                transition-all duration-200 ease-out
                                
                                ${isScrolling
                                    ? "opacity-80 scale-[0.985] blur-[0.2px]"
                                    : "opacity-100 scale-100 blur-0"
                                }
                            `}
                            style={{
                                transformOrigin: "center",
                                willChange: "transform, opacity",
                            }}
                        >
                            <img
                                src={item.url}
                                alt={item.title}
                                loading="lazy"
                                draggable={false}
                                className="
                                    block 
                                    w-full 
                                    h-full
                                    select-none 
                                    object-cover 
                                    transition-transform duration-300
                                    hover:scale-[1.03]
                                "
                            />

                            <div
                                style={{
                                    position: "absolute",
                                    top: 10,
                                    left: 10,
                                }}
                                className="
                                    text-[10px] 
                                    px-2 py-1 
                                    rounded-full 
                                    bg-black/60 
                                    border border-white/10 
                                    text-white/80
                                    backdrop-blur-md
                                "
                            >
                                #{index}
                            </div>

                            <div
                                className="
                                    absolute inset-x-0 bottom-0
                                    px-3 pb-3 pt-10
                                    bg-linear-to-t 
                                    from-black/90 
                                    via-black/40 
                                    to-transparent
                                "
                            >
                                <div className="flex flex-col gap-1">
                                    <div className="text-sm font-semibold text-white">
                                        {item.title}
                                    </div>

                                    <div className="text-[11px] text-zinc-400">
                                        height: {item.height}px
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                />
            </div>

            {/* Footer hint */}
            <div className="text-xs text-zinc-500 text-center">
                Virtualized Masonry Grid • Tailwind + Inline Styles • Smooth Rendering
            </div>
        </div>
    );
}