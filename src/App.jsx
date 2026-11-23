import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import DummyFetcher from "./components/DummyFetcher";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "0 16px", fontFamily: "sans-serif" }}>
      <h1>Eksplorasi React Hooks</h1>
      <Counter />
      <TodoList />
      <DummyFetcher />
    </div>
  );
}

export default App;