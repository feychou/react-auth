import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn())
  return (
    <Route {...rest}>
      {isLoggedIn() ? <Component /> : <Redirect to='login' />}
    </Route>
  )
}

export default ProtectedRoute;