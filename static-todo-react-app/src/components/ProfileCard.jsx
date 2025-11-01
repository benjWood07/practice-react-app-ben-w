import React from 'react';

// Define a functional component that accepts props
function ProfileCard(props) {
  // Render the data dynamically using props
  return (
    <div className="profile-card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default ProfileCard;