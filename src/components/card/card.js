import React from 'react'

import './card.css'

const Card = (props) => {

    return (
        <div className="card">
            <div className="photo">
                <img src={props.photo} alt="product pic" />
            </div>
            <h2 className="prod-name">{props.name}</h2>
            <h3 className="prod-disc">{props.desc}</h3>
            <h3 className="price">{props.price}<span className="curency">EUR</span></h3>
            <button className="card-btn">Edit product</button>
        </div>
    )
}

export default Card