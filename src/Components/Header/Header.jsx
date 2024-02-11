// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <div>
         <header className="bg-gray-800 text-white p-8">
            <nav className='text-center '>
               <Link to='/countries' className="hover:text-gray-300">Countries</Link>
               <Link to="/country" className="hover:text-gray-300 ml-10">CountryDetails</Link>
            </nav>
        </header>  
         
      </div>
   );
};

export default Header;