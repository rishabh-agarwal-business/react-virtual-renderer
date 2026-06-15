import { useRef, useState } from 'react';
import {
    VirtualList,
    VirtualGrid,
    useVirtualList,
} from '../index';
import { CollapsibleRowsExample, CommentThreadExample, EcommerceCatalogExample, SearchableListExample, StockTickerExample } from './AdvancedExamples';

/* ---------------------------
   1. CHAT EXAMPLE
---------------------------- */
export function ChatExample() {
    const [messages] = useState(
        Array.from({ length: 1000 }, (_, i) => ({
            id: i,
            author: i % 2 === 0 ? 'Alice' : 'Bob',
            text: `Message ${i}: ${Math.random().toString(36).substring(7)}`,
            timestamp: new Date(Date.now() - i * 60000),
        }))
    );

    const containerRef = useRef < HTMLDivElement > (null);

    return (
        <div style={{ padding: 20 }}>
            <h2>Chat Interface</h2>

            <VirtualList
                ref={containerRef}
                items={messages}
                height={400}
                width={800}
                scrollDirection="reverse"
                estimatedItemSize={60}
                renderItem={({ item }) => (
                    <div style={{ padding: 12, borderBottom: '1px solid #eee' }}>
                        <strong>{item.author}:</strong> {item.text}
                    </div>
                )}
            />
        </div>
    );
}

/* ---------------------------
   2. TABLE EXAMPLE
---------------------------- */
export function DataTableExample() {
    const [rows] = useState(
        Array.from({ length: 500 }, (_, i) => ({
            id: i,
            name: `User ${i}`,
            email: `user${i}@example.com`,
            status: ['Active', 'Inactive', 'Pending'][i % 3],
            description: i % 5 === 0
                ? 'Long description with extra content for variable height'
                : 'Short description',
        }))
    );

    const getRowHeight = (index: number) =>
        rows[index].description.length > 50 ? 100 : 60;

    return (
        <div style={{ padding: 20 }}>
            <h2>Data Table</h2>

            <VirtualList
                items={rows}
                height={400}
                width={800}
                getItemSize={getRowHeight}
                estimatedItemSize={60}
                renderItem={({ item }) => (
                    <div
                        style={{
                            display: 'flex',
                            padding: 10,
                            borderBottom: '1px solid #ddd',
                        }}
                    >
                        <div style={{ width: 180 }}>{item.name}</div>
                        <div style={{ width: 240 }}>{item.email}</div>
                        <div style={{ width: 120 }}>{item.status}</div>
                        <div style={{ flex: 1 }}>{item.description}</div>
                    </div>
                )}
            />
        </div>
    );
}

/* ---------------------------
   3. MASONRY GRID
---------------------------- */
export function MasonryGridExample() {
    const [images] = useState(
        Array.from({ length: 200 }, (_, i) => ({
            id: i,
            url: `https://picsum.photos/300/${200 + (i % 4) * 50}?random=${i}`,
            title: `Image ${i}`,
            height: 200 + (i % 4) * 50,
        }))
    );

    return (
        <div style={{ padding: 20 }}>
            <h2>Masonry Grid</h2>

            <VirtualGrid
                items={images}
                height={600}
                width={800}
                columnCount={3}
                layout="masonry"
                rowHeight={(i) => images[i].height}
                gap={16}
                renderItem={({ item }) => (
                    <div>
                        <img
                            src={item.url}
                            style={{ width: '100%' }}
                        />
                        <div>{item.title}</div>
                    </div>
                )}
            />
        </div>
    );
}

/* ---------------------------
   4. GRID EXAMPLE
---------------------------- */
export function GridLayoutExample() {
    const [items] = useState(
        Array.from({ length: 300 }, (_, i) => ({
            id: i,
            title: `Product ${i}`,
            price: Math.floor(Math.random() * 1000),
        }))
    );

    return (
        <VirtualGrid
            items={items}
            height={600}
            width={1000}
            columnCount={5}
            rowHeight={280}
            gap={16}
            renderItem={({ item }) => (
                <div style={{ padding: 10, border: '1px solid #ddd' }}>
                    {item.title}
                    <div>${item.price}</div>
                </div>
            )}
        />
    );
}

/* ---------------------------
   5. HOOK EXAMPLE (FIXED REF TYPE)
---------------------------- */
export function HookExample() {
    const [items] = useState(
        Array.from({ length: 100 }, (_, i) => ({
            id: i,
            value: Math.random() * 100,
        }))
    );

    const {
        virtualItems,
        scrollToItem,
        containerRef,
        getItemStyle,
    } = useVirtualList({
        items,
        containerHeight: 400,
        estimatedItemSize: 40,
    });

    return (
        <div style={{ padding: 20 }}>
            <h2>Hook Example</h2>

            <button onClick={() => scrollToItem(0)}>Top</button>

            <div
                ref={containerRef}   // ✅ FIXED TYPE ISSUE HERE
                style={{
                    height: 400,
                    overflow: 'auto',
                    position: 'relative',
                }}
            >
                {virtualItems.map((v) => (
                    <div
                        key={v.index}
                        style={{
                            ...getItemStyle(v.index, v.size),
                            padding: 10,
                        }}
                    >
                        Item {v.index}: {items[v.index].value.toFixed(2)}
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ---------------------------
   6. MAIN DEMO
---------------------------- */
export function VirtualizeDemo() {
    const [active, setActive] = useState('chat');

    return (
        <div style={{ padding: 20 }}>
            <h1>Virtualization Demo</h1>

            {[
                { key: 'ecommerce', label: 'E-Commerce' },
                { key: 'search', label: 'Search' },
                { key: 'ticker', label: 'Stock Ticker' },
                { key: 'collapsible', label: 'Collapsible' },
                { key: 'comments', label: 'Comments' },
                { key: 'chat', label: 'Chat' },
                { key: 'table', label: 'Data Table' },
                { key: 'masonry', label: 'Masonry' },
                { key: 'grid', label: 'Grid' },
                { key: 'hook', label: 'Hooks' },
            ].map((key) => (
                <button
                    key={key.key}
                    onClick={() => setActive(key.key)}
                    style={{ margin: 4 }}
                >
                    {key.label}
                </button>
            ))}

            {active === 'chat' && <ChatExample />}
            {active === 'table' && <DataTableExample />}
            {active === 'masonry' && <MasonryGridExample />}
            {active === 'grid' && <GridLayoutExample />}
            {active === 'hook' && <HookExample />}
            {active === 'ecommerce' && <EcommerceCatalogExample />}
            {active === 'search' && <SearchableListExample />}
            {active === 'ticker' && <StockTickerExample />}
            {active === 'collapsible' && <CollapsibleRowsExample />}
            {active === 'comments' && <CommentThreadExample />}
        </div>
    );
}

export default VirtualizeDemo;