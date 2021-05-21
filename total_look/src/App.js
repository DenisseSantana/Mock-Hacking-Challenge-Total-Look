import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // NavLink,
} from "react-router-dom";

import './App.css';

import Accessories from './pages/Accessories/Accessories.js';
import Clothes from './pages/Clothes/Clothes';
import Home from './pages/Home/Home';
import Kids from './pages/Kids/Kids';
import Offers from './pages/Offers/Offers';
import Shoes from './pages/Shoes/Shoes';
import Sports from './pages/Sports/Sports';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
       <Navbar/>
       <Footer/>
      <Switch>
				<Route path="/kids">  
          <Kids />
				</Route>
				<Route path="/accessories">
          <Accessories />
				</Route>
        <Route path="/sports">
          <Sports />
        </Route>
				<Route path="/shoes">
          <Shoes />
				</Route>
				<Route path="/clothes">
          <Clothes />
				</Route>
				<Route path="/offers">
          <Offers />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
