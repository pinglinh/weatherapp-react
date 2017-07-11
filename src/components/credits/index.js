import React from 'react'

import './styles.css'

const Credits = ({name = 'pinglinh'}) => {
  return (
    <div className="credits">
      <span id="heart-symbol">&hearts;</span>
      <a href="http://www.pinglinh.com" target="_blank">{name}</a>
    </div>
  )
}

export default Credits
