// import Food from './Food'
// import Nav from './Nav'
// import Sidebar from './Sidebar'
// import Subcate from "./Subcate"
// const Main = () => {
//   return (
//     <>
//         <div className='bg-orange'>
//             <Nav />
//         </div>

//         <section className='grid sm:max-xl md:grid-cols-[200px_minmax(400px,_1fr)] md:text-left sm:max-xl'>
//             <Sidebar />
//             <div className='grid sm:max-xl md:grid-rows-2 sm:max-xl'>
//               <div className='bg-lightorange1 text-white'>
//                 <Subcate />
//               </div>
//               <div>
//                 <Food />
//               </div>
              
//             </div>
            
            
//         </section>
//     </>
//   )
// }

// export default Main

import React, { useState, useEffect } from 'react';
import Food from './Food';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Sidebarsmall from './Sidebarsmall'; // Import the sidebar for smaller screens
import Subcate from "./Subcate";

const Main = () => {

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

  return (
    <div className="container mx-auto p-4">
      <HorizontalMenu items={items} />
    </div>

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className='bg-orange'>
        <Nav />
      </div>

      <section className='grid sm:max-xl md:grid-cols-[90px_minmax(150px,_1fr)] md:text-left sm:max-xl'>
        {windowWidth < 768 ? ( // Check for 'sm' breakpoint
          <Sidebarsmall /> // Render SidebarSmall for smaller screens
        ) : (
          <Sidebar /> // Render regular Sidebar for larger screens
        )}
        {/* <div className='grid sm:max-xl md:grid-rows-2 sm:max-xl'>
          <div className='bg-lightorange1 text-white'>
            <Subcate />
          </div>
          <div>
            <Food />
          </div>
        </div> */}
        <div className='grid grid-cols-2 sm:max-xl md:grid-rows-2 sm:max-xl'>
          <div className='bg-lightorange1 text-white col-span-2 row-span-2'>
            <Subcate />
          </div>
          <div className='col-span-2 mx-0'>
            <Food />
          </div>
        </div>
      </section>
    </>
  );
};



export default Main;
