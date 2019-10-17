import React, { Component } from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class CurrencyFormatter extends Component {
    render() {
        return (
            USCurrencyFormat.format(this.props.cost)
        )
    }
}
export default CurrencyFormatter;
