const reducePiece = (state = 
    { pieces: [] }, action) => {
    switch(action.type) {
        case "ADD_PIECE": 
        // console.log(state)    
        //  return days.map(function(day) {
        //     if (day.id !==action.id) {
        //     return day
        //     }
            // return { ...state,
            //         pieces: 
            //         [...state.pieces,
            //        action.payload]
            //         }
            //     };

            return { ...state, pieces: [...state.pieces, action.payload ] }
            // return [ ...state, action.payload]
        case "FETCH_PIECES_SUCCESS":
            return action.payload
        case "GET_PIECE_SUCCESS":
            return action.payload

        
        default:
            return state;
}
    }

export default reducePiece;
        // case "TOGGLE_PIECE":
        //     return state.pieces.map(piece => {
        //         if (piece.id !== action.payload) {
        //             return piece
        //         }
        //         return {
        //             ...piece,
        //             showDetails: !piece.showDetails
        //         }
        //     