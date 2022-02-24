import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbars/navbar/Navbar';
import Home from './containers/Home/Home';
import Logout from './components/logout/Logout';
import Register from './containers/RegisterDriverOperator/Register';

import RegisterDriver from './containers/RegisterDriverOperator/RegisterDriver';
import RegisterOperator from './containers/RegisterDriverOperator/RegisterOperator';
const App = () => {
    return (  
       <Router>
           <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/driver/register"  component={Register} />
                <Route path="/drivers"  component={RegisterDriver} />
                <Route path="/operators"  component={RegisterOperator} />
           </Switch>
       </Router>
    );
}

export default App