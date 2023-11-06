import React from 'react';
import './sideNavigation.scss';
import { Drawer, Layout, Menu } from 'antd';
import { sideMenu } from '../../utils/commonUtils';
import ProfileAvatar from '../../commonComponents/profileAvatar/profileAvatar';
import { usersProfileData } from '../../utils/interfaces/typeInterfaces';

const { Sider } = Layout;

interface sideNavProps {
  collapsed: boolean;
  sideMenuClickHandle: (key: string) => void;
  screenLarge: boolean | undefined;
  collapseHandle: () => void;
  currentUserData: usersProfileData;
}

export default function SideNavigation(props: sideNavProps) {
  const sideNavigationBig = <Sider trigger={null} collapsible collapsed={props?.collapsed} className='siderStyle' width={300}>
    <div className='sideNavAvator'>
      <ProfileAvatar size={50} userName={props.currentUserData.avatarLetter} />
      <div className='helloName'>
        <span>Hello,</span> {props.currentUserData.name}!
      </div>
    </div>
    <Menu
      theme='dark'
      mode="inline"
      defaultSelectedKeys={['1']}
      items={sideMenu}
      onClick={(key) => props?.sideMenuClickHandle(key?.key)}
    />
    {/* <div className='contactUs'>
        Contact us: admin@jobsforher.com
      </div> */}
  </Sider>;

  const sideNavigationSmall = <Drawer
    placement={'left'}
    closable={true}
    onClose={props?.collapseHandle}
    open={props?.collapsed}
    className='siderStyle'
  >
    <div className='sideNavAvator'>
      <ProfileAvatar size={50} userName='DC' />
      <div className='helloName'>
        <span>Hello,</span> {props.currentUserData.name}!
      </div>
    </div>
    <Menu
      theme='dark'
      mode="inline"
      defaultSelectedKeys={['1']}
      items={sideMenu}
      onClick={(key) => {
        props?.sideMenuClickHandle(key?.key);
        props?.collapseHandle();
      }}
    />
  </Drawer>;

  return props?.screenLarge ? sideNavigationBig : sideNavigationSmall;
}

