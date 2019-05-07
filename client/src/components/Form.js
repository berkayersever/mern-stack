import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                {this.props.children}
            </form>
        )
    }
}