import "./App.css";
import AddToDo from "./components/AddToDo";
import NavBar from "./components/NavBar";
import Todos from "./components/Todos";

const App = () => {
  return (
    <main>
      <h1>TODO React + TYPESCRIPT</h1>
      <NavBar />
      <AddToDo />
      <Todos />
    </main>
  );
};

export default App;
