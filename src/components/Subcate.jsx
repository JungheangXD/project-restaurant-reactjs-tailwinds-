import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import {HiMenuAlt1} from 'react-icons/hi';
import { useState } from 'react';

const Subcate = () => {
  const [toggle, setToggle] = useState(false);

    function openMenu(){
        setToggle(true);
    }

    function closeMenu(){
        setToggle(false);
    }
  return (
    <>
        <div className="flex items-center justify-center p-3 lg:flex-row">
          <div className="space-x-4">
            <div className='ssm:hidden lg:block space-x-2'>
              <a href="#" className="text-white hover:bg-orange rounded-full px-5 py-2 text-xl">food</a>
              <a href="#" className="text-white hover:bg-orange rounded-full px-5 py-2 text-xl">drink</a>
              <a href="#" className="text-white hover:bg-orange rounded-full px-5 py-2 text-xl">alcohol</a>
              <a href="#" className="text-white hover:bg-orange rounded-full px-5 py-2 text-xl">snack</a>
              <a href="#" className="text-white hover:bg-orange rounded-full px-5 py-2 text-xl">dessert</a>
            </div>

            <div className='ssm:block lg:hidden'>
              {toggle ?(
                <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer ' />
                ):(<HiMenuAlt1 onClick={openMenu} size={30} className='text-white' />)}
            </div>
          </div>     
        </div>

        <div className='ssm:block lg:hidden '>
            {toggle ? (
                <div className='flex justify-center ml-10'>
                  <ul>
                    <li className='text-white text-xl mb-2 cursor-pointer'>food</li>
                    <li className='text-white text-xl mb-2 cursor-pointer'>drink</li>
                    <li className='text-white text-xl mb-2 cursor-pointer'>alcohol</li>
                    <li className='text-white text-xl mb-2 cursor-pointer'>snack</li>
                    <li className='text-white text-xl mb-2 cursor-pointer'>dessert</li>
                  </ul>
            </div>
            ):(
                <div></div>
            )}
      </div>
      
    </>
  )
}

export default Subcate
