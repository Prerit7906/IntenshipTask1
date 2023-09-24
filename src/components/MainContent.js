import React from 'react'
import CoverImage from './Main Components/Form Elements/CoverImage'
import PersonalInfo from './Main Components/Form Elements/PersonalInfo'
import Profile from './Main Components/Form Elements/Profile'
import Questions from './Main Components/Form Elements/Questions'
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