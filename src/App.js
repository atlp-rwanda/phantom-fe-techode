import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbars/navbar/Navbar';
import Login from './components/signIn/LoginForm';
import newPage from './components/signIn/BlackPage'
import Home from './containers/Home/Home';

const App = () => {
    return (  
       <Router>
           {/* <Navbar /> */}
           <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/new" exact component={newPage} />
           </Switch>
       </Router>
    );
}

export default App