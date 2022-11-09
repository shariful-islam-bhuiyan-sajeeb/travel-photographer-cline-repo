import React, { useEffect, useState } from 'react';
import { FaBeer} from 'react-icons/fa';
import { HiArrowRight } from "react-icons/hi2";



const BannerSlider = ({travel}) => {
   const {category,img,name,description,price,rating}=travel;
   console.log(travel);

    // const [services,setCervices] = useState([])
    // useEffect(()=>{
    //     fetch('')
    //     .then(res =>res.json())
    //     .then(data => setCervices(data))

    // },[])

    return (
       <div>
            <div className=' w-full mx-auto'>
                <div className="max-w-xs p-6 rounded-md shadow-md bg-slate-700 dark:text-gray-50">
                    <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-base font-medium tracking-widest uppercase text-white">Name:{name}</span>
                        <h2 className="text-xl font-semibold tracking-wide">Category:{category.slice(0, 15)}</h2>
                    </div>
                    <p className="dark:text-gray-100 mb-5">{description.slice(0, 50)}</p>

                    <button className="btn btn-primary w-full hover:bg--600">Details</button>
                    <HiArrowRight></HiArrowRight>
                    
                </div>
            </div>
            
       </div>
        
    );
};

export default BannerSlider;