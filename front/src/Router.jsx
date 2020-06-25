import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        <Route path="/traitements" component={AddTreatment} />
      </Switch>
    </Router>
  );
};

export default ProjectRouter;
