import mongoose from 'mongoose';
import { users, products, pokemons } from './data';
import { UserModel} from '../models/User';
import { ProductModel } from '../models/Product';
import { PokemonModel } from "../models/Pokemon";

mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true},
    (err) => {
        if (err) {
            console.log('Database Error----------------', err);
        }
        console.log('Connected to database');
    });

const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error);
});

db.once('open', () => {
    console.log('Database connection is open!');
    // UserModel.insertMany(users, (error) => {
    //     if (error) {
    //         console.log(error);
    //     }
    // });
    // ProductModel.insertMany(products, (error) => {
    //     if (error) {
    //         console.log(error);
    //     }
    // });
    PokemonModel.insertMany(pokemons, (error) => {
        if (error) {
            console.log(error);
        }
    });
});