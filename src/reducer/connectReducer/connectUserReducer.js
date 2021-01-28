const initialState = {

    connect: false,
    seePassword: 'password',
    message: '',
    pokemonTeam: {}

}

let ConnectUserReducer = (state = initialState, action = {}) => {

    switch (action.type) {

        case 'CONNECT':
            console.log(state.connect)

            return { ...state, connect: action.connection }

        case 'SEE_PASSWORD':
            console.log(state.seePassword)

            return { ...state, seePassword: action.showPassword }

        case 'POKEMON_TEAM':
            console.log(state.pokemonTeam)

            return { ...state, pokemonTeam: action.showPassword }

        default:
            return state;
    }
}

export default ConnectUserReducer