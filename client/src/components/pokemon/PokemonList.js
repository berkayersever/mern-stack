import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PokemonCard from './ProductCard';
import './PokemonList.css';

export default class PokemonList extends Component {
    render() {
        return (
            <div className="PokemonList">
                {this.props.pokemons.map((pokemon, index) =>
                    <Link
                        key={pokemon.getId()}
                        to={`/pokemon/${pokemon.getId()}`}
                        style={
                            index % 2 !== 0 ?
                                { alignSelf: 'flex-end' } :
                                null
                        }
                    >
                        <PokemonCard
                            name={pokemon.getName()}
                            images={pokemon.getImages()}
                            price={pokemon.getFormattedPrice()}
                            isFeatured={pokemon.isFeatured()}
                        />
                    </Link>
                )}
            </div>
        );
    }
}