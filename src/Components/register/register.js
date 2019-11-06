import React, { Component } from 'react';

import { Form, Icon, Input, Button, Cascader, Select, Radio } from 'antd';

import keyWords from '../../Assets/menu/key-words';

import './register.css';

const { Option } = Select;

class NormalLoginForm extends Component {
  state = {
    keyWord: '',

    ageRange: '',

    gender: '',
  };

  onChangeAge = value => {
    this.setState({
      ageRange: value,
    });
  };

  onChangeKey = value => {
    this.setState({ keyWord: value[1] });
  };

  onChange1 = e => this.setState({ gender: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log({ ...values, ...this.state });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

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

        {/* <Select

style={halfStyle}

onChange={this.onChangeAge}

size="large"

placeholder="Please select 연령대"

>

<Option value="10">10대</Option>

<Option value="20">20대</Option>

<Option value="30">30대</Option>

<Option value="40">40대</Option>

<Option value="50">50대</Option>

</Select> */}

        <Cascader
          options={keyWords}
          onChange={this.onChangeKey}
          size="large"
          placeholder="Please select 키워드"
        />

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%' }}
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'normal_login' })(NormalLoginForm);
