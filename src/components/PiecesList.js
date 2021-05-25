import React from 'react';
// import React, { Component } from 'react'
// import { getDays } from '../redux/actions/dayActions'
// import { connect } from 'react-redux'
// import Day from './Day'
import { Link } from 'react-router-dom';
<h4>Pieces: </h4>

const PiecesList = ({ pieces, dayId }) => {
    console.log(pieces)

console.log(dayId)

const renderPieces = Object.keys(pieces).map(pieceId =>
    <p key={pieceId}><Link to={`/days/${dayId}/pieces/${pieceId}`}>{pieces[pieceId].title} -{pieces[pieceId].composer}</Link></p>
    );

    return (
        <div>
        <h4>Recommended pieces:</h4>
            {renderPieces}
        </div>
    )
}

export default PiecesList;