import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const savedToken = JSON.parse(localStorage.getItem('token')) || null;
  const [token, setToken] = useState(savedToken);

  const value = useMemo(() => ({ token, setToken }), [token]);

  return (
    <AuthContext.Provider value={ value }>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
