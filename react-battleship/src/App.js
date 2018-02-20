import React, { Component } from 'react';
import './scss/main.scss'
import SingleShip from './components/SingleShip';
import shipData from './shipdata';


class App extends Component {
    constructor() {
        super();
        this.state = {
            shipdata: shipData,
            isInFleet: this.setInitialFleetState(),
        };

        this.addToFleet = this.addToFleet.bind(this);
    };

    setInitialFleetState() {
        let initialFleetState = {};

         Object.keys(shipData).forEach(key => initialFleetState[key] = false);
         return initialFleetState;
    };

    addToFleet(key) {
        const isInFleet = {...this.state.isInFleet};
        //update or add to the fleet
        isInFleet[key] = !this.state.isInFleet[key];

        this.setState({isInFleet});
    }
  render() {
    return (
      <div className="App">
          <div className="page__container">
            <div>
                {
                    Object.keys(this.state.shipdata).map(key =>
                        <SingleShip index={key} key={key} ship={this.state.shipdata[key]} addToFleet={this.addToFleet} isInFleet={this.state.isInFleet[key]}/>
                    )
                }
            </div>
          </div>
          <div className="background-image"></div>
      </div>
    );
  }
}

export default App;