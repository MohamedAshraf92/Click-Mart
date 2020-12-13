import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './storeLayout.css'
import NavigationBar from '../../components/navigationBar/navigationBar'
import SideBar from '../../components/sideBar/sideBar'
// import ProductsArea from '../../components/productsArea/productsArea'
// import AddProduct from '../../components/addProduct/addProduct'

const StoreLayout = (props) => (
    <div>
        <NavigationBar />
        <div className="layout-container" >
            <SideBar/>
            {props.children}
        </div>
    </div>
)

export default StoreLayout