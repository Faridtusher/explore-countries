/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCountry from '../SingleCountry/SingleCountry';

const CountryDetails = () => {
   const countries = useLoaderData();
   // console.log(countries)
   return (
      <div className='text-center'>
         <p className='font-semibold text-2xl mt-5'>Go back the <Link className='text-red-500 underline hover:text-red-700' to='/countries'>countries</Link> route and click in any country <span className='text-red-500'>Details</span> Button... </p>3  

         {
            countries.map(singleCountry => <SingleCountry
               key={singleCountry.cca3}
               singleCountry = {singleCountry}
            ></SingleCountry>)
         }
      </div>
   );
};

export default CountryDetails;