import mongoose, { Schema } from 'mongoose';

export const PokemonSchema = new Schema({
    id: Number,
    name: String,
    price: Number,
    images: [String],
    categories: [String],
    featured: Boolean,
    total: Number,
    hp: Number,
    attack: Number,
    defense: Number,
    sp_atk: Number,
    sp_def: Number,
    speed: Number,
    generation: Number,
    legendary: Boolean
});

export const PokemonModel = mongoose.model('Pokemon', ProductSchema);