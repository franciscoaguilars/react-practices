import React, {Component} from 'react';
import './App.css';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

export default class App extends Component {
  state= {
    username: "frankaguilars"
  }

  inputEventHandler = (e) =>{
    this.setState({
      username: e.target.value
    })
  }

  render(){
  return (
    <div className="App">
      <h1>Hello world</h1>
      <UserOutput username={this.state.username}/>
      <UserInput value={this.state.username} change={this.inputEventHandler}/>
    </div>
  );
  }
}


