import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BannerSlider from './BannerSlider';


const Home = () => {
    const travels =useLoaderData([]);
    // console.log(travels);

    return (
       <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center w-10/12 mx-auto '>
          {
            travels.map(travel => <BannerSlider
              key={travel._id}
              travel={travel}
            ></BannerSlider>)
          }
         
        </div >
        <div className='text-center py-10'>
          <Link to='/myPhoto'><button className="btn btn-success w-80   ">See All</button></Link>
        </div>
       </div>
    );
};

export default Home;