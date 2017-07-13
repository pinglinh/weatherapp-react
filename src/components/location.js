import React from 'react'

const Location = ({location}) => {
  return (
    <div className="location">
      <span className="fa fa-map-marker"></span> <span className="value">{location}</span>
    </div>
  )
}

export default Location
