import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { Routes } from 'Const/Routes';

type NavigationProps = { onNavigate:Function };

const Navigation = ({ onNavigate }: NavigationProps) =>
{
  const location = useLocation();

  return (
    <Menu theme='dark' selectedKeys={[location.pathname]} style={{ zIndex: 2 }}>
      {Routes.All.map(({ path, name }) => (
        <Menu.Item key={path} onClick={() => onNavigate()}>
          <Link to={path}>{name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export { Navigation };