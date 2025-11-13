import { useState } from 'react';

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
      <button className="border p-2" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <CountLabel count={count} />
    </>
  );
}
