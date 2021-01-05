import { INIT, SET_POKEMON_ID, STATUS_ONE_POKEMON } from './constant-actions'

// initialisation des states
const initialState = {
    idPokemon: 1,
    apiPokemon: 'https://pokeapi.co/api/v2/pokemon?limit=20',
    countPokemon: [],
    statusOnePokemon: true
}
export default (state = initialState , action = {}) => {

    switch (action.type) {

        case 'INIT':
            console.log(state.countPokemon)

            return { ...state, countPokemon: state.countPokemon.push(action.payload) }

        case 'SET_POKEMON_ID':
            console.log(state.countPokemon)

            return { ...state, idPokemon: action.payload }

        case 'STATUS_ONE_POKEMON':
            console.log(state.statusOnePokemon)

            return { ...state, statusOnePokemon: action.status }

        default:
            return state;
    }
}