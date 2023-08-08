import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Auth0Provider } from '@auth0/auth0-react'
import reportWebVitals from './reportWebVitals';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider
    domain="dashboard-pro.eu.auth0.com"
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URL,
    }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode >
  </Auth0Provider >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
