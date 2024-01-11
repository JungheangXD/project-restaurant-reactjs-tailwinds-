import React, { useState } from 'react'
import {data} from '../data/data.js'

const Food = () => {
    // console.log(data)
    const [foods, setFoods] = useState(data)
  return (
    <div className='max-w-[2560px] m-auto px-2 py-2'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div key={index} className='border shadow-lg hover:scale-105 duration-300'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover' />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange text-white p-1 rounded-full'>{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Food


{/* display items */}
      {/* <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index)=> (
        <div key={index} className='border shadow-lg hover:scale-105 duration-300'>
          <img src={item.image} alt={item.name} 
          className='w-full h-[200px] object-cover'/>
          <div className='flex justify-between px-2 py-4'>
            <p className='font-bold'>{item.name}</p>
            <p>
              <span className='bg-orange text-white p-1 rounded-full'>{item.price}</span>
            </p>
          </div>
        </div>
        ) )}
      </div> */}
