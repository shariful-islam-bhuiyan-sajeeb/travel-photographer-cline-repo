import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProviders';

import ReviewesTable from './ReviewesTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const PackageReview = () => {
    const { user, logOut } = useContext(AuthContext)
    const [reviews , setReviews]= useState([])
    console.log(reviews);


    useEffect(()=>{
        if(!user?.email) return;
        
        fetch(`https://assignment-11-server-projects.vercel.app/review?email=${user?.email}`,{
           headers:{
                authorization: `Bearer ${localStorage.getItem('travel-Token')}`
           } 
        })
        .then(res =>{
            if(res.status === 401 || res.status === 403){
               return logOut();

            }
            return res.json()
        })
        .then(data => {
            console.log(data);
            setReviews(data)})
    },[user?.email,logOut])

        /* Remove handle codes*/ 
    const handleRemove = id => {
        const proceed = toast('Are you sure, you want to cancel this reviews.')
        if (proceed) {
            fetch(`https://assignment-11-server-projects.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('deleted successfully');
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
            <ToastContainer/>
       </div>

    );
};

export default PackageReview;

