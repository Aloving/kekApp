import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import '../scss/app.scss';
import store from './redux/store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App';
import Home from './components/Home';
import Stat from './components/Stat';
import Calendar from './components/Calendar';


ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="stat" component={Stat}/>
            <Route path="calendar" component={Calendar}/>
        </Route>
    </Router>


</Provider>, document.getElementById('root'));
