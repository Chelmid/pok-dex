import { INIT } from './constant-actions'

// initialisation des states
let stateInit = {
    Pokemon: [
        idPokemon = '',
        apiPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=20'
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