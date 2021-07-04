import * as http from 'http';

import Server from './server';

const startServer = (host = 'localhost', port = 3142) => {
    const server = new Server();
    const httpServer = http.createServer((i, o) => server.handleRequest(i, o));
    httpServer.listen(port, host);
}

startServer();