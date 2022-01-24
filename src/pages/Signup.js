import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

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

  if (isLoggedIn()) return <Navigate to='/' replace />

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
        placeholder="name"
        name="name"
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