import React from 'react'
import './styles.css'

const Temp = ({tempValue, unit}) => {
  let tempFahrenheit = tempValue * 1.8 + 32;

  let tempDisplay = (unit == "°F") ? tempFahrenheit : tempValue;

  return (
    <div className="temp celsius">
      <span className="fa fa-thermometer"></span> <span className="value">{tempDisplay}</span> {unit}
    </div>

  )
}

export default Temp

