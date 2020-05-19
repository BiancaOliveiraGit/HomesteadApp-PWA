import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './service-worker.js';


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();

// TODO request permission after user interacts with site
Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});