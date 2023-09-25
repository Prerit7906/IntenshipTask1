import React from 'react'
import style from './Common.module.css'
import classes from './PersonalInfo.module.css'
const PersonalInfo = () => {
  return (
    <div className={`${classes.PersonalInfo} ${style.card}`}>
      <h4>Personal Information</h4>
      <section>
        <div>
          <span>First Name</span>
        </div>
        <div>
          <span>Last Name</span>
        </div>
        <div>
          <span>Email</span>
        </div>
        <div>
          <span>Phone <span>(without dial code)</span></span>
          <div className={classes.inputs}>
            <span>
            <input id='radioButton' type='radio'></input>
            <label htmlFor='radioButton'>Internal</label>
            </span>
            <span>
            <input id='toggleButton' type='checkbox'></input>
            <label htmlFor='toggleButton'>Hide </label>
            </span>
          </div>
        </div>
        <div>
          <span>Nationality</span>
        </div>
        <div>
          <span>Current Residence </span>
        </div>
        <div>
          <span>ID Number</span>
        </div>
        {/* <div>
          <span>Date of Birth </span>
        </div> */}
        <div>
          <span>Gender</span>
        </div>
      </section>
    </div>
  )
}

export default PersonalInfo