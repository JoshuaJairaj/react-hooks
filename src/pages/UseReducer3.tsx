import { useReducer } from "react";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
}

function createInitialState() {
  console.log("createInitialState called!");
  return 0;
}

export default function UseReducer3() {
  const [count, dispatch] = useReducer(reducer, null, createInitialState); // passed as third argument (when the initial function is computation expensive) 

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </>
  );
}
