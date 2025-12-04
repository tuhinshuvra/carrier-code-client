import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';

const JobsCard = ({ job }) => {
    return (
        <div>
            <div className="card bg-blue-200 w-96 shadow-sm">
                <figure>
                    <img
                        src={job.company_logo}
                        alt="Jobs_lego" />
                </figure>
                <p className=' text-center'>{job.company}</p>
                <span className='flex items-center ml-[40%]'> <FaLocationDot /> <p>{job.location}</p></span>
                <div className="card-body">
                    <h2 className="card-title">
                        {job?.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{job?.description}</p>
                    <p>{job?.description}</p>
                    <h5 className=' text-xl'>Salary : {job.salaryRange.min}-{job.salaryRange.max}</h5>
                    <div className="card-actions justify-end">
                        <Link to={`/jobs/${job._id}`} className=" btn btn-info btn-sm">Detail</Link>
                        <div className="btn btn-primary btn-sm">Save</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;