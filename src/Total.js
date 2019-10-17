import React, { Component } from 'react';
import CurrencyFormatter from "./CurrencyFormatter";


class Total extends Component {
    render() {
        return (
            <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                <CurrencyFormatter cost={this.props.total} />
            </div>
          </div>
        )
    }
}

export default Total;
