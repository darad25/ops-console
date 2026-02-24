import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

export default function OrderDetailsPage() {
    const orderId = '#ORD-4820';

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <a href="/orders" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', whiteSpace: 'nowrap' }}>← Back</a>
                <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, flex: 1, minWidth: 'min(200px, 100%)' }}>{orderId}</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                    <Badge variant="warning" dot>Processing</Badge>
                    <Button variant="outline" size="sm">Update Status</Button>
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                gap: 'var(--space-6)'
            }}>
                {/* Order items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <Card title="Order Items">
                        {[
                            { name: 'Levi\'s 501 Jeans', sku: 'LEV-501-32', qty: 1, price: '$69.00', img: '👖' },
                            { name: 'Canvas Belt Brown', sku: 'BLT-CAN-M', qty: 1, price: '$25.50', img: '🪢' },
                        ].map(item => (
                            <div key={item.sku} style={{ display: 'flex', gap: 'var(--space-3)', padding: 'var(--space-4) 0', borderBottom: '1px solid var(--color-border-subtle)', alignItems: 'center' }}>
                                <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: '#ffffff', border: '1px solid var(--color-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', flexShrink: 0, boxShadow: 'var(--shadow-sm)' }}>
                                    {item.img}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>{item.name}</p>
                                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>SKU: {item.sku} · Qty: {item.qty}</p>
                                </div>
                                <p style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{item.price}</p>
                            </div>
                        ))}
                        <div style={{ paddingTop: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {[['Subtotal', '$94.50'], ['Shipping', 'Free'], ['Tax (8%)', '$7.56'], ['Total', '$102.06']].map(([l, v], i) => (
                                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: i === 3 ? 'var(--text-base)' : 'var(--text-sm)', fontWeight: i === 3 ? 700 : 400, color: i === 3 ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}>
                                    <span>{l}</span><span>{v}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card title="Order Timeline">
                        {[
                            { event: 'Order Placed', time: 'Feb 23, 2026 · 09:14 AM', done: true },
                            { event: 'Payment Confirmed', time: 'Feb 23, 2026 · 09:15 AM', done: true },
                            { event: 'Picking & Packing', time: 'Feb 23, 2026 · 10:30 AM', done: true },
                            { event: 'Shipped', time: 'Pending', done: false },
                            { event: 'Delivered', time: 'Pending', done: false },
                        ].map((ev, i) => (
                            <div key={i} style={{ display: 'flex', gap: 'var(--space-3)', paddingBottom: 'var(--space-4)' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: ev.done ? 'var(--color-success)' : 'var(--color-border-default)', border: ev.done ? 'none' : '2px solid var(--color-border-subtle)', flexShrink: 0 }} />
                                    {i < 4 && <div style={{ width: 1, flex: 1, background: 'var(--color-border-subtle)', minHeight: 20 }} />}
                                </div>
                                <div style={{ paddingBottom: 4 }}>
                                    <p style={{ fontSize: 'var(--text-sm)', fontWeight: ev.done ? 500 : 400, color: ev.done ? 'var(--color-text-primary)' : 'var(--color-text-muted)' }}>{ev.event}</p>
                                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{ev.time}</p>
                                </div>
                            </div>
                        ))}
                    </Card>
                </div>

                {/* Right column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <Card title="Customer">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff' }}>J</div>
                            <div>
                                <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>James Okafor</p>
                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>james@email.com</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--color-text-muted)' }}>Total orders</span><span>14</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--color-text-muted)' }}>Total spent</span><span>$1,240.00</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--color-text-muted)' }}>Member since</span><span>Jan 2025</span>
                            </div>
                        </div>
                    </Card>

                    <Card title="Shipping Address">
                        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                            James Onala<br />
                            42 Commerce Street<br />
                            Lagos, Ikeja 100271<br />
                            Nigeria
                        </div>
                    </Card>

                    <Card title="Actions">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                            <Button fullWidth size="sm" variant="primary">Mark as Shipped</Button>
                            <Button fullWidth size="sm" variant="secondary">Print Invoice</Button>
                            <Button fullWidth size="sm" variant="danger">Cancel Order</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
