import React from 'react';
// import React, { Component } from 'react'
// import { getDays } from '../redux/actions/dayActions'
// import { connect } from 'react-redux'
// import Day from './Day'
import { Link } from 'react-router-dom';

const PiecesList = ({ pieces }) => {
    return Object.keys(pieces).map(pieceId =>
    <p key={pieceId}><Link to={`/pieces/${pieceId}`}>{pieces[pieceId].title}</Link></p>
    );
}

export default PiecesList;
