import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/media/animations/main.json';

function Animation() {
  return (
    <div className="Animation">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true} />
    </div>
  );
}

export default Animation; // Changed from 'animation' to 'Animation'
