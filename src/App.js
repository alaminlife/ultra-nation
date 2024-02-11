
import { useEffect, useState } from 'react';
import './App.css';
import Country from './Componints/Country/Country';
import Carts from './Componints/Carts/Carts';

function App() {

  const [coutries,setCoutries] = useState ([]);
  const [Cart,setCart] = useState ([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => 
      setCoutries(data))
    .catch(error => console.error(error))
  }, [])
  const handleAddCountry = (Country) => {
  const newCart = [...Cart,Country];
  setCart(newCart);
  }



  return (
    <div className="App">
        <h5 className='hh'> Country loaded: {coutries.length}</h5>
        <h5>Country added: {Cart.length}</h5>
        <Carts Cart={Cart}></Carts>
        <ul className='country'>
          {
            coutries.map(country => <Country country={country} handleAddCountry={handleAddCountry}></Country>) 
          }
        </ul>
    </div>
  );
}
 
export default App;
