
import { mockData } from '../utils/mockData';

const TOKEN_KEY = 'circular_token';
const USER_KEY = 'circular_user';

export const authService = {
    login: async (email, password) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));

        if (email === 'demo@circular.io' && password === 'demo123') {
            const token = 'fake-jwt-token-' + Date.now();
            const user = mockData.user;

            localStorage.setItem(TOKEN_KEY, token);
            localStorage.setItem(USER_KEY, JSON.stringify(user));

            return { token, user };
        }

        throw new Error('Invalid credentials');
    },

    logout: () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
    },

    getCurrentUser: () => {
        const userStr = localStorage.getItem(USER_KEY);
        return userStr ? JSON.parse(userStr) : null;
    },

    isAuthenticated: () => {
        return !!localStorage.getItem(TOKEN_KEY);
    }
};
