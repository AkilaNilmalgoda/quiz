import React from 'react'
import Add from './Images/Ad1.gif'
import './Ad.css'

const Ad = () => {
    return (
        <section>
            <div className="row mx-auto d-flex justify-content-center fixed-bottom advert-background ">
                <img className="d-block w-100 " src={Add} alt=""/>
            </div>
            
            
        </section>
    )
}

export default Ad
