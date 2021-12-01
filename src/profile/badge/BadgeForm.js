
import React,{useState} from 'react'
import {Icon} from '@material-ui/core'
import './Badge.css'

const BadgeForm = ({state,setState}) => {

    const arrayOptions = [
        {
        id: 1,
        name: 'star'
        },
        {
        id: 2,
        name: 'stars'
        },
        {
        id: 3,
        name: 'gradient'
        },
        {
        id: 4,
        name: 'yard'
        },
        {
        id: 5,
        name: 'window'
        },
        {
        id: 6,
        name: 'whatshot'
        },
        {
        id: 7,
        name: 'sunny'
        },
        {
        id: 8,
        name: 'water'
        },
        {
        id: 9,
        name: 'verified'
        },
        {
        id: 10,
        name: 'umbrella'
        },
        {
        id: 11,
        name: 'try'
        },
        {
        id: 12,
        name: 'tungsten'
        },
        {
        id: 13,
        name: 'tour'
        },
        {
        id: 14,
        name: 'support'
        },
        {
        id: 15,
        name: 'style'
        },
    ]

    const [icon, setIcon] = useState(null)

    const changeColor = (e,item) => {
        e.preventDefault();

        e.target.style.color = 'green';
        console.log(item);

        setIcon(item);
    }

    
    const sendData = (e,item) =>{
        e.preventDefault();
        setState([
            ...state,
            item
        ])
    }

    return (
        <div className="container mx-auto">
            <div className="card-insignia">
                {
                    arrayOptions.map( (item,index) => <Icon onClick={(e) => changeColor(e,item)} fontSize="large" className="iconBadge" key={index}> {item.name} </Icon> )
                }
            </div>

            <div className="modal-action">
                <label htmlFor="my-modal-badge" className="btn btn-primary" onClick={(e) => sendData(e,icon)}>Agregar</label> 
                <label htmlFor="my-modal-badge" className="btn">Cerrar</label>
            </div>

        </div>
    )
}

export default BadgeForm
