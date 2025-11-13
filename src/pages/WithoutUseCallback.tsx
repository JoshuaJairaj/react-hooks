import React, { useState } from "react";

type ButtonProps = {
  onClick: () => void;
  text: string;
};

const Button = React.memo(({ onClick, text }: ButtonProps) => {
  console.log(`Child ${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

export default function WithoutUseCallback() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = () => setCount1(count1 + 1);
  const handleClick2 = () => setCount2(count2 + 1);

  console.log("Parent rendered");
  return (
    <div>
      <h2>Without useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}
