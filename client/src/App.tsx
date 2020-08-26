import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { AppLayout } from 'Components/Layout';
import { Routes } from 'Const/Routes';
import { CategoryPage } from 'Components/Category';
import { TransactionList } from 'Components/Transaction';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

function App()
{
  return (
    <ApolloProvider client={client}>
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
              <TransactionList />
            </Route>
            <Route path={Routes.Categories.path}>
              <CategoryPage />
            </Route>
          </Switch>
        </AppLayout>
      </Router>
    </ApolloProvider>
  );
}

export { App };