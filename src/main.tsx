import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@styles/index.css';
import '@styles/web3-styles.css';
import '@styles/button-style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

