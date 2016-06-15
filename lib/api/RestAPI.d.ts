export declare type RestMethod = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
export declare enum ResourceAccessType {
    None = 0,
    AppId = 1,
    Secret = 4,
    Token = 8,
    SecretOrToken = 12,
}
export interface RestAPIOptions {
    endpoint: string;
    appId?: string;
    secret?: string;
    token?: string;
    camel?: boolean;
}
export declare class RestAPI {
    token: string;
    endpoint: string;
    appId: string;
    secret: string;
    private camel;
    constructor(options: RestAPIOptions);
    setToken(token?: string): void;
    hasCredentials(accessType: ResourceAccessType): boolean;
    getHeaders(accessType: ResourceAccessType): any;
    send(options: any, accessType?: ResourceAccessType): Promise<Object>;
}
