import React from 'react';
import * as BsIcons from 'react-icons/bs';
export const SidebarData = [
  {
    title: '검사하기',
    path: '/ToExamine',
    icon: <BsIcons.BsPersonBoundingBox />,
    cName: 'nav-text'
  },
  {
    title: 'Home',
    path: '/',
    icon: <BsIcons.BsFillHouseDoorFill />,
    cName: 'nav-text'
  },
  {
    title: 'Monitoring',
    path: '/Monitoring',
    icon: <BsIcons.BsFillInfoCircleFill />,
    cName: 'nav-text'
  },
  {
    title: 'Search',
    path: '/Search',
    icon: <BsIcons.BsEnvelopeFill />,
    cName: 'nav-text'
  }
];