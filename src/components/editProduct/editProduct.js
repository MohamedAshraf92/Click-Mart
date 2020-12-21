import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Modal from 'react-modal'

import './editProduct.css'
import axios from '../../axios'

const EditProduct = ({ match }) => {

    const [product, setProduct] = useState({})
    const [currency, setCurrency] = useState('')
    const [date, setDate] = useState('')
    const [newPrice, setNewPrice] = useState('')
    const [newAmount, setNewAmount] = useState('')
    const [sale, setSale] = useState(product.onSale)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const history = useHistory()

    const productID =  match.params.id
    
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

    const priceChangeHandler = () => {
        const changedPriceData = {
            ...product,
            productPrice: newPrice
        }
        axios.put(`/products/${productID}`, changedPriceData)
        .then((res) => {
            setProduct(res.data)
            setNewPrice('')
            window.alert('Price changed')
        })
        .catch(err => window.alert('WRONG'))
    }

    const amountChangeHandler = () => {
        const changedAmountData = {
            ...product,
            productCount: newAmount
        }
        axios.put(`/products/${productID}`, changedAmountData)
        .then((res) => {
            setProduct(res.data)
            setNewAmount('')
            window.alert('Amount changed')
        })
        .catch(err => window.alert('WRONG'))
    }
    
    const applySaleHnadler = () => {
        const changedOnsaletData = {
            ...product,
            onSale: sale
        }
        axios.put(`/products/${productID}`, changedOnsaletData)
        .then((res) => {
            setProduct(res.data)
            window.alert('Onsale state changed')
        })
        .catch(err => window.alert('WRONG'))
    }

    const deletProduct = () => {
        
        setModalIsOpen(true)
    }

    const confirmHandler = () => {
        axios.delete(`/products/${productID}`)
        .then((res) => {
            setModalIsOpen(false)
            history.replace('/store')            
        })
        .catch(err => window.alert('WRONG'))
    }

    return (
        <div className='edit-product'>
            <div className='photo-edit-product'>
                <img src={product.productImage} alt={product.product} />
            </div>
            <div className='edit-info'>
                <div className='info-edit-product'>
                    <h1>{product.product}</h1>
                    <p>{product.productDescription}</p>
                    <p>Created at: {date}</p>
                </div>
                <div className='edit-price'>
                    <h3>{product.productPrice} <span>{currency}</span></h3>
                    <h3>Want to edit the price?</h3>
                    <div className='edit-price-ctrl'>
                        <input type='number' placeholder='Enter new price' value={newPrice} onChange={(event) => setNewPrice(event.target.value)} />
                        <button onClick={priceChangeHandler}>EDIT PRICE</button>
                    </div>
                </div>
                <div className='edit-amount'>
                    <h3>Available in stock: {product.productCount} pieces</h3>
                    <h3>Want to change the product amount?</h3>
                    <div className='edit-amount-ctrl'>
                        <input type='number' placeholder='Enter new amount' value={newAmount} onChange={(event) => setNewAmount(event.target.value)} />
                        <button onClick={amountChangeHandler}>EDIT COUNT</button>
                    </div>
                </div>
                <div className='edit-sale'>
                    <h3>Apply Sale?</h3>
                    <input type='checkbox' defaultChecked={product.onSale} onChange={(event) => setSale(event.target.checked)} />
                    <button onClick={applySaleHnadler}>CONFIRM</button>
                </div>
                <button className='delete-product-btn' onClick={deletProduct}>DELETE PRODUCT</button>
            </div>
            <Modal className='delete-product-modal' isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <h2>PRODUCT DATA WILL BE DELETED</h2>
                <h2>Confirm to delete</h2>
                <button onClick={confirmHandler}>CONFIRM</button>
            </Modal>
        </div>
    )
}

export default EditProduct

// onChange={(event) => setSale(event.target.checked)}