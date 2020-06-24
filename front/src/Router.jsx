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
        <Route exact path="/" component={App} />
        <Route path="/traitements" component={AddTreatment} />
        <Route path="/connection" component={User} />
      </Switch>
    </Router>
  );
};

export default ProjectRouter;
