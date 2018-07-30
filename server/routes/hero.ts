import * as express from 'express';
import Hero from '../models/hero';

export class HeroRoutes {
    constructor() {}

    paths(app: express.Application) {

        // TODO: Make the put operation replace the document if a hero with the same name already exists
        app.put('/hero', (req, res) => {
            if (!req.body) {
                return res.sendStatus(400);
            }

            if (req.body.name === 'list') {
                res.status(400)
                    .send({ message: 'The hero name "list" is not allowed!' });
                return;
            }

            const hero = new Hero(req.body);
            hero.save((err: any) => {
              if (err) {
                res.status(400).send(err);
              } else {
                res.status(201).send(hero);
              }
            });
        });

        app.get('/hero/list', (req, res) => {
          Hero.find((err, result) => {
              if (err) {
                res.status(500).send({ message: err.message });
              } else {
                res.status(200).send(result);
              }
          });
      });

        app.get('/hero/:name', (req, res) => {
            Hero.find({ name: req.params.name }, (err, result) => {
              if (err) {
                res.status(404).send({ message: err.message });
              } else {
                res.status(200).send(result);
              }
            });
          });

        app.delete('/hero/:name', (req, res) => {
            Hero.deleteOne({ name: req.params.name }, (err) => {
                if (err) {
                    res.status(404).send({ message: err.message });
                } else {
                    res.status(204).send();
                }
            });
        });
    }
}
