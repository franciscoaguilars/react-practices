import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value } ) => {

    const [ count, setCount ] = useState( value ) // Returns an array. 

    const handleAdd = () => {
       setCount( prevCount => prevCount + 1)
    }

    const handleReset = () => {
        setCount( value )
    }

    const handleSubstract = () => {
        if (count !== 0){
            setCount( prevCount => prevCount -1 )
        }
    }

    
    return (
        <div>
            <h1>CounterApp</h1>
            <h2> {count} </h2>
            <button onClick={handleAdd}> +1</button>
            <button onClick={handleReset}> Reset </button>
            <button onClick={handleSubstract}> -1</button>
        </div>

    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
export default CounterApp