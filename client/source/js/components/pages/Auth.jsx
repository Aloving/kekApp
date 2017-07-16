import React from 'react';
import {connect} from 'react-redux';
import {action_createUser, action_getUser, action_getToken,  action_login} from "../../redux/actions";




class Auth extends React.Component{
  constructor(){
    super();
    this.state = {
      newUser : false,
      haveToken: true
    }
    this.toggleUser = this.toggleUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveToken =  this.saveToken.bind(this);
    this.onChangeId =  this.onChangeId.bind(this)
  }


 toggleUser(){
    this.setState({newUser: !this.state.newUser})
  }
  saveToken(token){
   localStorage.setItem('token', token);
    localStorage.setItem('token', token);
  }
  handleSubmit(evt){
    evt.preventDefault();
    var data = {username: this.username.value, password: this.password.value}
    if(this.state.newUser){
      this.props.createUser(data)

    }else{
      this.props.getToken(data)
    }
  }
  componentDidMount(){
localStorage.removeItem('token')



    var token = localStorage.getItem('token');
    if(token){
      this.props.getUser({token: token})
    }else{
        this.setState({haveToken: false})
    }
  }
  componentWillReceiveProps(nextProps){
    if(this.props.auth.token != nextProps.auth.token){
    this.saveToken(nextProps.auth.token);
    }
    if(this.props.auth.id != nextProps.auth.id){
      this.onChangeId();
    }
  }
  onChangeId(){
    if(localStorage.getItem('token')){
      this.props.login()
    }else {
      var data = {username: this.username.value, password: this.password.value}
      this.props.getToken(data)
    }
  }
  render(){
    var content;
    if(this.state.haveToken){
      content = <div></div>
    }else{
      content = <div className="auth__body">
        <div className="auth__header">Добро пожаловать!</div>
        <div className="auth__link" onClick={this.toggleUser}>{this.state.newUser ? 'Уже зарегестрированы?' : 'Еще не зарегистрированы?'}</div>
        <form className="auth__form" onSubmit={this.handleSubmit}>
          <input type="text" required name="username" placeholder="Ваш логин" className="auth__input" ref={(username) => this.username = username}/>
          <input type="password" required name="password" placeholder="Ваш пароль" className="auth__input" ref={(password) => this.password = password}/>
          <button type="submit" className="auth__submit">{this.state.newUser ? 'Регистрация' : 'Войти'}</button>
        </form>
      </div>
    }
    return(

      <div className="auth">
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
    login: () => {
      dispatch(action_login());
    },
  };
};

export default connect(
  (state) => {
    return {auth: state.auth}
  },
  mapDispatchToProps
)(Auth);
