import React from 'react'

import logoImage from '../assets/logo.png'

const Logo = (props) => (
    <img src={logoImage} alt={'Logo'} style={props.size} onClick={props.clicked}/>
)

export default Logo