import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './addProduct.css'
import axios from '../../axios'

const AddProduct = (props) => {
    const [newProduct, setNewProduct] = useState({})
    const [run, setRun] = useState(false)
    const [newID, setNewID] = useState('')
    
    const { handleSubmit, register } = useForm()
    
    const owner = useSelector(state => state.loginReducer.user.name)
    
    const history = useHistory()

    
    useEffect(() => {
        const getProducts = () => {axios.get('/products')
            .then(res => {
                const IDArray = []
                res.data.map(item => IDArray.push(item.id))
                const maxID = Math.max(...IDArray)
                console.log(maxID)
                setNewID(maxID)
            })
            .catch(err => {window.alert('Can\'t get products data')})
        }
        getProducts()
    }, [])
    
    useEffect(() => {
        if (run) {
            const addPost = () => {
                axios.post('/products', newProduct)
                .then(res => {
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
        updatedData.id = newID + 1
        updatedData.owner = owner
        setNewProduct(updatedData)
        setRun(true)
    }

    return (
        <div className='add-product-form'>
            <h2>Complete the next form to add new product</h2>
            <form onSubmit={handleSubmit(onSumbit)}>
                <div className='form-row'>
                    <label>Product Name</label>
                    <input type='text' name='product' ref={register}/>
                </div>

                <div className='form-row'>
                    <label>Product Description</label>
                    <input type='text' name='productDescription' ref={register}/>
                </div>

                <div className='form-row'>
                    <label>Product Count</label>
                    <input type='number' name='productCount' ref={register}/>
                </div>

                <div className='form-row'>
                    <label>Product Price</label>
                    <input type='number' name='productPrice' ref={register}/>
                </div>

                <div className='form-row'>
                    <label>Product Currency</label>
                    <input type='text' name='productCurrency' ref={register}/>
                </div>

                <div className='form-row'>
                    <label>Product Image URL</label>
                    <input type='text' name='productImage' ref={register}/>
                </div>

                <div className='form-row'>
                    <label>Product Category</label>
                    <input type='text' name='productCategory' ref={register}/>
                </div>

                <div className='form-row'>
                    <label>Product Onsale?</label>
                    <input type='checkbox' name='onSale' ref={register}/>
                </div>
            </form>
            <button className='add-product-btn' type="submit">ADD PRODUCT</button>
        </div>
    )
}

export default AddProduct