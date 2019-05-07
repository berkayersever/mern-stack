import React, { Component } from 'react';
import './BaseInput.css';

export default class BaseInput extends Component {
    render() {
        return (
            <input {...this.props} />
        )
    }
}