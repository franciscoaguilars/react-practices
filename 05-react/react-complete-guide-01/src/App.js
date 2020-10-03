import React, { Component } from 'react';
import './App.css';
import Person from './components/Person'

class App extends Component {
  state = {
    persons: [
      { id: 1,name: "Frank", age: 25},
      { id: 2,name: "Joshua" , age: 20},
      { id: 3,name: "Camila", age: 23}
    ],
    personsShow: false
  }

  deletePersonHandler = (personIndex) => {
    console.log(personIndex)
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  switchNameInput = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person= {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState( {persons: persons })
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
          this.state.persons.map( (person, index) => {
           return <Person click = {() => this.deletePersonHandler(index) }
                     name={person.name} 
                     age={person.age} 
                     key={person.id}
                     change={(event) => { this.switchNameInput(event, person.id) }}/>
          })
        }
        </div>
      )
    }

    const classes = [];

    if (this.state.persons.length <= 2){
      classes.push('red');
    }

    if (this.state.persons.length <=1) {
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>Hello World.</h1>
        <p className={classes.join(' ')}>Is this working? </p>
        <button onClick={this.switchPersonsShown}>Toggle Persons!</button>
        { persons ? persons : <h1>Click the button!</h1> }
      </div>
    );
  }
}

export default App;
