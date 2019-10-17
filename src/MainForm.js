import React, { Component } from 'react';
import Specs from './Specs';


class MainForm extends Component {
    render() {

        // console.log(this.props);

        return (
            <div>
                <Specs
                    feature={this.props.feature}
                    item={this.props.item}
                    itemHash={this.props.itemHash}
                    updateFeature={this.props.updateFeature}
                    selected={this.props.selected}
                />
            </div>
        )
    }
}
export default MainForm;
