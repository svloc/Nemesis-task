import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "./auth.js";
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
