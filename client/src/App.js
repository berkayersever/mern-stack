import React, { Component } from 'react';
import ProductCard from "./components/ProductCard";
import './App.css';

const images = [
    'https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png',
    'https://cdn.bulbagarden.net/upload/1/17/025Pikachu-Original.png'
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <ProductCard images={images} name="Pikachu" price="$49.99"/>
            </div>
        );
    }
}

export default App;
