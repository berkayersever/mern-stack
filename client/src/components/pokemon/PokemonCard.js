import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PokemonCard.css';
import { SecondaryButton } from '../Button';
import TopPokemonLabel from './TopPokemonLabel';

export default class PokemonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.images[0],
        };
    }

    handleMouseOver = () => {
        if (this.props.images.length > 1) {
            this.setState({ image: this.props.images[1] });
        }
    };

    handleMouseLeave = () => {
        this.setState({ image: this.props.images[0] });
    };

    render() {
        return (
            <div className="PokemonCard">
                <img
                    src={this.state.image}
                    onMouseOver={this.handleMouseOver}
                    onMouseLeave={this.handleMouseLeave}
                />
                <h3>{this.props.name}</h3>
                <p>
                    {this.props.price}
                    {this.props.isFeatured && <TopPokemonLabel />}
                </p>
                {this.props.withRemoveButton &&
                <SecondaryButton onClick={this.props.onRemove}>
                    Remove
                </SecondaryButton>
                }
            </div>
        )
    }
};

PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    withRemoveButton: PropTypes.bool,
    onRemove: PropTypes.func
};