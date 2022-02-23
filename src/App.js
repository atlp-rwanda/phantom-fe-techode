import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbars/navbar/Navbar';
import Home from './containers/Home/Home';
import PasswordReset from './components/passwordReset/passwordereset';

const App = () => {
    return (  
       <Router>
           <Navbar />
           <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/reset"  component={PasswordReset} />
           </Switch>
       </Router>
    );
}

export default App