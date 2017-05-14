import React from 'react';
import { render } from 'react-dom';
import Header from './scripts/components/header/header';
import SourceList from './scripts/components/sources/Sources';

const Main = () => (
  <div>
    <Header />
    <SourceList />
  </div>
  );

export default Main;
render(<Header />, document.getElementById('header'));
render(<SourceList />, document.getElementById('root'));
