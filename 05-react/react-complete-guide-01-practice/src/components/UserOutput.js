import React, {Component} from 'react';

export default class UserOutput extends Component{
    
    render(){
        return (<div>
            <p>{this.props.username}</p>
            <p>Test2</p>
        </div>
        )
    }

}