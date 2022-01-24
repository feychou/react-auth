import Nav from './components/Nav';
import { Outlet } from "react-router-dom";

const App = () => (
  <div className="App">
    <Nav />
    <Outlet />
  </div>
);

export default App;
