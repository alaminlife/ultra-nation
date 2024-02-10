import React from 'react';
import './Country.css';

const Country = (props) => {
    const {area, population, flag,} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className='CountryStyle'>
            <h5>this is: {area}</h5>
            <p>population: {population}</p>
            <p>flag: {flag}</p>
            <img src={flag} alt="flag"/>
            <br></br>
            <button onClick={() =>handleAddCountry(props.country)}>Addd Country</button>
        </div>
    );
};

export default Country;