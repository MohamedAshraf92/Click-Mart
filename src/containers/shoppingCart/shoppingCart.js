import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Modal from 'react-modal'

import './shoppingCart.css'
import ShoppingCartItem from '../../components/shoppingCartItem/shoppingCartItem'
import Product from '../../components/product/product'
import axios from '../../axios'
import { clearCart } from '../../store/actions/loginActions'

const ShoppingCart = (props) => {

    const [shoppingCartModal, setShoppingCartModal] = useState(false)
    const [productAmount, setProductAmount] = useState(1)

    const shoppingCartProducts = useSelector(state => state.loginReducer.user.shoppingCart)
    const user = useSelector(state => state.loginReducer.user)

    const dispatch = useDispatch()
    const history = useHistory()
    
    const getProductAmount = (quantity) => {
        setProductAmount(quantity)
    }

    const shoppingCartItems = shoppingCartProducts.map(product => (
        <ShoppingCartItem 
            key={product.id}
            image={product.productImage}
            productName={product.product}
            price={product.productPrice}
            currency={product.productCurrency.split(" ")[0]}
            id={product.id}
            getQuantity={getProductAmount}
        />
    ))

    const openModalHandler = () => {
        setShoppingCartModal(true)
    }

    const purchasingHandler = () => {
        shoppingCartProducts.forEach(product => {
            const editCountData = {
                ...Product,
                productCount: product.productCount - productAmount
            }
            const productID = product.id
            axios.put(`/products/${productID}`, editCountData)
            .then(res => {
                setShoppingCartModal(false)
                dispatch(clearCart())
                history.replace('/store')
            })
            .catch(err => window.alert('FAILED'))
        })
    }

    return (
        <div className='shopping-cart'>
            <div className='cart-items'>
                {shoppingCartItems}
            </div>
            <button onClick={openModalHandler} className='purchase-btn'>PURCHASE</button>
            <Modal className='confirm-purchase-modal' isOpen={shoppingCartModal} onRequestClose={() => setShoppingCartModal(false)}>
                <p>Thank you for using CLICK MART</p>
                <p>Products will dleiver to</p>
                <p>{user.street}, {user.city}, {user.country}</p>
                <p>Please, Confirm to finish purchasing</p>
                <button onClick={purchasingHandler}>CONFIRM</button>
            </Modal>
        </div>
    )
}

export default ShoppingCart