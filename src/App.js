
import { useEffect, useState } from 'react';
import './App.css';
import Country from './Componints/Country/Country';

function App() {

  const [coutries,setCoutries] = useState ([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => 
      setCoutries(data))
    .catch(error => console.error(error))
  }, [])



  return (
    <div className="App">
        <h5 className='hh'> Country loaded: {coutries.length}</h5>
        <ul className='country'>
          {
            coutries.map(country => <Country country={country}></Country>) 
          }
        </ul>
    </div>
  );
}
 
export default App;
