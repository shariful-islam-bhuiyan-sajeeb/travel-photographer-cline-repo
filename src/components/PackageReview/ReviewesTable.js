import { faCircleStop } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

const ReviewesTable = ({ review, handleRemove }) => {
    const {_id,service, photoName, phone, price, email, customer,message }=review;
    const [reviewServices, setReviewService] = useState({})


    useEffect(()=>{
        fetch(`http://localhost:5000/tourServices/${service}`)
        .then(res => res.json())
        .then(data => setReviewService(data))
    },[service])

    

    return (
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded w-24 h-20 h-15">
                            {
                                   reviewServices?.img && 
                                   <img src={reviewServices.img} alt="Avatar Tailwind CSS Component" />
                            }
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{photoName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {customer}
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                
                <th>
                    <button onClick={()=>handleRemove(_id)} className="btn btn-ghost hover:bg-red-700 ">Remove</button>
                </th>
            </tr>
    );
};

export default ReviewesTable;