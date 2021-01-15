const initialState = {
    
    displayPageSign: true,

}

let ConnectUserReducer = (state = initialState, action = {}) => {

    switch (action.type) {

        case 'INIT_LIST':
            console.log(state.pageSign)

            return { ...state, displayPageSign: action.pageSign }

        default:
            return state;
    }
}

export default ConnectUserReducer