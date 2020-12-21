import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import './productsContainer.css'
import axios from '../../axios'
import ProductsArea from '../../components/productsArea/productsArea'
import Pagination from '../../components/pagination/pagination'
import OnSaleArea from '../../components/onSaleArea/onSaleArea'

const ProductsContainer = (props) => {

    const userIsSeller = useSelector(state => state.loginReducer.user.isSeller)
    
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 12
    
    const getProducts = () => {axios.get('/products')
        .then(res => {
            setProducts(res.data)
        })
        .catch(err => {window.alert('Can\'t get products data')})
    }

    useEffect(() => {
        getProducts()
    }, [])

    const onSaleProducts = products.filter(product => product.onSale === true)

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    if (userIsSeller) {
        return (
            <div className='products-container'>
                <ProductsArea 
                    products={currentProducts}
                />
                <Pagination
                    productsPerPage={productsPerPage}
                    totalProducts={products.length}
                    paginate={paginate}
                />
            </div>
        )
    } else {
        return (
            <div className='products-container'>
                <OnSaleArea 
                    onSaleProducts={onSaleProducts}
                />
                <ProductsArea 
                    products={currentProducts}
                />
                <Pagination
                    productsPerPage={productsPerPage}
                    totalProducts={products.length}
                    paginate={paginate}
                />
            </div>
        )
    }
}

export default ProductsContainer