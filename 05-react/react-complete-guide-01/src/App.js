import React, { Component } from 'react';
import './App.css';
import Person from './components/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Frank", age: 25},
      { name: "Joshua" , age: 20},
      { name: "Camila", age: 23}
    ],
    personsShow: false
  }


  switchNameInput = event => {
    this.setState({
      persons: [
        { name: event.target.value , age: 20},
        { name: "Frank", age: 25},
      ]
    })
  }

  switchPersonsShown = () => {
    this.setState({ personsShow : !this.state.personsShow})
  }

  render () {

    let persons = null

    if (this.state.personsShow){
      persons= (
        <div>
        { 
          this.state.persons.map( person => {
           return <Person name={person.name} 
                     age={person.age} 
                     />
          })
        }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello World.</h1>
        <button onClick={this.switchPersonsShown}>Toggle Persons!</button>
        { persons ? persons : <h1>Click the button!</h1> }
      </div>
    );
  }
}

export default App;
