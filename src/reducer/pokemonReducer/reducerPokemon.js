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
        'normal' : 'gray',
        'flying' : 'lightgrey',
        'fairy' : 'pink',
        'ground' : '#CC9900',
        'poison' : '#CC33FF',
        'fighting' : '#CC3300',
        'rock' : 'grey',
        'ghost' : '#660099',
        'psychic' : '#FF00FF',
        'electric' : 'yellow',
        'dark' : '#333333',
        'dragon' : '#6600FF',
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