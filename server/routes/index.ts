import * as express from 'express'

export class IndexRoutes {

    constructor() {}

    paths(app: express.Application) {
        app.get('/', (req: express.Request, res: express.Response) => {
            res.sendFile('index.html', {root: './server/views'});
        });

        app.get('*', (req: express.Request, res: express.Response) => {
            res.redirect('http://localhost:8200/');
        });
    }
}
