import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from '../AuthContext';

const initialForm = {
  email: '',
  password: '',
  username: ''
};

const Signup = () => {
  const { register, isLoggedIn } = useContext(AuthContext);
  const [formData, setFormData] = useState(initialForm);

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
        placeholder="email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      <button onClick={() => register(formData)}>Register</button>
    </>
  )
};

export default Signup;