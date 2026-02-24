import { useState } from 'react';
import Icon from '../../components/ui/Icons';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const PRODUCTS = [
    { id: 'P001', name: 'Air Max 90 Retro', sku: 'AM-90-RET', category: 'Footwear', price: '$189.00', stock: 24, status: 'Low Stock' },
    { id: 'P002', name: 'Levi\'s 501 Jeans', sku: 'LEV-501-32', category: 'Bottoms', price: '$94.50', stock: 68, status: 'In Stock' },
    { id: 'P003', name: 'Puffer Jacket XL', sku: 'PUF-JKT-XL', category: 'Outerwear', price: '$212.00', stock: 12, status: 'Low Stock' },
    { id: 'P004', name: 'Classic Polo Shirt', sku: 'PLO-CLS-M', category: 'Tops', price: '$56.00', stock: 140, status: 'In Stock' },
    { id: 'P005', name: 'Canvas Tote Bag', sku: 'TOT-CAN-N', category: 'Accessories', price: '$34.00', stock: 0, status: 'Out of Stock' },
    { id: 'P006', name: 'Denim Jacket Dark', sku: 'DEN-JKT-DK', category: 'Outerwear', price: '$145.00', stock: 35, status: 'In Stock' },
    { id: 'P007', name: 'Silk Scarf Navy', sku: 'SLK-SCF-NV', category: 'Accessories', price: '$78.00', stock: 52, status: 'In Stock' },
    { id: 'P008', name: 'Cargo Pants Khaki', sku: 'CRG-PNT-KH', category: 'Bottoms', price: '$92.00', stock: 4, status: 'Low Stock' },
];

const stockVariant = (s: string): 'success' | 'warning' | 'danger' =>
    s === 'In Stock' ? 'success' : s === 'Low Stock' ? 'warning' : 'danger';

export default function InventoryPage() {
    const [search, setSearch] = useState('');
    const filtered = PRODUCTS.filter(p => !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase()));

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                <div>
                    <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, marginBottom: 4, letterSpacing: '-0.02em' }}>Inventory</h1>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>Warehouse Oversight • {PRODUCTS.length} total SKUs</p>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <Button variant="secondary" size="sm" icon={<Icon name="download" size={14} />} iconPosition="left">Export</Button>
                    <Button size="sm" icon={<Icon name="plus" size={14} />} iconPosition="left">Add Product</Button>
                </div>
            </div>

            {/* Summary cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 'var(--space-4)' }}>
                {[
                    { label: 'Total Products', value: PRODUCTS.length, color: 'var(--color-brand-primary)' },
                    { label: 'In Stock', value: PRODUCTS.filter(p => p.status === 'In Stock').length, color: 'var(--color-success)' },
                    { label: 'Low Stock', value: PRODUCTS.filter(p => p.status === 'Low Stock').length, color: 'var(--color-warning)' },
                    { label: 'Out of Stock', value: PRODUCTS.filter(p => p.status === 'Out of Stock').length, color: 'var(--color-danger)' },
                ].map(item => (
                    <Card key={item.label} padding="var(--space-4)">
                        <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700 }}>{item.label}</p>
                        <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: item.color }}>{item.value}</p>
                    </Card>
                ))}
            </div>

            {/* Table */}
            <Card padding="0">
                <div style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--color-border-subtle)', background: '#fbfbfb' }}>
                    <div style={{ position: 'relative', maxWidth: 320, width: '100%' }}>
                        <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#888' }}>
                            <Icon name="search" size={14} />
                        </span>
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Filter by name or SKU…"
                            style={{ background: '#ffffff', border: '1px solid #d5d9d9', borderRadius: 'var(--radius-sm)', padding: '8px 12px 8px 32px', fontSize: 'var(--text-sm)', color: '#0F1111', fontFamily: 'var(--font-sans)', outline: 'none', width: '100%', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)' }}
                        />
                    </div>
                </div>
                <div className="scroll-container" style={{ position: 'relative' }}>
                    <div style={{ minWidth: 1100, overflow: 'hidden' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: '#f6f6f6', borderBottom: '1px solid #d5d9d9' }}>
                                    {['Product Details', 'SKU', 'Category', 'Unit Price', 'Inventory', 'Status', ''].map((h) => (
                                        <th key={h} style={{ padding: '12px 20px', textAlign: 'left', fontSize: '11px', color: '#565959', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map(p => (
                                    <tr key={p.id}
                                        style={{ borderBottom: '1px solid #e7e7e7', transition: 'background 0.1s' }}
                                        onMouseEnter={e => (e.currentTarget.style.background = '#f9f9f9')}
                                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                                    >
                                        <td style={{ padding: '14px 20px' }}>
                                            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: '#0F1111' }}>{p.name}</div>
                                            <div style={{ fontSize: '11px', color: '#565959' }}>System ID: {p.id}</div>
                                        </td>
                                        <td style={{ padding: '14px 20px', fontSize: 'var(--text-sm)', color: '#565959', fontFamily: 'var(--font-mono)' }}>{p.sku}</td>
                                        <td style={{ padding: '14px 20px', fontSize: 'var(--text-sm)', color: '#565959' }}>{p.category}</td>
                                        <td style={{ padding: '14px 20px', fontSize: 'var(--text-sm)', fontWeight: 700, color: '#0F1111' }}>{p.price}</td>
                                        <td style={{ padding: '14px 20px', fontSize: 'var(--text-sm)', color: p.stock === 0 ? 'var(--color-danger)' : p.stock < 20 ? 'var(--color-warning)' : '#0F1111', fontWeight: 700 }}>
                                            {p.stock} <span style={{ fontSize: '11px', color: '#565959', fontWeight: 400 }}>units</span>
                                        </td>
                                        <td style={{ padding: '14px 20px', whiteSpace: 'nowrap' }}><Badge variant={stockVariant(p.status)}>{p.status}</Badge></td>
                                        <td style={{ padding: '14px 20px' }}>
                                            <button style={{ background: 'none', border: 'none', color: '#007185', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>Manage</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="scroll-hint-mobile">
                        <Icon name="chevron-right" size={14} /> Swipe for Info
                    </div>
                </div>
            </Card>
        </div>
    );
}
