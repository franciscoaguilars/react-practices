import React from 'react';
import styled from 'styled-components';
import './Person.css'

const StyledDiv = styled.div`
    border: 1px solid #cccccc;
    text-align: center;
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;
    width: 50%;
    
`


const Person = (props) => {

    
    return(
        <StyledDiv>
            <h1 onClick={props.click}>Hello {props.name}, your age is {props.age}</h1>
            <input type="text" onChange={props.change}/> 
        </StyledDiv>
    )
}

export default Person