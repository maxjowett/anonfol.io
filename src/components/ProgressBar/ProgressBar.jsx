import React from 'react';
import progressBar from 'react-progress-bar.js';

const calculateSupplyRatio = (a, b) => {
  let value = a / b;
  value = value.toFixed(2);
  return value;
};

const ProgressBar = (props) => {
  let Circle = progressBar.Circle;
  let color = props.queryObject.color;
  let circulatingSupply = props.queryObject.circulatingSupply;
  let totalSupply = props.queryObject.totalSupply;
  let supplyRatio = calculateSupplyRatio(circulatingSupply, totalSupply);
  
  const options = {
    color: color,
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
      progress={supplyRatio}
      text={'87%'}
      options={options}
      initialAnimate={true}
      containerStyle={containerStyle}
      containerClassName={'.progressbar'}
    />
  );
}

export default ProgressBar;