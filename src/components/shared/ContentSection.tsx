import React from 'react';

type props = {
  children: any;
  className: string;
};

const ContentSection = ({ children, className }: props) => {
  return (
    <section className={`w-11/12 lg:w-3/4 mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default ContentSection;
