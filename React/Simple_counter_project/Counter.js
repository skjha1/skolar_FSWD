import React, { useState } from 'react';
import './Counter.css'

// Define the counter functional component

const Counter = () => {

  // Declare a state variable count and a function setCount to update it, initialize count to 0 
  
  const [count, setCount] = useState(0);

  // Function to increament the count state by 1 
  
  const increament = () => setCount(count + 1);

  // Function to decreament the count state by 1 

  const decreament = () => setCount(count - 1);

  const reset = () => setCount(0);



  // Returning the JSX to render the components

  return (
    <div className='counter-container'>
        <h1 className='counter-display'>Counter: {count}</h1>
        <div className='button-group'>
            <button className='counter-button increment' onClick={increament}>Increament</button>
            <button className='counter-button decrement' onClick={decreament}>Increament</button>
            <button className='counter-button reset' onClick={reset}>Reset</button>
        </div>
    </div>
  );
};

// Exporting the counter component as the default export of this module
export default Counter;
