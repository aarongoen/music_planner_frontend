import React, { Component } from 'react';
import PieceForm from './PieceForm';
import PiecesListNew from './PiecesListNew';
// import PiecesList from './PiecesList';
import {showDay} from '../redux/actions/dayActions';
import { connect } from 'react-redux';
import DayDetails from './DayDetails';

import { Router } from 'react-router-dom';
 

class DayShowNew extends Component {

render() {

    console.log(this.props.day)
    
    if (!this.props.day && !this.props.loading) {
        return <h1>There is no day for this id</h1>
    }

    if (!this.props.day) {
        return <h5>"loading..."</h5>
    }

    return (
        <div className="DayShowNew">
            <>
                <DayDetails day={this.props.day}/> 
                <PiecesListNew pieces={this.props.day.pieces} dayId={this.props.day.id}/>
                <PieceForm day={this.props.day}/> 
            </> 
        </div>
    )
    }
}

const mapStateToProps = (state, props) => {
    // debugger
    // find the day that you need here
    const dayId = +props.match.params.id
    let foundDay = state.days.days.find(day => day.id === dayId)
    // find all of the pieces that belong to that day
    // let {pieces} = day
    // console.log(pieces)


    return {
        day: foundDay,
        loading: state.days.loading
        }
    }



export default connect (mapStateToProps, {showDay})(DayShowNew);

