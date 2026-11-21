export interface Lead {
    readonly id: number;
    name: string;
    email : string;
    phone? : string;
    company? : string;
    requirement : string;
    status : string;
}

export interface PremiumLead extends Lead {
    priority: "High"| "Medium" | "Low";
    budget: number;
    assignedTo: string;
}

export interface LeadStatus {
    isVerified: boolean;
    isContacted: boolean;
    isConverted: boolean;
}

export interface CRMLead extends Lead, LeadStatus {
    createdAt: Date;
}

export function createLead(lead: Lead) : void {
    console.log(lead);
}

export function createPremiumLead(premiumLead: PremiumLead) : void {
    console.log(premiumLead);
}

export function verifyLead(status: LeadStatus): boolean {
    return status.isVerified;
}

export function getLeadName(lead: Lead) : string{
    return lead.name;
}