import { BrowserRouter, Route, Switch } from "react-router-dom";
//SCSS
import "./App.scss";

//Layout
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";

//Pages
import Home from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";
import Contact from "./Pages/Contacts/Contacts";
import Properties from "./Pages/Properties/Properties";
import BuyersGuide from "./Pages/BuyersGuide/BuyersGuide";

//Houses
import Sioux from "./Pages/HouseDescription/house1";
import Calgary from "./Pages/HouseDescription/house2";
import Idaho from "./Pages/HouseDescription/house3";
import Mediter from "./Pages/HouseDescription/house4";
import Atlantic from "./Pages/HouseDescription/house5";
import stCloud from "./Pages/HouseDescription/house6";

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
          {/**Pages */}
          <Route path="/siouxHouse" component={Sioux} />
          <Route path="/calgaryHouse" component={Calgary} />
          <Route path="/idahoHouse" component={Idaho} />
          <Route path="/mediterHouse" component={Mediter} />
          <Route path="/atlanticHouse" component={Atlantic} />
          <Route path="/stCloudHouse" component={stCloud} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
