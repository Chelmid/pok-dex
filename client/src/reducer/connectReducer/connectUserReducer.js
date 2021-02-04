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

            return { ...state, connect: action.connection }

        case 'SEE_PASSWORD':

            return { ...state, seePassword: action.showPassword }

        case 'POKEMON_TEAM_ADD':

            if (state.pokemonTeams.id.length < 6) {
                state.pokemonTeams.id.push(action.pokemonTeamAdd)
                return { ...state, pokemonTeams: state.pokemonTeams, messageTeam: 'In team' }
            } else {
                return { ...state, messageTeam: 'team full' }
            }

        case 'POKEMON_TEAM_REMOVE':


            state.pokemonTeams.id = state.pokemonTeams.id.filter((id) => action.pokemonTeamRemove !== id)
            return { ...state, pokemonTeams: state.pokemonTeams }

        case 'ONLOAD_POKEMON_TEAMS':

            state.pokemonTeams = action.pokemonTeamOnload

            return { ...state, pokemonTeams: state.pokemonTeams, messageTeam: 'In team' }

        case 'ONLOAD_POKEMON_CAPTURE':

            state.pokemonCapture = action.pokemonCaptureOnload

            return { ...state, pokemonCapture: state.pokemonCapture, messageCapture: 'capturer' }

        case 'POKEMON_CAPTURE_ADD':

            state.pokemonCapture.id.push(action.pokemonCaptureAdd)
            return { ...state, pokemonCapture: state.pokemonCapture, messageCapture: 'capturer' }


        case 'POKEMON_CAPTURE_REMOVE':

            state.pokemonCapture.id = state.pokemonCapture.id.filter((id) => action.pokemonCaptureRemove !== id)
            return { ...state, pokemonCapture: state.pokemonCapture }

        default:
            return state;
    }
}

export default ConnectUserReducer