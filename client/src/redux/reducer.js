

const initialState={
    pokemon:[]

}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case "GET_POKEMON":
            return{
                ...state,
                pokemon: action.payload
            };
        default:
           return state
    }
}

export default rootReducer;