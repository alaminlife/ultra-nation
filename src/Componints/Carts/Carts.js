import React from 'react';

const Carts = (props) => {
    const Cart = props.Cart;
    // const totalPopulation = Cart.reduce ( (sum, item) => sum + item.population, 0)
    let totalPopulation = 0;
    for (let i = 0; i <Cart.length; i++) {
        const country = Cart[i];
        totalPopulation = totalPopulation + country.population;
    }
    return (
        <div>
            <h5>this is Cart: {Cart.length}</h5>
            <p>total Population: {totalPopulation}</p>
        </div>
    );
};

export default Carts;