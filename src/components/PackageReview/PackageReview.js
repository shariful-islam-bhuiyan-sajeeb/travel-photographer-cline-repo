import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProviders';
import ReviewesTable from './ReviewesTable';


const PackageReview = () => {
    const { user, logOut } = useContext(AuthContext)
    const [reviews , setReviews]= useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`,{
           headers:{
                authorization: `Bearer ${localStorage.getItem('travel-Token')}`
           } 
        })
        .then(res =>{
            if(res.status === 401 || res.status === 403){
                logOut();

            }
            return res.json()
        })
        .then(data => setReviews(data))
    },[user?.email,logOut])

        /* Remove handle codes*/ 
    const handleRemove = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this reviews.')
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        };
    };

    return (

       <div>
            <h2 className='text-center lg:text-2xl md:text-lg font-bold mb-4'>Total Number of reviews: <span className='text-2xl text-orange-600'> {reviews.length} </span></h2>
            <div className="">
                <table className="table w-10/12 mx-auto ">
                    <thead className=''>
                        <div className=''>
                            <ul className='flex justify-between p-5 px-8  bg-zinc-200 '>
                                <li>Photo</li>
                                <li>Name</li>
                                <li>Package</li>
                                <li>Remove</li>
                               </ul>
                        </div>
                    </thead>
                    <tbody className=' bg-zinc-200'>
                        {
                            reviews.map(review => <ReviewesTable
                                key={review._id}
                                review={review}
                                handleRemove={handleRemove}
                            ></ReviewesTable>)
                        }
                    </tbody>
                </table>
            </div>
       </div>
    );
};

export default PackageReview;