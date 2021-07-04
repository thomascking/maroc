import { Request } from './request';
import { Response } from './response';

export type RequestHandler = (r: Request) => Response;

export type Route = [RegExp, RequestHandler];