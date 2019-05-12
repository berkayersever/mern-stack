import React, { Component } from 'react';
import { getPokemon } from '../api/Pokemons';
import LoadingIndicator from '../components/LoadingIndicator';
import PokemonView from '../components/pokemon/PokemonView';

class Pokemon extends Component {
    state = { pokemon: undefined, loading: true };

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const pokemon = await getPokemon(id);
        this.setState({ pokemon, loading: false });
    };

    render() {
        if (this.state.loading || this.state.pokemon === undefined) {
            return <LoadingIndicator />;
        }

        return (
            <PokemonView
                product={this.state.pokemon}
                addToCart={this.props.addToCart}
            />
        );
    }
}

export default (addToCart) => (props) =>
    <Pokemon {...props} addToCart={addToCart} />;