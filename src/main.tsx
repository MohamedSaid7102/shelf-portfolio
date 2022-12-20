import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@styles/index.css';
import '@styles/web3-styles.css';
import '@styles/button-style.css';
import { StoreProvider } from '@base/src/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

