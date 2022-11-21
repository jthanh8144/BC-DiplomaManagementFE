import { createContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens')
      ? localStorage.getItem('authTokens')
      : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem('user') ? localStorage.getItem('user') : null
  );

  const loginUser = (token, user) => {
    setAuthTokens(token);
    setUser(user);
    localStorage.setItem('authTokens', token);
    localStorage.setItem('user', user);
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    localStorage.removeItem('user');
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
