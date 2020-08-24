import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppLayout } from 'Components/Layout';
import { Routes } from 'Const/Routes';

function App()
{
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route exact path={Routes.Home.path}>
            <h1>home</h1>
          </Route>
          <Route path={Routes.AddTransaction.path}>
            <h1>add</h1>
          </Route>
          <Route path={Routes.TransactionList.path}>
            <h1>list</h1>
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
}

export { App };