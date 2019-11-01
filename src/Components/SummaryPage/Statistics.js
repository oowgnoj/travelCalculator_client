import React, { Component, PropTypes } from 'react';
import { Row, Col, Statistic, Icon } from 'antd';

class Statistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={1} />
          <Col span={6}>
            <Statistic title="Flight + Hotel" value={112893} />
          </Col>
          <Col span={9}>
            <Statistic title="Foods" value={500000} precision={2} />
          </Col>
          <Statistic title="Currency" value={500000 + 112893} precision={2} />
        </Row>
      </div>
    );
  }
}
export default Statistics;
