
import React from 'react'
import useFirestore from '../utils/hooks/useFirestore'
import './Gallery.css'


const ImageGrid = ({setSelectedImg,fileSelect}) => {
  
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">

      {docs && docs.map(doc => (
        <div className="img-wrap" key={doc.id} onClick={() => {setSelectedImg(doc.url);}}>
          <img src={doc.url} alt="" onClick={() => {fileSelect();}}/>
        </div>
      ))}
    </div>
  )
}

export default ImageGrid;