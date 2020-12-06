import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import LoginPage from './containers/loginPage/loginPage'
import BuyerStore from './containers/buyerStore/buyerStore'
import SellerStore from './containers/sellerStore/sellerStore'

const App = (props) => {

    const isLogged = useSelector(state => state.loginReducer.isLogged)
    const isSeller = useSelector(state => state.loginReducer.user.isSeller)

    let routeComponent = <LoginPage/>

    if (isLogged) {
        if (isSeller) {
            routeComponent = <Redirect to='/sellerStore' />
        } else {
            routeComponent = <Redirect to='/buyerStore' />
        }
    }

    return (
        <Switch>
            <Route exact path='/' >
                {routeComponent}
            </Route>
            <Route path='/sellerStore' exact component={SellerStore} />
            <Route path='/buyerStore' exact component={BuyerStore} />
        </Switch>
    );
}

export default App;