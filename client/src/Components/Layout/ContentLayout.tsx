import React, { ReactNode } from 'react';
import { Layout } from 'antd';

function ContentLayout({ children }:{ children: ReactNode })
{
  return (
    <Layout.Content className='site-layout' style={{ padding: '0 50px', marginTop: 64 }}>
      <div className='site-layout-background' style={{ padding: 24, minHeight: '100%' }}>
        {children}
      </div>
    </Layout.Content>
  );
}

export { ContentLayout };