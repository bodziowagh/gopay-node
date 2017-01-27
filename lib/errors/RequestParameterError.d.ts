import { GenericError } from "./GenericError";
export declare class RequestParameterError extends GenericError {
    parameter: string;
    constructor(parameter: string);
}
