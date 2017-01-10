import * as ExtendableError from "es6-error";
export declare class TimeoutError extends ExtendableError {
    timeout: number;
    constructor(timeout: number);
}
