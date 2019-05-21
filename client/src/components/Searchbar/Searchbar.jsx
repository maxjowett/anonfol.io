import React from 'react';
import Select from 'react-select';

import coins from '../../coins'

const scaryAnimals = [
  { label: "Alligators", value: 1 },
  { label: "Crocodiles", value: 2 },
  { label: "Sharks", value: 3 },
  { label: "Small crocodiles", value: 4 },
  { label: "Smallest crocodiles", value: 5 },
  { label: "Snakes", value: 6 },
];

console.log(coins.length)
const Searchbar = () => (
  <div className="app">
    <div className="container">
      <Select options={coins} />
    </div>
  </div>
);

export default Searchbar;