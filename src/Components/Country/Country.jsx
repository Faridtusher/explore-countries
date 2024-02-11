/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Country = ({country}) => {

   const { flags, name, capital, cca3, } = country
   console.log(country)
   return (
      <div className='border-solid border-2 border-gray-300 rounded p-5 text-center flex flex-col items-center'>
          <img className='rounded text-center ' src={flags.png} alt="" />
          <h2>Name: {name.common}</h2>
          <h3>Capital : {capital}</h3>
          <button className='text-white bg-green-600 font-semibold px-5 py-2 rounded'>Details</button>

      </div>
   );
};

export default Country;