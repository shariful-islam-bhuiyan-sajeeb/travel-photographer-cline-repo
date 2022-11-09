import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { HiArrowLeft} from "react-icons/hi2";

const DetailsCard = () => {
    const {category,day,description,img,name,price,ratings,ratingsCount} = useLoaderData();
    return (
        <div className=' w-9/12  mx-auto pb-10'>
            <div className=" max-w-xl p-4 rounded-md shadow-md bg-slate-700 dark:text-gray-50">
                <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-base font-medium tracking-widest uppercase text-xl text-white">Name:{name}</span>
                    <h2 className="text-lg font-semibold tracking-wide">Category: {category}</h2>
                    <h2>Package Day: <span className='text-orange-600 text--lg'>{day}</span></h2>
                    <h2>Package Rate: <span className='text-orange-600 text-lg'>{price}</span></h2>
                </div>
                <p className="dark:text-gray-100 mb-5">{description}</p>
                <div className='text-2xl ml-6'>
                    <Link to='/'> <HiArrowLeft></HiArrowLeft> </Link>
                </div>
            </div>
            <div>


            </div>
            
        </div>
    );
};

export default DetailsCard;