import * as React from 'react';
import './profileAvatar.scss';
import { Avatar } from 'antd';

interface ProfileAvatarProps {
  size: number;
  userName: string;
}

export default function ProfileAvatar(props: ProfileAvatarProps) {
  return (
    <div className='avatarCircle'>
      <Avatar size={props.size} className='avatar'>
        {props?.userName ? props?.userName : '☺'}
      </Avatar>
    </div>
  );
}
