import React, { Component } from 'react';

export default class BaseInput extends Component {
    render() {
        return (
            <input type={this.props.type}/>
        )
    }
}