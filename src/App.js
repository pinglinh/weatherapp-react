import React, { Component } from 'react';

import './App.css';

import Credits from './components/credits'
import Switch from './components/switch'
import Temp from './components/temperature'
import WeatherIcon from './components/weather-icon'
import WeatherDescription from './components/weather-description'
import Location from './components/location'
import Header from './components/header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      celsius: true,
      tempValue: 15
    }
    this.switchUnit = this.switchUnit.bind(this);
  }

  unit() {
    if (this.state.celsius) {
      return "°C";
    }
    else {
      return "°F";
    }
  }

  switchUnit() {
    this.setState({celsius: !this.state.celsius})
  }

  render() {
    return (
      <div>
        <div className="weather-box">
          <Header />
          <Switch celsius={this.state.celsius} toggle={this.switchUnit} />

          <div className="temp-icon">
            <Temp tempValue={this.state.tempValue} unit={this.unit()} />

            <WeatherIcon weatherIcon={"11n"} />
            <WeatherDescription weatherDescription={"Clouds"} />
            <Location location={"London"} />
          </div>

        </div>
        <Credits name="pinglinh"/>
      </div>
    );
  }
}

export default App;
