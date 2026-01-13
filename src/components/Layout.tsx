import React from 'react';
import { Outlet } from 'react-router-dom';
import useScrollToHash from '../hooks/useScrollToHash';

const Layout = () => {
  useScrollToHash();

  return <Outlet />;
};

export default Layout;
