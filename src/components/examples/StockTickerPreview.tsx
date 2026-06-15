import { useEffect, useMemo, useState } from "react";
import { VirtualList } from "react-virtual-renderer";

export function StockTickerPreview() {
    const [stocks, setStocks] = useState(() =>
        Array.from({ length: 500 }, (_, i) => ({
            id: i,
            symbol: `STOCK${i}`,
            price: Math.random() * 500,
            change: (Math.random() - 0.5) * 10,
        }))
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setStocks((prev) =>
                prev.map((s) => {
                    const delta = (Math.random() - 0.5) * 5;

                    return {
                        ...s,
                        price: Math.max(0, s.price + delta),
                        change: delta,
                    };
                })
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const gainers = useMemo(
        () => stocks.filter((s) => s.change > 0).length,
        [stocks]
    );

    const losers = useMemo(
        () => stocks.filter((s) => s.change < 0).length,
        [stocks]
    );

    return (
        <div className="flex flex-col gap-4 h-full w-full">
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3">
                {[
                    {
                        label: "Total Stocks",
                        value: stocks.length.toLocaleString(),
                        color: "#3B82F6",
                    },
                    {
                        label: "Gainers",
                        value: gainers,
                        color: "#22C55E",
                    },
                    {
                        label: "Losers",
                        value: losers,
                        color: "#EF4444",
                    },
                ].map((item) => (
                    <div
                        key={item.label}
                        className="rounded-xl p-4"
                        style={{
                            background: "#111113",
                            border: "1px solid #27272A",
                        }}
                    >
                        <div
                            style={{
                                color: item.color,
                                fontSize: 18,
                                fontWeight: 700,
                                fontFamily: "JetBrains Mono",
                            }}
                        >
                            {item.value}
                        </div>
                        <div className="text-xs text-zinc-500 mt-1">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Table Header */}
            <div
                className="rounded-t-xl overflow-hidden"
                style={{
                    background: "#18181B",
                    border: "1px solid #27272A",
                    borderBottom: "none",
                }}
            >
                <div
                    className="flex items-center h-12 text-xs uppercase tracking-wider"
                    style={{
                        color: "#A1A1AA",
                        fontWeight: 600,
                    }}
                >
                    <div className="w-40 px-4">Symbol</div>
                    <div className="w-40 px-4">Price</div>
                    <div className="w-40 px-4">Change</div>
                    <div className="flex-1 px-4">Status</div>
                </div>
            </div>

            {/* Virtual List */}
            <div
                className="rounded-b-xl overflow-hidden"
                style={{
                    border: "1px solid #27272A",
                    background: "#111113",
                }}
            >
                <VirtualList
                    items={stocks}
                    height={500}
                    estimatedItemSize={50}
                    getItemSize={() => 56}
                    overscan={5}
                    renderItem={({ item }) => {
                        const isUp = item.change > 0;
                        const isDown = item.change < 0;

                        return (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "100%",
                                    padding: "0 4px",
                                    borderBottom:
                                        "1px solid rgba(255,255,255,0.04)",
                                    color: "#E4E4E7",
                                    fontFamily: "JetBrains Mono",
                                }}
                            >
                                {/* Symbol */}
                                <div className="w-40 px-3 font-medium">
                                    {item.symbol}
                                </div>

                                {/* Price */}
                                <div className="w-40 px-3 text-zinc-300">
                                    ${item.price.toFixed(2)}
                                </div>

                                {/* Change */}
                                <div className="w-40 px-3">
                                    <span
                                        className="px-2 py-1 rounded-md text-xs"
                                        style={{
                                            background: isUp
                                                ? "rgba(34,197,94,0.15)"
                                                : isDown
                                                    ? "rgba(239,68,68,0.15)"
                                                    : "rgba(148,163,184,0.15)",
                                            color: isUp
                                                ? "#22C55E"
                                                : isDown
                                                    ? "#EF4444"
                                                    : "#94A3B8",
                                        }}
                                    >
                                        {item.change.toFixed(2)}
                                    </span>
                                </div>

                                {/* Status */}
                                <div className="flex-1 px-3 text-sm text-zinc-500">
                                    {isUp
                                        ? "Rising"
                                        : isDown
                                            ? "Falling"
                                            : "Stable"}
                                </div>
                            </div>
                        );
                    }}
                />
            </div>

            {/* Footer */}
            <p
                className="text-center text-xs text-zinc-600"
                style={{ fontFamily: "JetBrains Mono" }}
            >
                Live stock ticker • Virtualized rendering • Updates every 1s
            </p>
        </div>
    );
}