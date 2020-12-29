import * as actionTypes from '../actions/actionTypes'

const initialState = {
    user: {},
    isLogged: false
}

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.LOGIN :
                return {
                    ...state,
                    user: action.user,
                    isLogged: action.isLogged
                }
            case actionTypes.SIGNOUT :
                return {
                    ...state,
                    user: {},
                    isLogged: action.isLogged
                }
            case actionTypes.ADD_TO_CART :
                return {
                    ...state,
                    user: {
                        ...state.user,
                        shoppingCart: state.user.shoppingCart.concat(action.clickedProduct)
                    }
                }
            case actionTypes.REMOVE_FROM_CART :
                return {
                    ...state,
                    user: {
                        ...state.user,
                        shoppingCart: state.user.shoppingCart.filter(product => product.id !== action.id)
                    }
                }
            case actionTypes.CLEAR_CART :
                return {
                    ...state,
                    user: {
                        ...state.user,
                        shoppingCart: []
                    }
                }
            default:
                return state
        }
}

export default reducer
