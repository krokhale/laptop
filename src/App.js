import React, { Component } from 'react';
import Cart from './Cart';
import FeatureTemplate from './FeatureTemplate';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './App.css';
// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        /* 
        *pass args to feature component
        *the feature component is reusable across all features

        *seems more efficient to only make on component called FeatureTemplate
        and then change it each iteration of features however I could have made 
        four components but they would be identical
 ex        */
        return (
          <div key={itemHash} className="feature__item">
            {feature === 'Processor' && <FeatureTemplate
              feature={feature}
              item={item}
              itemHash={itemHash}
              updateFeature={this.updateFeature}
              selected={this.state.selected} />}
            {feature === 'Operating System' && <FeatureTemplate
              feature={feature}
              item={item}
              itemHash={itemHash}
              updateFeature={this.updateFeature}
              selected={this.state.selected} />}
            {feature === 'Video Card' && <FeatureTemplate
              feature={feature}
              item={item}
              itemHash={itemHash}
              updateFeature={this.updateFeature}
              selected={this.state.selected} />}
            {feature === 'Display' && <FeatureTemplate
              feature={feature}
              item={item}
              itemHash={itemHash}
              updateFeature={this.updateFeature}
              selected={this.state.selected} />}
          </div>
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];
      return (
        
        /* 
        *pass args to the cart component

        *again dont need to make specific cart components
        because cart is reusable
        */
        <div key={featureHash}>
          <Cart
            feature={feature}
            selectedOption={selectedOption}
          />
        </div>
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
