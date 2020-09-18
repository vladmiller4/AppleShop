// Core dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// Application dependencies
import './index.css';
import App from './App';

// Progressive Web App support
import registerServiceWorker from './registerServiceWorker';

// Redux store
import applicationStore from './registerApplicationStore';


ReactDOM.render(
  <Provider store={applicationStore()}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
