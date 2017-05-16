import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import '../scss/app.scss';

import store from './redux/store'

store.dispatch({ type: 'GETDAYS' })

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
