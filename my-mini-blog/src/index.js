import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Portfolio from './portfolio'
import Contact from './contact'
import Jumbotron from './jumbox';
import Users from './users'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const routing = (
  <Router>
    <div>
     
      <Route exact path="/" component={App} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/jumbox" component={Jumbotron}/>
      <Route path="/users" component={Users} />

    </div>


  </Router>
  
)

ReactDOM.render(routing, document.getElementById('root'))