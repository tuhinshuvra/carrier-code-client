import React from 'react';


import { createBrowserRouter } from "react-router";
import RootLayout from '../layoutes/RootLayoute';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Signin from '../pages/Signin/Signin';
import JobDetails from '../pages/jobDetails/JobDetails';
import PrivateRoute from '../pages/Routes/PrivateRoute';
import JobApply from '../pages/JobApply/JobApply';
import MyApplications from '../pages/myApplications/MyApplications';

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
      },
      {
        path: '/jobs/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
        Component: JobDetails
      },
      {
        path: 'jobApply/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
        element: <PrivateRoute><JobApply></JobApply> </PrivateRoute>
      },
      {
        path: '/myApplications',
        element: <PrivateRoute><MyApplications></MyApplications> </PrivateRoute>
      }
    ]
  },
]);

export default router;