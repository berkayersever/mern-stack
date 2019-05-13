import mongoose, { Schema } from 'mongoose';

export const ProductSchema = new Schema({
    index: Number,
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

export const ProductModel = mongoose.model('Product', ProductSchema);