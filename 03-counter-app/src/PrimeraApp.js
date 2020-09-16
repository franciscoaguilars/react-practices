import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( {name, subtitle} ) => {
    return (<>
                <h1>Hello {name}</h1>
                <h2>{subtitle}</h2>
            </>);
}

PrimeraApp.propTypes = {
    name: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitle: "React!!"
}
export default PrimeraApp;

