import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({ pathForRedirect, onOpenFirst, user, component: Component, ...rest}){
  console.log(location.pathname);
user ? null : onOpenFirst(pathForRedirect);
  return(
    <Route {...rest} render={
      props => (
        user ?
          <Component userId={user.id} {...props}/>
          :

          <Redirect  to="/login"/>
      )
    } />

  );
}


export default PrivateRoute;