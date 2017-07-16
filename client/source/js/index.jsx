import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import '../scss/app.scss';
import store from './redux/store';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import App from './components/App';
import Home from './components/pages/Home';
import Stat from './components/pages/Stat';
import Calendar from './components/pages/Calendar';
import NotFound from './components/pages/NotFound';
import Day from './components/pages/Day';
import Auth from './components/pages/Auth.jsx';




ReactDOM.render(<Provider store={store}>
    <Router >

            <App>
                <Route exect path="/" component={Home}/>
                <Route path="/login" component={Auth}/>
                <Route path="/stat" component={Stat}/>
            </App>
        
    </Router>


</Provider>, document.getElementById('root'));
