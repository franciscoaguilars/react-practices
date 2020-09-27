import React, {Component} from 'react';

export default class UserInput extends Component{
    
    render(){
        return (<div>
            <input value={this.props.value} type="text" onChange={this.props.change}/>
        </div>
        )
    }
}