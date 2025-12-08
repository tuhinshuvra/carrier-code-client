import FormData from 'form-data';
import React from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
    const { user } = useAuth();

    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())

        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency }

        // process requirements
        const requirementsString = newJob.requirements;
        const requirementsDirty = requirementsString.split(',');
        const requirementsClean = requirementsDirty.map(req => req.trim())
        newJob.requirements = requirementsClean;

        // process responsibilities
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim())
        newJob.status = 'active';
        // console.log("Handle Add Job : ", newJob);

        axios.post('http://localhost:5000/jobs', newJob)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "A new Job Added Successfully!",
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
        <div className=' text-center my-3.5 mx-1 md:mx-2 lg:mx-5'>
            <h2 className=' font-bold my-1'>Add New Job</h2>

            <form onSubmit={handleAddJob} className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2 align-middle'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input type="text" className="input" name='title' placeholder="Job title" />

                    <label className="label">Company</label>
                    <input type="text" className="input" name='company' placeholder="Company name" />
                    <label className="label">Company Logo</label>
                    <input type="url" className="input" name='company_logo' placeholder="Company logo URL" />

                    <label className="label">Job Location</label>
                    <input type="text" className="input" name='location' placeholder="Job location" />

                </fieldset>


                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" name="jobType" value={'On-Site'} aria-label="On-Site" />
                        <input className="btn" type="radio" name="jobType" value={'Remote'} aria-label="Remote" />
                        <input className="btn" type="radio" name="jobType" value={'Hybrid'} aria-label="Hybrid" />
                    </div>

                    {/* <input type="submit" name='Submit' className='btn btn-primary' /> */}
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select defaultValue="Job Category" className="category" name='category'>
                        <option disabled={true}>Select Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Doctor</option>
                        <option>Teaching</option>
                        <option>Tailor</option>
                    </select>
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>
                    <div className=' grid grid-col-1 lg:grid-cols-3 gap-1'>
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input type="text" className="input" name='min' placeholder='Minimum Salary' />
                        </div>
                        <div>
                            <label className="label">Maximum Salary</label>
                            <input type="text" className="input" name='max' placeholder='Maximum Salary' />
                        </div>
                        <div>  <label className="label">Select a Currency</label>
                            <select defaultValue="Pick a color" name='currency' className="select">
                                <option disabled={true}>Please Select</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EU</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Description</legend>

                    <textarea type="text" className="textarea" name='description' placeholder='Job description' />
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Requirements</legend>

                    <textarea type="text" className="textarea" name='requirements' placeholder='Requirements (separated by comma)' />
                </fieldset>



                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">HR Related Info</legend>

                    <label className="label">HR Email</label>
                    <input type="email" className="input" name='hr_email' defaultValue={user?.email} placeholder='HR Email' readOnly />

                    <label className="label">HR Name</label>
                    <input type="text" className="input" name='hr_name' placeholder='HR Name' />
                </fieldset>


                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Responsibility</legend>

                    <textarea type="text" className="textarea" name='responsibilities' placeholder='Job responsibilities (separated by comma)' />

                    <label className="label">Application Dead Line</label>
                    <input type="date" className="input" name='deadline' placeholder='Application Dead Line' />
                </fieldset>
                <div className=' align-middle'>

                    <input type="submit" name="Add Job" className=' btn btn-primary ' />
                </div>

            </form>
        </div>
    );
};

export default AddJob; <h2>This is </h2>