import { GenericError } from "./GenericError";
export declare class APIError extends GenericError {
    status: number;
    response: any;
    constructor(status: number, response?: any, route?: string);
}
