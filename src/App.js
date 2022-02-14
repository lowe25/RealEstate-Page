import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.scss';

//
import Navbar from "./Layout/Navbar/Navbar";
function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar />

  </BrowserRouter>
  </>
  );
}

export default App;
