import React, { Component } from 'react';
import './CharComponent.css'
export default class CharComponent extends Component{
    render(){
        return(
            <h4 className="textBox" onClick={this.props.click}>{this.props.letter}</h4>
        )
    }
}