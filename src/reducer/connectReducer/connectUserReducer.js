const initialState = {

    connect: true,
    seePassword : 'password',
    message: '',

}

let ConnectUserReducer = (state = initialState, action = {}) => {

    switch (action.type) {

        case 'CONNECT':
            console.log(state.connection)

            return { ...state, connect: action.connection }

        case 'SEE_PASSWORD':
            console.log(state.seePassword)

            return { ...state, seePassword: action.showPassword }

        default:
            return state;
    }
}

export default ConnectUserReducer