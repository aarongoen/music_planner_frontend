// import React, {PureComponent} from 'react';
import React, { Component } from 'react'
// import { getDays } from '../redux/actions/dayActions'
// import { connect } from 'react-redux'
// import Day from './Day'
import { Link } from 'react-router-dom';
import PiecesListItem from './PiecesListItem';


 const PiecesListNew = ({pieces}) => {

            return (
                <>  
                <h4>Recommended pieces:</h4>
                <ul>  
                 {pieces.map(piece => <PiecesListItem key={piece.id} piece={piece}/>)}
                </ul>
                </>
                )
        }
    
export default PiecesListNew;

