import React, { Component } from 'react';
// import React from 'react';
import { Route, Switch, Link} from  'react-router-dom';
import { connect } from 'react-redux';


import { getDays, showDay } from '../redux/actions/dayActions.js';
import { createPiece, getPieces } from '../redux/actions/pieceActions.js';

import Welcome from '../components/Welcome';
import DayShow from '../components/DayShow';
import DaysList from '../components/DaysList';

import PieceForm from '../components/PieceForm';
import PiecesList from '../components/PiecesList';
class DisplayContainer extends Component {

    componentDidMount() {
        this.props.getDays()
        // this.props.getPieces()
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
// debugger
        return (
            <div>
               {/* Hello from DisplayContainer */}
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/days">Days</Link>
                      </li>
                      {/* <li>
                          <Link to="/users">Users</Link>
                      </li> */}
                  </ul>
              </nav>
                <Switch>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/days/:id' render={(routerProps) => {
                        return <DayShow {...routerProps} days={this.props.days} pieces={this.props.pieces} />}}/>
                    <Route exact path='/days' render = {(routerProps) => {
                        return <DaysList {...routerProps} days={this.props.days} />}} />
                    <Route path='/days/:dayId/pieces/:pieceId' render={()=> console.log("hitting the nested route")}/>
                    <Route path='/days/:dayId/pieces/new' render={routerProps => {
                        return <PieceForm {...routerProps} day={this.props.days} />}} />
                    {/* <Route path='/pieces' component={PiecesListNew} /> */}
               </Switch>
            </div>  
            )
        }

}

const mapStateToProps = state => {
    return {
        days: state.days
    }
}


const mapDispatchToProps = dispatch => {
    return {
      getDays: () => {
        dispatch(getDays())
      },
      showDay: () => {
        dispatch(showDay())
      },
      createPiece: () => {
        dispatch(createPiece())
      },
      getPieces: () => {
        dispatch(getPieces())
      },

    };
  };

// mapsDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);
// export default connect (state => ({ days: state.days, pieces: state.pieces }))(DisplayContainer);
