import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // <React.StrictMode>
<Auth0Provider
    domain="mollemira.us.auth0.com"
    clientId="cmBKMx5fz4Qqe6Kd40F5S8K6fXJhD3l1"
    redirectUri={window.location.origin}
    audience="https://mollemira.us.auth0.com/api/v2/"
    scope="openid profile email"
>
    <App />
</Auth0Provider>

    //{/* </React.StrictMode> */}
);
