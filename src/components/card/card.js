import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'

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
                <p className="prod-name">{props.name}</p>
                <p className="prod-disc">{props.desc}</p>
                <div className="price-and-add">
                    <p className="price">{props.price}<span className="curency">{props.currency}</span></p>
                    <Link to={`/editProduct/${props.id}`} className="edit-btn">Edit product</Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card">
            <div className="photo">
                <Link to={`/store/${props.id}`}>
                <LazyLoad>
                    <img src={props.photo} alt="product pic" />
                </LazyLoad>
                </Link>
            </div>
            <p className="prod-name">{props.name}</p>
            <p className="prod-disc">{props.desc}</p>
            <div className="price-and-add">
                <p className="price">{props.price}<span className="curency">{props.currency}</span></p>
                <button className="add-btn" onClick={addToCartHandler}>ADD TO CART</button>
            </div>
        </div>
        )
    }

}

export default Card