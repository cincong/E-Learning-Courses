import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content} = Layout;

const CustomLayout = (props) =>{
   return(
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Login</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
   <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{props.children}</div>
    </Content>
  
  </Layout>
   );
}

export default CustomLayout;

  