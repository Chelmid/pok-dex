const initialState = {

    connect: false,
    seePassword: 'password',
    message: '',
    pokemonTeams: { id: [] }

}

let ConnectUserReducer = (state = initialState, action = {}) => {

    switch (action.type) {

        case 'CONNECT':
            console.log(state.connect)

            return { ...state, connect: action.connection }

        case 'SEE_PASSWORD':
            console.log(state.seePassword)

            return { ...state, seePassword: action.showPassword }

        case 'POKEMON_TEAM_ADD':
            console.log(state.pokemonTeams.id)
            if(state.pokemonTeams.id.length < 6){
                state.pokemonTeams.id.push(action.pokemonTeamAdd)
            return { ...state, pokemonTeams: state.pokemonTeams }
            }

        case 'POKEMON_TEAM_REMOVE':
            console.log(state.pokemonTeam)

            return { ...state, pokemonTeam: action.showPassword }

        default:
            return state;
    }
}

export default ConnectUserReducer