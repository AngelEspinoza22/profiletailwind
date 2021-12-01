
import React,{useState} from 'react'
import AboutForm from './AboutForm'
import './AboutMe.css'

const AboutMe = () => {

    const arrayData = {
        id: 1,
        name: "Juan Perez",
        bDay: '2',
        bMonth: '06',
        bAge: '1999',
        sDay: '4',
        sMonth: '5',
        sAge: '2015',
        activity: "Acampar"
    }

    const [datos, setDatos] = useState(arrayData);

    return (
        <div className="container mx-auto justify-center">
            <h5 className="title-about">Acerca de mi</h5>
            <div className="card card-info glass shadow-2xl">
                <div className="info">
                    <p>Nombre: {datos.name} </p>
                    <p>Fecha de cumpleaños: / {datos.bDay} / {datos.bMonth} / {datos.bAge} </p>
                    <p>Scout desde: / {datos.sDay} / {datos.sMonth} / {datos.sAge} </p>
                    <p>Actividad favorita: {datos.activity} </p>
                </div>
            </div> 

            <div>
                <label htmlFor="my-modal-about" className="btn btn-primary">Editar</label> 
                <input type="checkbox" id="my-modal-about" className="modal-toggle"/> 
                
                <div className="modal">
                    <div className="modal-box">
                        <AboutForm setArray={setDatos}/> 
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
