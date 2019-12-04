import React from 'react';
import Normalize from 'react-normalize';

import { GlobalStyle } from './GlobalStyle';
import { Header, Footer } from 'layout';
import PageContent from 'pages';

const App: React.FC = () => {
  return (
    <>
      {/* CSS Reset and Global Styles */}
      <Normalize />
      <GlobalStyle />

      {/* Page Content */}
      <Header />
      <PageContent />
      <Footer />
    </>
  );
};

export default App;
