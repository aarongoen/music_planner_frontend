// import logo from './logo.svg';
import { Component } from 'react';
// import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getDays } from './redux/actions/dayActions';

import DisplayContainer from './containers/DisplayContainer'
class App extends Component {

render() {
  return (
      <div className="App" > 
        <DisplayContainer />
      </div>
      );
    }
}
    



// export default connect(null, { getDays })(App);
export default App;