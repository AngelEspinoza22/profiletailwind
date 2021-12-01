
import React,{useState} from 'react'
import {Icon} from '@material-ui/core'
import BadgeForm from './BadgeForm'
import './Badge.css'

const Badge = () => {


  const arrayIcons = [
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

    const [state, setState] = useState(arrayIcons);

    return (
      <div className="container mx-auto justify-center">

        <h5 className="title-badge">Insignias</h5>

        <div className="card card-insignia glass shadow-2xl">
          <div className="grid grid-cols-8 gap-4">
            {
              state.map( (item,index) => <Icon fontSize="large" className="iconBadge" key={index}> {item.name} </Icon> )
            }
          </div>
        </div>     
            
        <div>
          <label htmlFor="my-modal-badge" className="btn btn-primary">Agregar</label> 
          <input type="checkbox" id="my-modal-badge" className="modal-toggle"/> 
                
          <div className="modal">
            <div className="modal-box">
              <BadgeForm state={state} setState={setState} /> 
            </div>
          </div>
        </div>

      </div>
    )
}

export default Badge
