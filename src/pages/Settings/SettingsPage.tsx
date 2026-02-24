import { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Icon from '../../components/ui/Icons';

export default function SettingsPage() {
    const [storeName, setStoreName] = useState('My E-Commerce Store');
    const [email, setEmail] = useState('admin@store.com');
    const [currency, setCurrency] = useState('USD');
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const fieldStyle: React.CSSProperties = {
        width: '100%',
        background: '#ffffff',
        border: '1px solid #d5d9d9',
        borderRadius: 'var(--radius-sm)',
        padding: '10px 14px',
        fontSize: 'var(--text-sm)',
        color: '#0F1111',
        fontFamily: 'var(--font-sans)',
        outline: 'none',
        transition: 'border-color 0.1s',
        boxSizing: 'border-box',
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
    };

    const labelStyle: React.CSSProperties = {
        fontSize: '13px',
        fontWeight: 700,
        color: '#111',
        marginBottom: 6,
        display: 'block',
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: 1000, width: '100%' }}>
            <div>
                <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, marginBottom: 4, letterSpacing: '-0.02em' }}>System Settings</h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>Operational Configuration • Store ID: PX-9281</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
                {/* Store settings */}
                <Card padding="0">
                    <div style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--color-border-subtle)', background: '#f6f6f6' }}>
                        <h2 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#565959' }}>Store Details</h2>
                    </div>
                    <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        <div>
                            <label style={labelStyle} htmlFor="store-name">Public Store Name</label>
                            <input id="store-name" value={storeName} onChange={e => setStoreName(e.target.value)} style={fieldStyle} />
                        </div>
                        <div>
                            <label style={labelStyle} htmlFor="store-email">Administrative Email</label>
                            <input id="store-email" type="email" value={email} onChange={e => setEmail(e.target.value)} style={fieldStyle} />
                        </div>
                        <div>
                            <label style={labelStyle} htmlFor="currency">Operational Currency</label>
                            <select id="currency" value={currency} onChange={e => setCurrency(e.target.value)} style={{ ...fieldStyle, cursor: 'pointer', appearance: 'none' }}>
                                {['USD', 'EUR', 'GBP', 'NGN', 'CNY', 'INR'].map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div style={{ paddingTop: 'var(--space-2)' }}>
                            <Button onClick={handleSave} loading={false} icon={<Icon name={saved ? 'dashboard' : 'settings'} size={14} />} iconPosition="left">
                                {saved ? 'Configuration Saved' : 'Save Changes'}
                            </Button>
                        </div>
                    </div>
                </Card>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                    {/* Notifications */}
                    <Card padding="0">
                        <div style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--color-border-subtle)', background: '#f6f6f6' }}>
                            <h2 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#565959' }}>Event Alerts</h2>
                        </div>
                        <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                            {[
                                { label: 'New order fulfillment', id: 'notif-order' },
                                { label: 'Inventory threshold alert', id: 'notif-stock' },
                                { label: 'Security & Access logs', id: 'notif-review' },
                                { label: 'Payment gateway status', id: 'notif-payment' },
                            ].map(n => (
                                <div key={n.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <label htmlFor={n.id} style={{ fontSize: 'var(--text-sm)', color: '#0F1111', cursor: 'pointer' }}>{n.label}</label>
                                    <input id={n.id} type="checkbox" defaultChecked style={{ accentColor: 'var(--color-brand-primary)', width: 16, height: 16, cursor: 'pointer' }} />
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Danger zone */}
                    <Card padding="0" style={{ borderColor: '#d0021b' }}>
                        <div style={{ padding: 'var(--space-4)', borderBottom: '1px solid #fedbd8', background: '#fffafa' }}>
                            <h2 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#d0021b' }}>Danger Zone</h2>
                        </div>
                        <div style={{ padding: 'var(--space-6)' }}>
                            <p style={{ fontSize: '12px', color: '#565959', marginBottom: 'var(--space-4)' }}>
                                System-wide data reset. This action is destructive and cannot be undone.
                            </p>
                            <Button variant="danger" size="sm">Factory Reset Environment</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
