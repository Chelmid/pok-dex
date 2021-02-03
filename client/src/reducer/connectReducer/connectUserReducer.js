const initialState = {

    connect: false,
    seePassword: 'password',
    messageTeam: '',
    pokemonTeams: { id: [] },
    messageCapture: '',
    pokemonCapture: { id: [] }

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
            console.log(state.pokemonTeams)
            if (state.pokemonTeams.id.length < 6) {
                state.pokemonTeams.id.push(action.pokemonTeamAdd)
                return { ...state, pokemonTeams: state.pokemonTeams, messageTeam: 'In team' }
            } else {
                return { ...state, messageTeam: 'team full' }
            }

        case 'POKEMON_TEAM_REMOVE':
            console.log(state.pokemonTeams)

            state.pokemonTeams.id = state.pokemonTeams.id.filter((id) => action.pokemonTeamRemove !== id)
            return { ...state, pokemonTeams: state.pokemonTeams }

        case 'ONLOAD_POKEMON_TEAMS':
            console.log(action.pokemonTeamOnload)
            state.pokemonTeams = action.pokemonTeamOnload

            return { ...state, pokemonTeams: state.pokemonTeams, messageTeam: 'In team' }

        case 'ONLOAD_POKEMON_CAPTURE':
            console.log(action.pokemonCaptureOnload)
            state.pokemonCapture = action.pokemonCaptureOnload

            return { ...state, pokemonCapture: state.pokemonCapture, messageCapture: 'capturer' }

        case 'POKEMON_CAPTURE_ADD':
            console.log(state.pokemonCapture.id)
            state.pokemonCapture.id.push(action.pokemonCaptureAdd)
            return { ...state, pokemonCapture: state.pokemonCapture, messageCapture: 'capturer' }


        case 'POKEMON_CAPTURE_REMOVE':
            console.log(state.pokemonCapture)

            state.pokemonCapture.id = state.pokemonCapture.id.filter((id) => action.pokemonCaptureRemove !== id)
            return { ...state, pokemonCapture: state.pokemonCapture }

        default:
            return state;
    }
}

export default ConnectUserReducer