import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import App from './App';
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
          <Menu.Item key="1">Trends</Menu.Item>
          <Menu.Item key="2">Compare</Menu.Item>
          <Menu.Item key="3">log in</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Switch>
            <Route exact path="/" component={App} />
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
