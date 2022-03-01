import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbars/navbar/Navbar';
import Login from './components/signIn/LoginForm';
import newPage from './components/signIn/BlackPage'
import Home from './containers/Home/Home';
import RegisterDriver from './containers/RegisterDriverOperator/RegisterDriver';
import RegisterOperator from './containers/RegisterDriverOperator/RegisterOperator';
import 'react-toastify/dist/ReactToastify.css';
import './assets/style/style-skeleton.css';
import Dashboard from './containers/Dashboard/Dashboard';

const App = () => {
    return (  
       <Router>
           {/* <Navbar /> */}
           <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/new" exact component={newPage} />
                <Route path="/dashboard"  component={Dashboard} />
                <Route path="/drivers"  component={RegisterDriver} />
                <Route path="/operators"  component={RegisterOperator} />
           </Switch>
       </Router>
    );
}

export default App