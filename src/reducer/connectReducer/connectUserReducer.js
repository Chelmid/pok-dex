const initialState = {
    
    connect: true,
    message : '',

}

let ConnectUserReducer = (state = initialState, action = {}) => {

    switch (action.type) {

        case 'CONNECT':
            console.log(state.connection)

            return { ...state, connect: action.connection }

        default:
            return state;
    }
}

export default ConnectUserReducer