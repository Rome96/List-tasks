import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/navigation'; //aqui importamos la navegación

class App extends Component {
  render() {
    return (
      <div className="App">

      <Navigation  title='Taks'/> {/* aqui llamamos a la navegacion*/}
      
       <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
