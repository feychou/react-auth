import React, { createContext, useState } from "react"
import cookies from "js-cookie";
import axios from 'axios';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const userToken = cookies.get('token');
  const [authToken, setAuthToken] = useState(userToken);
  const [error, setError] = useState(false);

  const login = (email, pass) => {
    axios
      .post("https://pokefight-wbs.herokuapp.com/auth/login", {
        email: login,
        pass,
      })
      .then((res) => {
        if (res.status === 200) {
          const token = res.headers["x-auth-token"];
          cookies.set("token", token);
          setAuthToken(token);
        } else {
          setError(true);
        }
      })
      .catch((e) => {
        console.log(e)
        setError(true);
      });
  };

  const register = (email, pass) => {
    axios
      .post("https://pokefight-wbs.herokuapp.com/auth/login", {
        email: login,
        pass,
      })
      .then((res) => {
        if (res.status === 200) {
          const token = res.headers["x-auth-token"];
          cookies.set("token", token);
          setAuthToken(token);
        } else {
          setError(true);
        }
      })
      .catch((e) => {
        console.log(e)
        setError(true);
      });
  };

  const logout = () => {
    cookies.remove('token');
  }

  const isLoggedIn = () => {
    return authToken ? true : false;
  }

  return (
    <AuthContext.Provider value={{
      authError: error,
      isLoggedIn,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;