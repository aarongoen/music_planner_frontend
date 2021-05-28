
export const createPiece = (piece, day_id, history) => {
    console.log('createPiece action called')
    console.log(piece)
    console.log(history)
    return (dispatch) => {
        fetch(`http://localhost:3000/days/${day_id}/pieces`, {
            method: 'POST',
            headers: {
                Accepts: 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(piece)
        })
        .then((res) => {
            console.log(res)
            if (res.ok) {
                return res.json();
                // console.log(res)
            } else {
                throw new Error(res.statusText);
            }
        })
        .then(data => {
            console.log(data)
            dispatch({type: 'CREATE_PIECE_SUCCESS', payload: data})
            // history.push(`/days/${dayId}`)
        })
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

export const getPiece = (dayId, pieceId) => {
    return dispatch => {
        fetch(`http://localhost:3000/days/${dayId}/pieces/${pieceId}`)
            .then(res => res.json())
            .then((data) => dispatch({type: 'SHOW_PIECE_SUCCESS', payload: data})
            );
    };
};


