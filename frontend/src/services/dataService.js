
import { mockData } from '../utils/mockData';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const dataService = {
    getDashboardStats: async () => {
        await delay(500);
        return mockData.dashboard;
    },

    getWasteStreams: async () => {
        await delay(600);
        return mockData.wasteStreams;
    },

    getRecommendations: async () => {
        await delay(700);
        return mockData.recommendations;
    },

    getAnalytics: async () => {
        await delay(600);
        return mockData.analytics;
    }
};
