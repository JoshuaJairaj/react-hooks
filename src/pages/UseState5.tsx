import { useState } from 'react';
// import CountLabel from './CountLabel.js';

function CountLabel({count}: {count:any} ) {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(" null");
  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? 'increasing' : 'decreasing');
  }
  return (
    <>
      <h1>{count}</h1>
      {trend && <p>Trend: The count is {trend}</p>}
    </>
  );
}


export default function UseState5() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <CountLabel count={count} />
    </>
  );
}
