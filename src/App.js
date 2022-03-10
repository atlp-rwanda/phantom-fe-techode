import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/signIn/LoginForm';
import Home from './containers/Home/Home';
import Profile from './containers/profile/Profile';
import passwordReset from './components/passwordReset/passwordereset';
import NewPassword from './components/passwordReset/newpassword';
import RegisterDriver from './containers/RegisterDriverOperator/RegisterDriver';
import RegisterOperator from './containers/RegisterDriverOperator/RegisterOperator';
import 'react-toastify/dist/ReactToastify.css';
import './assets/style/style-skeleton.css';
import Dashboard from './containers/Dashboard/Dashboard';
import Roles from './components/roles/Roles';
import BusSimulation from './containers/BusSimulation/BusSimulation';



const App = () => {
    return (  
       <Router>
           <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/reset"  component={passwordReset} />
                <Route path="/newpassword"  component={NewPassword} />
                <Route path="/login" exact component={Login} />
                <Route path="/dashboard"  component={Dashboard} />
                <Route path="/drivers"  component={RegisterDriver} />
                <Route path="/operators"  component={RegisterOperator} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/roles" exact component={Roles}/>
                <Route path="/simulation" exact component={BusSimulation}/>
                <Route path="/*"  component={() => ({ "NotFound": 400 })} />
           </Switch>
       </Router>
    );
}

export default App