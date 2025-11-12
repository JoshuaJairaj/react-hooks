import { useState, useEffect } from 'react';

export default function UseEffect3() {
  const [count, setCount] = useState(0);
  const [fifth,setFifth] = useState("no")

  useEffect(() => {
    console.log('Effect runs only when even changes');
  },[fifth]); 

  function handleClick(){
    (count+1)%5==0 ? setFifth("yes") : setFifth("no")
    setCount((count)=>count+1)
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button className='border' onClick={handleClick}>Increment</button>
    </>
  );
}
