const reducePiece = (state = [], action) => {
    switch(action.type) {
        case "CREATE_PIECE_SUCCESS":    
        console.log({pieces: state.pieces.concat(action.payload.text) })    
            return {...state, 
                piece: 
                //     {
                // id: newPiece(state.piece),
                // text: 
                action.payload,

            }
        case "FETCH_PIECES_SUCCESS":
            return action.payload
        case "GET_PIECE_SUCCESS":
            return
        default:
            return state;
    }
};

export default reducePiece;
