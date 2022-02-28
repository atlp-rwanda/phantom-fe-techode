import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import passwordReset from './components/passwordReset/passwordereset';
import NewPassword from './components/passwordReset/newpassword';


import Register from './containers/RegisterDriverOperator/Register';

const App = () => {
    return (  
       <Router>
        
           <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/reset"  component={passwordReset} />
                <Route path="/newpass"  component={NewPassword} />
             
                <Route path="/driver/register"  component={Register} />
           </Switch>
       </Router>
    );
}

export default App