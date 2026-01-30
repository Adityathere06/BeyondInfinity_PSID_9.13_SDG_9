
export const mockData = {
    user: {
        id: "u123",
        name: "Alex Johnson",
        email: "demo@circular.io",
        role: "Sustainability Manager",
        organization: "EcoTech Industries",
        avatar: "https://i.pravatar.cc/150?u=u123"
    },
    dashboard: {
        totalWaste: 12500, // tons
        reused: 8500, // tons
        discarded: 4000, // tons
        circularityScore: 68, // percentage
        monthlyTrend: [
            { month: "Jan", waste: 1000, reused: 600 },
            { month: "Feb", waste: 1100, reused: 700 },
            { month: "Mar", waste: 1050, reused: 750 },
            { month: "Apr", waste: 1200, reused: 800 },
            { month: "May", waste: 1150, reused: 850 },
            { month: "Jun", waste: 1300, reused: 900 },
        ],
        wasteByCategory: [
            { name: "Plastic", value: 35 },
            { name: "Metal", value: 25 },
            { name: "Organic", value: 20 },
            { name: "E-Waste", value: 10 },
            { name: "Paper", value: 10 },
        ]
    },
    wasteStreams: [
        { id: 1, industry: "Automotive", type: "Steel Scraps", quantity: "500 tons", category: "Metal", recyclable: true, status: "Available" },
        { id: 2, industry: "Textile", type: "Cotton Offcuts", quantity: "200 tons", category: "Organic", recyclable: true, status: "Available" },
        { id: 3, industry: "Electronics", type: "Circuit Boards", quantity: "50 tons", category: "E-Waste", recyclable: true, status: "Processing" },
        { id: 4, industry: "Construction", type: "Concrete Rubble", quantity: "1000 tons", category: "Mineral", recyclable: true, status: "Disposed" },
        { id: 5, industry: "Food Processing", type: "Organic Sludge", quantity: "300 tons", category: "Organic", recyclable: true, status: "Composted" },
        { id: 6, industry: "Packaging", type: "LDPE Plastic", quantity: "150 tons", category: "Plastic", recyclable: true, status: "Available" },
    ],
    recommendations: [
        {
            id: 1,
            sourceIndustry: "Automotive",
            partnerIndustry: "Construction",
            wasteType: "Steel Scraps",
            reuseMethod: "Reinforcement Bars",
            impactScore: 92,
            costReduction: "$15,000",
            feasibility: "High",
            tags: ["High Impact", "Immediate"]
        },
        {
            id: 2,
            sourceIndustry: "Textile",
            partnerIndustry: "Furniture",
            wasteType: "Cotton Offcuts",
            reuseMethod: "Upholstery Filling",
            impactScore: 78,
            costReduction: "$5,000",
            feasibility: "High",
            tags: ["Medium Feasibility"]
        },
        {
            id: 3,
            sourceIndustry: "Electronics",
            partnerIndustry: "Refining",
            wasteType: "Circuit Boards",
            reuseMethod: "Gold Recovery",
            impactScore: 85,
            costReduction: "$25,000",
            feasibility: "Medium",
            tags: ["High Value", "Complex"]
        }
    ],
    analytics: {
        wasteReductionPotential: 25, // percentage
        economicValueGenerated: "$1.2M",
        carbonOffset: "5000 tons CO2e",
        topPartners: [
            { name: "GreenBuild Corp", volume: "200 tons" },
            { name: "RecyclePro", volume: "150 tons" },
            { name: "BioEnergy Ltd", volume: "100 tons" }
        ]
    }
};
