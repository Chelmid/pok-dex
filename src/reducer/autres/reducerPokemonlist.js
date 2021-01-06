import { INIT, SET_POKEMON_ID, STATUS_ONE_POKEMON } from './constant-actions'

// initialisation des states
const initialState = {
    apiPokemon: 'https://pokeapi.co/api/v2/pokemon?limit=30',
    countPokemon: [],
    displayOnePokemon: true
}
export default (state = initialState, action = {}) => {

    switch (action.type) {

        case 'INIT_LIST':
            console.log(state.countPokemon)

            return { ...state, countPokemon: state.countPokemon.push(action.payload) }

        case 'STATUS_ONE_POKEMON':
            console.log(state.displayOnePokemon)

            return { ...state, displayOnePokemon: action.display }

        case 'COUNTER_POKEMON':
            console.log(state.countPokemon)

            return { ...state, countPokemon: state.countPokemon.push(action.counter) }

        default:
            return state;
    }
}