import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './product.css'
import axios from '../../axios'
import { addToCart } from '../../store/actions/loginActions'

const Product = (props) => {

    const [product, setProduct] = useState({})
    const [currency, setCurrency] = useState('')
    const [date, setDate] = useState('')

    const productID =  props.match.params.id

    const dispatch = useDispatch()
    const shoppingCart = useSelector(state => state.loginReducer.user.shoppingCart)

    useEffect(() => {
        const fetchedProduct = () => {
            axios.get(`/products/${productID}`)
            .then(res => {
                setProduct(res.data)
                setCurrency(res.data.productCurrency.split(" ")[0])
                setDate(res.data.createdAt.split("T")[0])
            })
            .catch(err => window.alert('Can\'t get product data'))
        }

        fetchedProduct()
    }, [productID])

    const addToCartHandler = () => {
        const clickedProduct = product
        const productExist = shoppingCart.find(item => item.id === clickedProduct.id)
        if (!productExist){
            dispatch(addToCart(clickedProduct))
        }
    }

    return (
        <div className='product'>
            <div className='photo-product'>
                <img src={product.productImage} alt={product.product} />
            </div>
            <div className='product-info'>
                <h1>{product.product}</h1>
                <h3>{product.productDescription}</h3>
                <p>Created at: {date}</p>
                <h3>{product.productPrice} <span>{currency}</span></h3>
                <h3>Available in stock: {product.productCount} pieces</h3>
                <p>'{product.owner}' is selling this product</p>
                <button onClick={addToCartHandler}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Product
