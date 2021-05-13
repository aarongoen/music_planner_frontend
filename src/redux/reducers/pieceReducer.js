export default (state = [], action) => {
    switch(action.type) {
        case "CREATE_PIECE_SUCCESS":        
            return [...state, action.payload]
        default:
            return state;
    }
};


