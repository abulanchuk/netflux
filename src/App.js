import React from 'react';

import './App.css';
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FouthComponent"
import error from "./image/404pic.png";
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
         <SecondComponent/>
          <img src={error} className="App-logo" alt="logo"/>
          <img/>
          <ThirdComponent/>
          <FourthComponent name = "netflix"/>
      </header>
    </div>
  );

}




