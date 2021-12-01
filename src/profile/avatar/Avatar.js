

import React,{useState} from 'react'
import AvatarForm from './AvatarForm'
import Pj1 from './images/pj1.png'
// eslint-disable-next-line
import Pj2 from './images/pj2.png'
import './Avatar.css'

const Avatar = () => {

    const arrayStyle = {
        id: null,
        genre: "",
        style: null,
        tez: null,
        hairColor: null
    }

    // eslint-disable-next-line
    const [styles, setStyles] = useState(arrayStyle);
    const [AvatarImage,setAvatarImage] = useState(Pj1);

    return (
        <div className="container mx-auto justify-center">
            <h5 className="title-avatar">Avatar</h5>
            <div className="card glass text-center shadow-2xl card-avatar">
                <figure className="">
                    <img src={AvatarImage} className="avatar-image" alt=""/>
                </figure> 
    
            </div> 

            <div>
                <label htmlFor="my-modal-avatar" className="btn btn-primary">Editar</label> 
                <input type="checkbox" id="my-modal-avatar" className="modal-toggle"/> 
                
                <div className="modal">
                    <div className="modal-box">
                        <AvatarForm setStyles={setStyles} setAvatarImage={setAvatarImage} /> 
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Avatar
