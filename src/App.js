import React, { Component } from 'react';
import MainSummary from './MainSummary';
import slugify from 'slugify';
import './App.css';
import MainForm from './MainForm';
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
        return (
          <div key={itemHash} className="feature__item">
            <MainForm
              feature={feature}
              item={item}
              itemHash={itemHash}
              updateFeature={this.updateFeature}
              selected={this.state.selected}
            />

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
        <div key={featureHash} className="summary__item">
          {feature === 'Processor' && <MainSummary
            feature={feature}
            selectedOption={selectedOption}
          />}
          {feature === 'Operating System' && <MainSummary
            feature={feature}
            selectedOption={selectedOption}
          />}

          {feature === 'Video Card' && <MainSummary
            feature={feature}
            selectedOption={selectedOption}
          />}
          {feature === 'Display' && <MainSummary
            feature={feature}
            selectedOption={selectedOption}
          />}
        </div>
      )
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
          <MainSummary
            summary={summary}
            total={total}
          />

        </main>
      </div>
    );
  }
}
export default App;
