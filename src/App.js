import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbars/navbar/Navbar';
import Home from './containers/Home/Home';
import Logout from './components/logout/Logout';
import Register from './containers/RegisterDriverOperator/Register';

const App = () => {
    return (  
       <Router>
           <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/driver/register"  component={Register} />
           </Switch>
       </Router>
    );
}

export default App