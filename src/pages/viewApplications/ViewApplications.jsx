import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const { jobId } = useParams();
    const applications = useLoaderData();

    const handleStatusChange = (e, app_id) => {
        // e.preventDefault();
        console.log("handleOnChangeStatus Value : ", e.target.value, app_id);

        axios.patch(`http://localhost:5000/applications/${app_id}`, { status: e.target.value })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-middle",
                        icon: "success",
                        title: "Application Status Updated Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className=''>
            <h2>View Applicati on {applications.length} for Job Id {jobId}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className=' font-bold'>
                            <th>Serial</th>
                            <th>Job Title</th>
                            <th>Applicant</th>
                            <th>Application Count</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app, index) =>
                            <>
                                <tr onChange={(e) => handleStatusChange(e, app._id)} key={app._id} >
                                    <th>{index + 1}</th>
                                    <td>{app.title}</td>
                                    <td>{app.applicant}</td>
                                    <td>{app.applicationCount}</td>
                                    <td><select defaultValue={app.status} className="select">
                                        <option disabled={true}>Select Status</option>
                                        <option>Pending</option>
                                        <option>Review</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select></td>
                                </tr></>)}


                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ViewApplications;