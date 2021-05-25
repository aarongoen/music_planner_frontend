export const createPiece = (newPieceData, dayId, history) => {
    console.log('createPiece action called')
    return (dispatch) => {
        fetch(`http://localhost:3000/days/${dayId}/pieces/new`, {
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
            history.push(`/days/${dayId}/pieces`)
}
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

export const getPiece = (dayId, pieceId) => {
    return dispatch => {
        fetch(`http://localhost:3000/days/${dayId}/pieces/${pieceId}`)
            .then(res => res.json())
            .then((data) => dispatch({type: 'SHOW_PIECE_SUCCESS', payload: data})
            );
    };
};


