import { useRef } from 'react';

export default function UseRef2() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input className='border' ref={inputRef} />
      <button className="border p-2 m-2" onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}