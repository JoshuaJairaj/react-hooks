import React, { useState, useCallback } from "react";

type ButtonProps = {
  onClick: () => void;
  text: string;
};

const Button = React.memo(({ onClick, text }: ButtonProps) => {
  console.log(`Child ${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

export default function WithUseCallback() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Use functional updates so that the function never changes
  const handleClick1 = useCallback(() => {
    setCount1(prev => prev + 1);
  }, []);

  const handleClick2 = useCallback(() => {
    setCount2(prev => prev + 1);
  }, []);

  console.log("Parent rendered");

  return (
    <div>
      <h2>With useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}
