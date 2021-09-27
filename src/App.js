import logo from './logo.svg';
import './App.css';
import Landing from './views/landing/Landing';
import Claims from './views/Claims/Claims'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div>


      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      <Route path="/claim">
          <Claims />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
        
      </Switch>
    </div>
  </Router>
  );
}

export default App;
