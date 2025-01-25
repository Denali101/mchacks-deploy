export interface Patient {
    id: string;
    name: string;
    symptoms: string[];
    triageLevel: 1 | 2 | 3 | 4 | 5;
    registrationTime: Date;
    lastUpdated: Date;
    estimatedWaitTime: number;
}

export interface PatientUpdate {
    id: string;
    symptoms: string[];
}

export const TRIAGE_LEVELS = {
    1: "Immediate, life-threatening",
    2: "Emergent, high risk",
    3: "Urgent",
    4: "Less urgent",
    5: "Non-urgent"
} as const;

export type TriageLevel = keyof typeof TRIAGE_LEVELS;
