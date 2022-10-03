import React from 'react';
import Header from '../components/Header';
import Interface from '../components/interface/Interface';

const IndexPage = () => {
  return (
    <>
      <div className="header-style w-full px-3 py-1 flex items-center">
        <Header />
      </div>
      <Interface />
    </>
  );
};

export default IndexPage;
