import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  /*Link,
  Redirect*/
} from "react-router-dom";
//import { AuthProvider } from "./auth/auth";

//Pages
import HomePage from "./pages/homepage/homepage";
import Team from "./pages/team/team";
import Products from "./pages/products/products";
import Product from "./pages/product/product";
import Cart from "./pages/cart/cart";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Profile from "./pages/profile/profile";
import Admin from "./pages/admin/admin";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/team" component={Team}></Route>
          <Route exact path="/products" component={Products}></Route>
          <Route exact path="/product/:id" component={Product}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/admin" component={Admin}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
