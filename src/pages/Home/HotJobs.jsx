import React, { useEffect, useState } from 'react';
import JobsCard from '../../Shared/JobsCard';

const HotJobs = ({ jobsPromise }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        jobsPromise.then(data => {
            setJobs(data);
        });
    }, [jobsPromise]);

    console.log("Jobs length:", jobs.length);

    return (
        <div className=''>
            <h2 className=' text-center my-5 font-extrabold text-6xl text-secondary'>Hot Jobs</h2>
            {/* {jobs.map(job => (
                <p key={job.id}>{job.title}</p>
            ))} */}
            <div className=' '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
                    {
                        jobs.map(job =>
                            <JobsCard
                                key={job._id}
                                job={job}
                            />)
                    }
                </div></div>
        </div >
    );
};

export default HotJobs;
