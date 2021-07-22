import React, { Component } from 'react';
import { Route, Switch, Link} from  'react-router-dom';
import { connect } from 'react-redux';

import { getDays, showDay } from '../redux/actions/dayActions.js';
import { createPiece } from '../redux/actions/pieceActions.js';
// import { getPieces } from '../redux/actions/pieceActions.js';

import Welcome from '../components/Welcome';
import DayShowNew from '../components/DayShowNew';
import DaysList from '../components/DaysList';

import PieceForm from '../components/PieceForm';
class DisplayContainer extends Component {

    componentDidMount() {
        this.props.getDays()
        // this.props.getPieces()
      }

        render() {
        return (
            <div>
               {/* Hello from DisplayContainer */}
              <nav>
                  <ul>
                    <Link to="/">Home</Link>
                  </ul>
                  <ul>
                    <Link to="/days">Days</Link>
                  </ul>
              </nav>
                <Switch>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/days/:id' component={DayShowNew} />
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
      // getPieces: () => {
      //   dispatch(getPieces())
      // },

    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);
// export default connect (state => ({ days: state.days, pieces: state.pieces }))(DisplayContainer);
