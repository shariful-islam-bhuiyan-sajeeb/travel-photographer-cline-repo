import React from 'react';
import { Link } from 'react-router-dom';
import photographer from '../Home/images/photograper.jpg'

const Aboute = () => {
    return (
        <div className=''>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={photographer} alt="" className="object-contain  w-full h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">One of my
                             <span className="dark:text-violet-400"> favorite hobbies</span> is sending pictures of somethings natural.
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Nature is one of the happiest things on our lives.That's why everything is photographed
                            
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to='/login' rel="noopener noreferrer" href="#" className="px-8 py-3  lg:w-96 md:w-52 text-lg text-center font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Login</Link>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Aboute;