import React from 'react'

const Switch = ({celsius, toggle}) => {
  return (
    <div className="onoffswitch">
      <input id="myonoffswitch" type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" checked={celsius} onChange={toggle}/>
      <label className="onoffswitch-label" htmlFor="myonoffswitch">
        <span className="onoffswitch-inner" />
        <span className="onoffswitch-switch"></span>
      </label>
    </div>
  )
}

export default Switch
