import { GenericError } from "./GenericError";
export declare class TimeoutError extends GenericError {
    timeout: number;
    constructor(timeout: number);
}
