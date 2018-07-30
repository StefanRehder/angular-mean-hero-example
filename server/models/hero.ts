import * as mongoose from 'mongoose';

export interface IHero extends mongoose.Document {
    name: string;
    strength: number;
}

export const HeroSchema = new mongoose.Schema({
    name: {type: String, required: true},
    strength: {type: Number, required: true}
});

const Hero = mongoose.model('Hero', HeroSchema, 'heroes');
export default Hero;
