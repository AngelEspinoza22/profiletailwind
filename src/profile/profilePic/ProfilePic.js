
import React from 'react'
import PicModal from './PicModal'
import useFirestore from '../utils/hooks/useFirestore'
import './ProfilePic.css'


const ProfilePic = () => {

	const {docs} = useFirestore('profileImg');
	const urlImage = docs.map(e => (e.url));

    return (
        <div className="container mx-auto">

            <h5 className="title-pic">Foto de Perfil</h5>

            <div className="card glass shadow-2xl card-profile">

                <div className="avatar profile-image">
                    <div className="rounded-full w-96 h-96 ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={urlImage[0] || "http://via.placeholder.com/"} alt=""/>
                    </div>
                </div> 
            </div> 

            <PicModal/>

        </div>
    )
}

export default ProfilePic
