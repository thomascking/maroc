import * as http from 'http';

import Server from './server';
import { Settings } from './settings';

export const startServer = (settings: Settings, host = 'localhost', port = 3142) => {
    const server = new Server();
    // TODO: register middleware from settings
    // TODO: register apps
    (settings.apps || []).forEach(app => server.registerApp(app));
    const httpServer = http.createServer((i, o) => server.handleRequest(i, o));
    httpServer.listen(port, host, () => {
        console.log(`serving at ${host}:${port}`);
    });
};
