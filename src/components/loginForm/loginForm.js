import React from 'react'

import './loginForm.css'
import Auxiliary from '../../hoc/Auxiliary'

const LoginForm = (props) => (
    <Auxiliary>
        <input type='text' placeholder='Enter your email' className='text' />
        <input type='submit' className='submit' />
    </Auxiliary>
)

export default LoginForm