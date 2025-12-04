import { Link, useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    console.log("Job ID ", jobId);

    const user = useAuth()

    console.log("Job and user Info : ", jobId, user);

    const handleJobApply = (e) => {
        e.preventDefault();
        const linkedin = e.target.linkedin.value;
        const github = e.target.github.value;
        const resume = e.target.resume.value;

        const application = {
            jobId,
            applicant: user?.email,
            linkedin,
            github,
            resume
        }
        console.log("Job Apply Data  : ", application);

        axios.post('http://localhost:5000/applications', application)
            .then(res => {
                console.log("axios.post result : ", res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        // position: "top-middle",
                        icon: "success",
                        title: "Successfully Applied",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log("axios.post error : ", error);
            })
    }

    return (
        <div className='my-5'>
            <h3 className=' text-center text-3xl font-extrabold'>Apply for this job : <Link to={`/jobs/${jobId}`} className=' link'>Details</Link> </h3>
            <div className=' flex justify-center my-5'>

                <form onSubmit={handleJobApply}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <label className="label">LinkedIn Link</label>
                        <input type="url" className="input" name='linkedin' placeholder="Linkedin Link" />

                        <label className="label">Github Link</label>
                        <input type="url" className="input" name='github' placeholder="Github Link" />


                        <label className="label">Resume Link</label>
                        <input type="url" className="input" name='resume' placeholder="Resume Link" />

                        <input type="submit" className="btn btn-primary" value="Apply" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default JobApply;