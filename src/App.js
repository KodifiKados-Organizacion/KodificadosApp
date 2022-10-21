import logo from './assets/imgs/logo10_19_20826.png';
import work from './assets/imgs/Video Conference Presentation.gif'
import './styles/App.css';
import React, { Component }  from 'react';
import {Header} from './components/Header/Header';
import { Footer } from './components/Footer/Footer'
function App() {
  let date = Date();

  
  return (
    <div className="App">
        <Header />
        <div className="App-header">
          <span className='container-logo'>
          <img src={ logo } alt="logo" className='logo' />
          <h1>Bienvenidos a la app de Kodifikados </h1>
          </span>
          <p> ... en desarrollo <br></br> { date }</p>
          <img src={ work } alt="trabajando" />

        </div>
        <Footer />
    </div>
  );
}

export default App;
