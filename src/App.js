// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { getDays } from './redux/actions/dayActions';

import PieceForm from "./components/PieceForm";
import DayShow from './components/DayShow';
import DaysPage from './components/DaysPage'

// / - Home (Dashboard)
// /days - list of days
// /day/:id - Day view
// /piece/new - new piece form
// /piece/api


class App extends React.Component {
  componentDidMount() {
    this.props.getDays();
  }
//  useEffect(() => {

//  })

// renderDays = (routerProps) => {
//   return <DaysPage {...routerProps} days={this.props.days} />
// }

  render() {
    // let { match } = this.props
    return (
      <Router>
    <div div className="App" > 
      <Switch>
        <Route exact path='/' render={() => <div>Welcome to Music Planner</div>} />
        <Route exact path='/days' component={DaysPage} />
        <Route path='/piece/new' render={routerProps => {
          return <PieceForm {...routerProps} day={this.props.day} />}} />
          {/* <Route path='/movies/:id/reviews/new' render = {(routerProps) => <ReviewForm {...routerProps} movies={this.props.movies} />} /> */}
        <Route path='/days/:dayId' render={routerProps => {
          return <DayShow {...routerProps} days={this.props.days}  />}} />
      </Switch>
    </div>
    </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    days: state.days,
    pieces: state.pieces
  }
}

export default withRouter(connect(mapStateToProps, { getDays })(App));
