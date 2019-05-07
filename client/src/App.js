import React, { Component } from 'react';
import ProductCard from "./components/ProductCard";
import products from './data/products';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {products.map((product, index) =>
                    <ProductCard key={index} {...product}/>
                )}
            </div>
        );
    }
}

export default App;
