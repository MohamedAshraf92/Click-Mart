import React from 'react'

import logoImage from '../assets/logo.png'

const Logo = (props) => (
    <img src={logoImage} alt={'Logo'} style={props.size} />
)

export default Logo