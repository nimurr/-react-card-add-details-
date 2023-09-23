import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Favorites from './Pages/Home/Favorites.jsx';
import Login from './Pages/Home/Login.jsx';
import Phone from './components/Phones/Phone.jsx';
import PhoneDetails from './components/Phones/PhoneDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=> fetch('App.json')
      },
      {
        path: '/:id',
        loader:()=> fetch('App.json'),
        element: <PhoneDetails></PhoneDetails>
      },
      {
        path: '/favorites',
        element: <Favorites></Favorites>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
