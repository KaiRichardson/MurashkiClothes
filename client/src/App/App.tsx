import React from 'react';
import { useLocation } from 'react-router';
import Normalize from 'react-normalize';

import { GlobalStyle } from './GlobalStyle';
import { Header, Footer, Background } from 'layout';
import PageContent from 'pages';

const App: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      {/* CSS Reset and Global Styles */}
      <Normalize />
      <GlobalStyle />

      {(pathname === '/login' || pathname === '/register') && <Background colorOnLeft={pathname === '/login'} />}

      {/* Page Content */}
      <Header />
      <PageContent />
      <Footer />
    </>
  );
};

export default App;
