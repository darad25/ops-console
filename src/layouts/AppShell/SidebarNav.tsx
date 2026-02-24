import { useLocation, Link } from 'react-router-dom';
import Icon, { type IconName } from '../../components/ui/Icons';

interface NavItem {
    path: string;
    icon: IconName;
    label: string;
    badge?: string;
}

const NAV_ITEMS: { section: string; items: NavItem[] }[] = [
    {
        section: 'Overview',
        items: [
            { path: '/', icon: 'dashboard', label: 'Dashboard' },
            { path: '/analytics', icon: 'dashboard', label: 'Analytics' },
        ],
    },
    {
        section: 'Commerce',
        items: [
            { path: '/orders', icon: 'package', label: 'Orders', badge: '12' },
            { path: '/inventory', icon: 'inventory', label: 'Inventory' },
            { path: '/customers', icon: 'customers', label: 'Customers' },
        ],
    },
    {
        section: 'System',
        items: [
            { path: '/settings', icon: 'settings', label: 'Settings' },
        ],
    },
];

interface SidebarNavProps {
    onNavClick?: () => void;
}

export default function SidebarNav({ onNavClick }: SidebarNavProps) {
    const { pathname } = useLocation();

    const isActive = (path: string) =>
        path === '/' ? pathname === '/' : pathname.startsWith(path);

    return (
        <>
            <nav className="sidebar-nav" aria-label="Main navigation">
                {NAV_ITEMS.map(group => (
                    <div className="sidebar-group" key={group.section}>
                        <div className="sidebar-section-label">{group.section}</div>
                        {group.items.map(item => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                                onClick={onNavClick}
                                aria-current={isActive(item.path) ? 'page' : undefined}
                            >
                                <span className="nav-item-icon" aria-hidden="true">
                                    <Icon name={item.icon} size={18} />
                                </span>
                                <span>{item.label}</span>
                                {'badge' in item && item.badge && (
                                    <span className="nav-item-badge">{item.badge}</span>
                                )}
                            </Link>
                        ))}
                    </div>
                ))}
            </nav>

            {/* User footer */}
            <div className="sidebar-footer">
                <Link to="/profile" className="sidebar-user" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="sidebar-avatar">
                        <Icon name="user" size={16} color="#fff" />
                    </div>
                    <div className="sidebar-user-info">
                        <div className="sidebar-user-name">Admin User</div>
                        <div className="sidebar-user-role">Super Admin</div>
                    </div>
                </Link>
            </div>
        </>
    );
}
