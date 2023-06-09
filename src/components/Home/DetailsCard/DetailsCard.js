import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { HiArrowLeft} from "react-icons/hi2";
import { AuthContext } from '../../../Contexts/AuthProviders';
import { toast, ToastContainer } from 'react-toastify';

const DetailsCard = () => {
    const {user}=useContext(AuthContext)
   

    const { _id,category,day,description,img,name,price,ratings,ratingsCount} = useLoaderData();


    
    const handlePhotoReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const  photoReviews ={
            service: _id,
            photoName: name,
            price,
            customer: category,
            email,
            phone,
            message
        }

        // if(phone.length >10){
        //    toast('please your phone number should be 10 characters or longer')
        // }


        fetch('https://assignment-11-server-projects.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
               
            },
            body: JSON.stringify(photoReviews)
        })
            .then(res => res.json())
            .then(data => {
               
                if (data.acknowledged) {
                    toast.success('Your Review successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));

    }


    return (
        <div>
            <div className='grid lg:grid-cols-2 grid-cols-1 w-10/12  mx-auto pb-10'>
                <div className=" max-w-xl p-4 rounded-md shadow-md bg-slate-700 dark:text-gray-50">
                    <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-base font-medium tracking-widest uppercase text-xl text-white">Name:{name}</span>
                        <h2 className="text-lg font-semibold tracking-wide">Category: {category}</h2>
                        <h2>Package Day: <span className='text-orange-600 text--lg'>{day}</span></h2>
                        <h2>Package Rate: <span className='text-orange-600 text-lg'>{price}</span></h2>
                    </div>
                    <p className="dark:text-gray-100 mb-5">{description}</p>

                </div>

                {/* Package review form */}

                <div className='border m-2 p-6 shadow-xl rounded-md bg-teal-50'>
                    <form onSubmit={handlePhotoReview}>
                        <h2 className="text-4xl grid md:text-xl sm:text-xl mt-10 mb-5 lg:font-bold ">Please review of this photo:{name} </h2>
                        <h4 className="text-3xl pb-4">Photo Price:{price}</h4>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                            <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                            <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                            <input name="email" defaultValue={user?.email} type="text" placeholder="Your email" className="input input-ghost w-full  input-bordered" readOnly />
                        </div>
                        <textarea name="message" className="textarea textarea-bordered mt-8 h-24 w-full" placeholder="Photography Review" required></textarea>

                        <div className='flex justify-center'>
                            <input className='btn mt-5  hover:bg-green-700' type="submit" value="Please your review" />
                        </div>
                    </form>
                </div>
            </div>
            <div className='flex justify-center text-center py-10'>
                <Link to='/'><button className=" flex items-center btn btn-success w-80 "> <HiArrowLeft /> Backspace</button></Link>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DetailsCard;