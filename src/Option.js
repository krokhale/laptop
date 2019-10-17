import React, { Component } from 'react';



class Option extends Component {

    render() {
        //console.log('Option ' + this.props.total);
        return (
            <div>
                {this.props.feature}
                <br></br>
                {this.props.summary}
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value"></div>
                    {this.props.total}
                </div>
            </div>
        )
    }
}

export default Option;
