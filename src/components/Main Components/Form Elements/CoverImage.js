import React from 'react'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './CoverImage.module.css'

const CoverImage = () => {
  return (
    <div className={classes.coverimage}>
      <h6>Upload cover image</h6>
      <input id='image' type='file'></input>
      <div>
      <label htmlFor='image'>
        <FontAwesomeIcon icon={faUpload} style={{color: "#000000",height:"1.5rem"}} />
        <span>Upload cover image</span>
        <span>16:9 ratio is recommended. Max image size 1mb</span>
      </label>
      </div>
    </div>
  )
}

export default CoverImage