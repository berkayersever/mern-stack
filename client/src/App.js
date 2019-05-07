import React, { Component } from 'react';
import ProductList from "./components/ProductList";
import products from './data/products';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ProductList products={products} />
            </div>
        );
    }
}

export default App;
