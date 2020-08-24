import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import { Routes } from 'Const/Routes';

type HeaderProps = { broken:boolean };

function Header({ broken }: HeaderProps)
{
  const brokenStyle: Object = broken ? { textAlign: 'center' } : { paddingLeft: '2rem' };

  return (
    <Layout.Header
      className='site-layout-header'
      style={{
        ...brokenStyle, position: 'fixed', zIndex: 1, width: '100%',
      }}
    >
      <Switch>
        {Routes.All.map(({ path, name }) => <Route key={path} exact path={path}><h1>{name}</h1></Route>)}
      </Switch>
    </Layout.Header>
  );
}

export { Header };