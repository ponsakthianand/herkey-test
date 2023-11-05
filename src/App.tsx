import React, { useState } from 'react';
import { Routes, useNavigate, Route } from 'react-router-dom';
import './App.scss';
import { Layout, Grid } from 'antd';
import { breadCrumbsDefaultList, sampleUserData, sideMenu } from './utils/commonUtils';
import MyAccount from './pages/myAccount/myAccount';
import CommonComponent from './pages/commonPage/commonPage';
import { SideMenuItem, breadCrumbItem } from './utils/interfaces/typeInterfaces';
import HeaderSection from './layout/headerSeaction/headerSection';
import SideNavigation from './layout/sideNavigation/sideNavigation';
import BreadCrumbsArea from './layout/breadCrumbArea/breadCrumbs';

const { Content } = Layout;
const { useBreakpoint } = Grid;

function App() {
  const screens = useBreakpoint();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [breadCrumbsList, setBreadCrumbsList] = useState<breadCrumbItem[]>(breadCrumbsDefaultList);
  const isLargeScreen: boolean | undefined = screens?.lg;
  let tempNavigationCompoent: any[] = [];

  const sideMenuClickHandle = (value: string) => {
    const breadCrumbs: breadCrumbItem[] = [...breadCrumbsDefaultList, { title: sideMenu[+value]?.label }];
    const navicationPath: string = sideMenu[+value]?.path;
    setBreadCrumbsList(breadCrumbs);
    return navigate(`/${navicationPath}`);
  };

  const collapseHandle = () => {
    setCollapsed(!collapsed);
  };

  sideMenu?.forEach((nav: SideMenuItem, index: number) => {
    const navRoute = <Route path={`/${nav.path}`} element={<CommonComponent title={nav.label} />} key={index} />;
    tempNavigationCompoent.push(navRoute);
  });

  return (
    <Layout className='App'>
      <HeaderSection userName={sampleUserData.avatarLetter} collapseHandle={collapseHandle} collapsed={collapsed} screenLarge={isLargeScreen} />
      <Layout hasSider>
        <SideNavigation collapseHandle={collapseHandle} collapsed={collapsed} sideMenuClickHandle={sideMenuClickHandle} screenLarge={isLargeScreen} />
        <Layout>
          <BreadCrumbsArea breadCrumbsList={breadCrumbsList} screenLarge={isLargeScreen} />
          <Content className='contentStyle'>
            <Routes>
              <Route path="/" element={<MyAccount />} />
              <Route path="/my-account" element={<MyAccount />} />
              {tempNavigationCompoent}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
