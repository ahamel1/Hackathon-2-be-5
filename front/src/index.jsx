import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import ProjectRouter from './Router';

ReactDOM.render(
  <React.StrictMode>
    <ProjectRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
