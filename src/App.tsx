import React, { useState } from 'react';
import { Routes, useNavigate, Route } from 'react-router-dom';
import './App.scss';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, Dropdown, Grid, Drawer, Breadcrumb } from 'antd';
import logo from './media/images/brand/logo.png'
import { MainMenuList, breadCrumbsDefaultList, items, sideMenu } from './utils/commonUtils';
import MyAccount from './pages/myAccount/myAccount';
import CommonComponent from './pages/commonPage/commonPage';
import { breadCrumbItem } from './interfaces/typeInterfaces';
import ProfileAvatar from './commonComponents/profileAvatar/profileAvatar';

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;

function App() {
  const screens = useBreakpoint();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [breadCrumbsList, setBreadCrumbsList] = useState(breadCrumbsDefaultList);

  const sideMenuClickHandle = (value: string) => {
    const breadCrumbs: breadCrumbItem[] = [...breadCrumbsDefaultList, { title: sideMenu[+value]?.label }];
    const navicationPath: string = sideMenu[+value]?.path;
    setBreadCrumbsList(breadCrumbs);
    return navigate(`/${navicationPath}`);
  };

  return (
    <Layout className='App'>
      <Header className='headerStyle'>
        <div className='headerBrand'>
          <img alt='JobsForHer now Herkey' src={logo} className='brandLogo' onClick={() => { navigate(`/`); }} />
          <Button className='sideNavCollapseIcon'
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>
        <div className='headerNavigation'>
          <u className='headerNavigationList'>
            {
              MainMenuList?.map((item: string, key: number) => <li key={key}>{item}</li>)
            }
          </u>
        </div>
        <div className='headerProfile'>
          <Dropdown menu={{ items }} trigger={['hover']} className='dropdownAvatar'>
            <div><ProfileAvatar size={40} /></div>
          </Dropdown>
        </div>
      </Header>
      <Layout hasSider>
        <Sider trigger={null} collapsible collapsed={collapsed} className='siderStyle' width={300}>
          <div className='sideNavAvator'>
            <ProfileAvatar size={50} />
            <div className='helloName'>
              <span>Hello,</span> Divya!
            </div>
          </div>
          <Menu
            theme='dark'
            mode="inline"
            defaultSelectedKeys={['1']}
            items={sideMenu}
            onClick={(key) => sideMenuClickHandle(key?.key)}
          />
        </Sider>
        <Drawer></Drawer>
        <Layout>
          <Breadcrumb items={breadCrumbsList} className='breadCrumbs' />
          <Content className='contentStyle'>
            <Routes>
              <Route path="/" element={<MyAccount />} />
              <Route path="/my-account" element={<MyAccount />} />
              <Route path="/jobs" element={<CommonComponent />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
