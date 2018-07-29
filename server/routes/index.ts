import * as express from 'express'

export class IndexRoutes {

    constructor() {}

    defaultRoute(req: express.Request, res: express.Response){
        res.sendFile('index.html', {root: './server/views'});
    }

    paths(app: express.Application) {
        app.get('/', (req: express.Request, res: express.Response) => {
            this.defaultRoute(req, res);
        });

        app.get('*', (req: express.Request, res: express.Response) => {
            // Not a defined path... Redirect to Angular app
            res.redirect('http://localhost:8200/');
        });
    }
}
