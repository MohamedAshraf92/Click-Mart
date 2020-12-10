import React from 'react'

import NavigationBar from '../../components/navigationBar/navigationBar'
import SideBar from '../../components/sideBar/sideBar'
import ProductsArea from '../../components/productsArea/productsArea'

const StoreLayout = (props) => (
    <div>
        <NavigationBar />
        <div className="layout-container">
            <SideBar/>
            <ProductsArea />
        </div>
    </div>
)

export default StoreLayout