const reducePiece = (state = [], action) => {
    switch(action.type) {
        case "CREATE_PIECE_SUCCESS":    
        console.log({pieces: state.pieces.concat(action.payload.text) })    
            return {...state, 
                pieces: [...state.pieces, 
                //     {
                // id: newPiece(state.piece),
                // text: 
                action.payload,
                ]
            }
        case "FETCH_PIECES_SUCCESS":
            return action.payload
        default:
            return state;
    }
};

export default reducePiece;
