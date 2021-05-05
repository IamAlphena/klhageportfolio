import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./pages/about";
import Contact from './pages/contact';
import Examples from './pages/examples';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={About} />
          <Route  path='/About' component={About} />
          <Route  path='/Contact' component={Contact} />
          <Route  path='/Examples' component={Examples} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
