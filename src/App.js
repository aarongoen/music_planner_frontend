import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import DaysList from "./components/DaysList";
import PieceForm from "./components/PieceForm";

// / - Home (Dashboard)
// /days - list of days
// /day/:id - Day view
// /piece/new - new piece form
// /piece/api


function App() {
  return <div> 
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/days' component={DaysList} />
      <Route exact path='/piece/new' component={PieceForm} />
    </Switch>
  </div>;
}

export default App;
