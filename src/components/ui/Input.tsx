import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    label,
    error,
    helperText,
    id,
    style,
    ...props
}, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        width: '100%',
    };

    const labelStyle: React.CSSProperties = {
        fontSize: '13px',
        fontWeight: 700,
        color: '#111',
        display: 'block',
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        background: '#ffffff',
        border: `1px solid ${error ? '#d0021b' : '#d5d9d9'}`,
        borderRadius: 'var(--radius-sm)',
        padding: '10px 14px',
        fontSize: 'var(--text-sm)',
        color: '#0F1111',
        fontFamily: 'var(--font-sans)',
        outline: 'none',
        transition: 'all 0.1s',
        boxSizing: 'border-box',
        boxShadow: error ? '0 0 0 3px rgba(208, 2, 27, 0.05)' : 'inset 0 1px 2px rgba(0,0,0,0.05)',
    };

    const helperStyle: React.CSSProperties = {
        fontSize: '11px',
        color: error ? '#d0021b' : '#565959',
        marginTop: '2px',
    };

    return (
        <div style={containerStyle}>
            {label && <label style={labelStyle} htmlFor={inputId}>{label}</label>}
            <input
                id={inputId}
                ref={ref}
                style={{ ...inputStyle, ...style }}
                {...props}
            />
            {(error || helperText) && <span style={helperStyle}>{error || helperText}</span>}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
