import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import App from './App';
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PrivateComponent from './components/PrivateComponent'
import * as serviceWorker from './serviceWorker';
import AuthContextProvider from './AuthContext';

import './index.css';

ReactDOM.render(
  <AuthContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route 
            path="/admin"
            element={
              <PrivateComponent>
                <Admin />
              </PrivateComponent>
            }
          />
        </Route>
      </Routes>
    </Router>
  </AuthContextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
