import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import './loginForm.css'
import Auxiliary from '../../hoc/Auxiliary'
import axios from '../../axios'
import { login } from '../../store/actions/loginActions'

const LoginForm = props => {

    const dispatch = useDispatch()
    const [enteredEmail, setEnteredEmail] = useState('')

    const LoginHandler = () => axios.get('/users')
        .then(res => {
            const user = res.data.find(user => user.email === enteredEmail)
            console.log(user)
            if (user) {
                const isLogged = true
                dispatch(login(user, isLogged))
            } else {window.alert('User dosen\'t exist')}
        })
        .catch(error => {window.alert('Can\'t get users data')})

    return (
        <Auxiliary>
            <input 
                type='text' 
                placeholder='Enter your email' 
                className='text' 
                value={enteredEmail}
                onChange={(event) => {setEnteredEmail(event.target.value)}}
            />
            <input 
                type='submit' 
                className='submit' 
                onClick={LoginHandler}
            />
        </Auxiliary>
    )
}

export default LoginForm