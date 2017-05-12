import React from 'react';
import { render } from 'react-dom';
import SourceList from './scripts/components/sources/Sources';
// import Login from './scripts/components/login/login';

const Main = () => (
  <div>
    <SourceList />
  </div>
  );

export default Main;

render(<SourceList />, document.getElementById('root'));
