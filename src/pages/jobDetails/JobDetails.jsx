import { FaLocationDot } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData();

    console.log("Job Details : ", job);
    return (
        <div>
            <h2>Job Details Component</h2>
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
                        <Link to={`/jobApply/${job._id}`} className=" btn btn-info btn-sm">Apply Now</Link>
                        <div className="btn btn-primary btn-sm">Save</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;