import React from 'react';
import { Layout } from 'antd';

function ContentLayout({ children }:{ children: JSX.Element })
{
  return (
    <Layout.Content className='site-layout' style={{ padding: '0 50px', marginTop: 64 }}>
      <div className='site-layout-background' style={{ padding: 24, minHeight: 380 }}>
        {children}
      </div>
    </Layout.Content>
  );
}

export { ContentLayout };