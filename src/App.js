import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import passwordReset from './components/passwordReset/passwordereset';
import NewPassword from './components/passwordReset/newpassword';


import Register from './containers/RegisterDriverOperator/Register';

import RegisterDriver from './containers/RegisterDriverOperator/RegisterDriver';
import RegisterOperator from './containers/RegisterDriverOperator/RegisterOperator';
const App = () => {
    return (  
       <Router>
        
           <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/reset"  component={passwordReset} />
                <Route path="/newpass"  component={NewPassword} />
             
                <Route path="/driver/register"  component={Register} />
                <Route path="/drivers"  component={RegisterDriver} />
                <Route path="/operators"  component={RegisterOperator} />
           </Switch>
       </Router>
    );
}

export default App