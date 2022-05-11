import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  let logginStatus = localStorage.getItem("Logged");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (logginStatus) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect to={{ path: "/", state: { from: props.location } }} />
          );
        }
     
      }}
    />
  );
};

export default ProtectedRoute;
