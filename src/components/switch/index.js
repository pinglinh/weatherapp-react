
import React from 'react'

import './styles.css'

const Switch = ({checked, toggle}) => {
  return (
    <div className="onoffswitch">
      <input id="myonoffswitch" type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" checked={checked} onChange={toggle}/>
      <label className="onoffswitch-label" htmlFor="myonoffswitch">
        <span className="onoffswitch-inner" />
        <span className="onoffswitch-switch"></span>
      </label>
    </div>
  )
}

export default Switch