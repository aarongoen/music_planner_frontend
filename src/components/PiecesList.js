import React from 'react';
// import React, { Component } from 'react'
// import { getDays } from '../redux/actions/dayActions'
// import { connect } from 'react-redux'
// import Day from './Day'
import PiecesListItem from './PiecesListItem'
import { Link } from 'react-router-dom';
<h4>Pieces: </h4>

const PiecesList = (props) => {
    // console.log(pieces)
console.log(props)
// console.log(dayId)
let {pieces} = props

const renderPieces = Object.keys(pieces).map(pieceId =>
    //go through each piece and create PiecesListItem component
    //PiecesListItem should have a toggle to show 
    <p key={pieceId}><Link to={`/pieces/${pieceId}`}>{pieces[pieceId].title} -{pieces[pieceId].composer}</Link></p>
    );

    return (
        <div>
        <h4>Recommended pieces:</h4>
            {console.log(pieces)}
            {pieces.length > 0 &&
                {renderPieces}}
        </div>
    )
}

export default PiecesList;
