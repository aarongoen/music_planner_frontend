import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

 function Piece({piece}) {
    console.log(piece)

    const handleClick = () => {
        props.appHandleClick(props.piece)
    }
    
    return (
        // <div>
        //     <h2><Link to={`/pieces/${piece.id}`}>{piece.title}: {piece.composer}</Link></h2>
        // </div>
        <NavLink to={`/pieces/${piece.id}`}>
            <p onClick={handleClick}>{props.piece.name}</p>
        </NavLink>

    )
};

export default Piece;
