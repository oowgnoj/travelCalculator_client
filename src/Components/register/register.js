import React, { Component } from 'react';
import { Form, Icon, Input, Button, Cascader, Select } from 'antd';

import keyWords from '../../Assets/menu/key-words';
import './register.css';

const { Option } = Select;

class NormalLoginForm extends Component {
  state = {
    keyword: '',
    age: '',
    gender: '',
  };

  onChangeAge1 = value => {
    this.setState({
      gender: value,
    });
  };

  onChangeAge2 = value => {
    this.setState({
      age: value,
    });
  };

  onChangeKey = value => {
    this.setState({ keyword: value[1] });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        let obj = { ...values, ...this.state };
        if (obj.password === obj.password2) {
          delete obj.password2;
          let url = 'http://3.15.20.155:5000/signup';
          fetch(url, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(response => {
              console.log('respons------', response);
              this.props.history.push('/');
              return response.json();
            })
            // .then(json => {
            //     console.log('json-----------',json);

            //     // message sent!
            // })
            .catch(err => console.log(err, 'register-error'));
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { keyword, age, gender } = this.state;
    let test = keyword && age && gender ? false : true;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('password2', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password2"
            />,
          )}
        </Form.Item>

        <Radio.Group
          className="half"
          onChange={this.onChange1}
          defaultValue="male"
          size="large"
          buttonStyle="solid"
        >
          <Radio.Button className="half" value="male">
            남
          </Radio.Button>

          <Radio.Button className="half" value="female">
            여
          </Radio.Button>
        </Radio.Group>
        <Cascader
          options={keyWords}
          onChange={this.onChangeKey}
          size="large"
          placeholder="Please select 키워드"

      <div>
        <Icon
          style={{ fontSize: '150px', marginLeft: '110px' }}
          type="user-add"
        />
        <Form onSubmit={this.handleSubmit} style={{ padding: '20px' }}>
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
            {getFieldDecorator('password2', {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password2"
              />,
            )}
          </Form.Item>

          <Select
            style={{ marginBottom: 20 }}
            onChange={this.onChangeAge1}
            size="large"
            placeholder="Please select 성별"
          >
            <Option value="2">남</Option>
            <Option value="1">여</Option>
          </Select>

          <Select
            style={{ marginBottom: 20 }}
            onChange={this.onChangeAge2}
            size="large"
            placeholder="Please select 연령대"
          >
            <Option value="10">10대</Option>
            <Option value="20">20대</Option>
            <Option value="30">30대</Option>
            <Option value="40">40대</Option>
            <Option value="50">50대</Option>
          </Select>
          <Cascader
            style={{ marginBottom: 20 }}
            options={keyWords}
            onChange={this.onChangeKey}
            size="large"
            placeholder="Please select 키워드"
          />
          <Form.Item>
            <Button
              disabled={test}
              type="primary"
              htmlType="submit"
              style={{ width: '100%' }}
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'normal_login' })(NormalLoginForm);
