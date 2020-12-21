import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import './sideBar.css'
import defualtIMG from '../../assets/defaultIMG.png'

const SideBar = (props) => {

    const user = useSelector(state => state.loginReducer.user)

    const [src, setSrc] = useState(user.avatar)
    const [errored, setErrored] = useState(false)

    const onErrorHandler = () => {
        if (!errored) {
            setSrc(defualtIMG)
            setErrored(true)
        }
    }

    if (user.isSeller) {
        return (
            <div className='side-bar'>
                <p>Welcome</p>
                <p>{user.name}</p>
                <div className='side-profile-picture'>
                    <img 
                        src={src} 
                        alt='user profile avatar'
                        onError={onErrorHandler}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div className='side-bar'>
                <p>Welcome</p>
                <p>{user.name}</p>
                <div className='side-profile-picture'>
                    <img 
                        src={src} 
                        alt='user profile avatar'
                        onError={onErrorHandler}
                    />
                </div>
                <p>You have {user.shoppingCart.length} items in your cart</p>
            </div>
        )
    }
}

export default SideBar