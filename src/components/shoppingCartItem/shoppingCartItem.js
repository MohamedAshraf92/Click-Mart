import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import './shoppingCartItem.css'
import MdTrash from 'react-ionicons/lib/MdTrash'
import { removeFromCart } from '../../store/actions/loginActions'
import noImageFound from '../../assets/noImageFound.png'

const ShoppingCartItem = (props) => {
    
    const [quantity, setQuantity] = useState(1)
    const [src, setSrc] = useState(props.image)
    const [errored, setErrored] = useState(false)

    const dispatch = useDispatch()

    const totalPrice = props.price * quantity

    const removeItemHandler = () => {
        dispatch(removeFromCart(props.id))
        console.log('delete')
    }

    const onErrorHandler = () => {
        if (!errored) {
            setSrc(noImageFound)
            setErrored(true)
        }
    }

    return (
        <div className='cart-item'>
            <div className='rapper'>
                <img className='cart-item-image' src={src} alt={props.productName}  onError={onErrorHandler} />
            </div>
            <div className='rapper'>
                <p className='cart-item-name'>{props.productName}</p>
            </div>
            <div className='rapper'>
                <p className='cart-item-qty'>Quantity:</p>
            </div>
            <div className='rapper'>
                <input type='number' min='1' value={quantity} onChange={e => {setQuantity(e.target.value); props.getQuantity(e.target.value)}} className='cart-item-number' />
            </div>
            <div className='rapper'>
                <p>{totalPrice} <span>{props.currency}</span></p>
            </div>
            <div >
                <MdTrash onClick={() => removeItemHandler()} className='delete-item' />
            </div>
        </div>
    )
}

export default ShoppingCartItem