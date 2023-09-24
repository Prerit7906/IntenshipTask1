import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faHouse,faListCheck } from '@fortawesome/free-solid-svg-icons'
import classes from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
        <FontAwesomeIcon icon={faBars} style={{color: "#000000",height:"1.2rem",margin:"30px"}} />
        <FontAwesomeIcon icon={faHouse} style={{color: "#000000",height:"1.2rem",margin:"20px"}} />
        <FontAwesomeIcon icon={faListCheck} style={{color: "#000000",height:"1.2rem",margin:"10px"}} />
    </div>
  )
}

export default Sidebar