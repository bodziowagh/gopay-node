import { ValidationSchema } from "../../validation/Validation";
export interface PContactInfo {
    phoneNumber?: string;
    line1?: string;
    line2?: string;
    state?: string;
    city?: string;
    country?: string;
    contry?: string;
    zip?: string;
}
export declare const contactInfoSchema: ValidationSchema;