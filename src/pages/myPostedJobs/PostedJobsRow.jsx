import React from 'react';

const PostedJobsRow = ({ job, index }) => {

    console.log("PostedJobsRow : ", job);

    const { title, location, company_logo, salaryRange } = job;

    return (

        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">{location}</div>
                        <div className="text-sm opacity-50 flex">
                            Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</div>
                    </div>
                </div>
            </td>
            <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>

    );
};

export default PostedJobsRow;