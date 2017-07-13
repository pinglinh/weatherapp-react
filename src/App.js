import React, { Component } from 'react';

import './App.css';

import WeatherView from './WeatherView'

import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { }
    this.location_received = this.location_received.bind(this)
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.location_received);
    } else {
      let url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=2bc5677e833038c7c834f60caef3e3c3&mode=json"
      $.getJSON(url, this.weather_received);
    }
  }

  get_weather_url(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let key = "2bc5677e833038c7c834f60caef3e3c3";
    let url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${key}&mode=json`;
    return url
  }

  location_received(position) {
    let url = this.get_weather_url(position);
    $.getJSON(url, this.weather_received);
  }

  weather_received(weather) {
    console.log(weather)
  }


  render() {
    return (
      <WeatherView tempValue={38} weatherIcon={"10d"} weatherDescription={"Too hot"} location={"Mars"} />
    );
  }
}

export default App;
