import logo from "./logo.svg";
import "./App.css";
// import {Route, Switch} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import ProductIndex from "./components/product_index";
import DetailItem from "./components/detail_item";

function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Posts Sharer</h1>
      </header> */}
      <ProductIndex />
      {/* <Switch>
        <Route exact path="/:itemId" > 
          <DetailItem />
        </Route>
      </Switch> */}

      {/* <Router>
        <Switch>
          <Route exact path="/" component={ProductIndex} />
          <Route exact path="/:itemId" component={DetailItem} />
        </Switch>
      </Router> */}


      {/* <BrowserRouter>
        <Routes>
          <Route path="/:itemId" element={<DetailItem />} />
        </Routes>
      </BrowserRouter> */}

    </div>
    )


}

export default App;