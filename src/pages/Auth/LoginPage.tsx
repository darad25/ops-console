import { useState } from 'react';
import Button from '../../components/ui/Button';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            window.location.href = '/';
        }, 1200);
    };

    const fieldStyle: React.CSSProperties = {
        width: '100%',
        background: '#ffffff',
        border: '1px solid #a6a6a6',
        borderRadius: '2px',
        padding: '10px 12px',
        fontSize: 'var(--text-sm)',
        color: '#0F1111',
        fontFamily: 'var(--font-sans)',
        outline: 'none',
        boxSizing: 'border-box',
        transition: 'border-color 0.1s',
        boxShadow: '0 1px 0 rgba(255,255,255,.5), inset 0 1px 0 rgba(0,0,0,.07)',
    };

    return (
        <div style={{
            minHeight: '100dvh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
            background: '#ffffff', padding: 'var(--space-6)',
            fontFamily: 'var(--font-sans)',
        }}>
            {/* Header / Logo */}
            <div style={{ padding: 'var(--space-10) 0 var(--space-6)', textAlign: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: '4px', background: 'var(--color-brand-primary)', border: '1px solid #000', margin: '0 auto var(--space-4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 900, color: '#fff' }}>
                    O
                </div>
                <h1 style={{ display: 'none' }}>OpsConsole</h1>
            </div>

            <div style={{ width: '100%', maxWidth: 350 }} className="animate-fade-in">
                {/* Login Card */}
                <div style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px', padding: 'var(--space-6)',
                    background: '#fff',
                }}>
                    <h2 style={{ fontSize: '28px', fontWeight: 400, marginBottom: 'var(--space-4)', color: '#111' }}>Sign in</h2>

                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        <div>
                            <label htmlFor="login-email" style={{ fontSize: '13px', fontWeight: 700, color: '#111', display: 'block', marginBottom: 4 }}>Email (phone for mobile accounts)</label>
                            <input
                                id="login-email"
                                type="email"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                style={fieldStyle}
                                onFocus={e => { e.target.style.borderColor = '#e77600'; e.target.style.boxShadow = '0 0 3px 2px rgba(228,121,17,.5)'; }}
                                onBlur={e => { e.target.style.borderColor = '#a6a6a6'; e.target.style.boxShadow = '0 1px 0 rgba(255,255,255,.5), inset 0 1px 0 rgba(0,0,0,.07)'; }}
                            />
                        </div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                                <label htmlFor="login-password" style={{ fontSize: '13px', fontWeight: 700, color: '#111' }}>Password</label>
                                <a href="#" style={{ fontSize: '13px', color: '#0066c0', textDecoration: 'none' }}>Forgot password?</a>
                            </div>
                            <input
                                id="login-password"
                                type="password"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                style={fieldStyle}
                                onFocus={e => { e.target.style.borderColor = '#e77600'; e.target.style.boxShadow = '0 0 3px 2px rgba(228,121,17,.5)'; }}
                                onBlur={e => { e.target.style.borderColor = '#a6a6a6'; e.target.style.boxShadow = '0 1px 0 rgba(255,255,255,.5), inset 0 1px 0 rgba(0,0,0,.07)'; }}
                            />
                        </div>

                        <Button fullWidth loading={loading} style={{ marginTop: 'var(--space-2)' }}>
                            {loading ? 'Processing…' : 'Sign in'}
                        </Button>
                    </form>

                    <div style={{ fontSize: '12px', color: '#111', marginTop: 'var(--space-4)', lineHeight: '1.5' }}>
                        By continuing, you agree to OpsConsole's <a href="#" style={{ color: '#0066c0', textDecoration: 'none' }}>Conditions of Use</a> and <a href="#" style={{ color: '#0066c0', textDecoration: 'none' }}>Privacy Notice</a>.
                    </div>
                </div>

                {/* New to OpsConsole? */}
                <div style={{ marginTop: 'var(--space-6)', textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                        <div style={{ flex: 1, height: 1, background: '#e7e7e7' }} />
                        <span style={{ fontSize: '12px', color: '#767676' }}>Internal Access Only</span>
                        <div style={{ flex: 1, height: 1, background: '#e7e7e7' }} />
                    </div>
                    <div style={{ fontSize: '13px', color: '#111' }}>
                        System Status: <span style={{ color: 'var(--color-success)', fontWeight: 700 }}>Operational</span>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div style={{ marginTop: 'auto', padding: 'var(--space-8) 0', borderTop: '1px solid #eee', width: '100%', maxWidth: 600, textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                    <a href="#" style={{ fontSize: '11px', color: '#0066c0', textDecoration: 'none' }}>Conditions of Use</a>
                    <a href="#" style={{ fontSize: '11px', color: '#0066c0', textDecoration: 'none' }}>Privacy Notice</a>
                    <a href="#" style={{ fontSize: '11px', color: '#0066c0', textDecoration: 'none' }}>Help</a>
                </div>
                <p style={{ fontSize: '11px', color: '#555' }}>
                    © 1996-2026, OpsConsole.com, Inc. or its affiliates
                </p>
            </div>
        </div>
    );
}
