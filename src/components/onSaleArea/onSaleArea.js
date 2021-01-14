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
            price={product.productPrice.split(".")[0]}
            currency={product.productCurrency.split(" ")[0]}
            key={product.id}
            product={product}
        />
    ))

    return (
        <div className='onsale-area'>
            <h2>PRODUCTS ON SALE TODAY..</h2>
            <div className='onsale-products'>
                {cards}
            </div>
        </div>
    )
}

export default OnSaleArea