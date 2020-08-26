import React, { ReactNode } from 'react';
import { Layout } from 'antd';

type Props = {
  broken: boolean
  children: ReactNode
};

function ContentLayout({ broken = false, children }:Props)
{
  return (
    <Layout.Content className='site-layout' style={{ padding: broken ? 0 : '0 50px', marginTop: 64 }}>
      <div className='site-layout-background' style={{ padding: 24, minHeight: '100%' }}>
        {children}
      </div>
    </Layout.Content>
  );
}

export { ContentLayout };