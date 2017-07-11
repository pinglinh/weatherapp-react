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
  }

  switchUnit = () => {
    console.log(this.state.celsius)

    let nowCelsius = !this.state.celsius
    this.setState({
      celsius: nowCelsius,
      tempValue: nowCelsius ? 10 : 20

    })
  }

  render() {
    return (
      <div>
        <div className="weather-box">
          <Header />
          <Switch celsius={this.state.celsius} toggle={this.switchUnit}/>

          <div className="temp-icon">
            <Temp tempValue={this.state.tempValue} />
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
