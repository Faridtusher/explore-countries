/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCountry from '../SingleCountry/SingleCountry';

const CountryDetails = () => {
   const countries = useLoaderData();
   return (
      <div>
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