import React from "react";
import Sidebar from "./Sidebar";
import "./../../scss/app.scss";
import {Route, Switch, withRouter} from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import Day from "./pages/Day";
import Stat from "./pages/Stat";
import Calendar from "./pages/Calendar";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./PrivateRoute";






class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,

    }
    this.backToPage = '/'
    this.onOpen = this.onOpen.bind(this)
  }

  login = user => {
    this.setState({user}, () => this.props.history.push(this.backToPage))
  }
  logout = () => {
    this.backToPage = '/';
    this.setState({user: null}, () => this.props.history.push('/login'))
  }
  onOpen(page){
    this.backToPage =  page;
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <div className="main">
          <Switch>
            <PrivateRoute pathForRedirect="/" onOpenFirst={this.onOpen} user={this.state.user} exact path="/" component={Home}/>
            <PrivateRoute pathForRedirect="/stat" onOpenFirst={this.onOpen} user={this.state.user} path="/stat" component={Stat}/>
            <PrivateRoute pathForRedirect="/calendar" onOpenFirst={this.onOpen} exact user={this.state.user} path="/calendar" component={Calendar}/>
            <PrivateRoute pathForRedirect="/calendar" onOpenFirst={this.onOpen} user={this.state.user} path="/calendar/day/:dayId" component={Day}/>
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


