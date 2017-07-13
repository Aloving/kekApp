import React from 'react';

class Auth extends React.Component{

  render(){
    return(
      <div className="auth">
        <div className="auth__body">
          <div className="auth__header">Добро пожаловать!</div>
          <div className="auth__link">Еще не зарегистрированы?</div>
        <form className="auth__from" ref={(form) => this.form = form}>
          <input type="email" name="email" className="auth__input"/>
          <input type="password" name="password" className="auth__input"/>
          <button type="submit" className="auth__submit">Войти</button>
        </form>
        </div>
      </div>
    )
  }
}

export default Auth;