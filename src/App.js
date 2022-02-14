import { BrowserRouter, Route, Switch } from "react-router-dom";
//SCSS
import "./App.scss";

//Layout
import Navbar from "./Layout/Navbar/Navbar";

//Pages
import Home from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";
import Contact from "./Pages/Contacts/Contacts";
import Properties from "./Pages/Properties/Properties";
import BuyersGuide from "./Pages/BuyersGuide/BuyersGuide";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contact} />
          <Route path="/properties" component={Properties} />
          <Route path="/buyersGuide" component={BuyersGuide} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
