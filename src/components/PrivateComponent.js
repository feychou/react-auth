import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const PrivateComponent = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn() ? children : <Navigate to='/login' replace />
}

export default PrivateComponent;