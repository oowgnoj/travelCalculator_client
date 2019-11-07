import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import App from './App';
import SummaryPage from './Components/SummaryPage/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Bar from './Components/Layout/MenuBar';
import Trends from './Components/Trends';
import Login from './Components/login/login';
import Register from './Components/register/register';
import About from './Components/Layout/about';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const { Footer } = Layout;

ReactDOM.render(
  <BrowserRouter>
    <Bar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/summary" component={SummaryPage} />
      <Route exact path="/trends" component={Trends} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/about" component={About} />
    </Switch>
    <Footer
      style={{
        textAlign: 'center',
        position: 'absolute',
        bottom: '0',
        fontSize: '12px',
        width: '100%',
      }}
    >
      Travel calculator ©2019 Created by human Calc :)
    </Footer>
  </BrowserRouter>,
  document.getElementById('root'),
);
