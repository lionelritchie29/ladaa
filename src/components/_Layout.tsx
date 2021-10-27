import React from 'react';
import Navbar from './Navbar';
import Footer from './shared/Footer';

type props = {
  children: any;
};

const Layout = ({ children }: props) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
