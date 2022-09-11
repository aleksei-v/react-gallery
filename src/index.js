import ReactDOM from "react-dom";
import React from 'react';
import App from './app'
// import React from "react";
// const el = React.createElement('div', { a: 5, b: 10, children: ["Hello world"] });
// console.log(el);

// ReactDOM.render(el, document.querySelector('#root'))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);