import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "react-tiger-transition/styles/main.min.css";
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  // wrapped in BrowserRouter
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
,
 document.getElementById('root'))


serviceWorker.unregister();
