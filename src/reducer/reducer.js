import { TEST } from './constant-actions'

// initialisation des states
let stateInit = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla"
    ],
}
let reducerDragon = (state = stateInit, action = {}) => {

    switch (action.type) {

        case TEST:

            return { ...state, dragon: action.payload }

        default:
            return state;
    }
    return state
}

export default reducerDragon;