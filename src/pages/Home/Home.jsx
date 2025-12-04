import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
    const jobsPromise = fetch('http://localhost:5000/jobs').then(res => res.json());
    // console.log("jobsPromise : ", jobsPromise);

    return (
        <div className='' >
            <Banner></Banner>
            <HotJobs jobsPromise={jobsPromise}></HotJobs>
        </div>
    );
};

export default Home;