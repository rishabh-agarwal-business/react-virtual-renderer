import {
    useState,
    useEffect,
    useMemo,
    useCallback,
} from 'react';

import {
    VirtualGrid,
    VirtualList,
    useInfiniteScroll,
    useVirtualizedSearch,
} from '../index';

/* ---------------------------------------------------------- */
/* Ecommerce Catalog */
/* ---------------------------------------------------------- */

export function EcommerceCatalogExample() {
    const [products, setProducts] = useState(() =>
        Array.from({ length: 100 }, (_, i) => ({
            id: i,
            name: `Product ${i}`,
            price: Math.random() * 1000,
            image: `https://picsum.photos/300/300?random=${i}`,
            rating: (Math.random() * 5).toFixed(1),
        }))
    );

    const [isLoadingMore, setIsLoadingMore] =
        useState(false);

    const [hasMore, setHasMore] =
        useState(true);

    const loadMore = useCallback(async () => {
        if (!hasMore) return;

        setIsLoadingMore(true);

        await new Promise((r) =>
            setTimeout(r, 500)
        );

        setProducts((prev) => {
            const start = prev.length;

            const next = Array.from(
                { length: 50 },
                (_, i) => ({
                    id: start + i,
                    name: `Product ${start + i}`,
                    price: Math.random() * 1000,
                    image: `https://picsum.photos/300/300?random=${start + i}`,
                    rating: (
                        Math.random() * 5
                    ).toFixed(1),
                })
            );

            return [...prev, ...next];
        });

        setIsLoadingMore(false);

        setHasMore(
            (prev) =>
                products.length < 1000 && prev
        );
    }, [hasMore, products.length]);

    const { containerRef } =
        useInfiniteScroll({
            onLoadMore: loadMore,
            threshold: 1000,
            isLoading: isLoadingMore,
        });

    return (
        <div style={{ padding: 20 }}>
            <h2>E-Commerce Catalog</h2>

            <div
                ref={containerRef}
                style={{
                    height: 600,
                    overflow: 'auto',
                }}
            >
                <VirtualGrid
                    items={products}
                    height={600}
                    width={800}
                    columnCount={4}
                    gap={16}
                    renderItem={({ item }) => (
                        <div
                            style={{
                                border:
                                    '1px solid #ddd',
                                borderRadius: 8,
                                overflow:
                                    'hidden',
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                    width: '100%',
                                    height: 250,
                                    objectFit:
                                        'cover',
                                }}
                            />

                            <div
                                style={{
                                    padding: 12,
                                }}
                            >
                                <h4>
                                    {item.name}
                                </h4>

                                <div>
                                    $
                                    {item.price.toFixed(
                                        2
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                />
            </div>

            {isLoadingMore && (
                <p>Loading...</p>
            )}
        </div>
    );
}

/* ---------------------------------------------------------- */
/* Search Example */
/* ---------------------------------------------------------- */

export function SearchableListExample() {
    const [searchValue, setSearchValue] =
        useState('');

    const items = useMemo(
        () =>
            Array.from(
                { length: 1000 },
                (_, i) => ({
                    id: i,
                    title: `Item ${i}`,
                    description:
                        `Description ${i}`,
                })
            ),
        []
    );

    const {
        filteredItems,
        highlightMatch,
        resultCount,
    } = useVirtualizedSearch({
        items,
        searchValue,
        searchFields: [
            'title',
            'description',
        ],
    });

    return (
        <div style={{ padding: 20 }}>
            <input
                value={searchValue}
                onChange={(e) =>
                    setSearchValue(
                        e.target.value
                    )
                }
            />

            <p>
                Results: {resultCount}
            </p>

            <VirtualList
                items={filteredItems}
                height={500}
                estimatedItemSize={80}
                renderItem={({ item }) => (
                    <div
                        style={{
                            padding: 12,
                        }}
                    >
                        <h4>
                            {highlightMatch(
                                item.title
                            )}
                        </h4>

                        <p>
                            {highlightMatch(
                                item.description
                            )}
                        </p>
                    </div>
                )}
            />
        </div>
    );
}

/* ---------------------------------------------------------- */
/* Stock Ticker */
/* ---------------------------------------------------------- */

export function StockTickerExample() {
    const [stocks, setStocks] =
        useState(() =>
            Array.from(
                { length: 500 },
                (_, i) => ({
                    id: i,
                    symbol: `STOCK${i}`,
                    price:
                        Math.random() * 500,
                    change:
                        (Math.random() -
                            0.5) *
                        10,
                })
            )
        );

    useEffect(() => {
        const interval = setInterval(
            () => {
                setStocks((prev) =>
                    prev.map((s) => ({
                        ...s,
                        price:
                            s.price +
                            (Math.random() -
                                0.5) *
                            5,
                    }))
                );
            },
            1000
        );

        return () =>
            clearInterval(interval);
    }, []);

    return (
        <VirtualList
            items={stocks}
            height={500}
            estimatedItemSize={50}
            renderItem={({ item }) => (
                <div
                    style={{
                        display: 'flex',
                        padding: 12,
                    }}
                >
                    <div>
                        {item.symbol}
                    </div>

                    <div>
                        $
                        {item.price.toFixed(
                            2
                        )}
                    </div>
                </div>
            )}
        />
    );
}

/* ---------------------------------------------------------- */
/* Collapsible Rows */
/* ---------------------------------------------------------- */

export function CollapsibleRowsExample() {
    const [expandedIds, setExpandedIds] =
        useState < Set < number >> (
            new Set()
        );

    const rows = useMemo(
        () =>
            Array.from(
                { length: 200 },
                (_, i) => ({
                    id: i,
                    name:
                        `Order #${1000 + i}`,
                })
            ),
        []
    );

    const toggleExpand = (
        id: number
    ) => {
        setExpandedIds((prev) => {
            const next = new Set(prev);

            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }

            return next;
        });
    };

    const itemSize = useCallback(
        (index: number) =>
            expandedIds.has(rows[index].id)
                ? 180
                : 50,
        [expandedIds, rows]
    );

    return (
        <VirtualList
            items={rows}
            height={500}
            itemSize={itemSize}
            estimatedItemSize={50}
            renderItem={({ item }) => {
                const expanded =
                    expandedIds.has(
                        item.id
                    );

                return (
                    <div>
                        <button
                            onClick={() =>
                                toggleExpand(
                                    item.id
                                )
                            }
                        >
                            {expanded
                                ? 'Collapse'
                                : 'Expand'}
                        </button>

                        {item.name}

                        {expanded && (
                            <div>
                                Details...
                            </div>
                        )}
                    </div>
                );
            }}
        />
    );
}

/* ---------------------------------------------------------- */
/* Comment Thread */
/* ---------------------------------------------------------- */

export function CommentThreadExample() {
    const flattenedComments =
        useMemo(
            () =>
                Array.from(
                    { length: 300 },
                    (_, i) => ({
                        id: i,
                        author:
                            `User ${i}`,
                        text:
                            `Comment ${i}`,
                        level:
                            i % 3 === 0
                                ? 1
                                : 0,
                    })
                ),
            []
        );

    return (
        <VirtualList
            items={
                flattenedComments
            }
            height={500}
            estimatedItemSize={90}
            renderItem={({ item }) => (
                <div
                    style={{
                        paddingLeft:
                            item.level *
                            40,
                        padding: 12,
                    }}
                >
                    <strong>
                        {item.author}
                    </strong>

                    <p>{item.text}</p>
                </div>
            )}
        />
    );
}

/* ---------------------------------------------------------- */
/* Main Demo */
/* ---------------------------------------------------------- */

export default function AdvancedExamples() {
    return (
        <div>
            <EcommerceCatalogExample />
            <SearchableListExample />
            <StockTickerExample />
            <CollapsibleRowsExample />
            <CommentThreadExample />
        </div>
    );
}