import React, { Component } from 'react';

export default class ProductCard extends Component {
    render() {
        return (
            <div>
                <img src={"https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png"}/>
                <h3>Product Name</h3>
                <p>$49.99</p>
            </div>
        )
    }
};