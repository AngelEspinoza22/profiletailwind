
import React,{useState} from 'react'
import {projectStorage,projectFirestore,timestamp} from '../utils/firebase/config'
import './ProfilePic.css'

const PicModal = () => {

    const [file,setFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

	/** Event: File input change  */
	const onFileInputChange = (e) => {
		if ( e.target.files && e.target.files.length > 0 ) {
			 setFile(e.target.files[0]);
            setPreviewImage(URL.createObjectURL(e.target.files[0]));
		}
	};

    const fileUpload = () =>{
		const uploadTask = projectStorage.ref(`images/${file.name}`).put(file);
        const collectionRef = projectFirestore.collection('profileImg');
		uploadTask.on("state_changed",
            () =>{
                projectStorage
                .ref("images")
                .child(file.name)
                .getDownloadURL()
                .then(url => {
                    const createdAt = timestamp();
                    collectionRef.add({ url, createdAt });
                });
            }
        )
    }


    return (
        <div>
            <label for="my-modal-pic" className="btn btn-primary modal-button">Cambiar</label> 
            <input type="checkbox" id="my-modal-pic" className="modal-toggle"/> 
            <div className="modal">
                <div className="modal-box">

                    <div className="style-modal-pic">
                        <label for="input-image-profile" className="btn btn-primary input-image-pic">Subir imagen</label> 
                        <input id="input-image-profile" accept="image/jpeg,image/png" type="file" onChange={onFileInputChange} style={{display: 'none'}}/>
                        { file && <div className="avatar profile-image"> <div className="rounded-full w-96 h-96 ring ring-primary ring-offset-base-100 ring-offset-2"> <img src={previewImage} alt=""/></div></div>  }
                    </div>

                    <div className="modal-action">
                        <label for="my-modal-pic" className="btn btn-success" onClick={fileUpload}>Accept</label> 
                        <label for="my-modal-pic" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PicModal
