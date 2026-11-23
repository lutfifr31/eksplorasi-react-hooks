import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Eksplorasi React Hooks</h1>
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;