import React, { useEffect, useState } from 'react'

import './productsArea.css'
import axios from '../../axios'
import Card from '../card/card'

const ProductsArea = (props) => {

    const [products, setProducts] = useState([])

    const getProducts = () => {axios.get('/products')
        .then(res => {
            setProducts(res.data)
        })
        .catch(err => {window.alert('Can\'t get products data')})
    }

    useEffect(() => {
        getProducts()
    }, [])

    const cards = products.map(product => (
        <Card 
            photo={product.productImage}
            name={product.product}
            desc={product.productDescription}
            price={product.productPrice}
            key={product.id}
        />
    ))

    return(
        <div className="product-area">
            {cards}
        </div>
    )
}

export default ProductsArea