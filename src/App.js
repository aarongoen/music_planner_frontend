import { Component } from 'react';
import './App.css';

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
    
export default App;