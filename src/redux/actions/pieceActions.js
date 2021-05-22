export const createPiece = (newPieceData, dayId) => {
    // console.log('from the pieceForm')
    return (dispatch) => {
        fetch(`http://localhost:3000/days/${dayId}`, {
            method: 'POST',
            headers: {
                Accepts: 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({ piece: newPieceData }),
        })
        .then((res) => {
            console.log(res)
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.statusText);
            }
        })
        .then(
            (data) => {
                console.log(data)
            dispatch({type: 'CREATE_PIECE_SUCCESS', payload: data})
            }
            // history.push("/days")
        )
        .catch((err) => console.log(err))
    
    }
}

export const getPieces = () => {
    return dispatch => {
        fetch('http://localhost:3000/pieces')
        .then(res => res.json())
        .then((data) => dispatch({type: 'FETCH_PIECES_SUCCESS', payload: data})
            );
    };
};
