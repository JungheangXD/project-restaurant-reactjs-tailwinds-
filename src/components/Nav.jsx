// // import React from 'react'
// // import { VscAccount } from "react-icons/vsc";

// // const Nav = () => {
// //   return (
// //     <>
// //       <div>
// //         <div className='flex grid grid-cols-2'>
// //           <img src="https://as1.ftcdn.net/v2/jpg/02/41/30/72/1000_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="#" className='rounded-full w-20 h-20 px-2 py-2'/>
// //           <a href="#" className="flex items-center justify-end flex-col md:flex-row text-xl md:text-2xl px-5 py-5">
// //             <VscAccount className="text-2xl md:text-4xl" />
// //           </a>
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// // export default Nav

// import React, { useState } from 'react';
// import Logo from "../assets/logo.png";

// const Nav = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className=" p-2 flex flex-col lg:flex-row items-center justify-between">
//       <div className="flex items-center space-x-2">
//         <img src={Logo} alt="Restaurant Logo" className="w-12 h-12" />
//         <h1 className=" font-semibold text-white">malevolent-kitchen</h1>
//       </div>
//       <div className="lg:hidden cursor-pointer ml-auto" onClick={toggleMenu}>
//         <svg
//           className="w-10 h-10 text-white"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16m-7 6h7"
//           ></path>
//         </svg>
//       </div>
//       <div className={`lg:flex lg:flex-col lg:items-center space-x-4 text-white lg:pr-20 mt-4 lg:mt-0 ${menuOpen ? 'flex' : 'hidden'}`}>
//         <ul className={`lg:flex ${menuOpen ? 'flex' : 'hidden'} justify-between space-x-4 lg:space-x-10`}>
//           <li><a href="#" className='block hover:bg-lightorange rounded-full px-3 py-2 text-xl' >Home</a></li>
//           <li><a href="#" className='block hover:bg-lightorange rounded-full px-3 py-2 text-xl' >About</a></li>
//           <li><a href="#" className='block hover:bg-lightorange rounded-full px-3 py-2 text-xl' >Contact us</a></li>
//           <li><a href="#" className='block hover:bg-lightorange rounded-full px-3 py-2 text-xl' >Announcement</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Nav;


import React, { useState } from 'react';
import Logo from "../assets/logo.png";
import UserProfile from './userProfile'; // Import your UserProfile component

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-2 flex flex-col lg:flex-row items-start justify-between">
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Restaurant Logo" className="w-12 h-12" />
        <h1 className="font-semibold text-white">malevolent-kitchen</h1>
      </div>
      <div className="lg:hidden cursor-pointer ml-auto" onClick={toggleMenu}>
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>
      
      <div className={`lg:flex lg:flex-col lg:items-end space-x-4 text-white lg:pr-auto mt-4 lg:mt-0 ${menuOpen ? 'flex' : 'hidden'}`}>
        <ul className={`lg:flex ${menuOpen ? 'flex' : 'hisdden'} justify-end space-x-4 lg:flex-row lg:space-x-10 rounded-lg p-4`}>
          <li><a href="#" className='hover:bg-lightorange rounded-full px-2 py-2 text-xl' >Home</a></li>
          <li><a href="#" className='hover:bg-lightorange rounded-full px-2 py-2 text-xl' >About</a></li>
          <li><a href="#" className='hover:bg-lightorange rounded-full px-2 py-2 text-xl' >Contact us</a></li>
          <li><a href="#" className='hover:bg-lightorange rounded-full px-2 py-2 text-xl' >Announcement</a></li>
          <li  ><a href=""><UserProfile /></a></li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Nav;
