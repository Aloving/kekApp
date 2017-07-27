import React from 'react';
import {connect} from "react-redux";
import {action_logout} from "../../redux/actions";

class Logout extends React.Component{

  componentDidMount(){

    localStorage.removeItem('token');
    this.props.onLogout();
    this.props.logout();
  }
  render(){
    return null;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(action_logout());
    },
  };
};

export default connect(
  (state) => {
    return {auth: state.auth}
  },
  mapDispatchToProps
)(Logout);
