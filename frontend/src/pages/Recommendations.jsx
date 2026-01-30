
import React, { useEffect, useState } from 'react';
import { dataService } from '../services/dataService';
import { Card, CardTitle, CardDescription } from '../components/common/Card';
import { Loader } from '../components/common/Loader';
import { Button } from '../components/common/Button';
import { ArrowRight, Leaf, DollarSign, CheckCircle, ExternalLink } from 'lucide-react';

const RecommendationCard = ({ rec }) => (
    <Card className="hover:shadow-md transition-shadow border-l-4 border-l-green-500">
        <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1 space-y-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">High Probability</span>
                        {rec.tags.map(tag => (
                            <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded border border-gray-200">{tag}</span>
                        ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{rec.reuseMethod}</h3>
                    <p className="text-gray-500 text-sm mt-1">Transform {rec.wasteType} into valuable resources</p>
                </div>

                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                    <div className="text-center">
                        <p className="text-xs text-gray-500 uppercase mb-1">Source</p>
                        <p className="font-semibold text-gray-900">{rec.sourceIndustry}</p>
                    </div>
                    <ArrowRight className="text-gray-400" />
                    <div className="text-center">
                        <p className="text-xs text-gray-500 uppercase mb-1">Partner</p>
                        <p className="font-semibold text-gray-900">{rec.partnerIndustry}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3 min-w-[200px] border-l border-gray-100 md:pl-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 rounded-full">
                        <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Impact Score</p>
                        <p className="font-bold text-gray-900 text-lg">{rec.impactScore}/100</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-full">
                        <DollarSign className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Potential Savings</p>
                        <p className="font-bold text-gray-900 text-lg">{rec.costReduction}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-50 rounded-full">
                        <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Feasibility</p>
                        <p className="font-bold text-gray-900 text-lg">{rec.feasibility}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
            <Button className="flex items-center gap-2">
                View Match Details
                <ExternalLink className="h-4 w-4" />
            </Button>
        </div>
    </Card>
);

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecs = async () => {
            try {
                const data = await dataService.getRecommendations();
                setRecommendations(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchRecs();
    }, []);

    if (loading) return <div className="h-96 flex items-center justify-center"><Loader size="lg" /></div>;

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Recommendations</h1>
                <p className="text-gray-500">Smart circular economy opportunities based on your waste profile</p>
            </div>

            <div className="space-y-4">
                {recommendations.map(rec => (
                    <RecommendationCard key={rec.id} rec={rec} />
                ))}
            </div>
        </div>
    );
};

export default Recommendations;
