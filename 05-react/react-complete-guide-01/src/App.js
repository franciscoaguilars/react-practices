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
    this.setState({
      persons: [
        { name: "Joshua" , age: 20},
        { name: "Frank", age: 25},
      ]
    })
  }

  switchNameInput = event => {
    this.setState({
      persons: [
        { name: event.target.value , age: 20},
        { name: "Frank", age: 25},
      ]
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Hello World.</h1>
        <button onClick={this.switchNameHandler}>weee</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} change={this.switchNameInput}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      </div>
    );
  }
}

export default App;
