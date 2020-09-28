import React, { Component } from 'react';

export default class ValidationComponent extends Component{
    render(){

        let text = ""

        if (this.props.text <= 5){
            text = "Text too short"
        } else{
            text = "Text long enough"
        }

        return(
            <h3>{text}</h3>
        )
    }
}