import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
    <Auth0Provider
        domain="mollemira.us.auth0.com"
        clientId="cmBKMx5fz4Qqe6Kd40F5S8K6fXJhD3l1"
        redirectUri={window.location.origin}
        debug={true}
    >
        <App />
    </Auth0Provider>,
    document.getElementById('root')
);
