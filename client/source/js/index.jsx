import React from "react";
import ReactDOM from "react-dom";
//
import {Provider} from "react-redux";
// import "../scss/app.scss";
import store from "./redux/store";
import {BrowserRouter as Router} from "react-router-dom";
//
import App from "./components/App";
// import Home from "./components/pages/Home";
// import Stat from "./components/pages/Stat";
// import Calendar from "./components/pages/Calendar";
// import NotFound from "./components/pages/NotFound";
// import Auth from "./components/pages/Auth.jsx";
//

ReactDOM.render(<Provider store={store}>
  <Router ><App/></Router></Provider>, document.getElementById('root'));
