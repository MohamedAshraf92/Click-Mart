import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './card.css'
import { addToCart } from '../../store/actions/loginActions'

const Card = (props) => {

    const userIsSeller = useSelector(state => state.loginReducer.user.isSeller)
    const dispatch = useDispatch()
    const shoppingCart = useSelector(state => state.loginReducer.user.shoppingCart)

    const addToCartHandler = () => {
        const clickedProduct = props.product
        const productExist = shoppingCart.find(item => item.id === clickedProduct.id)
        if (!productExist) {
            dispatch(addToCart(clickedProduct))
        }
    }

    if (userIsSeller) {
        return (
            <div className="card">
                <div className="photo">
                    <img src={props.photo} alt="product pic" />
                </div>
                <h2 className="prod-name">{props.name}</h2>
                <h3 className="prod-disc">{props.desc}</h3>
                <h3 className="price">{props.price}<span className="curency">{props.currency}</span></h3>
                <Link to={`/editProduct/${props.id}`} className="edit-btn">Edit product</Link>
            </div>
        )
    } else {
        return (
            <div className="card">
                <div className="photo">
                    <Link to={`/store/${props.id}`}>
                        <img src={props.photo} alt="product pic" />
                    </Link>
                </div>
                <h2 className="prod-name">{props.name}</h2>
                <h3 className="prod-disc">{props.desc}</h3>
                <h3 className="price">{props.price}<span className="curency">{props.currency}</span></h3>
                <button className="add-btn" onClick={addToCartHandler}>ADD TO CART</button>
            </div>
        )
    }

}

export default Card