import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar'

import About from "./pages/about";
import Contact from './pages/contact';
import Examples from './pages/examples';

function App() {
  return (
   
    <Router>
    <Header />
    <Navbar />
      <div>
          <Route exact path='/' component={About} />
          <Route  path='/About' component={About} />
          <Route  path='/Contact' component={Contact} />
          <Route  path='/Examples' component={Examples} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
