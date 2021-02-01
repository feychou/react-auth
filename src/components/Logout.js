import React, { useContext } from "react";

import { AuthContext } from '../AuthContext';

const Logout = () => {
  const { logout } = useContext(AuthContext);

  return (
      <button
        style={{ marginTop: "2em" }}
        onClick={logout}
      >
        Logout
      </button>
  );
};

export default Logout;
