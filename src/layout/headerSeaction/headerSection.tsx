import React from 'react';
import { useNavigate } from 'react-router-dom';
import './headerSection.scss';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined, MenuOutlined
} from '@ant-design/icons';
import { Layout, Button, Dropdown } from 'antd';
import logo from '../../media/images/brand/logo.png'
import { MainMenuList, items } from '../../utils/commonUtils';
import ProfileAvatar from '../../commonComponents/profileAvatar/profileAvatar';

const { Header } = Layout;

interface headerSectionProps {
  userName: string;
  collapseHandle: () => void;
  collapsed: boolean;
  screenLarge: boolean | undefined;
}

export default function HeaderSection(props: headerSectionProps) {
  const navigate = useNavigate();

  const headerForLarge = <Header className='headerStyle'>
    <div className='headerBrand'>
      <img alt='JobsForHer now Herkey' src={logo} className='brandLogo' onClick={() => { navigate(`/`); }} />
      <Button className='sideNavCollapseIcon'
        type="text"
        icon={props?.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => props?.collapseHandle()}
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
        <div><ProfileAvatar size={40} userName={props?.userName} /></div>
      </Dropdown>
    </div>
  </Header>;

  const headerForSmall = <Header className='headerStyle small'>
    <div className='headerBrand'>
      <Button className='sideNavCollapseIcon'
        type="text"
        icon={<MenuOutlined className='iconsSection' />}
        onClick={() => props?.collapseHandle()}
      />
    </div>
    <div className='headerNavigation'>
      <img alt='JobsForHer now Herkey' src={logo} className='brandLogo' onClick={() => { navigate(`/`); }} />
    </div>
    <div className='headerProfile'>
      <Dropdown menu={{ items }} trigger={['hover']} className='dropdownAvatar'>
        <div><ProfileAvatar size={40} userName={props?.userName} /></div>
      </Dropdown>
    </div>
  </Header>;

  return props?.screenLarge ? headerForLarge : headerForSmall;
}

