export const createPiece = (newPieceData, history) => {
    console.log('from the pieceForm')
    return (dispatch) => {
        fetch('http://localhost:3001/pieces', {
            method: 'POST',
            headers: {
                Accepts: 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({ piece: newPieceData }),
        })
        .then((res) => {
            console.log(res);
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.statusText);
            }
        })
        .then(
            (data) => dispatch({type: 'CREATE_PIECE_SUCCESS', payload: data}), 
            history.push("/days")
        )
        .catch((err) => console.log(err))
    
    }
}