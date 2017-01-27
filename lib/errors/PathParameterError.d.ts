import { GenericError } from "./GenericError";
export declare class PathParameterError extends GenericError {
    parameter: string;
    constructor(parameter: string);
}
