import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from '../AuthContext';

const initialFormData = {
  email: "",
  password: ""
}

const Login = () => {
  const { login, isLoggedIn } = useContext(AuthContext);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isLoggedIn()) return <Redirect to="/"/>

  return (
    <>
      <input
        type="text"
        name="email"
        value={formData.login}
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="password"
      />
      <button onClick={() => login(formData)}>Login</button>
    </>
  );
};

export default Login;
