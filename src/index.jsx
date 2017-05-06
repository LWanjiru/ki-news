import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Root extends Component {
render () {
  return <div className='heading'> 
    <h1>Hello World! is all good</h1>
  </div>
}
}

render(<Root />, document.getElementById('root'));