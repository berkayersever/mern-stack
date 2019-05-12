import React, { Component } from 'react';
import PokemonList from '../components/pokemon/PokemonList';
import ProductList from '../components/product/ProductList';
import { getPokemons } from '../api/Pokemons';
import { getProducts } from '../api/Products';
import LoadingIndicator from '../components/LoadingIndicator';

export default class Home extends Component {
    state = { pokemons: [], loading: true };
    // state = { products: [], loading: true };

    componentDidMount = async () => {
        const pokemons = await getPokemons() || [];
        this.setState({ pokemons, loading: false });
        // const products = await getProducts() || [];
        // this.setState({ products, loading: false });
    };

    render() {
        return (
            this.state.loading ? <LoadingIndicator /> : <PokemonList pokemons={this.state.pokemons}/>
            // this.state.loading ? <LoadingIndicator /> : <ProductList products={this.state.products}/>
        );
    }
}