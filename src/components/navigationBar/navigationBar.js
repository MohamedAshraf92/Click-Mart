import React from 'react'

import './navigationBar.css'
import Logo from '../logo'
import { NavLink } from 'react-router-dom'

const NavigationBar = (props) => {
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

export default NavigationBar