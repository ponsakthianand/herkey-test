import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './myAccount.scss';
import { Row, Col, ConfigProvider, Grid } from 'antd';
import {
  ArrowLeftOutlined, EditFilled, CheckCircleTwoTone, CloseCircleOutlined
} from '@ant-design/icons';
import CardBox from '../../commonComponents/cardBox/cardBox';
import ProfileAvatar from '../../commonComponents/profileAvatar/profileAvatar';
import { useSelector, useDispatch } from 'react-redux';
import ModelCreateForm from '../../commonComponents/modal/model';
import { StateObjects, usersProfileData } from '../../utils/interfaces/typeInterfaces';
import { updateData } from '../../redux/userDataSlicer';
const { useBreakpoint } = Grid;

export default function MyAccount() {
  const navigate = useNavigate();
  const screens = useBreakpoint();
  const [openModel, setOpenModel] = useState<boolean>(false);
  const currentUser = useSelector((state: StateObjects) => state.userPersonalData);
  const dispatch = useDispatch();

  const openModelHandle = () => {
    setOpenModel(!openModel);
  };

  const updateUserProfile = (updatedData: usersProfileData) => {
    dispatch(updateData(updatedData));
  };

  let modelData = <ModelCreateForm open={openModel} onCancel={openModelHandle} onUpdate={updateUserProfile} initialData={currentUser} />;

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
                <CardBox title='My Profile' headerColor={true} rightSection={<EditFilled onClick={() => openModelHandle()} />}>
                  <Row gutter={[8, 8]}>
                    <Col xs={24} sm={24} md={6} lg={5} xl={3}>
                      <div className='avators'>
                        <ProfileAvatar size={100} userName={currentUser.avatarLetter} />
                        <div className='editIcon'>
                          <EditFilled onClick={() => openModelHandle()} />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={18} lg={19} xl={21}>
                      <div className='proInfo'>
                        <h3>{currentUser.name}</h3>
                        <div className='subHead'>Designation</div>
                        <p>{currentUser.jobPosition}</p>
                        <div className='subHead'>Company name</div>
                        <p>{currentUser.companyName}</p>
                      </div>
                    </Col>
                    <Col span={24}>
                      <div className='aboutMe'>
                        <div className='subHead'>About Me</div>
                        <p>{currentUser.about}</p>
                      </div>
                    </Col>
                  </Row>
                </CardBox>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <CardBox title='My Account Settings' headerColor={true} rightSection={<EditFilled onClick={() => openModelHandle()} />} >
                  <Row gutter={[8, 8]}>
                    <Col span={12}>
                      <div className='subHead'>Full Name*</div>
                      <p>{currentUser.name}</p>
                    </Col>
                    <Col span={12}>
                      <div className='subHead'>Designation</div>
                      <p>{currentUser.jobPosition}</p>
                    </Col>
                    <Col span={12}>
                      <div className='subHead'>Phone / Landline*</div>
                      <p>{currentUser.telephone}</p>
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
                <CardBox title='Application Settings' headerColor={true} rightSection={<EditFilled onClick={() => openModelHandle()} />} >
                  <Row gutter={[8, 8]}>
                    <Col span={24}>
                      <div className='subHead'>Receive job application via</div>
                      <Row>
                        <Col span={24}>
                          <div className='emailSetting'>
                            {currentUser?.mailSetting === 'dashboard' ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <CloseCircleOutlined twoToneColor="#cccccc" />} Only on my dashboard
                          </div>
                        </Col>
                        <Col span={24}>
                          <div className='emailSetting'>
                            {currentUser?.mailSetting === 'emailDash' ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <CloseCircleOutlined twoToneColor="#cccccc" />} Email and Dashboard
                          </div>
                        </Col>
                      </Row>
                      <div className='subHead'>*Please note, this setting will notimpact your job old postings</div>
                    </Col>
                  </Row>
                </CardBox>
              </Col>
            </Row>
          </CardBox>
        </Col>
      </Row>
      {modelData}
    </ConfigProvider>
  );
}
