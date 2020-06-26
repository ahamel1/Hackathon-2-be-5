import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import App from './App';
import MainNav from './components/Nav';
import AddTreatment from './components/Form';
import User from './components/User';

const ProjectRouter = () => {
  return (
    <Router>
      <MainNav />
      <Switch>
        <Route exact path="/" component={User} />
        <Route exact path="/home" component={App} />
        <Route path="/treatments" component={AddTreatment} />
      </Switch>
      <ToastContainer position="bottom-center" autoClose={5000} />
    </Router>
  );
};

export default ProjectRouter;
