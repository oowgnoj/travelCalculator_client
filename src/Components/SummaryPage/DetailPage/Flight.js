import { Descriptions, Row, Col } from 'antd';

import React from 'react';
import airplane from './../../../../src/Assets/icon/airplane.png';

function Flight() {
  return (
    <div style={{ marginBottom: '30px' }}>
      <Row>
        <Col span={4}>
          <img src={airplane} width={100} height={100} />
        </Col>
        <Col span={20}>
          <Descriptions title="User Info">
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">
              Hangzhou, Zhejiang
            </Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
}

export default Flight;
