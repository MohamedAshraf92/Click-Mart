import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal'

import './navigationBar.css'
import Logo from '../logo'
import defualtIMG from '../../assets/defaultIMG.png'
import { signOut } from '../../store/actions/loginActions'
import MdCart from 'react-ionicons/lib/MdCart'

const NavigationBar = (props) => {

    const user = useSelector(state => state.loginReducer.user)
    const userIsSeller = user.isSeller
    const cartItemsCount = user.shoppingCart.length
    const dispatch = useDispatch()

    const [src, setSrc] = useState(user.avatar)
    const [errored, setErrored] = useState(false)
    const [sideDrawerModal, setSideDrawerModal] = useState(false)

    const history = useHistory()

    const backToStore = () => {
        history.replace('/store')
    }

    const signOutHandler = () => {
        const isLogged = false
        dispatch(signOut(isLogged))
        history.replace('/')
    }

    const onErrorHandler = () => {
        if (!errored) {
            setSrc(defualtIMG)
            setErrored(true)
        }
    }

    const openSideDrawer = () => {
        setSideDrawerModal(true)
    }

    const closeSideDrawer = () => {
        setSideDrawerModal(false)
    }

    if (userIsSeller) {
        return (
            <div className='nav-bar'>
                <div className='brand'>
                    <Logo size={{ height: '60px' }} clicked={backToStore} />
                    <p>Click Mart</p>
                </div>
                <div className='nav-items'>
                    <ul>
                        <li>
                            <NavLink className='link' to='/addProduct'>Add Product</NavLink>
                        </li>
                        <li>
                            <button className='link' onClick={signOutHandler}>Sign out</button>
                        </li>
                    </ul>
                    <div className='nav-profile-picture'>
                        <img 
                        src={src} 
                        alt='user profile avatar'
                        onError={onErrorHandler}
                        />
                    </div>
                    <div className='side-profile-picture'>
                        <img 
                        src={src} 
                        alt='user profile avatar'
                        onError={onErrorHandler}
                        onClick={openSideDrawer}
                        />
                    </div>
                </div>
                <Modal isOpen={sideDrawerModal} onRequestClose={closeSideDrawer} className='side-drawer' overlayClassName='overlay'>
                    <div>
                        <ul>
                            <li>
                                <NavLink className='link' to='/addProduct' onClick={closeSideDrawer} >Add Product</NavLink>
                            </li>
                            <li>
                                <button className='link' onClick={signOutHandler}>Sign out</button>
                            </li>
                        </ul>
                    </div>
                </Modal>
            </div>
        )
    } else {
        return (
            <div className='nav-bar'>
                <div className='brand'>
                    <Logo size={{ height: '60px'}} clicked={backToStore} />
                    <p>Click Mart</p>
                </div>
                <div className='nav-items'>
                    <div className='cart-plugin'>
                        <MdCart className='cart-icon' color='whitesmoke'/>
                        <p>{cartItemsCount}</p>
                    </div>
                    <ul>
                        <li>
                            <NavLink exact className='link' to='/shoppingCart'>Shopping Cart</NavLink>
                        </li>
                        <li>
                            <button className='link' onClick={signOutHandler}>Sign out</button>
                        </li>
                    </ul>
                    <div className='nav-profile-picture'>
                        <img 
                            src={src} 
                            alt='user profile avatar'
                            onError={onErrorHandler}
                        />
                    </div>
                    <div className='side-profile-picture'>
                        <img 
                        src={src} 
                        alt='user profile avatar'
                        onError={onErrorHandler}
                        onClick={openSideDrawer}
                        />
                    </div>
                </div>
                <Modal isOpen={sideDrawerModal} onRequestClose={closeSideDrawer} className='side-drawer' overlayClassName='overlay'>
                    <div>
                        <ul>
                            <li>
                                <NavLink exact className='link' to='/shoppingCart' onClick={closeSideDrawer} >Shopping Cart</NavLink>
                            </li>
                            <li>
                                <button className='link' onClick={signOutHandler}>Sign out</button>
                            </li>
                        </ul>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default NavigationBar