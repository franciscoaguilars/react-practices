import React from 'react';

const Person = (props) => {

    
    return(
        <>
            <h1>Hello {props.name}, your age is {props.age}</h1>
            <input type="text" onChange={props.change}/> 
        </>
    )
}

export default Person