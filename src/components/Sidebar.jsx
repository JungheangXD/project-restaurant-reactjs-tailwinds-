// import React from 'react';
// import Breakfast from "../assets/Breakfast.svg";
// import Lunch from "../assets/Lunch.svg";
// import Dinner from "../assets/Dinner.svg";
// import Dessert from "../assets/Dessert.svg";
// import Beverages from "../assets/Beverages.svg";

// const Sidebar = () => {
//   return (
//     <div className="flex bg-lightorange">
//       <div className="flex text-white p-4">
//         <div>
//           <ul className='pt-10'>
//             <li className="mb-4">
//               <a href="#" className="hover:text-orange ">
//                 <img src={Breakfast} alt="Breakfast Logo" style={{ width: '40px', height: '40px', marginLeft: '12px' }} />
//                 Breakfast
//               </a>
//             </li>
//             <li className="mb-4">
//               <a href="#" className="hover:text-orange ml-2 block">
//                 <img src={Lunch} alt="Lunch Logo" style={{ width: '40px', height: '40px', marginLeft: '6px' }} />
//                 Lunch
//               </a>
//             </li>
//             <li className="mb-4">
//               <a href="#" className="hover:text-orange ml-2 block">
//                 <img src={Dinner} alt="Dinner Logo" style={{ width: '40px', height: '40px', marginLeft: '6px' }} />
//                 Dinner
//               </a>
//             </li>
//             <li className="mb-4">
//               <a href="#" className="hover:text-orange ml-2 block">
//                 <img src={Dessert} alt="Dessert Logo" style={{ width: '45px', height: '45px', marginLeft: '6px' }} />
//                 Dessert
//               </a>
//             </li>
//             <li className="mb-4">
//               <a href="#" className="hover:text-orange ">
//                 <img src={Beverages} alt="Beverages Logo" style={{ width: '40px', height: '40px', marginLeft: '14px' }} />
//                 Beverages
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default Sidebar;



import React from 'react';
import Breakfast from "../assets/Breakfast.svg";
import Lunch from "../assets/Lunch.svg";
import Dinner from "../assets/Dinner.svg";
import Dessert from "../assets/Dessert.svg";
import Beverages from "../assets/Beverages.svg";

const Sidebar = () => {
  return (
    
        <div  className="flex text-white p-4 bg-lightorange justify-center" >
          <ul className='pt-10'>
            <li className="mb-4" style={{ backgroundColor: 'transparent' }}>
              <a href="#" className="hover:text-orange focus:outline-none">
                <img src={Breakfast} alt="Breakfast Logo" style={{ width: '40px', height: '40px', marginLeft: '12px' }} />
                Breakfast
              </a>
            </li>
            <li className="mb-4" style={{ backgroundColor: 'transparent' }}>
              <a href="#" className="hover:text-orange ml-2 block focus:outline-none">
                <img src={Lunch} alt="Lunch Logo" style={{ width: '40px', height: '40px', marginLeft: '6px' }} />
                Lunch
              </a>
            </li>
            <li className="mb-4" style={{ backgroundColor: 'transparent' }}>
              <a href="#" className="hover:text-orange ml-2 block focus:outline-none">
                <img src={Dinner} alt="Dinner Logo" style={{ width: '40px', height: '40px', marginLeft: '6px' }} />
                Dinner
              </a>
            </li>
            <li className="mb-4" style={{ backgroundColor: 'transparent' }}>
              <a href="#" className="hover:text-orange ml-2 block focus:outline-none">
                <img src={Dessert} alt="Dessert Logo" style={{ width: '45px', height: '45px', marginLeft: '6px' }} />
                Dessert
              </a>
            </li>
            <li className="mb-4" style={{ backgroundColor: 'transparent' }}>
              <a href="#" className="hover:text-orange focus:outline-none">
                <img src={Beverages} alt="Beverages Logo" style={{ width: '40px', height: '40px', marginLeft: '14px' }} />
                Beverages
              </a>
            </li>
          </ul>
        </div>

  );
};

export default Sidebar;
