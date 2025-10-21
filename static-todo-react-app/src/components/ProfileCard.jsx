import React from 'react';

// 2. ProfileCard.jsx

//define a functional component that accepts props
function ProfileCard(props) {
  //render the data dynamically using props
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
      <p>{props.bio}</p>
    </div>
  );
}

export default ProfileCard;