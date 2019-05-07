import React, { Component } from 'react';
import ProductList from "./components/ProductList";
import products from './data/products';
import TextInput from './components/inputs/TextInput';
import PasswordInput from './components/inputs/PasswordInput';
import CheckboxInput from './components/inputs/CheckboxInput';
import './App.css';


class App extends Component {
    state = { firstName: '', lastName: '', password: '', sendEmail: true };

    handleBooleanChange = e => {
        this.setState({ [e.target.name]: e.target.checked });
    };

    handleTextChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        console.log(this.state);
        return (
            <div className="App">
                <TextInput
                    label="First Name"
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleTextChange}
                />
                <TextInput
                    label="Last Name"
                    value={this.state.lastName }
                    name="lastName"
                    onChange={this.handleTextChange}
                />
                <PasswordInput
                    label="Password"
                    value={this.state.password }
                    name="password"
                    onChange={this.handleTextChange}
                />
                <CheckboxInput
                    label="Can we send you promotional emails?"
                    checked={this.state.sendEmail }
                    name="sendEmail"
                    onChange={this.handleBooleanChange}
                />
                {/*<ProductList products={products} />*/}
            </div>
        );
    }
}

export default App;
