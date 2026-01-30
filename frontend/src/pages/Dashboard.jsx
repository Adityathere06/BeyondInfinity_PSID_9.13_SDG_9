
import React, { useEffect, useState } from 'react';
import { dataService } from '../services/dataService';
import { Card, CardTitle, CardDescription } from '../components/common/Card';
import { Loader } from '../components/common/Loader';
import { SimpleBarChart } from '../components/charts/BarChart';
import { SimpleLineChart } from '../components/charts/LineChart';
import { SimplePieChart } from '../components/charts/PieChart';
import { ArrowUpRight, ArrowDownRight, Recycle, Trash, Archive, RefreshCw } from 'lucide-react';

const KPICard = ({ title, value, subtext, trend, icon: Icon, colorClass }) => (
    <Card className="hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">{value}</h3>
            </div>
            <div className={`p-3 rounded-lg ${colorClass}`}>
                <Icon className="h-6 w-6 text-white" />
            </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
            {trend === 'up' ? (
                <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
            ) : (
                <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span className="text-gray-600">{subtext}</span>
        </div>
    </Card>
);

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const stats = await dataService.getDashboardStats();
                setData(stats);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    if (loading) return <div className="h-96 flex items-center justify-center"><Loader size="lg" /></div>;
    if (!data) return <div>Error loading data</div>;

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-500">Overview of your circular economy performance</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard
                    title="Total Waste Generated"
                    value={`${data.totalWaste} tons`}
                    subtext="+2.5% from last month"
                    trend="up"
                    icon={Trash}
                    colorClass="bg-blue-500"
                />
                <KPICard
                    title="Waste Reused"
                    value={`${data.reused} tons`}
                    subtext="+12% efficiency increase"
                    trend="up"
                    icon={Recycle}
                    colorClass="bg-green-500"
                />
                <KPICard
                    title="Waste Discarded"
                    value={`${data.discarded} tons`}
                    subtext="-5% reduction achieved"
                    trend="down"
                    icon={Archive}
                    colorClass="bg-red-500"
                />
                <KPICard
                    title="Circularity Score"
                    value={`${data.circularityScore}%`}
                    subtext="Top 10% of industry"
                    trend="up"
                    icon={RefreshCw}
                    colorClass="bg-purple-500"
                />
            </div>

            {/* Charts Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <div className="mb-6">
                        <CardTitle>Monthly Waste Trend</CardTitle>
                        <CardDescription>Waste generation vs reuse over time</CardDescription>
                    </div>
                    <SimpleLineChart
                        data={data.monthlyTrend}
                        xKey="month"
                        lines={['waste', 'reused']}
                    />
                </Card>

                <Card>
                    <div className="mb-6">
                        <CardTitle>Waste by Category</CardTitle>
                        <CardDescription>Breakdown of waste streams</CardDescription>
                    </div>
                    <SimplePieChart
                        data={data.wasteByCategory}
                        nameKey="name"
                        valueKey="value"
                    />
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
