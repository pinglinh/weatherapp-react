import React from 'react'
import './styles.css'

const Location = (props) => {
  return (
    <div className="location">
      <span className="fa fa-map-marker"></span> <span className="value">{props.location}</span>
    </div>
  )
}

export default Location
