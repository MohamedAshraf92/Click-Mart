import React from 'react'

import './onSaleArea.css'
import Card from '../card/card'

const OnSaleArea = (props) => {
    const cards = props.onSaleProducts.map(product => (
        <Card 
            id={product.id}
            photo={product.productImage}
            name={product.product}
            desc={product.productDescription}
            price={product.productPrice}
            currency={product.productCurrency.split(" ")[0]}
            key={product.id}
            product={product}
        />
    ))

    return (
        <div className='onsale-area'>
            <h2>YOUR ONSALE PRODUCTS:</h2>
            <div className='onsale-products'>
                {cards}
            </div>
        </div>
    )
}

export default OnSaleArea