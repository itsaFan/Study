import "./App.css";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
      <Todo text='Master React'/>
      <Todo text='Learn NextJs'/>
    </div>
  );
}

export default App;
