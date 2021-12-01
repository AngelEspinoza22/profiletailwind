
import React,{useState,useRef} from 'react';
import Upload from './Upload';
import ImageGrid from './ImageGrid';
import GalleryModal from './GalleryModal';
import './Gallery.css'


const Gallery = () =>{

    const [selectedImg,setSelectedImg] = useState(null);
    // eslint-disable-next-line
	const inputRef = useRef();

	const fileSelect = () =>{
        inputRef.current.click();
    }

    return(
        <div className="">

            <Upload/>
            <ImageGrid setSelectedImg={setSelectedImg} fileSelect={fileSelect}/>
            <GalleryModal inputRef={inputRef}>
                <img className="imageModal" src={selectedImg} alt="enlarged pic" /> 
            </GalleryModal> 

        </div>
    );
}

export default Gallery;