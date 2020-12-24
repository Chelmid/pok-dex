import { INIT } from './constant-actions'

// initialisation des states
let stateInit = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bollaa"
    ],
}
let reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case INIT:

            return { ...state, dragon: action.payload }

        default:
            return state;
    }
    return state
}

export default reducer;