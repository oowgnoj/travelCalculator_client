import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import App from './App';
import SummaryPage from './Components/summarypage/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Bar from './Components/layout/MenuBar';
import Trends from './Components/trends';
import Login from './Components/login/login';
import Register from './Components/register/register';
import About from './Components/about';
import Mypage from './Components/mypage/index.js';

const { Footer } = Layout;

ReactDOM.render(
  <BrowserRouter>
    <Bar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/summary" component={SummaryPage} />
      <Route exact path="/trends" component={Trends} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={App} />
      <Route exact path="/signup" component={Register} />
      <Route exact path="/about" component={About} />
      <Route exact path="/mypage" component={Mypage} />
    </Switch>
    <div style={{ width: 'auto' }}>
      <Footer
        style={{
          textAlign: 'center',
          fontSize: '12px',
          minHeight: '100%',
        }}
      >
        Travel calculator ©2019 Created by human Calc :)
      </Footer>
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);
