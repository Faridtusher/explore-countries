// eslint-disable-next-line no-unused-vars
import { data } from 'autoprefixer';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {

   const [countries, setCountries] = useState([]);

   useEffect( () =>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
   } ,[])
   
   return (
      <div>
          <h1>This is the countries page</h1>
          <div className='grid grid-cols-4 gap-4 mt-20'>
            {
              countries.map(country => <Country
               key={country.cca3}
               country={country}
              ></Country>)
            }
          </div>
      </div>
   );
};

export default Countries;