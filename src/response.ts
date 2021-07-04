export type HttpStatusCode = number; // TODO: define this

export interface Response {
    status: HttpStatusCode;

    content: any;
}