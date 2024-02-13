/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const SingleCountry = ({singleCountry}) => {
   const {flags, name, capital, area, population, region, subregion, status, timezones,maps,cca3} = singleCountry;
   console.log(singleCountry)
   return (
      <div>
         <p className='font-semibold text-2xl mt-5 mb-5 text-center'>Go back the <Link className='text-red-500 underline hover:text-red-700' to='/countries'>countries</Link> route and click in any country <span className='text-red-500'>Details</span> Button... </p>3  
         <div className='border-solid border-2 border-gray-300 rounded p-5 text-center flex flex-col  items-center ml-20 mr-20'>
            <img className='rounded text-center mb-4' src={flags.png} alt="" />
            <h2 className='mb-4 font-bold text-3xl'>Name: {name.common}</h2>
            <h3 className='mb-4 font-bold text-xl'>Official Name: {name.official}</h3>
            <h3 className='mb-4 font-bold text-xl'>Capital : {capital}</h3>
            <h3 className='mb-4 font-semibold '>Area : {area} km²</h3>
            <h3 className='mb-4 font-semibold'>Population : {population}</h3>
            <h3 className='mb-4 font-semibold'>Region : {region}</h3>
            <h3 className='mb-4 font-semibold'>Subregion : {subregion}</h3>
            <h3 className='mb-4 font-semibold'>Timezones : {timezones}</h3>
            <h3 className='mb-4 font-semibold'>Code : {cca3}</h3>
            <h3 className='mb-4 font-semibold'>Country Status : {status}</h3>
            <Link to={maps.googleMaps} target="_blank" className='mb-4 font-semibold '>GoogleMap : <span className='text-blue-600 hover:text-blue-800 hover:underline'>{maps.googleMaps}</span> </Link>  
        </div>
      </div>
   );
};

export default SingleCountry;