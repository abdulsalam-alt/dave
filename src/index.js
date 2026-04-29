import React from 'react';
import { createRoot } from 'react-dom/client'; // Notice the different import
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 
 