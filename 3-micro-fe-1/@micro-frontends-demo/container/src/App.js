import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return <Switch>
    <Route exact path="/" component={Browse}></Route>
    <Route exact path="/restaurant/:id" component={Restaurant}></Route>
    <Route exact path="/random" component={Random}></Route>
  </Switch>;
}

export default App;
