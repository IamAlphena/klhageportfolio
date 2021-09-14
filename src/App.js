import React from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Examples from './Components/Examples';
import Contact from './Components/Contact';
// import Navbar from './Components/Navbar';

function App() {
  return (
   <>
    <Header />
    <About />
    <div className="spacer"></div>
    <Examples />
    <Contact />
    <Footer /> 
     </>
  );
}

export default App;
