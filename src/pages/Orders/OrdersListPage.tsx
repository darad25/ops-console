import { useState } from 'react';
import Icon from '../../components/ui/Icons';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const ORDERS = [
    { id: '#ORD-4821', customer: 'Sarah Mitchell', email: 'sarah@email.com', product: 'Air Max 90 Retro', amount: '$189.00', status: 'Delivered', date: 'Feb 23, 2026', items: 1 },
    { id: '#ORD-4820', customer: 'James Onala', email: 'james@email.com', product: 'Levi\'s 501 Jeans', amount: '$94.50', status: 'Processing', date: 'Feb 23, 2026', items: 2 },
    { id: '#ORD-4819', customer: 'Mia Fernandez', email: 'mia@email.com', product: 'Puffer Jacket XL', amount: '$212.00', status: 'Shipped', date: 'Feb 22, 2026', items: 1 },
    { id: '#ORD-4818', customer: 'Chen Wei', email: 'chen@email.com', product: 'Classic Polo Shirt', amount: '$56.00', status: 'Pending', date: 'Feb 22, 2026', items: 3 },
    { id: '#ORD-4817', customer: 'Amara Nwosu', email: 'amara@email.com', product: 'Canvas Tote Bag', amount: '$34.00', status: 'Cancelled', date: 'Feb 21, 2026', items: 1 },
    { id: '#ORD-4816', customer: 'Luca Bianchi', email: 'luca@email.com', product: 'Denim Jacket Dark', amount: '$145.00', status: 'Delivered', date: 'Feb 21, 2026', items: 1 },
    { id: '#ORD-4815', customer: 'Priya Sharma', email: 'priya@email.com', product: 'Silk Scarf Navy', amount: '$78.00', status: 'Shipped', date: 'Feb 20, 2026', items: 2 },
    { id: '#ORD-4814', customer: 'Noah Williams', email: 'noah@email.com', product: 'Cargo Pants Khaki', amount: '$92.00', status: 'Delivered', date: 'Feb 20, 2026', items: 1 },
];

const statusVariant: Record<string, 'success' | 'info' | 'warning' | 'danger' | 'default'> = {
    Delivered: 'success',
    Shipped: 'info',
    Processing: 'warning',
    Pending: 'default',
    Cancelled: 'danger',
};

const FILTERS = ['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

export default function OrdersListPage() {
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');

    const filtered = ORDERS.filter(o => {
        const matchFilter = filter === 'All' || o.status === filter;
        const q = search.toLowerCase();
        const matchSearch = !q || o.id.toLowerCase().includes(q) || o.customer.toLowerCase().includes(q);
        return matchFilter && matchSearch;
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, marginBottom: 4, letterSpacing: '-0.02em' }}>Orders</h1>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>Operational Registry • {ORDERS.length} total entries</p>
                </div>
                <Button variant="secondary" icon={<Icon name="download" size={14} />} iconPosition="left" size="sm">Export Data</Button>
            </div>

            {/* Filters + search */}
            <Card padding="var(--space-4)">
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', flex: 1 }}>
                        {FILTERS.map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                style={{
                                    padding: '6px 16px',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid',
                                    borderColor: filter === f ? '#37475a' : '#d5d9d9',
                                    background: filter === f ? '#37475a' : '#ffffff',
                                    color: filter === f ? '#ffffff' : '#0F1111',
                                    fontSize: '12px',
                                    fontWeight: filter === f ? 700 : 400,
                                    cursor: 'pointer',
                                    transition: 'all 0.1s',
                                    fontFamily: 'var(--font-sans)',
                                    boxShadow: '0 2px 5px 0 rgba(213,217,217,.5)',
                                }}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                    <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#888' }}>
                            <Icon name="search" size={14} />
                        </span>
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Filter registry…"
                            style={{
                                background: '#ffffff',
                                border: '1px solid #d5d9d9',
                                borderRadius: 'var(--radius-sm)',
                                padding: '8px 12px 8px 32px',
                                fontSize: 'var(--text-sm)',
                                color: '#0F1111',
                                fontFamily: 'var(--font-sans)',
                                outline: 'none',
                                width: 240,
                                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
                            }}
                        />
                    </div>
                </div>
            </Card>

            {/* Table */}
            <Card padding="0">
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ background: '#f6f6f6', borderBottom: '1px solid #d5d9d9' }}>
                                {['Order ID', 'Customer', 'Product', 'Items', 'Amount', 'Status', 'Date', ''].map(h => (
                                    <th key={h} style={{ padding: '12px 20px', textAlign: 'left', fontSize: '11px', color: '#565959', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(o => (
                                <tr key={o.id} style={{ borderBottom: '1px solid #e7e7e7', transition: 'background 0.1s' }}
                                    onMouseEnter={e => (e.currentTarget.style.background = '#f9f9f9')}
                                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                                >
                                    <td style={{ padding: '14px 20px', fontSize: 'var(--text-sm)', color: '#007185', fontWeight: 600, whiteSpace: 'nowrap' }}>{o.id}</td>
                                    <td style={{ padding: '14px 20px' }}>
                                        <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: '#0F1111' }}>{o.customer}</div>
                                        <div style={{ fontSize: '11px', color: '#565959' }}>{o.email}</div>
                                    </td>
                                    <td style={{ padding: '14px 20px', fontSize: 'var(--text-sm)', color: '#565959', maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{o.product}</td>
                                    <td style={{ padding: '14px 20px', fontSize: 'var(--text-sm)', color: '#565959' }}>{o.items}</td>
                                    <td style={{ padding: '14px 20px', fontSize: 'var(--text-sm)', fontWeight: 700, color: '#0F1111' }}>{o.amount}</td>
                                    <td style={{ padding: '14px 20px', whiteSpace: 'nowrap' }}><Badge variant={statusVariant[o.status]}>{o.status}</Badge></td>
                                    <td style={{ padding: '14px 20px', fontSize: '11px', color: '#565959', whiteSpace: 'nowrap' }}>{o.date}</td>
                                    <td style={{ padding: '14px 20px' }}>
                                        <a href={`/orders/${o.id.replace('#', '')}`} style={{ fontSize: '12px', color: '#007185', fontWeight: 600, textDecoration: 'none' }}>Review →</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {filtered.length === 0 && (
                        <div style={{ padding: 'var(--space-12)', textAlign: 'center', color: '#565959', fontSize: 'var(--text-sm)' }}>
                            No entries matches the specified criteria.
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
}
