
import { useEffect, useState } from 'react';
import './App.css';
import Country from './Componints/Country/Country';

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
        <p>Country added: {Cart.length}</p>
        <ul className='country'>
          {
            coutries.map(country => <Country country={country} handleAddCountry={handleAddCountry}></Country>) 
          }
        </ul>
    </div>
  );
}
 
export default App;
