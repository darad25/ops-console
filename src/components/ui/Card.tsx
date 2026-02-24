import React from 'react';

interface CardProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    action?: React.ReactNode;
    padding?: string;
    style?: React.CSSProperties;
    className?: string;
    glowOnHover?: boolean;
}

export default function Card({
    children,
    title,
    subtitle,
    action,
    padding = 'var(--space-6)',
    style,
    className = '',
    glowOnHover = false,
}: CardProps) {
    const [hovered, setHovered] = React.useState(false);

    const cardStyle: React.CSSProperties = {
        background: 'var(--color-bg-surface)',
        border: `1px solid ${hovered && glowOnHover ? 'var(--color-brand-200)' : 'var(--color-border-subtle)'}`,
        borderRadius: 'var(--radius-lg)',
        padding,
        transition: 'all var(--duration-fast) var(--ease-out)',
        boxShadow: hovered && glowOnHover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        position: 'relative',
        overflow: 'hidden',
        ...style,
    };

    return (
        <div
            className={`animate-fade-in ${className}`}
            style={cardStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {(title || action) && (
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: children ? 'var(--space-5)' : 0,
                    gap: 'var(--space-3)',
                }}>
                    <div>
                        {title && (
                            <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: subtitle ? '2px' : 0 }}>
                                {title}
                            </h3>
                        )}
                        {subtitle && (
                            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', margin: 0 }}>
                                {subtitle}
                            </p>
                        )}
                    </div>
                    {action && <div style={{ flexShrink: 0 }}>{action}</div>}
                </div>
            )}
            {children}
        </div>
    );
}
