import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import Countries from './Components/Countries/Countries';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import NotFound from './Components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Countries></Countries>,
      },

       {
        path:'/countries',
        element:<Countries></Countries>,
      },

       {
        path:'countryDetails',
        element:<CountryDetails></CountryDetails>,
      },

        {
        path:'countryDetails/:countryDetailsId',
        element:<CountryDetails></CountryDetails>,
        loader:({params}) => fetch(`https://restcountries.com/v3.1/alpha/${params.countryDetailsId}`)
      },

      {
        path:'*',
        element:<NotFound></NotFound>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    ></RouterProvider>
  </React.StrictMode>,
)
