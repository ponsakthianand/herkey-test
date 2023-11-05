import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './myAccount.scss';
import { Row, Col, Radio, Space, ConfigProvider, Grid } from 'antd';
import {
  ArrowLeftOutlined, EditFilled
} from '@ant-design/icons';
import CardBox from '../../commonComponents/cardBox/cardBox';
import ProfileAvatar from '../../commonComponents/profileAvatar/profileAvatar';
import { sampleUserData } from '../../utils/commonUtils';
const { useBreakpoint } = Grid;

export default function MyAccount() {
  const navigate = useNavigate();
  const screens = useBreakpoint();
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
          <CardBox title='My Account' headerColor={false} leftSection={<ArrowLeftOutlined onClick={() => { navigate(`/`); }} />} innerSpace={(screens?.lg) ? 20 : 0}>
            <Row gutter={[8, 8]}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <CardBox title='My Profile' headerColor={true} rightSection={<EditFilled onClick={() => console.log()} />}>
                  <Row gutter={[8, 8]}>
                    <Col xs={24} sm={24} md={6} lg={5} xl={3}>
                      <div className='avators'>
                        <ProfileAvatar size={100} userName={sampleUserData.avatarLetter} />
                        <div className='editIcon'>
                          <EditFilled onClick={() => console.log()} />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={18} lg={19} xl={21}>
                      <div className='proInfo'>
                        <h3>{sampleUserData.name}</h3>
                        <div className='subHead'>Designation</div>
                        <p>{sampleUserData.jobPosition}</p>
                        <div className='subHead'>Company name</div>
                        <p>{sampleUserData.companyName}</p>
                      </div>
                    </Col>
                    <Col span={24}>
                      <div className='aboutMe'>
                        <div className='subHead'>About Me</div>
                        <p>{sampleUserData.about}</p>
                      </div>
                    </Col>
                  </Row>
                </CardBox>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <CardBox title='My Account Settings' headerColor={true} rightSection={<EditFilled onClick={() => console.log()} />} >
                  <Row gutter={[8, 8]}>
                    <Col span={12}>
                      <div className='subHead'>Full Name*</div>
                      <p>{sampleUserData.name}</p>
                    </Col>
                    <Col span={12}>
                      <div className='subHead'>Designation</div>
                      <p>{sampleUserData.jobPosition}</p>
                    </Col>
                    <Col span={12}>
                      <div className='subHead'>Phone / Landline*</div>
                      <p>{sampleUserData.telephone}</p>
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

              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <CardBox title='Application Settings' headerColor={true} rightSection={<EditFilled onClick={() => console.log()} />} >
                  <Row gutter={[8, 8]}>
                    <Col span={24}>
                      <div className='subHead'>Receive job application via</div>
                      <Radio.Group>
                        <Space direction="vertical" className='readioSection'>
                          <Radio value={1} checked>Only on my dashboard</Radio>
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
