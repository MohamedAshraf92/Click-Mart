import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import './shoppingCartItem.css'
import MdTrash from 'react-ionicons/lib/MdTrash'
import { removeFromCart } from '../../store/actions/loginActions'

const ShoppingCartItem = (props) => {
    
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()

    const totalPrice = props.price * quantity

    const removeItemHandler = () => {
        dispatch(removeFromCart(props.id))
        console.log('delete')
    }

    return (
        <div className='cart-item'>
            <div className='rapper'>
                <img className='cart-item-image' src={props.image} alt={props.productName} />
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