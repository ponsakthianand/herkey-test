
import React from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { SideMenuItem, breadCrumbItem } from '../interfaces/typeInterfaces';
import type { MenuProps } from 'antd';

export enum MainMenu {
  Dashboard = 'Dashboard',
  Packages = 'Packages',
  Events = 'Events',
  Blogs = 'Blogs',
}

export const sideMenu: SideMenuItem[] = [
  {
    key: '0',
    icon: <UserOutlined />,
    label: 'Dashboard',
    path: 'dashboard'
  },
  {
    key: '1',
    icon: <VideoCameraOutlined />,
    label: 'Jobs',
    path: 'jobs'
  },
  {
    key: '2',
    icon: <UploadOutlined />,
    label: 'Applications',
    path: 'applications'
  }, {
    key: '3',
    icon: <UserOutlined />,
    label: 'Followers',
    path: 'followers'
  },
  {
    key: '4',
    icon: <VideoCameraOutlined />,
    label: 'My Inventory',
    path: 'my-inventory'
  },
  {
    key: '5',
    icon: <UploadOutlined />,
    label: 'Company Profile',
    path: 'company-profile'
  },
  {
    key: '6',
    icon: <VideoCameraOutlined />,
    label: 'All Users',
    path: 'all-users'
  },
  {
    key: '7',
    icon: <UploadOutlined />,
    label: 'My Account',
    path: 'my-account'
  },
]

export const MainMenuList = Object.values(MainMenu);

export const items: MenuProps['items'] = [
  {
    label: 'My Account',
    key: '0',
  },
  {
    label: 'History',
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: 'Logout',
    key: '3',
  },
];

export const breadCrumbsDefaultList: breadCrumbItem[] = [
  {
    title: 'Home',
    href: '/'
  }
];