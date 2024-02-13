/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {

   // eslint-disable-next-line no-unused-vars
   const { flags, name, capital, cca3} = country
   // console.log(country)
   return (
      <div className='border-solid border-2 border-gray-300 rounded p-5 text-center flex flex-col items-center'>
          <img className='rounded text-center mb-4' src={flags.png} alt="" />
          <h2 className='mb-4 font-bold text-xl'>Name: {name.common}</h2>
          <h3 className='mb-4 font-semibold'>Capital : {capital}</h3>
          <div className='flex flex-grow items-center justify-center'>
            <Link to={`/countryDetails/${cca3}`}><button className='text-white bg-green-600 font-semibold px-5 py-2 rounded'>Details</button></Link>
         </div>
      </div>
   );
};

export default Country;