import React from 'react';
import Header from '../components/Header';
import Interface from '../components/interface/Interface';

const IndexPage = () => {
  return (
    <>
      <div className="header-style sticky top-0 w-full h-[25px] px-3 flex items-center">
        <Header />
      </div>
      <div className="flex flex-col w-full h-[475px]">
        <Interface />
      </div>
    </>
  );
};

export default IndexPage;
