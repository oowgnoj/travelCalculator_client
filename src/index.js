import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import App from './App';
import SummaryPage from './Components/SummaryPage/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Trends from './Components/trends/trends';
const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <BrowserRouter>
    <Layout className="layout" style={{ backgroundColor: '#CADBE9' }}>
      <Header style={{ backgroundColor: '#CADBE9' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px', backgroundColor: '#CADBE9' }}
        >
          <Menu.Item key="1">Trends</Menu.Item>
          <Menu.Item key="2">Compare</Menu.Item>
          <Menu.Item key="3">log in</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', backgroundColor: 'white' }}>
        <div>
          {/* <div style={{ background: '#fff', padding: 24, minHeight: 280 }}> */}
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/summary" component={SummaryPage} />
            <Route exact path="/trends" component={Trends} />
          </Switch>
        </div>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>
        Travel calculator ©2019 Created by human Calc
      </Footer> */}
    </Layout>
  </BrowserRouter>,
  document.getElementById('root'),
);
