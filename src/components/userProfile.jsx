import React from 'react';
import userprofile2 from '../assets/userprofile2.jpg';

const UserProfile = () => {
  return (
    <div className="flex items-center space-x-5 ">
      {/* Add your user profile content here */}
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> <img src={userprofile2} alt="User profile" className="w-10 h-10 rounded-full" /> </a>        
    </div>
  );
};

export default UserProfile;