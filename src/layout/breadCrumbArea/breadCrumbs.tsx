import React from 'react';
import './breadCrumbs.scss';
import { breadCrumbItem } from '../../interfaces/typeInterfaces';
import { Breadcrumb } from 'antd';
import { MainMenuList } from '../../utils/commonUtils';

interface breadCrumbsAreaProps {
  breadCrumbsList: breadCrumbItem[]
  screenLarge: boolean | undefined;
}

export default function BreadCrumbsArea(props: breadCrumbsAreaProps) {
  const breadCrumbs = <Breadcrumb items={props?.breadCrumbsList} className='breadCrumbs' />;

  const menuList = <div className='breadNavigation'>
    <u className='breadNavigationList'>
      {
        MainMenuList?.map((item: string, key: number) => <li key={key}>{item}</li>)
      }
    </u>
  </div>;

  return props?.screenLarge ? breadCrumbs : menuList;
}

