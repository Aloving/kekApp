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
      backToPage: ''
    }
    this.onOpen = this.onOpen.bind(this)
  }

  login = user => {

    this.setState({user}, () => this.props.history.push(this.state.backToPage))
  }
  logout = (page) => {
    this.setState({backToPage: page})
    this.setState({user: null}, () => this.props.history.push('/login'))
  }
  onOpen(page){
    this.setState({backToPage: page})
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <div className="main">
          <Switch>
            <PrivateRoute onOpenFirst={this.onOpen} user={this.state.user} exact path="/" component={Home}/>
            <PrivateRoute onOpenFirst={this.onOpen} user={this.state.user} path="/stat" component={Stat}/>
            <PrivateRoute onOpenFirst={this.onOpen} exact user={this.state.user} path="/calendar" component={Calendar}/>
            <PrivateRoute onOpenFirst={this.onOpen} user={this.state.user} path="/calendar/day/:dayId" component={Day}/>
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


