import React, { Component } from 'react';

import './App.css';

import Credits from './components/credits'
import Switch from './components/switch'
import Temp from './components/temperature'
import WeatherIcon from './components/weather-icon'

class App extends Component {
  constructor() {
    super()
    this.state = {checked: true}

  }

  switchUnit = () => {
    console.log(this.state.checked)

    this.setState({checked: !this.state.checked})
  }

  render() {
    return (
      <div>
        <div className="weather-box">
          <h1 className="header">WEATHER</h1>
          <Switch checked={this.state.checked} toggle={this.switchUnit}/>
          <div className="temp-icon">
            <Temp/>
            <WeatherIcon/>
          </div>
          <div className="weather-description"></div>
          <div className="location"><span className="fa fa-map-marker"></span> <span className="value"></span></div>
        </div>
        <Credits name="hello"/>
      </div>
    );
  }
}

export default App;
