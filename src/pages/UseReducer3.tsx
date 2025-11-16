import { useEffect, useReducer } from "react";

// Reducer for todos
function todoReducer(state: string[], action: { type: string; payload?: string }) {
  switch (action.type) {
    case "add":
      return [...state, action.payload!];
    case "remove":
      return state.filter((todo, index) => index !== Number(action.payload));
    default:
      return state;
  }
}

// Expensive function to read from localStorage
function initTodos() {
  console.log("Reading todos from localStorage...");
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
}

export default function UseReducer3() {
  const [todos, dispatch] = useReducer(todoReducer, [], initTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const addTodo = () => {
    const todo = prompt("Enter a todo");
    if (todo) dispatch({ type: "add", payload: todo });
  };

  return (
    <div>
      <h2>My Todos</h2>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            {todo}{"  -> "}
            <button  className="border" onClick={() => dispatch({ type: "remove", payload: String(idx) })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
