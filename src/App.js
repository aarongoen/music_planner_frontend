import logo from './logo.svg';
import './App.css';
import {Switch, Route, Router, useRouteMatch} from 'react-router-dom'
import Home from './components/Home';
import DaysList from "./components/DaysList";
import PieceForm from "./components/PieceForm";
import DayShow from './components/DayShow';

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
      <Route exact path='/days/:id' component={DayShow} />
      <Route path={`${match.path}/:id`}></Route>
    </Switch>
  </div>;
}

export default App;
