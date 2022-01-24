import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext)

  return <div>{isLoggedIn() ? 'Hello friend!' : 'Hello intruder!'}</div>
};

export default Home;
