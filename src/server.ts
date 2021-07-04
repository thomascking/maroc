import { IncomingMessage, ServerResponse } from 'http';
import { App } from './app';
import { Request } from './request';
import { Route } from './routes';

export default class Server {
    routes: Route[] = [];

    registerApp(app: App) {
        this.routes = this.routes.concat(app.routes);
    }

    handleRequest(incomingMessage: IncomingMessage, serverResponse: ServerResponse) {
        // find the correct handler in routes
        for (let [r, h] of this.routes) {
            const match = incomingMessage.url?.match(r);
            if (match) {
                // TODO: build params from regexp matching
                const request: Request = {
                    incomingMessage,
                };
                request.params = {...match.groups};
                // TODO: get response from corresponding handler
                const response = h(request);
                serverResponse.statusCode = response.status;
                serverResponse.end(response.content);
                return;
            }
        }

        // if no matching path is found, 404
        serverResponse.statusCode = 404;
        serverResponse.end();
    }
}