import React, { Component } from 'react';
import Parts from './Parts';

class Specs extends Component {
    render() {
        //console.log(this.props.feature);
        let feature = this.props.feature;
        let item = this.props.item;
        let itemHash = this.props.itemHash;
        return (
            <div>
                {feature === 'Processor' && <Parts
                    feature={feature}
                    item={item}
                    itemHash={itemHash}
                    updateFeature={this.props.updateFeature}
                    selected={this.props.selected} />}
                {feature === 'Operating System' && <Parts
                    feature={feature}
                    item={item}
                    itemHash={itemHash}
                    updateFeature={this.props.updateFeature}
                    selected={this.props.selected} />}
                {feature === 'Video Card' && <Parts
                    feature={feature}
                    item={item}
                    itemHash={itemHash}
                    updateFeature={this.props.updateFeature}
                    selected={this.props.selected} />}
                {feature === 'Display' && <Parts
                    feature={feature}
                    item={item}
                    itemHash={itemHash}
                    updateFeature={this.props.updateFeature}
                    selected={this.props.selected} />}

            </div>
        )
    }
}
export default Specs;