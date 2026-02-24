import Button from '../../components/ui/Button';

export default function NotFoundPage() {
    return (
        <div style={{
            minHeight: '100dvh', display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', background: 'var(--color-bg-base)', textAlign: 'center', padding: 'var(--space-8)',
        }}>
            <div style={{ fontSize: 80, marginBottom: 'var(--space-4)', lineHeight: 1 }}>🔍</div>
            <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, marginBottom: 'var(--space-3)' }}>
                <span className="gradient-text">404</span>
            </h1>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)', maxWidth: 380 }}>
                This page doesn't exist or has been moved.
            </p>
            <Button onClick={() => window.location.href = '/'} icon="🏠" iconPosition="left">
                Back to Dashboard
            </Button>
        </div>
    );
}
