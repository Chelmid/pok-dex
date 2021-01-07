//autre facon
//import { INIT, SET_POKEMON_ID, STATUS_ONE_POKEMON } from './constant-actions'
let total = 60
let limite = 10
// initialisation des states
const initialState = {
    apiPokemon: 'https://pokeapi.co/api/v2/pokemon?limit=' + total,
    displayOnePokemon: true,
    pokemonListContinue : 'https://pokeapi.co/api/v2/pokemon/?limit=' + limite + '&offset=' + total
}

let ReducerPokemonlist = (state = initialState, action = {}) => {

    switch (action.type) {

        case 'INIT_LIST':
            console.log(state.countPokemon)

            return { ...state, countPokemon: state.countPokemon.push(action.payload) }

        case 'STATUS_ONE_POKEMON':
            console.log(state.displayOnePokemon)

            return { ...state, displayOnePokemon: action.display }

        case 'COUNTER_POKEMON':
            console.log(state.countPokemon)

            return { ...state, countPokemon: action.counter }

        case 'LIST_CONTINUE_POKEMON':
            console.log(state.pokemonListContinue)
    
            return { ...state, pokemonListContinue: 'https://pokeapi.co/api/v2/pokemon/?limit=' + limite + '&offset=' + (action.continue + total) }

        default:
            return state;
    }
}

export default ReducerPokemonlist