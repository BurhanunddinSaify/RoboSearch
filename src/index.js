import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App.js';
import Hello from './Hello.js';
import 'tachyons'

import reportWebVitals from './reportWebVitals';

ReactDOM.render( < Hello greetings={'Starting my React App'} /> ,
    document.getElementById('root')
);

reportWebVitals();