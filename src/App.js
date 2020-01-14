import React, { Component } from 'react';
import './App.css';
import Clock from './clock.jsx';
import Switch from './switch.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clockIsOn: true,
    };
  }

  handleSwitchChange = (isToggled) => {
    // console.log(isToggled);
    this.setState({ clockIsOn: !this.state.clockIsOn } );
    console.log(this.state.clockIsOn);

  }
  render() {
    return (
      <div className="App">
        <Clock color="rgb(230,230,230)" onSwitch={this.state.clockIsOn}/>
        {/* <Clock color="yellow" />
      <Clock />
      <Clock />
      <Clock /> */}

        <Switch onChange={this.handleSwitchChange} />
      </div>
    );
  }
}

export default App;
