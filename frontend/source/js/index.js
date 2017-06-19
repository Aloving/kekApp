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
