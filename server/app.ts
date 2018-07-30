import { HeroRoutes } from './routes/hero';
import { IndexRoutes } from './routes/index';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';

class App {
  protected app: express.Application = express();

  constructor() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    const heroRoutes = new HeroRoutes();
    heroRoutes.paths(this.app);

    const indexRoutes = new IndexRoutes();
    indexRoutes.paths(this.app);

    const uri = 'mongodb://127.0.0.1:27017/heroesDB';
    mongoose.connect(uri, { promiseLibrary: bluebird })
      .then(() => console.log(`Succesfully connected to MongoDB at ${uri}!`))
      .catch((err) => console.log(`Connection to MongoDB at ${uri} failed with message: ${err.message}`));

    const server = this.app.listen(8210, (err) => {
      if (err) {
        return console.log(err);
      }

      return console.log('Service is up and running on ' +
        `http://localhost:${server.address().port}`);
    });
  }
}

const application = new App();
