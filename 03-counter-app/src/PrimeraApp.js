import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( {name} ) => {
    return (<>
                <h1>Hello {name}</h1>
                <h2>Reaaaaaaaaaaaact.</h2>
            </>);
}

PrimeraApp.propTypes = {
    name: PropTypes.string.isRequired
}

export default PrimeraApp;

