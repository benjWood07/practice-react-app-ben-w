import React from 'react';
import ProfileCard from './ProfileCard';

// 3. ProfileContainer.jsx
//create a functional component
function ProfileContainer() {
  //render multiple instances of ProfileCard with different data
  return (
    <div className="profile-container">
      <h1>User Profiles</h1>
      <ProfileCard 
        name="Alex" 
        age={25} 
        bio="A software engineer who loves hiking."
      />
      <ProfileCard 
        name="Taylor" 
        age={30} 
        bio="A designer passionate about photography."
      />
      <ProfileCard 
        name="Jake" 
        age={28} 
        bio="A teacher who enjoys reading and traveling."
      />
    </div>
  );
}

export default ProfileContainer;