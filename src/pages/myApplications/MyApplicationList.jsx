import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const MyApplicationList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise);


    return (
        <div className=' contain-content'>
            <h2>Job Applied so far {applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) => <JobApplicationRow
                                key={application._id}
                                index={index}
                                application={application}
                            ></JobApplicationRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div >
    );
};

export default MyApplicationList;