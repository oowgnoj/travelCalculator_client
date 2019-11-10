import React, { Component } from 'react';

import { Form, Icon, Input } from 'antd';
import Button_material from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './login.css';

class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        let url = 'http://3.15.20.155:5000/signin';
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        })
          .then(response => {
            return response.json();
          })
          .then(json => {
            sessionStorage.setItem('userid', json.userid);
            sessionStorage.setItem('keyword', json.keyword);
            sessionStorage.setItem('gender', json.gender);
            sessionStorage.setItem('gender', json.age);
            this.props.history.push('/');
            return json;
          })
          .catch(err => console.log(err, 'login-error'));
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Icon style={{ fontSize: '220px', marginLeft: '70px' }} type="user" />
        <Form
          onSubmit={this.handleSubmit}
          style={{ marginTop: '20px', padding: '20px' }}
        >
          <Form.Item>
            {getFieldDecorator('id', {
              rules: [
                { required: true, message: 'Please input your username!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />,
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>

          <Form.Item>
            <Button_material
              type="primary"
              htmlType="submit"
              style={{ width: '100%' }}
              className="login-form-button"
            >
              Log in
            </Button_material>

            <React.Fragment>
              <Button_material
                variant="contained"
                color="primary"
                component={Link}
                to="/signup"
                style={{ width: '100%' }}
              >
                signup
              </Button_material>{' '}
            </React.Fragment>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Form.create({ name: 'normal_login' })(NormalLoginForm);
