import React from 'react';

const Country = (props) => {
    const {area, population, flag,} = props.country;
    return (
        <div>
            <h5>this is: {area}</h5>
            <p>population: {population}</p>
            <p>flag: {flag}</p>
            <img src={flag} alt="flag" />
        </div>
    );
};

export default Country;