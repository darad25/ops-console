import Icon, { type IconName } from '../../components/ui/Icons';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';

/* ── Mock data ───────────────────────────────────── */
const STATS: { label: string; value: string; delta: string; positive: boolean; icon: IconName; color: string }[] = [
    { label: 'Total Revenue', value: '$84,320', delta: '+12.4%', positive: true, icon: 'dollar', color: 'var(--color-success)' },
    { label: 'Total Orders', value: '2,841', delta: '+8.1%', positive: true, icon: 'package', color: 'var(--color-info)' },
    { label: 'Active Customers', value: '12,450', delta: '+5.3%', positive: true, icon: 'customers', color: 'var(--color-brand-secondary)' },
    { label: 'Returns Rate', value: '3.2%', delta: '-0.8%', positive: true, icon: 'arrow-down', color: 'var(--color-warning)' },
];

const RECENT_ORDERS = [
    { id: '#ORD-4821', customer: 'Sarah Mitchell', product: 'Air Max 90 Retro', amount: '$189.00', status: 'Delivered', time: '2m ago' },
    { id: '#ORD-4820', customer: 'James Onala', product: 'Levi Jeans', amount: '$94.50', status: 'Processing', time: '18m ago' },
    { id: '#ORD-4819', customer: 'Mia Fernandez', product: 'Puffer Jacket XL', amount: '$212.00', status: 'Shipped', time: '1h ago' },
    { id: '#ORD-4818', customer: 'Chen Wei', product: 'Classic Polo Shirt', amount: '$56.00', status: 'Pending', time: '2h ago' },
    { id: '#ORD-4817', customer: 'Amara Nwosu', product: 'Canvas Tote Bag', amount: '$34.00', status: 'Cancelled', time: '3h ago' },
];

const TOP_PRODUCTS = [
    { name: 'Air Max 90 Retro', sales: 482, revenue: '$91,280', stock: 24 },
    { name: 'Levi\'s 501 Jeans', sales: 391, revenue: '$36,960', stock: 68 },
    { name: 'Puffer Jacket XL', sales: 274, revenue: '$58,110', stock: 12 },
    { name: 'Classic Polo Shirt', sales: 218, revenue: '$12,208', stock: 140 },
];

const statusVariant: Record<string, 'success' | 'info' | 'warning' | 'danger' | 'default'> = {
    Delivered: 'success',
    Shipped: 'info',
    Processing: 'warning',
    Pending: 'default',
    Cancelled: 'danger',
};

/* ── Stat card ───────────────────────────────────── */
function StatCard({ label, value, delta, positive, icon, color }: typeof STATS[0]) {
    return (
        <Card style={{ cursor: 'default' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginBottom: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</p>
                    <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-text-primary)', letterSpacing: '-0.01em', lineHeight: 1 }}>{value}</p>
                    <p style={{ marginTop: 8, fontSize: 'var(--text-xs)', color: positive ? 'var(--color-success)' : 'var(--color-danger)', fontWeight: 600 }}>
                        {delta} <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>vs last month</span>
                    </p>
                </div>
                <div style={{
                    width: 40, height: 40, borderRadius: 'var(--radius-sm)',
                    background: 'var(--color-bg-base)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    color: color,
                }}>
                    <Icon name={icon} size={20} />
                </div>
            </div>
        </Card>
    );
}

/* ── Dashboard ───────────────────────────────────── */
export default function DashboardPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>

            {/* Page header */}
            <div>
                <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, marginBottom: 4, letterSpacing: '-0.02em' }}>
                    Operational Dashboard
                </h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
                    Admin Overview • {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
            </div>

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-4)' }}>
                {STATS.map(s => <StatCard key={s.label} {...s} />)}
            </div>

            {/* Orders + Top Products */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'var(--space-6)'
            }}>

                {/* Recent orders */}
                <Card title="Recent Orders" subtitle="System Status"
                    action={
                        <a href="/orders" style={{ fontSize: 'var(--text-xs)', color: '#007185', fontWeight: 600, textDecoration: 'none' }}>
                            View all →
                        </a>
                    }
                >
                    <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                        <div style={{ minWidth: 600 }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                                        {['Order ID', 'Customer', 'Product', 'Amount', 'Status', 'Time'].map(h => (
                                            <th key={h} style={{ padding: '0 8px 10px', textAlign: 'left', fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {RECENT_ORDERS.map(o => (
                                        <tr key={o.id} style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                                            <td style={{ padding: '12px 8px', fontSize: 'var(--text-sm)', color: '#007185', fontWeight: 600, whiteSpace: 'nowrap' }}>{o.id}</td>
                                            <td style={{ padding: '12px 8px', fontSize: 'var(--text-sm)', whiteSpace: 'nowrap' }}>{o.customer}</td>
                                            <td style={{ padding: '12px 8px', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{o.product}</td>
                                            <td style={{ padding: '12px 8px', fontSize: 'var(--text-sm)', fontWeight: 700, whiteSpace: 'nowrap' }}>{o.amount}</td>
                                            <td style={{ padding: '12px 8px', whiteSpace: 'nowrap' }}><Badge variant={statusVariant[o.status]} dot>{o.status}</Badge></td>
                                            <td style={{ padding: '12px 8px', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>{o.time}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Card>

                {/* Top products */}
                <Card title="Inventory Insight" subtitle="Revenue contribution">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        {TOP_PRODUCTS.map((p, i) => (
                            <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                                <span style={{
                                    width: 24, height: 24, borderRadius: '2px',
                                    background: i === 0 ? 'var(--color-brand-primary)' : 'var(--color-bg-base)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '11px', fontWeight: 800, color: i === 0 ? '#fff' : 'var(--color-text-muted)',
                                    flexShrink: 0,
                                }}>
                                    {i + 1}
                                </span>
                                <div style={{ flex: 1, overflow: 'hidden' }}>
                                    <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginBottom: 2 }}>{p.name}</p>
                                    <p style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>{p.sales} sold · {p.stock} units</p>
                                </div>
                                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-text-primary)', flexShrink: 0 }}>{p.revenue}</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}
