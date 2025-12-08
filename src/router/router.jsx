import { createBrowserRouter } from "react-router";
import RootLayout from '../layoutes/RootLayoute';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Signin from '../pages/Signin/Signin';
import JobDetails from '../pages/jobDetails/JobDetails';
import PrivateRoute from '../pages/Routes/PrivateRoute';
import JobApply from '../pages/JobApply/JobApply';
import MyApplications from '../pages/myApplications/MyApplications';
import About from '../pages/about/About';
import AddJob from '../pages/addJob/AddJob';
import MyPostedJobs from "../pages/myPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/viewApplications/ViewApplications";

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
        path: 'about',
        Component: About
      },
      {
        path: 'signin',
        Component: Signin
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'addJob',
        element: <PrivateRoute> <AddJob></AddJob> </PrivateRoute>
      },
      {
        path: 'jobs/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
        Component: JobDetails
      },
      {
        path: 'myPostedJobs',
        loader: ({ params }) => fetch(`http://localhost:5000/jobs?email=${params.email}`),
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs> </PrivateRoute>
      },
      {
        path: 'jobApply/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
        element: <PrivateRoute><JobApply></JobApply> </PrivateRoute>
      },
      {
        path: 'applications/:jobId',
        loader: ({ params }) => fetch(`http://localhost:5000/applications/job/${params.jobId}`),
        element: <PrivateRoute><ViewApplications></ViewApplications> </PrivateRoute>
      },
      {
        path: 'myApplications',
        element: <PrivateRoute><MyApplications></MyApplications> </PrivateRoute>
      }
    ]
  },
]);

export default router;