type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info' | 'brand';

interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
    dot?: boolean;
}

const variantMap: Record<BadgeVariant, { bg: string; color: string; border?: string }> = {
    default: { bg: '#f1f5f9', color: '#64748b', border: '1px solid #e2e8f0' },
    success: { bg: '#ecfdf5', color: '#10b981' },
    warning: { bg: '#fffbeb', color: '#f59e0b' },
    danger: { bg: '#fef2f2', color: '#ef4444' },
    info: { bg: '#ecfeff', color: '#06b6d4' },
    brand: { bg: '#f5f3ff', color: '#7c3aed' },
};

export default function Badge({ children, variant = 'default', dot = false }: BadgeProps) {
    const v = variantMap[variant];
    return (
        <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            background: v.bg,
            color: v.color,
            border: v.border ?? 'none',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--text-xs)',
            fontWeight: 500,
            padding: '3px 10px',
            whiteSpace: 'nowrap',
            lineHeight: 1.5,
        }}>
            {dot && (
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: v.color, flexShrink: 0 }} />
            )}
            {children}
        </span>
    );
}
