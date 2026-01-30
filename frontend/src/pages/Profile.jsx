
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Card, CardTitle } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';

const Profile = () => {
    const { user, logout } = useAuth();

    return (
        <div className="space-y-6 max-w-2xl mx-auto">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">User Profile</h1>
                <p className="text-gray-500">Manage your account settings</p>
            </div>

            <Card>
                <div className="flex items-center gap-6 mb-8">
                    <img
                        src={user?.avatar}
                        alt={user?.name}
                        className="h-24 w-24 rounded-full border-4 border-gray-50"
                    />
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">{user?.name}</h2>
                        <p className="text-gray-500">{user?.role} at {user?.organization}</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <CardTitle>Contact Information</CardTitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="Full Name" defaultValue={user?.name} readOnly />
                        <Input label="Email Address" defaultValue={user?.email} readOnly />
                        <Input label="Role" defaultValue={user?.role} readOnly />
                        <Input label="Organization" defaultValue={user?.organization} readOnly />
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                    <Button variant="danger" onClick={logout}>
                        Sign Out
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default Profile;
