import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({ onOpenFirst, user, component: Component, ...rest}){
user ? null : onOpenFirst(location.pathname);
  return(
    <Route {...rest} render={
      props => (
        user ?
          <Component userId={user.id} {...props}/>
          :
          <Redirect to="/login"/>
      )
    } />

  );
}


export default PrivateRoute;