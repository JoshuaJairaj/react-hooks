import { useState, useEffect } from 'react';

export default function UseEffect1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('No depedency');
  });

  useEffect(() => {
    console.log('Empty array');
  },[]);

  useEffect(() => {
    console.log('with dependency');
  },[count]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button className='border' onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
