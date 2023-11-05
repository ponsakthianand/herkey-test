import * as React from 'react';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftOutlined
} from '@ant-design/icons';
import CardBox from '../../commonComponents/cardBox/cardBox';

interface commonPageProps {
  title: string;
}

export default function CommonComponent(props: commonPageProps) {
  const navigate = useNavigate();
  return (
    <Row>
      <Col span={24}>
        <CardBox title={props?.title} headerColor={false} leftSection={<ArrowLeftOutlined onClick={() => { navigate(`/`); }} />} innerSpace={20}>
          {props?.title} page
        </CardBox>
      </Col>
    </Row>
  );
}
