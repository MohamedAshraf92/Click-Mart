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

            default:
                return state
        }
}

export default reducer
