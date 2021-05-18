import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Nav = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/admin">Admin</Link></li>
      <li>
        {
          isLoggedIn() ?
          <Link onClick={logout}>Logout</Link> :
          <Link to='login'>Login</Link>
        }
      </li>
      {
        !isLoggedIn() &&
        <li><Link to="/signup">Sign up</Link></li>
      }
    </ul>
  )
} 

export default Nav;