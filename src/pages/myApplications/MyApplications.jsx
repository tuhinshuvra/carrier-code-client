import React, { Suspense } from 'react';
import MyApplicationsStats from './MyApplicationsStats.jsx';
import MyApplicationList from './MyApplicationList';
import useAuth from '../hooks/useAuth.jsx';
import { myApplicationsPromise } from '../../api/applicationsApi.jsx';


// const myApplicationsPromise = email => {
//     return fetch(`http://localhost:5000/applications?email=${email}`).then(res=>res.json())
// }


const MyApplications = () => {
    const { user } = useAuth();

    return (
        <div className='text-center'>
            <MyApplicationsStats></MyApplicationsStats>
            <Suspense fallback={'Loading your applications'}>
                <MyApplicationList
                    myApplicationsPromise={myApplicationsPromise(user.email)}
                ></MyApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;