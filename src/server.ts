import { IncomingMessage, ServerResponse } from 'http';

export default class Server {
    handleRequest(request: IncomingMessage, response: ServerResponse) {
        // TODO: handle requests
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Hello, World!');
    }
}