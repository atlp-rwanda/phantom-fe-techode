import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";

import Login from "./containers/SignIn/LoginForm.js";
import Home from "./containers/Home/Home.js";
import Logout from "./components/logout/Logout.js";
import Profile from "./containers/profile/Profile.js";
import NewPassword from "./components/passwordReset/newpassword.js";
import RegisterDriver from "./containers/RegisterDriverOperator/RegisterDriver.js";
import RegisterOperator from "./containers/RegisterDriverOperator/RegisterOperator.js";
import RegisterBus from "./containers/RegisterBus/RegisterBus.js";
import "react-toastify/dist/ReactToastify.css";
import "./assets/style/style-skeleton.css";
import Dashboard from "./containers/Dashboard/Dashboard.js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.js";
import Roles from "./components/roles/Roles.js";
import Busesoperat from "./containers/busesOp/Busesoperat.js";
import BusSimulation from "./containers/BusSimulation/BusSimulation.js";
import OperatorAssignBus from "./containers/OperatorDriverBus/OperatorAssignBus.js";
import AddRoute from "./containers/Routes/AddRoute.js";
import SignUp from "./containers/SignUp/SignUp.js";
import PasswordReset from "./components/passwordReset/passwordereset.js";
import Simulation from "./containers/Simulation/Simulation.js";

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
          exact
          path="/tracking"
          render={() =>
            <Simulation />
          }
        />

        <Route
          path="/reset"
          render={() =>
            logginStatus ? <Redirect to="/dashboard" /> : <PasswordReset />
          }
        />
        <Route
          path={`/newpassword/:${props.token}`}
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
