//autres facon
//import { INIT, SET_POKEMON_ID, STATUS_ONE_POKEMON } from './constant-actions'

// initialisation des states
const initialState = {
    idPokemon: '',
    dataPokemon: '',
    apiPokemonSolo: 'https://pokeapi.co/api/v2/pokemon/',
    colorTypes : {
        'bug' : 'lightgreen',
        'water' : 'blue',
        'fire' : 'red',
        'grass' : 'green',
        'poison' : '',
        'poison' : '',
        'poison' : '',
        'poison' : '',
        'poison' : '',
        'poison' : '',
        'poison' : '',
    }

}
let ReducerPokemon = (state = initialState, action = {}) => {

    switch (action.type) {

        case 'SET_POKEMON_ID':
            console.log(state.idPokemon)

            return { ...state, idPokemon: action.id }

        case 'SET_POKEMON_DATA':
            console.log(state.dataPokemon)

            return { ...state, dataPokemon: action.data }

        default:
            return state;
    }
}

export default ReducerPokemon