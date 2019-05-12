import mongoose, { Schema } from 'mongoose';

export const PokemonSchema = new Schema({
    id: Number,
    name: String,
    price: Number,
    images: [String],
    categories: [String],
    featured: Boolean
});

export const PokemonModel = mongoose.model('Pokemon', ProductSchema);