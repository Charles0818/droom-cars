import React from 'react';
import { Sidebar, HorizonntalNavbar } from '../../../components';
export const Wrapper: React.FC = ({ children }): JSX.Element => {
  return (
    <section
      className="bg-white padding-xs margin-sm border-radius-sm overflow-h"
      style={{ height: '100vh' }}>
      <div className="d-flex bg-primary-dark border-radius-inherit overflow-y-auto">
        <Sidebar />
        <section
          className="main bg-gray-light overflow-y-auto"
          style={{ height: '100vh' }}>
          <HorizonntalNavbar />
          {children}
        </section>
      </div>
    </section>
  );
};
