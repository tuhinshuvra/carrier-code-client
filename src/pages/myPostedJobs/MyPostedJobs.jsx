import React, { Suspense } from 'react';
import useAuth from '../hooks/useAuth';
import MyPostedJobList from './MyPostedJobList';
import { myPostedJobsPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {
    const { user } = useAuth();

    return (
        <div>
            <Suspense fallback={'Loading your Jobs'}>
                <MyPostedJobList
                    myPostedJobsPromise={myPostedJobsPromise(user.email)}
                ></MyPostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;