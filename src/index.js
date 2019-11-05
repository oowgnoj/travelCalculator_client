import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import App from './App';
import Wordcloud from './Components/trends/Wordcloud';
import SummaryPage from './Components/SummaryPage/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Bar from './Components/Public/MenuBar';
import Trends from './Components/trends/index.js';
const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <BrowserRouter>
    <Bar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/summary" component={SummaryPage} />
      <Route exact path="/trends" component={Trends} />
      <Route exact path="/trends/:cloud" component={Wordcloud} />
    </Switch>
    <Footer style={{ textAlign: 'center' }}>
      Travel calculator ©2019 Created by human Calc
    </Footer>
  </BrowserRouter>,
  document.getElementById('root'),
);
