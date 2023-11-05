import React from 'react';
import './sideNavigation.scss';
import { Layout, Menu } from 'antd';
import { sideMenu } from '../../utils/commonUtils';
import ProfileAvatar from '../../commonComponents/profileAvatar/profileAvatar';

const { Sider } = Layout;

interface sideNavProps {
  collapsed: boolean;
  sideMenuClickHandle: (key: string) => void;
}

export default function SideNavigation(props: sideNavProps) {
  return (
    <Sider trigger={null} collapsible collapsed={props?.collapsed} className='siderStyle' width={300}>
      <div className='sideNavAvator'>
        <ProfileAvatar size={50} userName='DC' />
        <div className='helloName'>
          <span>Hello,</span> Divya!
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
    </Sider>
  );
}

