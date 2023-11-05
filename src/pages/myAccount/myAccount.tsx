import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './myAccount.scss';
import { Row, Col, Radio, Space, ConfigProvider } from 'antd';
import {
  ArrowLeftOutlined, EditFilled
} from '@ant-design/icons';
import CardBox from '../../commonComponents/cardBox/cardBox';
import ProfileAvatar from '../../commonComponents/profileAvatar/profileAvatar';

export default function MyAccount() {
  const navigate = useNavigate();
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#00b96b',
          borderRadius: 2,

          // Alias Token
          colorBgContainer: '#f6ffed',
        },
        components: {
          Radio: {
            buttonColor: '#99ca3b'
          }
        }
      }}
    >
      <Row>
        <Col span={24}>
          <CardBox title='My Account' headerColor={false} leftSection={<ArrowLeftOutlined onClick={() => { navigate(`/`); }} />} >
            <Row gutter={[8, 8]}>
              <Col span={24}>
                <CardBox title='My Profile' headerColor={true} rightSection={<EditFilled onClick={() => console.log()} />} >
                  <Row gutter={[8, 8]}>
                    <Col span={3}>
                      <div className='avators'>
                        <ProfileAvatar size={100} />
                        <div className='editIcon'>
                          <EditFilled onClick={() => console.log()} />
                        </div>
                      </div>
                    </Col>
                    <Col span={21}>
                      <div className='proInfo'>
                        <h3>Divya Chatarjee</h3>
                        <div className='subHead'>Designation</div>
                        <p>Assistant Manager - HR</p>
                        <div className='subHead'>Company name</div>
                        <p>XYZ Company Name</p>
                      </div>
                    </Col>
                    <Col span={24}>
                      <div className='aboutMe'>
                        <div className='subHead'>About Me</div>
                        <p>Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Its mission is to empower every person and every organization on the planet to achieve more.</p>
                      </div>
                    </Col>
                  </Row>
                </CardBox>
              </Col>
              <Col span={12}>
                <CardBox title='My Account Settings' headerColor={true} rightSection={<EditFilled onClick={() => console.log()} />} >
                  <Row gutter={[8, 8]}>
                    <Col span={12}>
                      <div className='subHead'>Full Name*</div>
                      <p>Divya Chatarjee</p>
                    </Col>
                    <Col span={12}>
                      <div className='subHead'>Designation</div>
                      <p>Assistant Manager - HR</p>
                    </Col>
                    <Col span={12}>
                      <div className='subHead'>Phone / Landline*</div>
                      <p>1234567890</p>
                    </Col>
                    <Col span={12}>
                      <div className='subHead'>Security</div>
                      <p>
                        <a href='/'>Change Password</a>
                      </p>
                    </Col>
                  </Row>
                </CardBox>
              </Col>

              <Col span={12}>
                <CardBox title='Application Settings' headerColor={true} rightSection={<EditFilled onClick={() => console.log()} />} >
                  <Row gutter={[8, 8]}>
                    <Col span={24}>
                      <div className='subHead'>Receive job application via</div>
                      <Radio.Group>
                        <Space direction="vertical" className='readioSection'>
                          <Radio value={1}>Only on my dashboard</Radio>
                          <Radio value={2}>Email and Dashboard</Radio>
                        </Space>
                      </Radio.Group>

                      <div className='subHead'>*Please note, this setting will notimpact your job old postings</div>
                    </Col>
                  </Row>
                </CardBox>
              </Col>
            </Row>
          </CardBox>
        </Col>
      </Row>
    </ConfigProvider>
  );
}
