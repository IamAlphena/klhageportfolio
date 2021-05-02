import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);