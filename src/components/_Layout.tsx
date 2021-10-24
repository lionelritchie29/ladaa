import React from 'react';

type props = {
  children: any;
};

const Layout = ({ children }: props) => {
  return <div>This is layout {children}</div>;
};

export default Layout;
