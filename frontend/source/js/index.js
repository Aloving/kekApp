import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import '../scss/app.scss';
import store from './redux/store';
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Stat from './components/Stat';
import Calendar from './components/Calendar';
import NotFound from './components/NotFound';
import Day from './components/Day';
import Header from './components/Header';




ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute  component={Home}/>
            <Route path="/stat" component={Stat}/>
            <Route path="/calendar"  >

                <IndexRoute component={Calendar}/>
                <Route path="day/:dayId" component={Day}/>
            </Route>
            <Route path="*" component={NotFound}/>

        </Route>
    </Router>


</Provider>, document.getElementById('root'));
