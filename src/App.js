import './styles/App.css';
import React, { Component }  from 'react';
import {Header} from './components/Header/Header';
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/home/Home';
function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
