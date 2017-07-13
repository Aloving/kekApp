import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import '../scss/app.scss';
import store from './redux/store';
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router';

import App from './components/App';
import Home from './components/pages/Home';
import Stat from './components/pages/Stat';
import Calendar from './components/pages/Calendar';
import NotFound from './components/pages/NotFound';
import Day from './components/pages/Day';
import Auth from './components/pages/Auth.jsx';


var login = false;


ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory}>

        <Route path="/" component={App}>

            <IndexRoute  component={Auth}/>


        </Route>
    </Router>


</Provider>, document.getElementById('root'));
