import logo from "./logo.svg";
import "./App.css";
import ProductIndex from "./components/product_index";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Posts Sharer</h1>
      </header> */}
      <ProductIndex />
    </div>
  );
}

export default App;