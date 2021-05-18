import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import useFormData from '../useFormData';
import { AuthContext } from '../AuthContext';

const initialFormData = {
  email: '',
  password: '',
  username: ''
}

const Signup = () => {
  const [ formData, handleChange ] = useFormData(initialFormData)
  const { register, isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn()) return <Redirect to='/' />

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
}

export default Signup;