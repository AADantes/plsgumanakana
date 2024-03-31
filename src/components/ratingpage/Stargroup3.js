import React, { useState } from 'react';
import SnapDashboard from '../mainpage/dashboard/SnapDashboard';
import Stars from './Stars';

export default function Stargroup3({setScore}) {

  const [stars, setStars] = useState(Array(10).fill(false));

  const handleStarClick = index => {
    const newStars = stars.map((_, i) => i <= index);
    setStars(newStars);

    const score = newStars.filter(isFilled => isFilled).length;
setScore(score)

  };
 


  return (
    <div>
      <h1>Task Completion Time</h1>
      <Stars stars = {stars} onStarClick={handleStarClick}/>
    </div>
  );
  
}


