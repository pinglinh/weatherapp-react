import React from 'react'
import './styles.css'

const WeatherDescription = (props) => {
  return (
    <div className="weather-description">{props.weatherDescription}</div>
  )
}

export default WeatherDescription

