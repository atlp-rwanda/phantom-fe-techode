import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbars/navbar/Navbar';
import Home from './containers/Home/Home';

const App = () => {
    return (  
       <Router>
           <Navbar />
           <Switch>
                <Route path="/" exact component={Home} />
           </Switch>
       </Router>
    );
}

export default App