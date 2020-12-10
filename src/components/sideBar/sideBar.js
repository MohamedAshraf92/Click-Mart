import React from 'react'
import { useSelector } from 'react-redux'

import './sideBar.css'

const SideBar = (props) => {

    const userName = useSelector(state => state.loginReducer.user.name)

    return (
        <div className='side-bar'>
            <p>Welcome {userName}</p>
        </div>
    )
}

export default SideBar