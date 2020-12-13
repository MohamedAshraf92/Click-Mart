import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './navigationBar.css'
import Logo from '../logo'

const NavigationBar = (props) => {

    const userIsSeller = useSelector(state => state.loginReducer.user.isSeller)

    if (userIsSeller) {
        return (
            <div className='nav-bar'>
                <div className='brand'>
                    <Logo size={{ height: '50px'}} />
                    <p>Click Mart</p>
                </div>
                <div className='nav-items'>
                    <ul>
                        <li>
                            <NavLink className='link' to='/addProduct'>Add Product</NavLink>
                        </li>
                        <li>
                            <NavLink className='link' to='/help'>Log out</NavLink>
                        </li>
                        <li>
                            <NavLink className='link' to=''>Sign out</NavLink>
                        </li>
                    </ul>
                </div>
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
                    <ul>
                        <li>
                            <NavLink exact className='link' to='/shoppingCart'>Shopping Cart</NavLink>
                        </li>
                        <li>
                            <NavLink className='link' to='/addProduct'>Log out</NavLink>
                        </li>
                        <li>
                            <NavLink className='link' to=''>Sign out</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavigationBar