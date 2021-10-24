import React from 'react';
import Navbar from './Navbar';

type props = {
  children: any;
};

const Layout = ({ children }: props) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

export default Layout;
