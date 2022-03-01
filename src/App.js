import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";

import Login from "./containers/SignIn/LoginForm";
import Home from "./containers/Home/Home";
import Logout from "./components/logout/Logout";
import Profile from "./containers/profile/Profile";
import NewPassword from "./components/passwordReset/newpassword";
import RegisterDriver from "./containers/RegisterDriverOperator/RegisterDriver";
import RegisterOperator from "./containers/RegisterDriverOperator/RegisterOperator";
import RegisterBus from "./containers/RegisterBus/RegisterBus";
import "react-toastify/dist/ReactToastify.css";
import "./assets/style/style-skeleton.css";
import Dashboard from "./containers/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Roles from "./components/roles/Roles";
import Busesoperat from "./containers/busesOp/Busesoperat";
import BusSimulation from "./containers/BusSimulation/BusSimulation";
import OperatorAssignBus from "./containers/OperatorDriverBus/OperatorAssignBus";
import AddRoute from "./containers/Routes/AddRoute";
import SignUp from "./containers/SignUp/SignUp";
import PasswordReset from "./components/passwordReset/passwordereset";

const App = (props) => {
  const authentication = props.authentication;

  let logginStatus = localStorage.getItem("Logged");

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            logginStatus ? <Redirect to="/dashboard" /> : <Home />
          }
        />

        <Route
          path="/reset"
          render={() =>
            logginStatus ? <Redirect to="/dashboard" /> : <PasswordReset />
          }
        />
        <Route
          path="/newpassword"
          render={() =>
            logginStatus ? <Redirect to="/dashboard" /> : <NewPassword />
          }
        />

        <Route
          path="/login"
          render={() =>
            logginStatus ? <Redirect to="/dashboard" /> : <Login />
          }
        />

        <Route
          path="/signup"
          render={() =>
            logginStatus ? <Redirect to="/dashboard" /> : <SignUp />
          }
        />

        <ProtectedRoute
          path="/dashboard"
          component={Dashboard}
          auth={authentication.auth}
        />
        <ProtectedRoute
          path="/routes"
          component={AddRoute}
          auth={authentication.auth}
        />
        <ProtectedRoute
          path="/drivers"
          component={RegisterDriver}
          auth={authentication.auth}
        />
        <ProtectedRoute
          path="/operators"
          component={RegisterOperator}
          auth={authentication.auth}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          auth={authentication.auth}
        />
        <ProtectedRoute
          path="/roles"
          component={Roles}
          auth={authentication.auth}
        />
        <ProtectedRoute
          path="/buses"
          component={Busesoperat}
          auth={authentication.auth}
        />
        <ProtectedRoute
          path="/simulation"
          component={BusSimulation}
          auth={authentication.auth}
        />
        <ProtectedRoute
          path="/buses"
          component={RegisterBus}
          auth={authentication.auth}
        />
        <ProtectedRoute
          path="/routes"
          component={AddRoute}
          auth={authentication.auth}
        />
        <ProtectedRoute
          path="/dashboard_operator"
          component={Dashboard}
          auth={authentication.auth}
        />
        <ProtectedRoute
          path="/assign_drivers_buses"
          component={OperatorAssignBus}
          auth={authentication.auth}
        />
        <Route path="/*" component={() => ({ NotFound: 400 })} />
      </Switch>
    </Router>
  );
};

const mapToState = (state) => {
  return {
    authentication: state.authentication,
  };
};

export default connect(mapToState, {})(App);
