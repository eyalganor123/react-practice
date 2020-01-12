import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock.jsx';
import Switch from './switch.jsx';

function App () {
  const handleSwitchChange = (isToggled) => {
    console.log(isToggled)
  }
  
  return (
    <div className="App">
      <Clock color="red" />
      <Clock color="yellow" />
      <Clock />
      <Clock />
      <Clock />

      <Switch onChange={handleSwitchChange} />
    </div>
  );
}

export default App;
