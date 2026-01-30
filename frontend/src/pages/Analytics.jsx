
import React, { useEffect, useState } from 'react';
import { dataService } from '../services/dataService';
import { Card, CardTitle, CardDescription } from '../components/common/Card';
import { Loader } from '../components/common/Loader';
import { SimpleLineChart } from '../components/charts/LineChart';
import { SimpleBarChart } from '../components/charts/BarChart';
import { TrendingUp, Globe, Award } from 'lucide-react';

const Analytics = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const analyticsData = await dataService.getAnalytics();
                const dashboardData = await dataService.getDashboardStats(); // Re-use for charts
                setData({ ...analyticsData, ...dashboardData });
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div className="h-96 flex items-center justify-center"><Loader size="lg" /></div>;

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Impact Analytics</h1>
                <p className="text-gray-500">Track your environmental contribution and SDG goals</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-lg">
                            <TrendingUp className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <p className="text-blue-100 text-sm">Economic Value</p>
                            <h3 className="text-2xl font-bold">{data.economicValueGenerated}</h3>
                        </div>
                    </div>
                </Card>
                <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-lg">
                            <Globe className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <p className="text-green-100 text-sm">Carbon Offset</p>
                            <h3 className="text-2xl font-bold">{data.carbonOffset}</h3>
                        </div>
                    </div>
                </Card>
                <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-lg">
                            <Award className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <p className="text-purple-100 text-sm">SDG-9 Alignment</p>
                            <h3 className="text-2xl font-bold">Strong</h3>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardTitle>Trend Analysis</CardTitle>
                    <CardDescription className="mb-4">Waste reduction over the last 6 months</CardDescription>
                    <SimpleLineChart
                        data={data.monthlyTrend}
                        xKey="month"
                        lines={['waste', 'reused']}
                    />
                </Card>

                <Card>
                    <CardTitle>Top Partners</CardTitle>
                    <CardDescription className="mb-4">Volume exchanged by partner</CardDescription>
                    <SimpleBarChart
                        data={data.topPartners}
                        xKey="name"
                        barKey="volume"
                        color="#ec4899"
                    />
                </Card>
            </div>

            <Card>
                <CardTitle>Sustainability Goals</CardTitle>
                <div className="mt-4 space-y-4">
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">Zero Waste to Landfill</span>
                            <span className="text-sm font-medium text-gray-700">75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">Carbon Neutrality</span>
                            <span className="text-sm font-medium text-gray-700">45%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Analytics;
