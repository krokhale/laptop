import React, { Component } from 'react';
import slugify from 'slugify';
import CurrencyFormatter from "./CurrencyFormatter";

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class PartLabel extends Component {
    render() {
        return (
            <label htmlFor={this.props.itemHash} className="feature__label">
                {this.props.item.name} (<CurrencyFormatter cost={this.props.item.cost} />)
            </label>
        )
    }
}
export default PartLabel;
