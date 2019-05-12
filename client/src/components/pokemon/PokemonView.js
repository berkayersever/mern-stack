import React, { Component } from 'react';
import './PokemonView.css';
import { PrimaryButton } from '../Button';

export default class PokemonView extends Component {

    addToCart = () => {
        this.props.addToCart(this.props.pokemon.getData());
    };

    render() {
        return (
            <div className="PokemonView">
                <h2>{this.props.pokemon.getName()}</h2>
                <p>{this.props.pokemon.getFormattedPrice()}</p>
                <PrimaryButton onClick={this.addToCart}>
                    🛒 Add to Cart
                </PrimaryButton>
                {this.props.pokemon.getImages().map(src =>
                    <img src={src} key={src} />
                )}
            </div>
        )
    }
};