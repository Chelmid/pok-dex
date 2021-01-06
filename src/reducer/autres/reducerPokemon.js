import { INIT, SET_POKEMON_ID, STATUS_ONE_POKEMON } from './constant-actions'

// initialisation des states
const initialState = {
    idPokemon: '',
    dataPokemon: ''

}
export default (state = initialState, action = {}) => {

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