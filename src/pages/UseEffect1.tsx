import { useState, useEffect } from 'react';

export default function UseEffect1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect runs after every render');
  }); // no dependency array

  return (
    <>
      <h1>Count: {count}</h1>
      <button className='border' onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
