import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import LoginPage from './containers/loginPage/loginPage'
import StoreLayout from './containers/storeLayout/storeLayout'

const App = (props) => {

    const isLogged = useSelector(state => state.loginReducer.isLogged)

    return (
        <Switch>
            <Route exact path='/' >
                { isLogged ? <Redirect to='/store' /> : <LoginPage/> }
            </Route>
            <Route path='/store' exact component={StoreLayout} />
        </Switch>
    );
}

export default App;