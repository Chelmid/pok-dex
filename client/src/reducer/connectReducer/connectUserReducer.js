//init State
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

        // connexion
        case 'CONNECT':

            return { ...state, connect: action.connection }

        //voir le mot de passe en lettre
        case 'SEE_PASSWORD':

            return { ...state, seePassword: action.showPassword }

        //ajouter un pokemon dans la team
        case 'POKEMON_TEAM_ADD':

            if (state.pokemonTeams.id.length < 6) {
                state.pokemonTeams.id.push(action.pokemonTeamAdd)
                return { ...state, pokemonTeams: state.pokemonTeams, messageTeam: 'In team' }
            } else {
                return { ...state, messageTeam: 'team full' }
            }

        //retirer un pokemon dans la team
        case 'POKEMON_TEAM_REMOVE':

            state.pokemonTeams.id = state.pokemonTeams.id.filter((id) => action.pokemonTeamRemove !== id)
            return { ...state, pokemonTeams: state.pokemonTeams }

        //charger les données de la team
        case 'ONLOAD_POKEMON_TEAMS':

            state.pokemonTeams = action.pokemonTeamOnload

            return { ...state, pokemonTeams: state.pokemonTeams, messageTeam: 'In team' }
        
        //charger la données des pokemon capturer
        case 'ONLOAD_POKEMON_CAPTURE':

            state.pokemonCapture = action.pokemonCaptureOnload

            return { ...state, pokemonCapture: state.pokemonCapture, messageCapture: 'capturer' }
        
        // ajouter des pokemon dans la liste des capturer
        case 'POKEMON_CAPTURE_ADD':

            state.pokemonCapture.id.push(action.pokemonCaptureAdd)
            return { ...state, pokemonCapture: state.pokemonCapture, messageCapture: 'capturer' }

        // retirer des pokemon dans la liste des capturer
        case 'POKEMON_CAPTURE_REMOVE':

            state.pokemonCapture.id = state.pokemonCapture.id.filter((id) => action.pokemonCaptureRemove !== id)
            return { ...state, pokemonCapture: state.pokemonCapture }

        default:
            return state;
    }
}

export default ConnectUserReducer