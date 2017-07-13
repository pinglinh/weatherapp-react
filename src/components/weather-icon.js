import React from 'react'

const WeatherIcon = ({weatherIcon}) => {
  let icon_to_font = {
    "01d": "wi-day-sunny",
    "01n": "wi-night-clear",
    "02d": "wi-day-cloudy",
    "02n": "wi-night-alt-cloudy",
    "03d": "wi-cloud",
    "03n": "wi-cloud",
    "04d": "wi-cloudy",
    "04n": "wi-cloudy",
    "09d": "wi-day-showers",
    "09n": "wi-night-alt-showers",
    "10d": "wi-day-rain",
    "10n": "wi-night-alt-rain",
    "11d": "wi-day-thunderstorm",
    "11n": "wi-night-alt-thunderstorm",
    "13d": "wi-day-snow",
    "13n": "wi-night-alt-snow",
    "50d": "wi-windy",
    "50n": "wi-windy"
  };

  return (
    <div className="weather-icon">
      <i className={`wi ${icon_to_font[weatherIcon]}`} id="weather-icon"></i>
    </div>
  )
}

export default WeatherIcon
