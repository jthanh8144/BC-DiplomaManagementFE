import { createContext, useState } from 'react';

const DataContext = createContext();

function DataProvider({ children }) {
  const [diploma, setDiploma] = useState(null);

  const contextData = {
    diploma,
    setDiploma,
  };

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
}

export { DataContext, DataProvider };
