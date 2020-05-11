import React from 'react';
import Header from './Header';
import SourceList from './Sources';
import Footer from './Footer';

const App = () => (
  <div className="app-source">
    <div className="header">
      <Header />
    </div>
    <div className="sources">
      <SourceList />
    </div>
    <div className="container-fluid text-center mt-3">
      <Footer />
    </div>
  </div>
  );

export default App;
