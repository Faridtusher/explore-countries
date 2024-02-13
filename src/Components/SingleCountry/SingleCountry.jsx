/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const SingleCountry = ({singleCountry}) => {
   const {flags, name, capital, area, currencies,language, population, region, subregion, independent, timezones,maps} = singleCountry;
   console.log(singleCountry)
   return (
      <div className='border-solid border-2 border-gray-300 rounded p-5 text-center flex flex-col items-center ml-20 mr-20'>
          <img className='rounded text-center mb-4' src={flags.png} alt="" />
          <h2 className='mb-4 font-bold text-3xl'>Name: {name.common}</h2>
          <h3 className='mb-4 font-bold text-xl'>Capital : {capital}</h3>
          <h3 className='mb-4 font-semibold '>Area : {area} km²</h3>
          <h3 className='mb-4 font-semibold'>Population : {population}</h3>
          <h3 className='mb-4 font-semibold'>Capital : {capital}</h3>
          <h3 className='mb-4 font-semibold'>Region : {region}</h3>
          <h3 className='mb-4 font-semibold'>Subregion : {subregion}</h3>
          <h3 className='mb-4 font-semibold'>Timezones : {timezones}</h3>
          <Link to={maps.googleMaps} target="_blank" className='mb-4 font-semibold '>GoogleMap : <span className='text-blue-600 hover:text-blue-800 hover:underline'>{maps.googleMaps}</span> </Link>   
      </div>
   );
};

export default SingleCountry;