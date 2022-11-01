import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ToastContextProvider } from './trds/components/Toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContextProvider>
    <App />
    </ToastContextProvider>
  </React.StrictMode>
);