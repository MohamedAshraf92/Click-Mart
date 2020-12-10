import React from 'react'

import './loginPage.css'
import Logo from '../../components/logo'
import LoginForm from '../../components/loginForm/loginForm'

const Login = (props) => (
    <div className="login-container">
        <h1 className="welcome">Welcome to Click Mart</h1>
        <Logo size={{width: 300, height: 300}} />
        <h2 className="subtext">LOGIN and get what you need by Click</h2>
        <LoginForm  />
    </div>
)

export default Login

// clicked={props.login}