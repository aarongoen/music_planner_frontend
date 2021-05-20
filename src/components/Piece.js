import React from 'react';
import { Link } from 'react-router-dom';

 function Piece({piece}) {
    console.log(piece)
    return (
        <div>
            <h2><Link to={`/pieces/${piece.id}`}>{piece.title}: {piece.composer}</Link></h2>
        </div>

    )
};piece

export default Piece;
