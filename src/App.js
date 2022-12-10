import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from '~/contexts/AuthContext';
import { DataProvider } from '~/contexts/DataContext';
import { publicRoutes, privateRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import { ScrollToTop } from '~/components/ScrollToTop';
import { Loading } from '~/components/Loading';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <DataProvider>
          <Routes>
            {publicRoutes.map((route, index) => {
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
            {privateRoutes.map((route, index) => {
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
          <Loading />
        </DataProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
