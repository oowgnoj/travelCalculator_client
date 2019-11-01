import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import App from './App';
import Loading from './Loading';
import SummaryPage from './Components/SummaryPage/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <BrowserRouter>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/loading" component={Loading} />
            <Route exact path="/summary" component={SummaryPage} />
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Travel calculator ©2018 Created by human Calc
      </Footer>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root'),
);
