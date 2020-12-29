import * as actionTypes from './actionTypes'

export const login = (user, isLogged) => {
    return {
        type: actionTypes.LOGIN,
        user,
        isLogged
    }
}

export const signOut = (isLogged) => {
    return {
        type: actionTypes.SIGNOUT,
        isLogged
    }
}

export const addToCart = (clickedProduct) => {
    return {
        type: actionTypes.ADD_TO_CART,
        clickedProduct
    }
}

export const removeFromCart = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        id
    }
}

export const clearCart = () => {
    return {
        type: actionTypes.CLEAR_CART
    }
}
