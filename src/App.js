
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [coutries,setCoutries] = useState ([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      setCoutries(data);
      console.log(data);

      const names = data.map (country => country.name)
      console.log(names);
    
    })
    .catch(error => console.error(error))
  }, [])



  return (
    <div className="App">
        <h5 className='hh'> bangladesh is a big city: {coutries.length}</h5>
        <ul>
          {
            coutries.map(country => <li>{country.name}</li>)
          }
        </ul>
    </div>
  );
}
 
export default App;
