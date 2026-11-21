import {
    verifyLead,
    createLead,
    createPremiumLead,
    getLeadName
} from "./interfaces.js";

import type { CRMLead } from "./interfaces.js";

verifyLead({
    isVerified: true,
    isContacted: true,
    isConverted: false,
});

createLead({
    id: 1,
    name: "Developer",
    email: "developer@gmail.com",
    requirement: "Frontend",
    status: "Online",
});

createPremiumLead({
    id: 3,
    name: "Fullstacker",
    email: "fsd@gmail.com",
    requirement: "Fullstack",
    status: "Online",
    priority: "High",
    budget: 1000,
    assignedTo: "tomorrow",
});

console.log(getLeadName({
    id: 2,
    name: "Designer",
    email: "Designer@gmail.com",
    requirement: "Frontend",
    status: "Online",
}));

const crmLead: CRMLead = {
    id: 10,
    name: "Alex",
    email: "alex@gmail.com",
    requirement: "AI Automation",
    status: "New",
    isVerified: true,
    isContacted: false,
    isConverted: false,
    createdAt: new Date(),
};

console.log(crmLead);