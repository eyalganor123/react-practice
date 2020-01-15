import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      triangle: [],
      length: 20
    }
  }
  makeHorizontal = () => {
    var line = "";
    for (var i = 1; i <= this.state.length; i++) {
      line+="*"
    }
    console.log(line)
  }
  makeVertical = () => {
    var line = "";
    for (var i = 1; i <= this.state.length; i++) {
      line+="*\n"
    }
    console.log(line)
  }
  makeDiagonal = () => {
    var line = "";
    for (var i = 1; i <= this.state.length; i++) {

      for (var j = 1; j <= this.state.length; j++) {
        if (i===j) line+='*'
        else(line+=' ')
      }
      line += "\n";
    }
    console.log(line)
  }
  makeDiagonal2= () => {
    var line = "";
    for (var i = this.state.length; i >= 0; i--) {

      for (var j = 1; j <= this.state.length; j++) {
        if (i===j) line+='*'
        else(line+=' ')
      }
      line += "\n";
    }
    console.log(line)
  }
  makeX = () => {
    var line = "";
    for (var i = 1; i <= this.state.length; i++) {

      for (var j = 1; j <= this.state.length; j++) {
        if (i===j||j===(this.state.length-i)) line+='*'
        else(line+=' ')

      }
      line += "\n";
    }
    console.log(line)

  }
  makeTriangle = () => {
    var line = "";
    for (var i = 1; i <= this.state.length; i++) {
      for (var j = 1; j <= i; j++) {
        line += "*";

      }
      line += "\n";
    }
    console.log(line)
  }
  makeOtherTriangle = () => {
    for (let i = 1; i <= this.state.length; i++) {
      let str = '';
      for (let k = 1; k <= this.state.length - i; k++) {
        str += ' ';
      }
      for (let j = 1; j <= i; j++) {
        str += '*';
      }
      console.log(str);
    }
  }

  makeSideTriangle = () => {
    var line = "";
    for (var i = 1; i <= this.state.length; i++) {
      for (var j = 1; j <= i; j++) {
        line += "*";

      }
      line += "\n";
    }
    for (i = this.state.length; i >= 0; i--) {
      for (j = 1; j <= i; j++) {
        line += "*";

      }
      line += "\n";
    }
    console.log(line)
  }

  makeSquare = () => {
    var line = "";
    for (var i = 1; i <= this.state.length; i++) {
      for (var j = 1; j <= this.state.length; j++) {
        line += "*";

      }
      line += "\n";
    }
    console.log(line)
  }
  makeFrame = () => {
    var line = "";
    for (var i = 1; i <= this.state.length; i++) {

      for (var j = 1; j <= this.state.length; j++) {
        if (i === 1 || i === this.state.length) line += "*";
        else if (j > 1 && j < this.state.length) line += " ";
        else if (this.state.length || j === this.state.length) line += '*'
      }
      line += "\n";
    }
    console.log(line)
  }

  makeCircle = () => {
  console.log('         ***   ');
  console.log('     *          *');
  console.log('   *             * ');
  console.log('  *               *          ');
  console.log('  *               *         ');
  console.log('   *             *         ');
  console.log('     *         *      ');
  console.log('         ***          ');
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">DRAWING TO THE CONSOLE</h1>
        <h3 className="object" onClick={this.makeHorizontal}>Horizontal</h3>
        <h3 className="object" onClick={this.makeVertical}>Vertical</h3>
        <h3 className="object" onClick={this.makeDiagonal}>Diagonal</h3>
        <h3 className="object" onClick={this.makeDiagonal2}>Diagonal2</h3>
        <h3 className="object" onClick={this.makeX}>X</h3>
        <h3 className="object" onClick={this.makeTriangle}>Triangle</h3>
        <h3 className="object" onClick={this.makeOtherTriangle}>Other Triangle</h3>
        <h3 className="object" onClick={this.makeSideTriangle}>SideTriangle</h3>
        <h3 className="object" onClick={this.makeSquare}>Square</h3>
        <h3 className="object" onClick={this.makeFrame}>Frame</h3>
        <h3 className="object" onClick={this.makeCircle}>Circle</h3>

      </div>
    );
  }

}

export default App;
