import React, { useState } from 'react';
import { Routes, useNavigate, Route } from 'react-router-dom';
import './App.scss';
import { Layout, Grid, Drawer, Breadcrumb } from 'antd';
import { breadCrumbsDefaultList, sideMenu } from './utils/commonUtils';
import MyAccount from './pages/myAccount/myAccount';
import CommonComponent from './pages/commonPage/commonPage';
import { breadCrumbItem } from './interfaces/typeInterfaces';
import HeaderSection from './layout/headerSeaction/headerSection';
import SideNavigation from './layout/sideNavigation/sideNavigation';

const { Content } = Layout;
const { useBreakpoint } = Grid;

function App() {
  const screens = useBreakpoint();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [breadCrumbsList, setBreadCrumbsList] = useState(breadCrumbsDefaultList);

  console.log('rrrrr', screens);


  const sideMenuClickHandle = (value: string) => {
    const breadCrumbs: breadCrumbItem[] = [...breadCrumbsDefaultList, { title: sideMenu[+value]?.label }];
    const navicationPath: string = sideMenu[+value]?.path;
    setBreadCrumbsList(breadCrumbs);
    return navigate(`/${navicationPath}`);
  };

  const collapseHandle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className='App'>
      <HeaderSection userName='DC' collapseHandle={collapseHandle} collapsed={collapsed} />
      <Layout hasSider>
        <SideNavigation collapsed={collapsed} sideMenuClickHandle={sideMenuClickHandle} />
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
