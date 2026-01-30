
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { PageWrapper } from '../components/layout/PageWrapper';

// Pages
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import WasteStreams from '../pages/WasteStreams';
import Recommendations from '../pages/Recommendations';
import Analytics from '../pages/Analytics';
import Profile from '../pages/Profile';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            <Route path="/" element={
                <ProtectedRoute>
                    <PageWrapper>
                        <Dashboard />
                    </PageWrapper>
                </ProtectedRoute>
            } />

            <Route path="/waste-streams" element={
                <ProtectedRoute>
                    <PageWrapper>
                        <WasteStreams />
                    </PageWrapper>
                </ProtectedRoute>
            } />

            <Route path="/recommendations" element={
                <ProtectedRoute>
                    <PageWrapper>
                        <Recommendations />
                    </PageWrapper>
                </ProtectedRoute>
            } />

            <Route path="/analytics" element={
                <ProtectedRoute>
                    <PageWrapper>
                        <Analytics />
                    </PageWrapper>
                </ProtectedRoute>
            } />

            <Route path="/profile" element={
                <ProtectedRoute>
                    <PageWrapper>
                        <Profile />
                    </PageWrapper>
                </ProtectedRoute>
            } />

            {/* Catch all */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
