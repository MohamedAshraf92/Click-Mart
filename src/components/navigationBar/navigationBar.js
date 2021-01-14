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
    // const [click, setClick] = useState(false)
    // const [menuModalIsOpen, setMenuModalIsOpen] = useState(false)

    const history = useHistory()

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

    // if (window.screen.width < 480) {
    //     setClick(true)
    // } else {
    //     setClick(false)
    // }

    // const openMenuModal = () => {
    //     if (click) {
    //         setMenuModalIsOpen(true)
    //     }
    // }

    if (userIsSeller) {
        return (
            <div className='nav-bar'>
                <div className='brand'>
                    <Logo size={{ height: '60px' }} />
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
                </div>
                {/*<Modal isOpen={menuModalIsOpen} onRequestClose={() => setMenuModalIsOpen(false)} >
                    <div>
                    menu modal
                    </div>
        </Modal>*/}
            </div>
        )
    } else {
        return (
            <div className='nav-bar'>
                <div className='brand'>
                    <Logo size={{ height: '50px'}} />
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
                </div>
            </div>
        )
    }
}

export default NavigationBar