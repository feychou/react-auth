import React, { useContext } from "react";
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Logout from "./components/Logout"
import { Link, Route, Switch } from "react-router-dom";
import { AuthContext } from "./AuthContext"
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/signin">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
      <Switch>
        <ProtectedRoute path="/admin" component={Admin} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />
        {isLoggedIn() && <Route path="*" component={Logout}/>}
      </Switch>
      
    </div>
  );
};


export default App;
