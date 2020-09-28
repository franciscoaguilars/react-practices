import React from 'react';
import './Person.css'
const Person = (props) => {

    
    return(
        <div className= "Person">
            <h1 onClick={props.click}>Hello {props.name}, your age is {props.age}</h1>
            <input type="text" onChange={props.change}/> 
        </div>
    )
}

export default Person