import React, { Component } from 'react';
import './App.css';
import Logo from './img/Logo.png';
import { AnimatedText } from "./AnimatedText";


class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="container">
        <h1 className="animated">
Hello World
        </h1>
        <AnimatedText textColor="#fff" overlayColor="#000">
     Mohammad Jumaa
    </AnimatedText>
        <p><img src={Logo} alt="Jumaa Logo" /></p>
       </div>
      </div>
    );
  }
}

export default App;
