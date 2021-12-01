
import React,{useState} from 'react'
import Pj1 from './images/pj1.png'
import Pj2 from './images/pj2.png'

const AvatarForm = ({setStyles, setAvatarImage}) => {

    const [datos, setDatos] = useState({
        id: null,
        genre: "",
        style: null,
        tez: null,
        hairColor: null
    })

    const handleInputChange = (event) =>{
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const sendData = (e) =>{
        e.preventDefault();
        setStyles(datos);
        if(datos.genre === 'mujer'){
            setAvatarImage(Pj2);
        }
        else{
            setAvatarImage(Pj1);
        }
    }

    return (
        <div className="container mx-auto">

            <div className="p-6 card bordered align-center">

                <label className="label">
                    <span className="label-text">Genero</span>
                </label> 
                <select name="genre" className="select select-bordered select-primary w-full max-w-xs " onChange={handleInputChange} >
                    <option disabled="disabled" selected="selected">Choose your option</option> 
                    <option value="mujer"> Mujer </option> 
                    <option value="hombre"> Hombre </option> 
                </select>

                <label className="label">
                    <span className="label-text">Estilo</span>
                </label> 
                <select name="style" className="select select-bordered select-primary w-full max-w-xs " onChange={handleInputChange}>
                    <option disabled="disabled" selected="selected">Choose your option</option> 
                    <option value="style1">Estilo 1</option> 
                    <option value="style2">Estilo 2</option>
                    <option value="style3">Estilo 3</option> 
                    <option value="style4">Estilo 4</option> 
                </select>

                <label className="label">
                    <span className="label-text">Tez</span>
                </label> 
                <select name="tez" className="select select-bordered select-primary w-full max-w-xs " onChange={handleInputChange}>
                    <option disabled="disabled" selected="selected">Choose your option</option>  
                    <option value="tezBlanca">Clara</option> 
                    <option value="tezMedia">Media</option>
                    <option value="tezMorena">Morena</option> 
                </select>

                <label className="label">
                    <span className="label-text">Color de pelo</span>
                </label> 
                <select name="hairColor" className="select select-bordered select-primary w-full max-w-xs " onChange={handleInputChange}>
                    <option disabled="disabled" selected="selected">Choose your option</option> 
                    <option value="hairBlack">Negro</option> 
                    <option value="hairBrown">Café</option>
                    <option value="hairYellow">Amarillo</option> 
                </select>

                <div className="modal-action">
                    <label htmlFor="my-modal-avatar" className="btn btn-primary" onClick={sendData}>Accept</label> 
                    <label htmlFor="my-modal-avatar" className="btn">Close</label>
                </div>
 
            </div>

        </div>
    )
}

export default AvatarForm
