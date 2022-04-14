import logo from "./logo.svg";
import "./App.css";
import FavChild from "./components/FavChild";
import Child from "./components/Child";

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <FavChild />
      <Child />
    </div>
  );
}

export default App;
