import React from 'react';
import ReactDOM from 'react-dom';
//app
import App from './App';
//components
import registerServiceWorker from './registerServiceWorker';
//styles
import './index.css';

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();