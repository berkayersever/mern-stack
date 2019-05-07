import React, { Component } from 'react';
import ProductList from "./components/ProductList";
import products from './data/products';
import TextInput from './components/inputs/TextInput';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TextInput/>
                {/*<ProductList products={products} />*/}
            </div>
        );
    }
}

export default App;
