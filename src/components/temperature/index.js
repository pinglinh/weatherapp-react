import React from 'react'
import './styles.css'

const Temp = ({tempValue}) => {
  return (
    <div className="temp celsius">
      <span className="fa fa-thermometer"></span> <span className="value">{tempValue}</span> °C
    </div>

  )
}

export default Temp

