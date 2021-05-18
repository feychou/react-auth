import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import useFormData from '../useFormData';

const initialFormData = {
  email: '',
  password: ''
};

const Login = () => {
  const { login, isLoggedIn } = useContext(AuthContext)
  const [ formData, handleChange ] = useFormData(initialFormData)

  if (isLoggedIn()) return <Redirect to="/"/>

  return (
    <>
      <input
        type="text"
        name="email"
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="password"
      />
      <button onClick={() => login(formData)}>Login</button>
    </>
  )
}

export default Login;