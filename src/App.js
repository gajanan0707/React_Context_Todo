import React from "react";
import "./styles/App.css";
import TodoProvider from "./context/TodoProvider";
import Todos from "./components/Todos";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Todos />
      </div>
    </TodoProvider>
  );
}

export default App;
