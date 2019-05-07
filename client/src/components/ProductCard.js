import React, { Component } from 'react';
import './ProductCard.css';

const images = [
    'https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png',
    'https://cdn.bulbagarden.net/upload/1/17/025Pikachu-Original.png'
];

export default class ProductCard extends Component {
    state = { image: images[0] };

    handleMouseOver = () => {
        this.setState({ image: images[1] });
    };

    handleMouseLeave = () => {
        this.setState({ image: images[0] });
    };

    render() {
        return (
            <div className="ProductCard">
                <img src={this.state.image} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} alt={"Pikachu"}/>
                <h3>Product Name</h3>
                <p>$49.99</p>
            </div>
        )
    }
};