import React, { createContext, useState } from "react"
import cookies from "js-cookie";
import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const userToken = cookies.get('token');
  const [authToken, setAuthToken] = useState(userToken);
  const [error, setError] = useState(false);

  const setCookieOrError = (res) => {
    const { status, data } = res;

    if (status === 200) {
      const { token } = data;
      cookies.set("token", token);
      setAuthToken(token);
    } else {
      setError(true);
    }   
  }

  const login = ({ email, password }) => {
    axios
      .post(`${API_URL}/login`, { email, password })
      .then((res) => setCookieOrError(res))
      .catch((e) => setError(true));
  };

  const register = ({ email, username, password }) => {
    axios
      .post(`${API_URL}/register`, { email, password, username })
      .then((res) => setCookieOrError(res))
      .catch((e) => setError(true));
  };

  const logout = () => {
    cookies.remove('token');
    setAuthToken('');
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