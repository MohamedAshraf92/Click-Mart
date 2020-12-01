import React from 'react'

import './login.css'
import Logo from '../../components/logo'
import LoginForm from '../../components/loginForm/loginForm'

const Login = (props) => (
    <div className="container">
        <h1>Welcome to Click Mart</h1>
        <Logo size={{width: 300, height: 300}} />
        <h2>LOGIN and get what you need by Click</h2>
        <LoginForm/>
    </div>
)

export default Login