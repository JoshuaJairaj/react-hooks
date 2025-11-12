import  { useState } from 'react';

function Child({count} : any){
    console.log("Child Re-rendered")
    return(
        <>
        <p>Child count: {count}</p>
        </>
    )
}

export default function UseState2() {
  const [count, setCount] = useState(0);
  console.log("Rerendering Parent..."); 

  return (
    <div>
      <h1>Parent Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      
      <Child count={count%3===0 ? 1 : 0}/>
    </div>
  );
}