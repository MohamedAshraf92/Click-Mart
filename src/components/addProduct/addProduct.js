import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './addProduct.css'
import axios from '../../axios'

const AddProduct = (props) => {
    const [newProduct, setNewProduct] = useState({})
    const [products, setProducts] = useState([])
    const [run, setRun] = useState(false)
    
    const { handleSubmit, register } = useForm()
    
    const owner = useSelector(state => state.loginReducer.user.name)
    
    const history = useHistory()

    const getProducts = () => {axios.get('/products')
        .then(res => {
            setProducts(res.data)
        })
        .catch(err => {window.alert('Can\'t get products data')})
    }

    useEffect(() => {
        getProducts()
    }, [])
    
    useEffect(() => {
        if (run) {
            // console.log(newProduct)
            const addPost = () => {
                axios.post('/products', newProduct)
                .then(res => {
                    // console.log(res)
                    window.alert('The product added successfully')
                    history.replace('/store')
                })
                .catch(err => window.alert('Product did not added'))
            }
            addPost()
        }
    }, [run, newProduct, history])

    const onSumbit = (data) => {
        const updatedData = data
        updatedData.createdAt = new Date().toISOString()
        updatedData.id = products.length + 1
        updatedData.owner = owner
        setNewProduct(updatedData)
        setRun(true)
        // console.log(updatedData)
    }

    return (
        <div className='add-product-form'>
            <h1>Complete the next form to add new product</h1>
            <form onSubmit={handleSubmit(onSumbit)}>
                <label>Product Name</label>
                <input type='text' name='product' ref={register}/>

                <label>Product Description</label>
                <input type='text' name='productDescription' ref={register}/>

                <label>Product Count</label>
                <input type='number' name='productCount' ref={register}/>

                <label>Product Price</label>
                <input type='number' name='productPrice' ref={register}/>

                <label>Product Currency</label>
                <input type='text' name='productCurrency' ref={register}/>

                <label>Product Image URL</label>
                <input type='text' name='productImage' ref={register}/>

                <label>Product Category</label>
                <input type='text' name='productCategory' ref={register}/>

                <div>
                    <label>Product Onsale?</label>
                    <input type='checkbox' name='onSale' ref={register}/>
                </div>

                <button type="submit">ADD PRODUCT</button>
            </form>
        </div>
    )
}

export default AddProduct