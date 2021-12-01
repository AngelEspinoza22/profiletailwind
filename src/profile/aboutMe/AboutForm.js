
import React,{useState} from 'react'

const AboutForm = ({setArray}) => {

    const [datos, setDatos] = useState({
        id: null,
        name: "",
        bDay: null,
        bMonth: null,
        bAge: null,
        sDay: null,
        sMonth: null,
        sAge: null,
        activity: ""
    })

    const handleInputChange = (event) =>{
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    
    const sendData = (e) =>{
        e.preventDefault();
        setArray(datos);
    }

    return (
        <div className="container mx-auto">

            <div className="p-6 card bordered align-center">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Nombre</span>
                    </label> 
                    <input name="name" type="text" placeholder="" onChange={handleInputChange} className="input input-accent input-bordered"/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Fecha de cumpleaños</span>
                    </label> 
                    <input name="bDay" type="number" placeholder="Dia" min="1" max="31" onChange={handleInputChange} className="input input-accent input-bordered"/>
                    <input name="bMonth" type="number" placeholder="Mes" min="1" max="12" onChange={handleInputChange} className="input input-accent input-bordered"/>
                    <input name="bAge" type="number" placeholder="Año" min="1994" max="2015" onChange={handleInputChange} className="input input-accent input-bordered"/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Fecha de Scout</span>
                    </label> 
                    <input name="sDay" type="number" placeholder="Dia" min="1" max="31" onChange={handleInputChange} className="input input-accent input-bordered"/>
                    <input name="sMonth" type="number" placeholder="Mes" min="1" max="12" onChange={handleInputChange} className="input input-accent input-bordered"/>
                    <input name="sAge" type="number" placeholder="Año" min="2010" max="2022" onChange={handleInputChange} className="input input-accent input-bordered"/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Actividad favorita</span>
                    </label> 
                    <input name="activity" type="text" placeholder="" onChange={handleInputChange} className="input input-accent input-bordered"/>
                </div>

                <div className="modal-action">
                    <label htmlFor="my-modal-about" className="btn btn-primary" onClick={sendData}>Accept</label> 
                    <label htmlFor="my-modal-about" className="btn">Close</label>
                </div>
 
            </div>

        </div>
    )
}

export default AboutForm
