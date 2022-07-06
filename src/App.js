import "./App.css";

import { BrowserRouter as Router, Link, useRoutes } from "react-router-dom";

import { NavBar } from "./components/navbar/index.jsx";
import { RouteList } from "./routes/index.jsx";
import { BrowserRouter } from "react-router-dom";


const App = () => (
  <BrowserRouter>
    <main>
      <NavBar />
      <RouteList />
    </main>
   
  </BrowserRouter>
);

export default App;