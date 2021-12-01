
import React,{useEffect} from 'react';
import useStorage from '../utils/hooks/useStorage'
import './Gallery.css'

const MyProgressBar = ( {file,setFile} ) =>{

    const {url,progress} = useStorage(file);

    useEffect(() => {
        if(url){
            setFile(null);
        }
    }, [url,setFile])
    
    return(
        <div className="div-progressbar">
            <progress className="progress progress-accent" now={progress} label={`${Math.trunc(progress)}%`}/> 
        </div>
    )   
}

export default MyProgressBar;