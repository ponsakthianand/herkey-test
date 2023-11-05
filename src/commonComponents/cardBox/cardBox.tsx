import * as React from 'react';
import './cardBox.scss';

interface cardBoxProps {
  children: any;
  leftSection?: JSX.Element;
  title: string;
  rightSection?: JSX.Element;
  headerColor?: boolean;
};

export default function CardBox(props: cardBoxProps) {
  return (
    <div className='boxWrapper'>
      <div className={props?.headerColor ? 'boxHeader color' : 'boxHeader'}>
        {props?.leftSection && <div className='leftHeader'>{props?.leftSection}</div>}
        <div className='titleHeader'>
          {props?.title}
        </div>
        {props?.rightSection && <div className='rightHeader'>{props?.rightSection}</div>}
      </div>
      <div className='boxBody'>
        {props?.children}
      </div>
    </div>
  );
}
