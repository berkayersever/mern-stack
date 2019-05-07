import React, { Component } from 'react';
import ProductCard from "./components/ProductCard";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ProductCard/>
            </div>
        );
    }
}

export default App;
