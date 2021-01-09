//autre facon
//import { INIT, SET_POKEMON_ID, STATUS_ONE_POKEMON } from './constant-actions'

//init 
let totalInit = 60
let limiteInit = 10
let pokemonListTotalApi = 898

// initialisation des states
const initialState = {
    total: totalInit,
    limite : limiteInit,
    apiPokemon: 'https://pokeapi.co/api/v2/pokemon?limit=' + totalInit,
    displayOnePokemon: true,
    pokemonListContinue: 'https://pokeapi.co/api/v2/pokemon/?limit=' + limiteInit + '&offset=' + totalInit,
    pokemonListTotal: []
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

            if(state.limite <= pokemonListTotalApi){
                state.limite = state.limite + action.continue
                return { ...state, pokemonListContinue: 'https://pokeapi.co/api/v2/pokemon/?limit=' + state.limite + '&offset=' + (state.total) }
            }else{
                return state;
            }
            
        case 'LIST_TOTAL_POKEMON':
            console.log(state.pokemonListTotal)

            return { ...state, pokemonListTotal: action.nextList }
        default:
            return state;
    }
}

export default ReducerPokemonlist