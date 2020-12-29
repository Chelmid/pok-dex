import { INIT } from './constant-actions'

// initialisation des states
let stateInit = {
    idPokemon : 1,
    apiPokemon :'https://pokeapi.co/api/v2/pokemon?limit=20',
    countPokemon : 0
}
let reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case INIT:
            console.log( state, action.payload )

            return { ...state, countPokemon: action.payload + state.countPokemon }

        default:
            return state;
    }
    return state
}

export default reducer;