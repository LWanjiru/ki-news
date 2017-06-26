import React from 'react';
import { render } from 'react-dom';
import App from './scripts/components/App';

require('./../public/stylesheets/index.scss');

render(<App />, document.getElementById('root'));
