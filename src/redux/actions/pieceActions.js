
export const createPiece = (piece, day_id) => {
        return (dispatch) => {
            fetch(`http://localhost:3000/days/${day_id}/pieces`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
            body: JSON.stringify(piece)
            })
            .then((res) => {
                // console.log(res)
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then(data => {
                // console.log(data)
                dispatch({type: 'ADD_PIECE', payload: data})
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

    export const deletePiece = (dayId, pieceId) => {
        return (dispatch) => {
            fetch(`http://localhost:3000/days/${dayId}/pieces/${pieceId}`, {
               method: 'DELETE',
           })
           .then(res => res.json())
           .then(piece => dispatch({type: 'DELETE_PIECE', payload: piece}))
        }
    }