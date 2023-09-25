import React from 'react'
import CoverImage from './Main Components/CoverImage'
import PersonalInfo from './Main Components/PersonalInfo'
import Profile from './Main Components/Profile'
import Questions from './Main Components/Questions'
import classes from './MainContent.module.css'

const MainContent = () => {
  return (
    <div className={classes.maincontent}>
      <CoverImage/>
      <PersonalInfo/>
      <Profile/>
      <Questions/>
    </div>
  )
}

export default MainContent