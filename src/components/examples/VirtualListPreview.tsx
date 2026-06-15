import { useMemo } from "react";
import { VirtualList } from "react-virtual-renderer";

export function VirtualListPreview() {
    const rows = useMemo(
        () =>
            Array.from({ length: 50000 }, (_, i) => ({
                id: i,
                name: `User ${i}`,
                email: `user${i}@example.com`,
                status: ["Active", "Inactive", "Pending"][i % 3],
                description:
                    i % 5 === 0
                        ? "This user has a longer profile description to demonstrate dynamic row sizing."
                        : "Standard profile description.",
            })),
        []
    );

    const getRowHeight = (index: number) =>
        rows[index]?.description?.length > 50 ? 80 : 56;

    return (
        <div className="flex flex-col gap-4 h-full w-full">
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3">
                {[
                    {
                        label: "Total Rows",
                        value: rows.length.toLocaleString(),
                        color: "#3B82F6",
                    },
                    {
                        label: "Virtualized",
                        value: "Enabled",
                        color: "#22C55E",
                    },
                    {
                        label: "Dynamic Height",
                        value: "Yes",
                        color: "#8B5CF6",
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
                    <div className="w-45 px-4">Name</div>
                    <div className="w-65 px-4">Email</div>
                    <div className="w-35 px-4">Status</div>
                    <div className="flex-1 px-4">Description</div>
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
                    items={rows}
                    height={500}
                    width={600}
                    getItemSize={getRowHeight}
                    estimatedItemSize={60}
                    renderItem={({ item }) => (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                height: "100%",
                                color: "#E4E4E7",
                                padding: "0 4px",
                                borderBottom: "1px solid rgba(255,255,255,0.04)",
                            }}
                        >
                            <div className="w-45 px-3">
                                <div className="font-medium">
                                    {item.name}
                                </div>
                            </div>

                            <div className="w-65 px-3 text-zinc-400 text-sm">
                                {item.email}
                            </div>

                            <div className="w-35 px-3">
                                <span
                                    className="px-2 py-1 rounded-md text-xs"
                                    style={{
                                        background:
                                            item.status === "Active"
                                                ? "rgba(34,197,94,0.15)"
                                                : item.status === "Inactive"
                                                    ? "rgba(239,68,68,0.15)"
                                                    : "rgba(234,179,8,0.15)",
                                    }}
                                >
                                    {item.status}
                                </span>
                            </div>

                            <div className="flex-1 px-3 text-sm text-zinc-400">
                                {item.description}
                            </div>
                        </div>
                    )}
                />
            </div>

            <p
                className="text-center text-xs text-zinc-600"
                style={{
                    fontFamily: "JetBrains Mono",
                }}
            >
                Scroll to see virtualization rendering only visible rows
            </p>
        </div>
    );
}