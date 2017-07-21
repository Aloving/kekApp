import React from "react";
import {connect} from "react-redux";
import {action_createUser, action_getToken, action_getUser} from "../../redux/actions";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      haveToken: true,
      error: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  saveToken(token) {
    localStorage.setItem('token', token);
  }
  getUser(token){
    this.props.getUser({token: token})
  }

  handleSubmit(evt) {
    evt.preventDefault();
    var data = {username: this.username.value, password: this.password.value}
    this.props.getToken(data)

  }

  componentDidMount() {
    var token = localStorage.getItem('token');
    if (token) {
      this.props.getUser({token: token})
    } else {
      this.setState({haveToken: false})
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.auth.token != nextProps.auth.token) {
      this.saveToken(nextProps.auth.token);
      this.getUser(nextProps.auth.token);
    }
    if(nextProps.auth.error){
      this.setState({error: true})
    }
    if (this.props.auth.id != nextProps.auth.id) {
      this.onChangeId(nextProps.auth);
    }
  }

  onChangeId(auth) {
      this.props.onLogin({username: auth.username, id: auth.id});
  }

  render() {
    var content;
    if (this.state.haveToken) {
      content = ''
    } else {
      content =
        <div className="auth">
          <div className="auth__body">
            <div className="auth__header">kek APP</div>
            <div className="auth__tooltip">
                <div  className="auth__tooltip-item">
                  userName: <span>test</span>
                </div>
              <div  className="auth__tooltip-item">
                password: <span>test</span>
              </div>
            </div>
            <form className="auth__form" onSubmit={this.handleSubmit}>
              <input type="text" required name="username" placeholder="Ваш логин" className={this.state.error ? "auth__input auth__input_error" : "auth__input" } ref={(username) => this.username = username}/>
              <input type="password" required name="password" placeholder="Ваш пароль" className={this.state.error ? "auth__input auth__input_error" : "auth__input" } ref={(password) => this.password = password}/>
              <button type="submit" className="auth__submit">Вход</button>
            </form>
          </div>
        </div>
    }
    return (
      <div>
        {content}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (data) => {
      dispatch(action_getUser(data));
    },
    createUser: (data) => {
      dispatch(action_createUser(data));
    },
    getToken: (data) => {
      dispatch(action_getToken(data));
    },

  };
};

export default connect(
  (state) => {
    return {auth: state.auth}
  },
  mapDispatchToProps
)(Login);
