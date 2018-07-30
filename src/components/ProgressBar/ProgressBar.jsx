import React from 'react';
import progressBar from 'react-progress-bar.js';


const ProgressBar = () => {
  let Circle = progressBar.Circle;

  const options = {
    strokeWidth: 10,
    easing: 'bounce',
    duration: 1800
  };

  const containerStyle = {
    width: '128px',
    height: '128px'
  };

  return (
    <Circle
      progress='.87'
      text={'87%'}
      options={options}
      initialAnimate={true}
      containerStyle={containerStyle}
      containerClassName={'.progressbar'}
    />
  );
}

export default ProgressBar;