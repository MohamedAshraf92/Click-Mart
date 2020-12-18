import React from 'react'
import { Link } from 'react-router-dom'

import './card.css'

const Card = (props) => {

    return (
        <div className="card">
            <div className="photo">
                <img src={props.photo} alt="product pic" />
            </div>
            <h2 className="prod-name">{props.name}</h2>
            <h3 className="prod-disc">{props.desc}</h3>
            <h3 className="price">{props.price}<span className="curency">{props.currency}</span></h3>
            <Link to={`/editProduct/${props.id}`} className="card-btn">Edit product</Link>
        </div>
    )
}

export default Card