import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { FcBusinessman } from "react-icons/fc";

export const Sidebardata = [
  {
    title: 'BOOKS',
    path: '/book',
    
    icon:<IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

   
  },
  {
    title: 'ADD BOOKS',
    path: '/Addbook',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

   
  },
  {
    title: 'CREATECLIENT',
    path: '/Client',
    icon: <FcBusinessman/>
  },
  {
    title: 'CUSTOMER',
    path: '/',
    icon:<IoIcons.IoMdPeople /> 
    // <FaIcons.FaCartPlus />
  },
  {
    title: 'TEAM',
    path: '/',
    icon: <IoIcons.IoMdPeople />
  },
  
];






