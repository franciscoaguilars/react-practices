import React, { Component } from 'react';
import './App.css';
import Person from './components/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Frank", age: 25},
      { name: "Joshua" , age: 20}
    ]
  }


  switchNameHandler = () => {
    this.setState()
  }

  render () {
    return (
      <div className="App">
        <h1>Hello World.</h1>
        <button onClick={this.switchNameHandler}>weee</button>
        <Person name={this.state[0].name} age={this.state[0].age}/>
        <Person name={this.state[1].name} age={this.state[1].age}/>
      </div>
    );
  }
}

export default App;
