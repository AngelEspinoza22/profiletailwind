
import React from 'react'
import ImageHeader from './portada.png'
import './Header.css'

const Header = () => {


    return (
        <div className="container mx-auto justify-center">
            
            <div className="card glass text-center shadow-2xl">
                <figure className="">
                    <img src={ImageHeader} className="" alt=""/>
                </figure> 
            </div> 
            
        </div>
    )
}

export default Header
