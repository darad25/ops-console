import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
        background: '#FFD814',
        color: '#0F1111',
        border: '1px solid #FCD200',
        boxShadow: '0 2px 5px 0 rgba(213,217,217,.5)',
    },
    secondary: {
        background: '#ffffff',
        color: '#0F1111',
        border: '1px solid #D5D9D9',
        boxShadow: '0 2px 5px 0 rgba(213,217,217,.5)',
    },
    outline: {
        background: 'transparent',
        color: '#007185',
        border: '1px solid #D5D9D9',
    },
    ghost: {
        background: 'transparent',
        color: 'var(--color-text-secondary)',
        border: '1px solid transparent',
    },
    danger: {
        background: '#ba0003',
        color: '#fff',
        border: '1px solid #ba0003',
    },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
    sm: { fontSize: 'var(--text-xs)', padding: '6px 12px', borderRadius: 'var(--radius-sm)' },
    md: { fontSize: 'var(--text-sm)', padding: '8px 18px', borderRadius: 'var(--radius-md)' },
    lg: { fontSize: 'var(--text-base)', padding: '12px 24px', borderRadius: 'var(--radius-md)' },
};

export default function Button({
    variant = 'primary',
    size = 'md',
    loading = false,
    icon,
    iconPosition = 'left',
    fullWidth = false,
    children,
    disabled,
    style,
    ...props
}: ButtonProps) {
    const baseStyle: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--fw-medium)' as React.CSSProperties['fontWeight'],
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        opacity: disabled || loading ? 0.6 : 1,
        transition: 'all var(--duration-fast) var(--ease-out)',
        whiteSpace: 'nowrap',
        width: fullWidth ? '100%' : undefined,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
    };

    return (
        <button style={baseStyle} disabled={disabled || loading} {...props}>
            {loading && <span style={{ animation: 'spin 0.8s linear infinite', display: 'inline-block' }}>⟳</span>}
            {!loading && icon && iconPosition === 'left' && <span>{icon}</span>}
            {children}
            {!loading && icon && iconPosition === 'right' && <span>{icon}</span>}
        </button>
    );
}
