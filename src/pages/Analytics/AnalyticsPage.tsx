import Icon from '../../components/ui/Icons';
import Card from '../../components/ui/Card';

const METRICS = [
    { label: 'Conversion Rate', value: '3.42%', delta: '+0.8%', positive: true, icon: 'dashboard' as const },
    { label: 'Avg. Order Value', value: '$84.20', delta: '-1.4%', positive: false, icon: 'dollar' as const },
    { label: 'Traffic Volume', value: '124.5k', delta: '+12.4%', positive: true, icon: 'user' as const },
    { label: 'Order Velocity', value: '42/hr', delta: '+4.2%', positive: true, icon: 'package' as const },
];

export default function AnalyticsPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <div>
                <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, marginBottom: 4, letterSpacing: '-0.02em' }}>Analytics Overview</h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>Real-time operational performance metrics and traffic analysis.</p>
            </div>

            {/* Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
                {METRICS.map(m => (
                    <Card key={m.label} padding="var(--space-5)">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
                            <div style={{ color: 'var(--color-text-muted)' }}>
                                <Icon name={m.icon} size={20} />
                            </div>
                            <div style={{
                                fontSize: '12px',
                                fontWeight: 700,
                                color: m.positive ? 'var(--color-success)' : 'var(--color-danger)',
                                background: m.positive ? 'rgba(0,123,67,0.05)' : 'rgba(212,51,51,0.05)',
                                padding: '2px 6px',
                                borderRadius: '4px'
                            }}>
                                {m.delta}
                            </div>
                        </div>
                        <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: 4, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                            {m.label}
                        </p>
                        <p style={{ fontSize: '28px', fontWeight: 800, color: '#0F1111' }}>
                            {m.value}
                        </p>
                    </Card>
                ))}
            </div>

            {/* Placeholder for Charts */}
            <Card padding="var(--space-10)" style={{ textAlign: 'center', background: '#fbfbfb', borderStyle: 'dashed' }}>
                <div style={{ opacity: 0.5 }}>
                    <Icon name="settings" size={48} color="#888" style={{ marginBottom: 'var(--space-4)' }} />
                    <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: '#0F1111', marginBottom: 8 }}>Operational Trends</h3>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: 400, margin: '0 auto' }}>
                        Time-series data visualization is currently being processed by the background engine.
                        Detailed charts will be available once the data warehouse sync completes.
                    </p>
                </div>
            </Card>
        </div>
    );
}
