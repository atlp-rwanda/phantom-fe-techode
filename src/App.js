import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/signIn/LoginForm';
import Home from './containers/Home/Home';
import Profile from './containers/profile/Profile';
import passwordReset from './components/passwordReset/passwordereset';
import NewPassword from './components/passwordReset/newpassword';
import RegisterDriver from './containers/RegisterDriverOperator/RegisterDriver';
import RegisterOperator from './containers/RegisterDriverOperator/RegisterOperator';
import RegisterBus from './containers/RegisterBus/RegisterBus'
import 'react-toastify/dist/ReactToastify.css';
import './assets/style/style-skeleton.css';
import Dashboard from './containers/Dashboard/Dashboard';
import Roles from './components/roles/Roles';

import Busesoperat from './containers/busesOp/Busesoperat'

import BusSimulation from './containers/BusSimulation/BusSimulation';

import OperatorAssignBus from './containers/OperatorDriverBus/OperatorAssignBus'

import DashboardOperator from './containers/Dashboard/DashboardOperator'

const App = () => {
    return (  
       <Router>
           <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/reset"  component={passwordReset} />
                <Route path="/newpassword"  component={NewPassword} />
                <Route path="/login" exact component={Login} />
                <Route path="/dashboard"  component={Dashboard} />
                <Route path="/dashboard_operator"  component={Dashboard} />
                <Route path="/drivers"  component={RegisterDriver} />
                <Route path="/assign_drivers_buses"  component={OperatorAssignBus} />
                <Route path="/operators"  component={RegisterOperator} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/roles" exact component={Roles}/>
                <Route path="/buses" exact component={Busesoperat}/>
                <Route path="/simulation" exact component={BusSimulation}/>
                <Route path="/buses" component={RegisterBus} />
                <Route path="/*"  component={() => ({ "NotFound": 400 })} />
           </Switch>
       </Router>
    );
}

export default App