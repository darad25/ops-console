import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppShell from '../layouts/AppShell/AppShell';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import OrdersListPage from '../pages/Orders/OrdersListPage';
import OrderDetailsPage from '../pages/Orders/OrderDetailsPage';
import InventoryPage from '../pages/Inventory/InventoryPage';
import CustomersPage from '../pages/Customers/CustomersPage';
import SettingsPage from '../pages/Settings/SettingsPage';
import AnalyticsPage from '../pages/Analytics/AnalyticsPage';
import LoginPage from '../pages/Auth/LoginPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';

export default function AppRouter() {
    // Simple auth check – replace with real auth context
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </BrowserRouter>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />

                <Route path="/" element={
                    <AppShell pageTitle="Dashboard">
                        <DashboardPage />
                    </AppShell>
                } />

                <Route path="/analytics" element={
                    <AppShell pageTitle="Analytics">
                        <AnalyticsPage />
                    </AppShell>
                } />

                <Route path="/orders" element={
                    <AppShell pageTitle="Orders">
                        <OrdersListPage />
                    </AppShell>
                } />

                <Route path="/orders/:id" element={
                    <AppShell pageTitle="Order Details">
                        <OrderDetailsPage />
                    </AppShell>
                } />

                <Route path="/inventory" element={
                    <AppShell pageTitle="Inventory">
                        <InventoryPage />
                    </AppShell>
                } />

                <Route path="/customers" element={
                    <AppShell pageTitle="Customers">
                        <CustomersPage />
                    </AppShell>
                } />

                <Route path="/settings" element={
                    <AppShell pageTitle="Settings">
                        <SettingsPage />
                    </AppShell>
                } />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}
