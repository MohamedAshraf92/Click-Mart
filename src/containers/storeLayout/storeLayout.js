import React from 'react'

import './storeLayout.css'
import NavigationBar from '../../components/navigationBar/navigationBar'
import SideBar from '../../components/sideBar/sideBar'

const StoreLayout = (props) => {

    return (
        <div className='outer-frame'>
            <NavigationBar/>
            <div className="layout-container" >
                <SideBar/>
                {props.children}
            </div>
        </div>
    )
}

export default StoreLayout
