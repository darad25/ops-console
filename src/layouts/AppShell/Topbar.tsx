import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/ui/Icons';

interface TopbarProps {
    pageTitle?: string;
    onMenuClick?: () => void;
}

export default function Topbar({ pageTitle, onMenuClick }: TopbarProps) {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <header className="topbar">
            {/* Mobile menu button */}
            <button
                className="topbar-icon-btn"
                onClick={onMenuClick}
                style={{ display: 'none' }}
                aria-label="Open menu"
                id="menu-btn"
            >
                ☰
            </button>

            {/* Breadcrumb */}
            <nav className="topbar-breadcrumb" aria-label="breadcrumb">
                <Icon name="package" size={16} color="var(--color-text-muted)" />
                <span>›</span>
                <span className="topbar-breadcrumb-current">{pageTitle || 'Dashboard'}</span>
            </nav>

            {/* Search */}
            <div className="topbar-search">
                <span className="topbar-search-icon">
                    <Icon name="search" size={15} />
                </span>
                <input
                    id="topbar-search"
                    type="search"
                    placeholder="Search orders, products, customers…"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    aria-label="Global search"
                />
            </div>

            {/* Right actions */}
            <div className="topbar-actions">
                <button className="topbar-icon-btn" aria-label="Notifications" id="notif-btn">
                    <Icon name="bell" size={18} />
                    <span className="topbar-notif-dot" aria-hidden="true" />
                </button>
                <Link to="/settings" className="topbar-icon-btn" aria-label="Settings" id="settings-btn">
                    <Icon name="settings" size={18} />
                </Link>
                <div className="sidebar-avatar" style={{ cursor: 'pointer', background: '#e7e7e7', color: '#0F1111' }} title="Admin User">
                    <Icon name="user" size={16} />
                </div>
            </div>

            {/* Mobile menu visible style override */}
            <style>{`
        @media (max-width: 768px) {
          #menu-btn { display: flex !important; }
        }
      `}</style>
        </header>
    );
}
