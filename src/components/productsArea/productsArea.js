import React from 'react'

import './productsArea.css'
import Card from '../card/card'

const ProductsArea = (props) => {
    const cards = props.products.map(product => (
        <Card 
            id={product.id}
            photo={product.productImage}
            name={product.product}
            desc={product.productDescription}
            price={product.productPrice.split(".")[0]}
            currency={product.productCurrency.split(" ")[0]}
            key={product.id}
            product={product}
        />
    ))

    return(
        <div className="product-area">
            {cards}
        </div>
    )
}

export default ProductsArea