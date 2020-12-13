import React from 'react'

import './productsArea.css'
import Card from '../card/card'

const ProductsArea = (props) => {

    const cards = props.products.map(product => (
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