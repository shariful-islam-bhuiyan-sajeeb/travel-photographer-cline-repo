import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProviders';
import ReviewesTable from './ReviewesTable';


const PackageReview = () => {
    const {user} = useContext(AuthContext)
    const [reviews , setReviews]= useState([])


    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res =>res.json())
        .then(data => setReviews(data))
    },[user?.email])

    return (

       <div>
        <h2>this is reviews {reviews.length}</h2>
            <div className="  w-full">
                <table className="table w-4/6 mx-auto ">
                    <thead className=''>
                        <div className='flex  justify-between p-5 px-8  bg-zinc-200 '>
                                <div>Photo</div>
                                <div>Name</div>
                                <div>Package</div>
                                <div>delete</div>
                        </div>
                    </thead>
                    <tbody className=' bg-zinc-200'>
                        {
                            reviews.map(review => <ReviewesTable
                                key={review._id}
                                review={review}
                            ></ReviewesTable>)
                        }
                    </tbody>
                </table>
            </div>
       </div>
    );
};

export default PackageReview;