import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state:any, action:any) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function UseReducer1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>  <br />
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </>
  );
}
