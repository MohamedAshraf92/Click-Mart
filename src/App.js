import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from 'react-modal'

import './App.css';
import LoginPage from './containers/loginPage/loginPage'
import StoreLayout from './containers/storeLayout/storeLayout'
import AddProduct from './components/addProduct/addProduct'
import ProductsContainer from './containers/productsContainer/productsContainer'
import EditProduct from './components/editProduct/editProduct'
import Product from './components/product/product'
import ShoppingCart from './containers/shoppingCart/shoppingCart'

Modal.setAppElement('#root')

const App = (props) => {

    const isLogged = useSelector(state => state.loginReducer.isLogged)

    return (
        <Switch>
            <Route exact path='/' >
                { isLogged ? <Redirect to='/store' /> : <LoginPage/> }
            </Route>
            <StoreLayout>
                <Route exact path='/addProduct' component={AddProduct} />
                <Route exact path='/store' component={ProductsContainer} />
                <Route exact path='/store/:id' component={Product} />
                <Route exact path='/shoppingCart' component={ShoppingCart} />
                <Route exact path='/editProduct/:id' component={EditProduct} />
            </StoreLayout>
            <Route component={() => {return(<h1>NOT FOUND</h1>)}} />
        </Switch>
    );
}

export default App;