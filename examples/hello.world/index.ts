import { startServer } from '../../src/main';

startServer({
    apps: [{
        routes: [
            [/^\/hello$/, () => ({ status: 200, content: 'Hello, ' })],
            [/^\/world$/, () => ({ status: 200, content: 'world!' })],
            [/^\/(?<word>.*)$/, (r) => ({ status: 200, content: `echo: ${r.params!.word}` })],
        ]
    }]
});