import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import App from './App';
import Wordcloud from './Components/trends/Wordcloud';
import SummaryPage from './Components/SummaryPage/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Bar from './Components/Layout/MenuBar';
import Trends from './Components/trends';
import Login from './Components/login/login';
import Register from './Components/register/register';
const { Footer } = Layout;

ReactDOM.render(
  <BrowserRouter>
    <Bar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/summary" component={SummaryPage} />
      <Route exact path="/Trends" component={Trends} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      {/* <Route exact path="/Trends/:detail" component={Wordcloud} /> */}
    </Switch>
    <Footer style={{ textAlign: 'center' }}>
      Travel calculator ©2019 Created by human Calc
    </Footer>
  </BrowserRouter>,
  document.getElementById('root'),
);
