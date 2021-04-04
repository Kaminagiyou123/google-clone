import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gmail from "./components/Gmail";
import Images from "./components/Images";
import Account from "./components/Account";
import Apps from "./components/Apps";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Switch>
        <Route path='/gmail'>
          <Gmail />
        </Route>
        <Route path='/images'>
          <Images />
        </Route>
        <Route path='/apps'>
          <Apps />
        </Route>
        <Route path='/account'>
          <Account />
        </Route>
        <Route path='/'></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
