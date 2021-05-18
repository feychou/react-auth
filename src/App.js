import React from "react";
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute'
import Nav from './components/Nav';

const App = () => (
  <div className="App">
    <Nav />
    <Switch>
      <ProtectedRoute path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <Route path='/signup' component={Signup} />
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
