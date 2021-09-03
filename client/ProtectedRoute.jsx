import React from "react";
import { useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import Auth from "./Auth";

//returning a route with a comoponent that is passed in
const ProtectedRoute = ({auth, userId, component: Component, ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={(props) => {
      //if user is authenticated, return this path
      if(auth)
        return <Component auth={auth} userId = {userId} {...rest}/>
      else{
        <Redirect to = {{ pathname: "/login", state: {from: props.location}}}/>
      }
    
    }} />
      //Auth.getAuth() ? <DashboardContainer {...props} /> : <Redirect to="/login" />} />
  );
}

export default ProtectedRoute;