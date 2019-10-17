import React, { Component } from 'react';
import Total from './Total';
import Option from './Option';
class MainSummary extends Component {
    render() {

        return (
            <section className="main__summary">
                <h2>Your Cart</h2>
                <div>
                    <Option
                        feature={this.props.summary[0].props.children[0].props.feature}
                        summary={this.props.summary[0].props.children[0].props.selectedOption.name}
                        total={this.props.summary[0].props.children[0].props.selectedOption.cost}
                    />
                    <Option
                        feature={this.props.summary[1].props.children[1].props.feature}
                        summary={this.props.summary[1].props.children[1].props.selectedOption.name}
                        total={this.props.summary[1].props.children[1].props.selectedOption.cost}
                    />
                    <Option
                        feature={this.props.summary[2].props.children[2].props.feature}
                        summary={this.props.summary[2].props.children[2].props.selectedOption.name}
                        total={this.props.summary[2].props.children[2].props.selectedOption.cost}
                    />
                    <Option
                        feature={this.props.summary[3].props.children[3].props.feature}
                        summary={this.props.summary[3].props.children[3].props.selectedOption.name}
                        total={this.props.summary[3].props.children[3].props.selectedOption.cost}
                    />
                </div>
                <Total total={this.props.total} />
            </section>
        )
    }
}
export default MainSummary;