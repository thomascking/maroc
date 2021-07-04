import { IncomingMessage } from "http";

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type Params = {
    [key: string]: string;
};
export type Headers = {
    [key: string]: string;
}

export interface Request {
    incomingMessage: IncomingMessage; // the raw incoming message from node http module

    path?: string;
    method?: HttpMethod;
    params?: Params;
    headers?: Headers;
}
