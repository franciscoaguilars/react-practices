import React, { Component } from 'react';
import ValidationComponent from './components/ValidationComponent'
import CharComponent from './components/CharComponent'

import './App.css';

export default class App extends Component {
  state= {
    textLength:  0,
    inputText: "",
  }

  textLengthHandler = (e) => {
    const length = e.target.value.length
    this.setState(
      { textLength: length, inputText : e.target.value}
    )
  }

  textDeleteHandler = (index) => {
      const userInput = this.state.inputText.split("")
      userInput.splice(index,1);
      this.setState({inputText: userInput.join("")})
  }

  render(){

    let words = null

    if (this.state.textLength !== 0){
      const sentence = this.state.inputText.split("")
      words = (
        <div>
          {
            sentence.map( (word, key) => {
              return <CharComponent 
              letter={word}
              key= {key}
              click={() => this.textDeleteHandler(key)}/>
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <input type="text" onChange={this.textLengthHandler} value={this.state.inputText}/>
        <p>{this.state.textLength}</p>
        <h1>{this.state.inputText}</h1>
        <ValidationComponent text ={this.state.textLength}/>
        {words}
      </div>
    );
  }
}


