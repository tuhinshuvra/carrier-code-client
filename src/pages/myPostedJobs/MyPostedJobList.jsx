import React, { use } from 'react';
import PostedJobsRow from './PostedJobsRow';
import { Link } from 'react-router';

const MyPostedJobList = ({ myPostedJobsPromise }) => {
    const jobs = use(myPostedJobsPromise);

    return (
        <div className=' contain-content'>
            <h2>Job Posted so far {jobs.length}</h2>
            <div className='overflow-x-auto'>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Count</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        {
                            jobs.map((job, index) => <PostedJobsRow
                                key={job._id}
                                index={index}
                                job={job}
                            ></PostedJobsRow>)
                        }
                    </tbody> */}
                    <tbody>
                        {
                            jobs.map((job, index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.deadline}</td>
                                <td>{job.applicationCount}</td>
                                <td><Link className=' link-primary' to={`/applications/${job._id}`}>Details</Link></td>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
            <h2>My Posted Job List</h2>
        </div>
    );
};

export default MyPostedJobList;