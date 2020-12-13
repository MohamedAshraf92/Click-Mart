import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import LoginPage from './containers/loginPage/loginPage'
import StoreLayout from './containers/storeLayout/storeLayout'
import AddProduct from './components/addProduct/addProduct'
import ProductsContainer from './containers/productsContainer/productsContainer'

const App = (props) => {

    const isLogged = useSelector(state => state.loginReducer.isLogged)

    return (
        <Switch>
            <Route exact path='/' >
                { isLogged ? <Redirect to='/store' /> : <LoginPage/> }
            </Route>
            <Route path='/store'>
                <StoreLayout>
                <Route path='/addProduct' component={AddProduct} />
                <Route path='/' component={ProductsContainer} />
                </StoreLayout>
            </Route>
            <Route component={() => {return(<h1>NOT FOUND</h1>)}} />
        </Switch>
    );
}

export default App;