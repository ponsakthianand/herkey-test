import * as React from 'react';
import './profileAvatar.scss';
import { Avatar } from 'antd';

interface ProfileAvatarProps {
  size: number
}

export default function ProfileAvatar(props: ProfileAvatarProps) {
  return (
    <div className='avatarCircle'>
      <Avatar size={props.size} className='avatar'>
        DC
      </Avatar>
    </div>
  );
}
