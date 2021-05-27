const reducePiece = (state = [], action) => {
    switch(action.type) {
        case "CREATE_PIECE_SUCCESS": 
        // console.log({pieces: state.pieces.concat(action.payload.text) })    
            return {...state, pieces: [...state.pieces, action.payload]}
        case "FETCH_PIECES_SUCCESS":
            return action.payload
        case "GET_PIECE_SUCCESS":
            return
        default:
            return state;
    }
};

export default reducePiece;
