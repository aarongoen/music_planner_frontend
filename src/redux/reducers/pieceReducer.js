const reducePiece = (state = 
    { pieces: [] }, action) => {
    switch(action.type) {
        //     console.log(state)    
        //  let updatedArr = state.days.map(day => {
        //     if (day.id === action.payload) {
        //     return { ...day,
        //             pieces: 
        //             [...state.pieces,
        //            action.payload]
        //             }
        //     } else {
        //         return day
        //     }
        // })

        // return {...state, days: updatedArr}

        // return  {...state, pieces: [...state.pieces, action.payload ]}
            // return [ ...state, action.payload]

        default:
            return state;
    }
    
};

// export default reducePiece;
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
