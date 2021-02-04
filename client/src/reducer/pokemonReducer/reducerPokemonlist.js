//autre facon
//import { INIT, SET_POKEMON_ID, STATUS_ONE_POKEMON } from './constant-actions'

//init 
let totalInit = 70
let limiteInit = 10
let pokemonListTotalApi = 850

// initialisation des states
const initialState = {
    total: totalInit,
    limite: limiteInit,
    apiPokemon: 'https://pokeapi.co/api/v2/pokemon?limit=' + totalInit,
    displayList: true,
    pokemonListContinue: 'https://pokeapi.co/api/v2/pokemon/?limit=' + limiteInit + '&offset=' + totalInit,
    pokemonListTotal: [],
    pokedex: true
}

let ReducerPokemonlist = (state = initialState, action = {}) => {

    switch (action.type) {

        case 'INIT_LIST':

            return { ...state, countPokemon: state.countPokemon.push(action.payload) }

        case 'STATUS_ONE_POKEMON':

            return { ...state, displayList: action.display, pokedex: action.pokedex }

        case 'COUNTER_POKEMON':

            return { ...state, countPokemon: action.counter }

        case 'LIST_CONTINUE_POKEMON':

            if (state.limite <= pokemonListTotalApi) {
                state.limite = state.limite + action.continue
                return { ...state, pokemonListContinue: 'https://pokeapi.co/api/v2/pokemon/?limit=' + state.limite + '&offset=' + state.total }
            } else {
                return state;
            }

        case 'LIST_TOTAL_POKEMON':

            return { ...state, pokemonListTotal: action.nextList }
        default:
            return state;
    }
}

export default ReducerPokemonlist