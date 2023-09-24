import React from 'react'
import classes from './Topbar.module.css'

const Topbar = () => {
  return (
    <div className={classes.topbar}>
      <span >
        <p>Program Details</p>
      </span>
      <span className={classes.selected}>
        <p>Application Form</p>
        <div className={classes[`arrow-right`]}></div>
      </span>
      <span>
        <p>Workflow</p>
      </span>
        <div className={classes.verticleline}></div>
      <span>
        <p>Preview</p>
      </span>
    </div>
  )
}

export default Topbar