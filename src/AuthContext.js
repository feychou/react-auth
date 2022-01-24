import { createContext, useState } from 'react';
import cookies from 'js-cookie';
import axios from 'axios';

export const AuthContext = createContext();

const API_URL = 'http://localhost:5000/auth';

const AuthContextProvider = ({ children }) => {
  const userToken = cookies.get('token');
  const [authToken, setAuthToken] = useState(userToken);
  const [error, setError] = useState(false);

  const isLoggedIn = () => {
    return authToken ? true : false;
  }

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

  const login = ({ password, email }) => {
    axios
      .post(`${API_URL}/login`, { password, email })
      .then((res) => setCookieOrError(res))
      .catch((err) => setError(true))
  }

  const register = ({ name, password, email }) => {
    axios
      .post(`${API_URL}/register`, { name, password, email })
      .then((res) => setCookieOrError(res))
      .catch((err) => setError(true))
  };

  const logout = () => {
    cookies.remove('token');
    setAuthToken('');
  }

  return (
    <AuthContext.Provider
      value={{
        authToken,
        isLoggedIn,
        login,
        register,
        logout
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;