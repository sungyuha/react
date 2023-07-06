import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ForwardRef from './ForwardRef';
import List from './List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <ForwardRef />
    <List />
  </>
);
