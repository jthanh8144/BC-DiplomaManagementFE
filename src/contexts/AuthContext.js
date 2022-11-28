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

  const [isSuperAdmin, setIsSuperAdmin] = useState(false);

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
    setIsSuperAdmin(false);
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    loginUser,
    logoutUser,
    isSuperAdmin,
    setIsSuperAdmin,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
