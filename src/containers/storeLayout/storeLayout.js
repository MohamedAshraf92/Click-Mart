import React from 'react'

import './storeLayout.css'
import NavigationBar from '../../components/navigationBar/navigationBar'

const StoreLayout = (props) => {

    return (
        <div className='outer-frame'>
            <NavigationBar/>
            <div className="layout-container" >
                {props.children}
            </div>
        </div>
    )
}

export default StoreLayout
