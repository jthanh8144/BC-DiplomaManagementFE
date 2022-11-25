import { createContext, useState } from 'react';

const DataContext = createContext();

function DataProvider({ children }) {
  const [diploma, setDiploma] = useState(null);
  const [admin, setAdmin] = useState(null);

  const contextData = {
    diploma,
    setDiploma,
    admin,
    setAdmin,
  };

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
}

export { DataContext, DataProvider };
