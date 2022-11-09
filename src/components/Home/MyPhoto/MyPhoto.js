import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyPhotoCart from './MyPhotoCart';

const MyPhoto = () => {
    const allPhotos =useLoaderData();
    // const {img,name,category,description}=allPhotos;



    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center w-10/12 mx-auto '>
            
            {
                allPhotos.map(allPhoto =><MyPhotoCart
                key={allPhoto._id}
                allPhoto={allPhoto}
                ></MyPhotoCart>)
            }
            
        </div>
    );
};

export default MyPhoto;