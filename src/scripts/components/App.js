import React from 'react';
import Header from './Header';
import SourceList from './Sources';

const App = function displayComponents() {
  return (
    <div className="app-source">
      <div className="header">
        <Header />
      </div>
      <div className="sources">
        <SourceList />
      </div>
    </div>
  );
};

export default App;
