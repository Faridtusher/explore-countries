import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import Countries from './Components/Countries/Countries';
import Country from './Components/Country/Country';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/countries',
        element:<Countries></Countries>,
      },

      {
        path:'/country',
        element:<Country></Country>
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
