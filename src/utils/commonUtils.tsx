import React from 'react';
import {
  LayoutOutlined,
  LaptopOutlined,
  SolutionOutlined,
  SoundOutlined,
  FolderOutlined,
  HddOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import { SideMenuItem, breadCrumbItem, usersProfileData } from './interfaces/typeInterfaces';
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
    icon: <LayoutOutlined />,
    label: 'Dashboard',
    path: 'dashboard'
  },
  {
    key: '1',
    icon: <LaptopOutlined />,
    label: 'Jobs',
    path: 'jobs'
  },
  {
    key: '2',
    icon: <SolutionOutlined />,
    label: 'Applications',
    path: 'applications'
  }, {
    key: '3',
    icon: <SoundOutlined />,
    label: 'Followers',
    path: 'followers'
  },
  {
    key: '4',
    icon: <FolderOutlined />,
    label: 'My Inventory',
    path: 'my-inventory'
  },
  {
    key: '5',
    icon: <HddOutlined />,
    label: 'Company Profile',
    path: 'company-profile'
  },
  {
    key: '6',
    icon: <TeamOutlined />,
    label: 'All Users',
    path: 'all-users'
  },
  {
    key: '7',
    icon: <UserOutlined />,
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

export const sampleUserData: usersProfileData = {
  name: 'Divya Chatarjee',
  avatarLetter: 'DC',
  jobPosition: 'Assistant Manager - HR',
  about: 'Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Its mission is to empower every person and every organization on the planet to achieve more.',
  telephone: '1234567890',
  companyName: 'XYZ Company Name',
  mailSetting: 'dashboard'
}