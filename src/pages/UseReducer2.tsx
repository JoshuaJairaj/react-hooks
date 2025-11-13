import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state:any, action:any) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export default function UseReducer2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
