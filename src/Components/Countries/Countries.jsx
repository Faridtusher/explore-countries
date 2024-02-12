// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {

   const [countries, setCountries] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
         .then(res => res.json())
         .then(data => setCountries(data))
   }, []);


   const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))

   return (
      <div>
         <div className='m-4 text-center'>
            <input
               type="text"
               placeholder="Search for a country..."
               className='p-2 border border-gray-300 rounded text-center w-1/2'
               onChange={(e) => setSearchTerm(e.target.value)}
            />
         </div>

         <div className='grid grid-cols-4 gap-4 m-10'>
            {filteredCountries.map(country => (
               <Country
                  key={country.cca3}
                  country={country}
               />
            ))}
         </div>
      </div>
   );
};

export default Countries;
