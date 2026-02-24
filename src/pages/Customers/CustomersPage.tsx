import { useState } from 'react';
import Icon from '../../components/ui/Icons';
import Badge from '../../components/ui/Badge';
import Card from '../../components/ui/Card';

const CUSTOMERS = [
    { id: 'C001', name: 'Sarah Mitchell', email: 'sarah@email.com', location: 'New York, US', orders: 8, spent: '$1,420.00', status: 'Active', joined: 'Jan 2025' },
    { id: 'C002', name: 'James Onala', email: 'james@email.com', location: 'Lagos, NG', orders: 14, spent: '$2,840.50', status: 'Active', joined: 'Mar 2024' },
    { id: 'C003', name: 'Mia Fernandez', email: 'mia@email.com', location: 'Madrid, ES', orders: 5, spent: '$780.00', status: 'Active', joined: 'Jun 2025' },
    { id: 'C004', name: 'Chen Wei', email: 'chen@email.com', location: 'Shanghai, CN', orders: 22, spent: '$4,120.00', status: 'VIP', joined: 'Nov 2023' },
    { id: 'C005', name: 'Amara Nwosu', email: 'amara@email.com', location: 'Accra, GH', orders: 3, spent: '$295.00', status: 'Active', joined: 'Feb 2026' },
    { id: 'C006', name: 'Luca Bianchi', email: 'luca@email.com', location: 'Milan, IT', orders: 0, spent: '$0.00', status: 'Inactive', joined: 'Dec 2025' },
    { id: 'C007', name: 'Priya Sharma', email: 'priya@email.com', location: 'Mumbai, IN', orders: 18, spent: '$3,600.00', status: 'VIP', joined: 'Aug 2024' },
    { id: 'C008', name: 'Noah Williams', email: 'noah@email.com', location: 'London, UK', orders: 7, spent: '$980.00', status: 'Active', joined: 'Apr 2025' },
];

const statusV: Record<string, 'success' | 'info' | 'default'> = {
    Active: 'success', VIP: 'info', Inactive: 'default',
};

export default function CustomersPage() {
    const [search, setSearch] = useState('');
    const filtered = CUSTOMERS.filter(c => !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()));

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, marginBottom: 4, letterSpacing: '-0.02em' }}>Customers</h1>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>Core Consumer Database • {CUSTOMERS.length} registered profiles</p>
                </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 'var(--space-4)' }}>
                {[
                    { label: 'Total Base', value: CUSTOMERS.length, color: 'var(--color-brand-primary)' },
                    { label: 'Active Status', value: CUSTOMERS.filter(c => c.status === 'Active').length, color: 'var(--color-success)' },
                    { label: 'VIP Priority', value: CUSTOMERS.filter(c => c.status === 'VIP').length, color: '#007185' },
                    { label: 'Inactive', value: CUSTOMERS.filter(c => c.status === 'Inactive').length, color: 'var(--color-text-muted)' },
                ].map(i => (
                    <Card key={i.label} padding="var(--space-4)">
                        <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700 }}>{i.label}</p>
                        <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: i.color }}>{i.value}</p>
                    </Card>
                ))}
            </div>

            {/* Table */}
            <Card padding="0">
                <div style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--color-border-subtle)', background: '#fbfbfb' }}>
                    <div style={{ position: 'relative', width: 320 }}>
                        <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#888' }}>
                            <Icon name="search" size={14} />
                        </span>
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Find profile by name or email…"
                            style={{ background: '#ffffff', border: '1px solid #d5d9d9', borderRadius: 'var(--radius-sm)', padding: '8px 12px 8px 32px', fontSize: 'var(--text-sm)', color: '#0F1111', fontFamily: 'var(--font-sans)', outline: 'none', width: '100%', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)' }}
                        />
                    </div>
                </div>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ background: '#f6f6f6', borderBottom: '1px solid #d5d9d9' }}>
                                {['Customer Profile', 'Primary Location', 'Total Orders', 'Lifetime Spend', 'Status', 'Registration'].map(h => (
                                    <th key={h} style={{ padding: '12px 20px', textAlign: 'left', fontSize: '11px', color: '#565959', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(c => (
                                <tr key={c.id}
                                    style={{ borderBottom: '1px solid #e7e7e7', transition: 'background 0.1s' }}
                                    onMouseEnter={e => (e.currentTarget.style.background = '#f9f9f9')}
                                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                                >
                                    <td style={{ padding: '14px 20px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                                            <div style={{ width: 32, height: 32, borderRadius: '2px', background: '#e7e7e7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#333', fontSize: '12px', flexShrink: 0, border: '1px solid #d5d9d9' }}>
                                                {c.name[0]}
                                            </div>
                                            <div>
                                                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: '#007185' }}>{c.name}</div>
                                                <div style={{ fontSize: '11px', color: '#565959' }}>{c.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: '14px 20px', fontSize: 'var(--text-sm)', color: '#565959' }}>{c.location}</td>
                                    <td style={{ padding: '14px 20px', fontSize: 'var(--text-sm)', color: '#565959', textAlign: 'right', fontWeight: 600 }}>{c.orders}</td>
                                    <td style={{ padding: '14px 20px', fontSize: 'var(--text-sm)', fontWeight: 700, color: '#0F1111' }}>{c.spent}</td>
                                    <td style={{ padding: '14px 20px' }}><Badge variant={statusV[c.status]}>{c.status}</Badge></td>
                                    <td style={{ padding: '14px 20px', fontSize: '11px', color: '#565959' }}>{c.joined}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
