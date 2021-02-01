import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from '../AuthContext';

const Signin = () => {
  const { login, isLoggedIn } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setError(false)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isLoggedIn()) return <Redirect to="/"/>

  return (
    <>
      <input
        type="text"
        name="login"
        value={formData.login}
        onChange={handleChange}
        placeholder="username"
      />
      <input
        type="text"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="password"
      />
      <button onClick={() => login()}>Login</button>
      { error &&<p style={{color: 'red', fontWeight: 'bold'}}>Incorrect login or password!</p> }
    </>
  );
};

export default Signin;
