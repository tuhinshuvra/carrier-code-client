import React from 'react';


import { createBrowserRouter } from "react-router";
import RootLayout from '../layoutes/RootLayoute';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Signin from '../pages/Signin/Signin';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/signin',
        Component: Signin
      },
      {
        path: '/register',
        Component: Register
      }
    ]
  },
]);

export default router;