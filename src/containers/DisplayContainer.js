import React, { Component } from 'react';
// import React from 'react';
import { Route, Switch } from  'react-router-dom';
import { connect } from 'react-redux';


import { getDays, showDay } from '../redux/actions/dayActions.js';

import Welcome from '../components/Welcome';
import DayShow from '../components/DayShow';
import DaysList from '../components/DaysList';

import PieceShow from '../components/PieceShow';
import PieceForm from '../components/PieceForm';

// import { render } from '@testing-library/react';

class DisplayContainer extends Component {

    renderDay = (routerProps) => {
        console.log(routerProps)

        const dayId = parseInt(routerProps.match.params.id)
        console.log(dayId)

        let { days } = this.props
        console.log(days)

        let day = this.props.days.find (day => day.id === dayId)
        console.log(day)

        console.log(this.props)

        return <DayShow {...routerProps} day={day} days={days} pieces={this.props.pieces} dayId={dayId} />
    }

    // renderPiece = (routerProps) => {
    //     console.log(routerProps)

    //     const dayId = parseInt(routerProps.match.params.id)
    //     console.log(dayId)

    //     let { days } = this.props
    //     console.log(days)

    //     let day = this.props.days.find (day => day.id === dayId)
    //     console.log(day)

    //     console.log(this.props)

    //     return <PieceShow {...routerProps} days={days} pieces={this.props.pieces} dayId={dayId} />
    // }

        render() {

        return (
            <div>
               Hello from DisplayContainer
               <Switch>
                    <Route path='/welcome' component={Welcome} />
                    <Route path='/days/:id' render={this.renderDay} />
                    <Route path='/days' render = {(routerProps) => {
                        return <DaysList {...routerProps} days={this.props.days} />}} />
                 
                    <Route path='/days/:dayId/pieces/:pieceId' render={()=> console.log("hitting the nested route")}

                    />
                    <Route path='/days/:dayId/pieces/new' render={routerProps => {
                        return <PieceForm {...routerProps} day={this.props.days} />}} />
               </Switch>
            </div>  
            )
        }

}

const mapStateToProps = state => {
    return {
        days: state.days,
        pieces: state.days.pieces
    }
}

export default connect(mapStateToProps, { getDays, showDay })(DisplayContainer);
