import React from "react";
import Sidebar from "./Sidebar";


import {Provider} from "react-redux";
import "./../../scss/app.scss";
import store from "../redux/store";
import { Route, Switch, withRouter} from "react-router-dom";

import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import Stat from "./pages/Stat";
import Calendar from "./pages/Calendar";
import NotFound from "./pages/NotFound";
import PrivateRoute from './PrivateRoute';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  login = user => {
    console.log(user);
    this.setState({user}, () => this.props.history.push('/'))
  }
  logout = () => {
    this.setState({user: null}, () => this.props.history.push('/login'))
  }

  render() {
    return (

          <div className="wrapper">
            <Sidebar />
            <div className="main">



              <Switch>
                <PrivateRoute user={this.state.user} exact path="/" component={Home}/>
                <PrivateRoute user={this.state.user} path="/stat" component={Stat}/>
                <PrivateRoute user={this.state.user} path="/calendar" component={Calendar}>
                  <PrivateRoute user={this.state.user} path="/day:dayId"/>
                </PrivateRoute>
                <Route path="/login" render={props => <Login onLogin={this.login}/>}/>
                <Route path="/logout" render={props => <Logout onLogout={this.logout}/>}/>

                <Route component={NotFound}/>

              </Switch>
            </div>
          </div>

    );
  }
}

export default withRouter(App);


