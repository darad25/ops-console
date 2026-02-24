import { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Icon from '../../components/ui/Icons';
import Badge from '../../components/ui/Badge';
import Modal from '../../components/ui/Modal';
import Input from '../../components/ui/Input';

export default function ProfilePage() {
    const [name, setName] = useState('Admin User');
    const [email, setEmail] = useState('admin@opsconsole.com');
    const [saved, setSaved] = useState(false);

    // Password modal state
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordUpdating, setPasswordUpdating] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const handlePasswordUpdate = () => {
        setPasswordError('');

        if (!currentPassword || !newPassword || !confirmPassword) {
            setPasswordError('Please fill in all password fields.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setPasswordError('New passwords do not match.');
            return;
        }

        if (newPassword.length < 8) {
            setPasswordError('New password must be at least 8 characters long.');
            return;
        }

        setPasswordUpdating(true);

        // Simulate API call
        setTimeout(() => {
            setPasswordUpdating(false);
            setIsPasswordModalOpen(false);
            // Reset fields
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            alert('Password updated successfully!');
        }, 1500);
    };

    const fieldStyle: React.CSSProperties = {
        width: '100%',
        background: '#ffffff',
        border: '1px solid #d5d9d9',
        borderRadius: 'var(--radius-sm)',
        padding: '10px 14px',
        fontSize: 'var(--text-sm)',
        color: '#0F1111',
        fontFamily: 'var(--font-sans)',
        outline: 'none',
        transition: 'border-color 0.1s',
        boxSizing: 'border-box',
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
    };

    const labelStyle: React.CSSProperties = {
        fontSize: '13px',
        fontWeight: 700,
        color: '#111',
        marginBottom: 6,
        display: 'block',
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: 800 }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-6)', marginBottom: 'var(--space-2)' }}>
                <div style={{
                    width: 100,
                    height: 100,
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--gradient-brand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    border: '4px solid #fff'
                }}>
                    <Icon name="user" size={48} color="#fff" />
                </div>
                <div style={{ paddingBottom: 8 }}>
                    <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, marginBottom: 4, letterSpacing: '-0.02em' }}>{name}</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                        <Badge variant="info" dot>Super Admin</Badge>
                        <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>Standard Access • Member since Jan 2024</span>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 'var(--space-6)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                    <Card title="Account Information" subtitle="Update your personal details">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                                <div>
                                    <label style={labelStyle} htmlFor="profile-name">Full Name</label>
                                    <input id="profile-name" value={name} onChange={e => setName(e.target.value)} style={fieldStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle} htmlFor="profile-email">Work Email</label>
                                    <input id="profile-email" type="email" value={email} onChange={e => setEmail(e.target.value)} style={fieldStyle} />
                                </div>
                            </div>
                            <div>
                                <label style={labelStyle} htmlFor="profile-bio">Professional Bio</label>
                                <textarea
                                    id="profile-bio"
                                    placeholder="Brief description for team members..."
                                    style={{ ...fieldStyle, minHeight: 100, resize: 'vertical' }}
                                    defaultValue="Managing core e-commerce operations and inventory fulfillment logistics."
                                />
                            </div>
                            <div style={{ paddingTop: 'var(--space-2)' }}>
                                <Button onClick={handleSave} loading={false} icon={<Icon name={saved ? 'dashboard' : 'user'} size={14} />} iconPosition="left">
                                    {saved ? 'Profile Updated' : 'Update Profile'}
                                </Button>
                            </div>
                        </div>
                    </Card>

                    <Card title="Security" subtitle="Manage your account security">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-3)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>Multi-factor Authentication</div>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Secure your account with an extra layer of protection</div>
                                </div>
                                <Badge variant="success">Enabled</Badge>
                            </div>
                            <Button variant="outline" size="sm" onClick={() => setIsPasswordModalOpen(true)}>Change Password</Button>
                        </div>
                    </Card>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                    <Card title="Team Roles" subtitle="Your assigned permissions">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                            {['Order Management', 'Inventory Control', 'Financial Reports', 'Customer Support'].map(role => (
                                <div key={role} style={{ fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 8, color: '#565959' }}>
                                    <Icon name="dashboard" size={12} color="var(--color-success)" />
                                    {role}
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card title="Session Activity" subtitle="Recent log-ins">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                            <div style={{ fontSize: '11px' }}>
                                <div style={{ fontWeight: 700 }}>Current Session</div>
                                <div style={{ color: 'var(--color-text-muted)' }}>Lagos, NG • 192.168.1.1</div>
                            </div>
                            <div style={{ fontSize: '11px' }}>
                                <div style={{ fontWeight: 700 }}>Yesterday, 4:32 PM</div>
                                <div style={{ color: 'var(--color-text-muted)' }}>Lagos, NG • 192.168.1.1</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Change Password Modal */}
            <Modal
                isOpen={isPasswordModalOpen}
                onClose={() => setIsPasswordModalOpen(false)}
                title="Change Password"
                footer={
                    <>
                        <Button variant="ghost" onClick={() => setIsPasswordModalOpen(false)}>Cancel</Button>
                        <Button onClick={handlePasswordUpdate} loading={passwordUpdating}>Update Password</Button>
                    </>
                }
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <Input
                        label="Current Password"
                        type="password"
                        value={currentPassword}
                        onChange={e => setCurrentPassword(e.target.value)}
                        placeholder="••••••••"
                    />
                    <Input
                        label="New Password"
                        type="password"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        placeholder="••••••••"
                        helperText="Must be at least 8 characters long"
                    />
                    <Input
                        label="Confirm New Password"
                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                    />
                    {passwordError && (
                        <div style={{ fontSize: 'var(--text-sm)', color: '#d0021b', display: 'flex', alignItems: 'center', gap: 4 }}>
                            <Icon name="arrow-down" size={14} /> {/* Placeholder icon */}
                            {passwordError}
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    );
}
