import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Admin from './Component/Admin';
import BankNav from './Component/BankNav';
import Dashboard from './Component/Dashboard';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';


const App = ()=> {
 

  
  return (

    <div className='container' id="home" class="align-content-end">
      <Router>
         <BankNav class="p-4"/>
         <Switch>
           <Route exact path="/">
            <Home/>
           </Route>
           <Route exact path="/Register">
            <Register/>
           </Route>
           <Route exact path="/Login">
            <Login/>
           </Route>
           <Route exact path="/Dashboard">
            <Dashboard/>
           </Route>
           <Route exact path="/Admin">
            <Admin/>
           </Route> 
          </Switch>
      </Router>
    </div>
  )
}

export default App

