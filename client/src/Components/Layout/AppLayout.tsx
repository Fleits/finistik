import React, { ReactNode, useState } from 'react';
import { Layout } from 'antd';
import { ContentLayout } from './ContentLayout';
import { Header } from './Header';
import { Navigation } from './Navigation';

function AppLayout({ children }: { children: ReactNode })
{
  const [layoutBroken, setLayoutBroken] = useState<boolean>(false);
  const [layoutCollapsed, setLayoutCollapsed] = useState<boolean>(false);
  const siderStyle:Object = layoutBroken ? { position: 'absolute', height: '100vh', zIndex: 2 } : {};
  const footerStyle: Object = {
    textAlign: 'center', position: 'fixed', zIndex: 1, width: '100%', bottom: 0
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Sider
        breakpoint='lg'
        collapsedWidth='0'
        style={{ paddingTop: 64, ...siderStyle }}
        collapsed={layoutCollapsed}
        onBreakpoint={broken => setLayoutBroken(broken)}
        onCollapse={collapsed => setLayoutCollapsed(collapsed)}
      >
        <Navigation onNavigate={() => setLayoutCollapsed(layoutBroken)} />
      </Layout.Sider>
      <Layout style={{ background: '#ffffff' }}>
        <Header broken={layoutBroken} />
        <ContentLayout broken={layoutBroken}>
          {children}
        </ContentLayout>
        <Layout.Footer style={footerStyle}>was ne äpp</Layout.Footer>
      </Layout>
    </Layout>
  );
}

export { AppLayout };