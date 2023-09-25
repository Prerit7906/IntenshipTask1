import React from 'react'
import { useState } from 'react'
import { faUpload,faMultiply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './CoverImage.module.css'
import style from './Common.module.css'

const CoverImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imageSubmitHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const reuploadHandler=()=>{
    setSelectedImage(!selectedImage);
  }
  return (
    <div className={`${classes.coverimage} ${style.card}`}>
      { !selectedImage &&<>
      <h4>Upload cover image</h4>
      <input onChange={imageSubmitHandler} id="image" type="file" accept=".jpg, .jpeg" 
      maxlength="1 "
      />
      <div>
      <label htmlFor='image'>
        <FontAwesomeIcon icon={faUpload} style={{color: "#000000",height:"1.5rem"}} />
        <span>Upload cover image</span>
        <p>16:9 ratio is recommended. Max image size 1mb</p>
      </label>
      </div>
      </>}
      {selectedImage && (
        <div className={classes.imagePreview}>
          <img src={selectedImage} alt="Preview" />
          <div onClick={reuploadHandler}>
          <FontAwesomeIcon  icon={faMultiply} style={{color: "#A80000",height:"1.5rem",margin:"0 0.5rem 0 1.2rem"}} />
          <h5 style={{color:"#A80000"}}>Delete & re-upload</h5>
          </div>
        </div>
      )}
    </div>
  )
}

export default CoverImage