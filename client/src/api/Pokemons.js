import axios from './axios';
import Pokemon from '../models/Pokemon';

export const getPokemons = async (categories) => {
    try {
        const { data } = await axios.get(
            `/v1/pokemons${categories ? `?categories=${categories}` : ''}`
        );
        return data.map(pokemon => new Pokemon(pokemon));
    } catch (error) {
        console.error(error);
    }
};

export const getPokemon = async (id) => {
    try {
        const { data } = await axios.get(
            `/v1/pokemons/${id}`
        );
        return new Pokemon(data);
    } catch (error) {
        console.error(error);
    }
};