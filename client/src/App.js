import React, { Component } from 'react';
import ProductList from "./components/ProductList";
import products from './data/products';
import BaseInput from './components/inputs/BaseInput';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BaseInput type="text"/>
                {/*<ProductList products={products} />*/}
            </div>
        );
    }
}

export default App;
