// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getDays } from './redux/actions/dayActions';

import DaysContainer from './containers/DisplayContainer'

const App = props => {
  // componentDidMount() {
  //   this.props.getDays();
  // }
//  useEffect(() => {

//  })

// renderDays = (routerProps) => {
//   return <DaysPage {...routerProps} days={this.props.days} />
// }

  // render() {
    // let { match } = this.props

    props.getDays()

    return (
    <div className="App" > 
      <DaysContainer />
    </div>
    );
  }


const mapStateToProps = state => {
  return {
    days: state.days,
  }
}

export default connect(null, { getDays })(App);
