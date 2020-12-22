

// initialisation des states
let stateInit = {
    users: [
        "Apalala",
        "Balaur",
        "Bollaa"
    ],
}
let reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case TEST:

            return { ...state, dragon: action.payload }

        default:
            return state;
    }
    return state
}

export default reducer;