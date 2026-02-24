import { useState } from 'react';
import './appShell.css';
import SidebarNav from './SidebarNav';
import Topbar from './Topbar';

interface AppShellProps {
    children: React.ReactNode;
    pageTitle?: string;
}

export default function AppShell({ children, pageTitle }: AppShellProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="app-shell">
            {/* Mobile overlay */}
            <div
                className={`sidebar-overlay ${sidebarOpen ? 'visible' : ''}`}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-logo">
                    <div className="sidebar-logo-mark">O</div>
                    <div className="sidebar-logo-text">
                        <div className="sidebar-logo-name">OpsConsole</div>
                        <div className="sidebar-logo-tag">E-Commerce Admin</div>
                    </div>
                </div>
                <SidebarNav onNavClick={() => setSidebarOpen(false)} />
            </aside>

            {/* Main content area */}
            <div className="main-area">
                <Topbar pageTitle={pageTitle} onMenuClick={() => setSidebarOpen(true)} />
                <main className="page-content">
                    {children}
                </main>
            </div>
        </div>
    );
}
